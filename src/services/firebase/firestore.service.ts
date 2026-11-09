import {
  collection,
  doc,
  writeBatch,
  increment,
  serverTimestamp,
  query,
  where,
  onSnapshot,
  type Unsubscribe,
} from 'firebase/firestore';
import { db } from './config';
import type { Transaction } from '../../shared/types/domain.types';
import { calculateDynamicInstallments, getMaxInstallmentsAllowed } from '../../shared/utils/currency';
import { addMonthsToCompetence, getActiveSlidingWindowMonths, resolveStatementCompetenceMonth } from '../../shared/utils/date';

export const PENDING_WRITES_WARNING_THRESHOLD = 150;
export const PENDING_WRITES_HARD_LIMIT = 250;

/**
 * Q1, Q2, Q4, Q5, Q6: Cria transação única ou compra parcelada dinâmica via `writeBatch` atômico
 * utilizando `increment(deltaInCents)` para evitar conflitos Last-Write-Wins entre dispositivos offline.
 */
export async function createAtomicTransactionBatch(params: {
  uid: string;
  baseTransaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt' | 'competenceMonth'>;
  installmentTotal?: number;
  customFirstInstallmentInCents?: number;
  cardClosingDay?: number;
  isOnline: boolean;
  currentPendingWritesCount: number;
}): Promise<Transaction[]> {
  const {
    uid,
    baseTransaction,
    installmentTotal = 1,
    customFirstInstallmentInCents,
    cardClosingDay,
    isOnline,
    currentPendingWritesCount,
  } = params;

  const maxAllowed = getMaxInstallmentsAllowed(isOnline);
  if (installmentTotal > maxAllowed) {
    throw new Error(
      `Modo ${isOnline ? 'Online' : 'Offline'}: O limite máximo de parcelas é ${maxAllowed}x.`
    );
  }

  if (currentPendingWritesCount + installmentTotal > PENDING_WRITES_HARD_LIMIT) {
    throw new Error(
      `Mochila offline cheia (${currentPendingWritesCount}/${PENDING_WRITES_HARD_LIMIT}). Conecte-se à internet rapidamente para sincronizar antes de lançar novos parcelamentos.`
    );
  }

  const amountsPerInstallment = calculateDynamicInstallments(
    baseTransaction.amountInCents,
    installmentTotal,
    customFirstInstallmentInCents
  );

  const firstCompetence = resolveStatementCompetenceMonth(
    baseTransaction.transactionDate,
    cardClosingDay
  );

  const groupId = installmentTotal > 1 ? `grp-${ crypto.randomUUID() }` : undefined;
  const nowISO = new Date().toISOString();
  const createdDocs: Transaction[] = [];

  const batch = writeBatch(db);

  for (let i = 0; i < installmentTotal; i++) {
    const txId = `tx-${crypto.randomUUID()}`;
    const competenceMonth = addMonthsToCompetence(firstCompetence, i);
    const installmentStatus = i === 0 ? baseTransaction.status : 'pending';
    const amountInCents = amountsPerInstallment[i];

    const txDoc: Transaction = {
      ...baseTransaction,
      id: txId,
      amountInCents,
      status: installmentStatus,
      competenceMonth,
      statementId: cardClosingDay ? competenceMonth : undefined,
      installmentGroupId: groupId,
      installmentIndex: installmentTotal > 1 ? i + 1 : undefined,
      installmentTotal: installmentTotal > 1 ? installmentTotal : undefined,
      createdAt: nowISO,
      updatedAt: nowISO,
    };

    createdDocs.push(txDoc);

    const txRef = doc(db, 'users', uid, 'transactions', txId);
    batch.set(txRef, {
      ...txDoc,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // Q2 & Q5: Sensibiliza o saldo da conta via increment(delta) apenas quando status === 'paid'
    if (installmentStatus === 'paid') {
      const accountRef = doc(db, 'users', uid, 'accounts', baseTransaction.accountId);
      const signedDelta =
        baseTransaction.type === 'income' ? amountInCents : -amountInCents;

      batch.update(accountRef, {
        currentBalanceInCents: increment(signedDelta),
        updatedAt: serverTimestamp(),
      });

      if (baseTransaction.type === 'transfer' && baseTransaction.destinationAccountId) {
        const destRef = doc(db, 'users', uid, 'accounts', baseTransaction.destinationAccountId);
        batch.update(destRef, {
          currentBalanceInCents: increment(amountInCents),
          updatedAt: serverTimestamp(),
        });
      }
    }
  }

  await batch.commit();
  return createdDocs;
}

/**
 * Q3: Listener de Janela Deslizante de 3 Meses (Mês Anterior, Atual e Próximo)
 * Monitora também `snapshot.metadata.hasPendingWrites` para atualizar o contador da Mochila Offline.
 */
export function subscribeToSlidingWindowTransactions(
  uid: string,
  referenceYearMonth: string,
  onUpdate: (transactions: Transaction[], pendingWritesCount: number) => void
): Unsubscribe {
  const { listenerMonths } = getActiveSlidingWindowMonths(referenceYearMonth);
  const txCol = collection(db, 'users', uid, 'transactions');
  const q = query(txCol, where('competenceMonth', 'in', listenerMonths));

  return onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
    let pendingCount = 0;
    const list: Transaction[] = snapshot.docs.map((docSnap) => {
      const hasPending = docSnap.metadata.hasPendingWrites;
      if (hasPending) pendingCount++;
      const data = docSnap.data() as Transaction;
      return {
        ...data,
        id: docSnap.id,
        hasPendingWrites: hasPending,
      };
    });

    onUpdate(list, pendingCount);
  });
}

