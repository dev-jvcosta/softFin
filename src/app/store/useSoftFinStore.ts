import { create } from 'zustand';
import type {
  Account,
  Category,
  CreditCardStatement,
  InstallmentEditScope,
  RecurringTemplate,
  Transaction,
} from '../../shared/types/domain.types';
import {
  DEFAULT_SEED_ACCOUNTS,
  DEFAULT_SEED_CATEGORIES,
  DEFAULT_SEED_TEMPLATES,
} from '../../services/firebase/seed.service';
import { calculateDynamicInstallments, getMaxInstallmentsAllowed } from '../../shared/utils/currency';
import {
  addMonthsToCompetence,
  getTodayISODate,
  resolveStatementCompetenceMonth,
} from '../../shared/utils/date';
import { removeOrphanedOfflineReceipt } from '../../pwa/offline-storage-queue';
import { PENDING_WRITES_HARD_LIMIT } from '../../services/firebase/firestore.service';

export type ThemeMode = 'system' | 'light' | 'dark';

export interface QuickEntryUndoSnapshot {
  createdIds: string[];
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  amountInCents: number;
  accountId: string;
  installmentTotal: number;
  customFirstInstallmentInCents?: number;
  balanceDeltaApplied: number;
  pendingWritesAdded: number;
}

interface SoftFinState {
  isOnline: boolean;
  privacyModeEnabled: boolean;
  themeMode: ThemeMode;
  lastUsedAccountId: string;
  pendingWritesCount: number;
  sessionExpiredWithPendingBag: boolean;
  bagFullAlertOpen: boolean;
  lastQuickEntryUndo: QuickEntryUndoSnapshot | null;

  accounts: Account[];
  categories: Category[];
  templates: RecurringTemplate[];
  transactions: Transaction[];
  cardStatement: CreditCardStatement;

  // Actions
  setOnlineStatus: (online: boolean) => void;
  togglePrivacyMode: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  setSessionExpiredGuard: (expired: boolean) => void;
  setBagFullAlertOpen: (open: boolean) => void;
  simulatePendingBagLoad: (count: number) => void;
  reauthenticatePreservingBag: () => void;
  undoLastQuickEntry: () => QuickEntryUndoSnapshot | null;
  dismissQuickEntryUndo: () => void;

  // Q1 & Q8: Quick 3s Transaction + Dynamic Installments (returns true if saved, false if blocked by bag cap)
  addQuickOrInstallmentTransaction: (params: {
    amountInCents: number;
    categoryId: string;
    accountId?: string;
    description?: string;
    installmentTotal?: number;
    customFirstInstallmentInCents?: number;
    status?: 'paid' | 'pending';
  }) => boolean;

  // Q1: Scope Edit ("single" | "future")
  editInstallmentWithScope: (
    transactionId: string,
    newAmountInCents: number,
    scope: InstallmentEditScope
  ) => void;

  // Q2 & Q7: 1-Click Pay Pending / Fixed Bill
  markTransactionPaid: (transactionId: string) => void;

  // Q3 & Q6: Receipt Retry / Discard & Offline Delete with Orphan GC
  retryFailedReceipt: (transactionId: string) => void;
  discardFailedReceipt: (transactionId: string) => void;
  deleteTransactionOfflineSafe: (transactionId: string) => Promise<void>;

  // Q4: Credit Card Anticipation with Discount & Full/Partial Payment
  anticipateInstallmentWithDiscount: (transactionId: string, discountInCents: number) => void;
  payCreditCardStatement: (paidAmountInCents: number) => void;

  // Q5 & Q7: Recurring Price Update (Future only) & Archive Account
  updateRecurringTemplatePrice: (templateId: string, newAmountInCents: number) => void;
  archiveAccountSafe: (accountId: string) => { ok: boolean; message: string };
}

const initialPrivacy =
  typeof window !== 'undefined' && localStorage.getItem('softfin_privacy_mode') === 'true';

const getInitialThemeMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem('color-scheme');
  if (stored === 'light' || stored === 'dark') return stored;
  return 'system';
};

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-dell-1',
    type: 'expense',
    status: 'pending',
    amountInCents: 3334, // Q1: 1ª parcela recebe +1 centavo residual de R$ 100 / 3
    description: 'Monitor Dell (1/3)',
    accountId: 'acc-card-nubank',
    categoryId: 'cat-other',
    transactionDate: '2026-11-05',
    competenceMonth: '2026-11',
    statementId: '2026-11',
    installmentGroupId: 'grp-dell-100',
    installmentIndex: 1,
    installmentTotal: 3,
    attachmentSyncStatus: 'synced',
    hasPendingWrites: false,
    createdAt: '2026-11-05T10:00:00Z',
    updatedAt: '2026-11-05T10:00:00Z',
  },
  {
    id: 'tx-dell-2',
    type: 'expense',
    status: 'pending',
    amountInCents: 3333,
    description: 'Monitor Dell (2/3)',
    accountId: 'acc-card-nubank',
    categoryId: 'cat-other',
    transactionDate: '2026-11-05',
    competenceMonth: '2026-12',
    statementId: '2026-12',
    installmentGroupId: 'grp-dell-100',
    installmentIndex: 2,
    installmentTotal: 3,
    attachmentSyncStatus: 'none',
    hasPendingWrites: false,
    createdAt: '2026-11-05T10:00:00Z',
    updatedAt: '2026-11-05T10:00:00Z',
  },
  {
    id: 'tx-dell-3',
    type: 'expense',
    status: 'pending',
    amountInCents: 3333,
    description: 'Monitor Dell (3/3)',
    accountId: 'acc-card-nubank',
    categoryId: 'cat-other',
    transactionDate: '2026-11-05',
    competenceMonth: '2027-01',
    statementId: '2027-01',
    installmentGroupId: 'grp-dell-100',
    installmentIndex: 3,
    installmentTotal: 3,
    attachmentSyncStatus: 'none',
    hasPendingWrites: false,
    createdAt: '2026-11-05T10:00:00Z',
    updatedAt: '2026-11-05T10:00:00Z',
  },
  {
    id: 'tx-tv-future',
    type: 'expense',
    status: 'pending',
    amountInCents: 30000, // R$ 300,00 (elegível para antecipação c/ desconto Q4)
    description: 'Smart TV 4K (Parcelas 4/10 a 6/10)',
    accountId: 'acc-card-nubank',
    categoryId: 'cat-leisure',
    transactionDate: '2026-10-12',
    competenceMonth: '2026-12',
    statementId: '2026-12',
    installmentGroupId: 'grp-tv',
    installmentIndex: 4,
    installmentTotal: 10,
    isAnticipated: false,
    attachmentSyncStatus: 'none',
    hasPendingWrites: false,
    createdAt: '2026-10-12T10:00:00Z',
    updatedAt: '2026-10-12T10:00:00Z',
  },
  {
    id: 'tx-pharmacy-failed',
    type: 'expense',
    status: 'paid',
    amountInCents: 8990,
    description: 'Farmácia DrogaRaia',
    accountId: 'acc-wallet-main',
    categoryId: 'cat-health',
    transactionDate: '2026-11-07',
    competenceMonth: '2026-11',
    attachmentSyncStatus: 'failed', // Q6: Falha após 3 tentativas -> exibe botão Tentar de Novo
    hasPendingWrites: false,
    createdAt: '2026-11-07T14:20:00Z',
    updatedAt: '2026-11-07T14:20:00Z',
  },
  {
    id: 'tx-fixed-rent',
    type: 'expense',
    status: 'pending',
    amountInCents: 150000,
    description: 'Aluguel Apartamento',
    accountId: 'acc-wallet-main',
    categoryId: 'cat-home',
    transactionDate: '2026-11-10',
    competenceMonth: '2026-11',
    recurringTemplateId: 'tpl-rent',
    attachmentSyncStatus: 'none',
    hasPendingWrites: false,
    createdAt: '2026-11-01T00:00:00Z',
    updatedAt: '2026-11-01T00:00:00Z',
  },
  {
    id: 'tx-fixed-netflix',
    type: 'expense',
    status: 'pending',
    amountInCents: 4490,
    description: 'Netflix Padrão',
    accountId: 'acc-card-nubank',
    categoryId: 'cat-subs',
    transactionDate: '2026-11-15',
    competenceMonth: '2026-11',
    recurringTemplateId: 'tpl-netflix',
    attachmentSyncStatus: 'none',
    hasPendingWrites: false,
    createdAt: '2026-11-01T00:00:00Z',
    updatedAt: '2026-11-01T00:00:00Z',
  },
];

export const useSoftFinStore = create<SoftFinState>((set, get) => ({
  isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
  privacyModeEnabled: initialPrivacy,
  themeMode: getInitialThemeMode(),
  lastUsedAccountId: 'acc-wallet-main',
  pendingWritesCount: 0,
  sessionExpiredWithPendingBag: false,
  bagFullAlertOpen: false,
  lastQuickEntryUndo: null,

  accounts: DEFAULT_SEED_ACCOUNTS,
  categories: DEFAULT_SEED_CATEGORIES,
  templates: DEFAULT_SEED_TEMPLATES,
  transactions: INITIAL_TRANSACTIONS,
  cardStatement: {
    id: '2026-11',
    cardId: 'acc-card-nubank',
    status: 'open',
    totalAmountInCents: 124000,
    paidAmountInCents: 0,
    remainingBalanceInCents: 124000,
    closingDate: '2026-11-25',
    dueDate: '2026-12-02',
  },

  setOnlineStatus: (online) =>
    set((state) => ({
      isOnline: online,
      pendingWritesCount: online ? 0 : state.pendingWritesCount,
      bagFullAlertOpen: online ? false : state.bagFullAlertOpen,
      transactions: online
        ? state.transactions.map((t) => ({ ...t, hasPendingWrites: false }))
        : state.transactions,
    })),

  togglePrivacyMode: () =>
    set((state) => {
      const next = !state.privacyModeEnabled;
      if (typeof window !== 'undefined') {
        localStorage.setItem('softfin_privacy_mode', String(next));
      }
      return { privacyModeEnabled: next };
    }),

  setThemeMode: (mode) =>
    set(() => {
      if (typeof document !== 'undefined') {
        const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
        const contentValue = mode === 'system' ? 'light dark' : mode;
        if (meta) {
          meta.content = contentValue;
        }
        try {
          if (mode === 'system') {
            localStorage.removeItem('color-scheme');
          } else {
            localStorage.setItem('color-scheme', mode);
          }
        } catch {
          // Ignore storage quota/privacy errors
        }
      }
      return { themeMode: mode };
    }),

  setSessionExpiredGuard: (expired) => set({ sessionExpiredWithPendingBag: expired }),

  setBagFullAlertOpen: (open) => set({ bagFullAlertOpen: open }),

  simulatePendingBagLoad: (count) =>
    set({
      isOnline: false,
      pendingWritesCount: count,
      bagFullAlertOpen: count >= PENDING_WRITES_HARD_LIMIT,
    }),

  reauthenticatePreservingBag: () =>
    set((state) => ({
      sessionExpiredWithPendingBag: false,
      isOnline: true,
      pendingWritesCount: 0,
      bagFullAlertOpen: false,
      transactions: state.transactions.map((t) => ({ ...t, hasPendingWrites: false })),
    })),

  undoLastQuickEntry: () => {
    const state = get();
    const undoSnap = state.lastQuickEntryUndo;
    if (!undoSnap) return null;

    const idSet = new Set(undoSnap.createdIds);
    set({
      lastQuickEntryUndo: null,
      pendingWritesCount: Math.max(0, state.pendingWritesCount - undoSnap.pendingWritesAdded),
      transactions: state.transactions.filter((t) => !idSet.has(t.id)),
      accounts: state.accounts.map((acc) =>
        acc.id === undoSnap.accountId
          ? {
              ...acc,
              currentBalanceInCents: acc.currentBalanceInCents - undoSnap.balanceDeltaApplied,
            }
          : acc
      ),
    });

    return undoSnap;
  },

  dismissQuickEntryUndo: () => set({ lastQuickEntryUndo: null }),

  addQuickOrInstallmentTransaction: ({
    amountInCents,
    categoryId,
    accountId,
    description,
    installmentTotal = 1,
    customFirstInstallmentInCents,
    status = 'paid',
  }) => {
    const state = get();
    const maxInstallments = getMaxInstallmentsAllowed(state.isOnline);
    const safeInstallments = Math.min(installmentTotal, maxInstallments);

    // Decisão 6: Bloqueio via Apple Alert se a mochila offline bater o limite de 250 itens
    if (!state.isOnline && state.pendingWritesCount + safeInstallments > PENDING_WRITES_HARD_LIMIT) {
      set({ bagFullAlertOpen: true });
      return false;
    }

    const targetAccountId = accountId || state.lastUsedAccountId;
    const account = state.accounts.find((a) => a.id === targetAccountId);
    const category = state.categories.find((c) => c.id === categoryId);

    // Q8: Regra dos 3 Segundos — fallback automático para o nome da categoria se descrição vazia
    const baseDesc = (description || '').trim() || category?.name || 'Lançamento';
    const todayISO = getTodayISODate();
    const firstCompetence = resolveStatementCompetenceMonth(todayISO, account?.closingDay);
    const amounts = calculateDynamicInstallments(
      amountInCents,
      safeInstallments,
      customFirstInstallmentInCents
    );

    const groupId = safeInstallments > 1 ? `grp-${Date.now()}` : undefined;
    const newDocs: Transaction[] = [];
    let balanceDeltaForTargetAccount = 0;

    for (let i = 0; i < safeInstallments; i++) {
      const compMonth = addMonthsToCompetence(firstCompetence, i);
      const itemStatus =
        account?.type === 'credit_card' ? 'pending' : i === 0 ? status : 'pending';
      const itemAmount = amounts[i];

      if (itemStatus === 'paid') {
        const sign = category?.type === 'income' ? 1 : -1;
        balanceDeltaForTargetAccount += sign * itemAmount;
      }

      newDocs.push({
        id: `tx-${Date.now()}-${i + 1}`,
        type: category?.type === 'income' ? 'income' : 'expense',
        status: itemStatus,
        amountInCents: itemAmount,
        description: safeInstallments > 1 ? `${baseDesc} (${i + 1}/${safeInstallments})` : baseDesc,
        accountId: targetAccountId,
        categoryId,
        transactionDate: todayISO,
        competenceMonth: compMonth,
        statementId: account?.type === 'credit_card' ? compMonth : undefined,
        installmentGroupId: groupId,
        installmentIndex: safeInstallments > 1 ? i + 1 : undefined,
        installmentTotal: safeInstallments > 1 ? safeInstallments : undefined,
        attachmentSyncStatus: 'synced',
        hasPendingWrites: !state.isOnline,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    const pendingWritesAdded = state.isOnline ? 0 : newDocs.length;

    set({
      lastUsedAccountId: targetAccountId,
      pendingWritesCount: state.pendingWritesCount + pendingWritesAdded,
      transactions: [...newDocs, ...state.transactions],
      lastQuickEntryUndo: {
        createdIds: newDocs.map((d) => d.id),
        categoryId,
        categoryName: category?.name || 'Categoria',
        categoryIcon: category?.icon || '💸',
        amountInCents,
        accountId: targetAccountId,
        installmentTotal: safeInstallments,
        customFirstInstallmentInCents,
        balanceDeltaApplied: balanceDeltaForTargetAccount,
        pendingWritesAdded,
      },
      // Q5: Atualização incremental de saldo (equivalente local ao increment(delta))
      accounts: state.accounts.map((acc) =>
        acc.id === targetAccountId
          ? { ...acc, currentBalanceInCents: acc.currentBalanceInCents + balanceDeltaForTargetAccount }
          : acc
      ),
    });

    return true;
  },

  editInstallmentWithScope: (transactionId, newAmountInCents, scope) =>
    set((state) => {
      const target = state.transactions.find((t) => t.id === transactionId);
      if (!target) return state;

      const updatedTransactions = state.transactions.map((t) => {
        // Parcelas já pagas nunca sofrem alteração em cascata (Q1)
        if (t.status === 'paid') return t;

        if (scope === 'single' && t.id === transactionId) {
          return { ...t, amountInCents: newAmountInCents, updatedAt: new Date().toISOString() };
        }

        if (
          scope === 'future' &&
          target.installmentGroupId &&
          t.installmentGroupId === target.installmentGroupId &&
          (t.installmentIndex || 0) >= (target.installmentIndex || 0)
        ) {
          return { ...t, amountInCents: newAmountInCents, updatedAt: new Date().toISOString() };
        }

        return t;
      });

      return { transactions: updatedTransactions };
    }),

  markTransactionPaid: (transactionId) =>
    set((state) => {
      const target = state.transactions.find((t) => t.id === transactionId);
      if (!target || target.status === 'paid') return state;

      const delta = target.type === 'income' ? target.amountInCents : -target.amountInCents;

      return {
        transactions: state.transactions.map((t) =>
          t.id === transactionId
            ? { ...t, status: 'paid', hasPendingWrites: !state.isOnline }
            : t
        ),
        accounts: state.accounts.map((acc) =>
          acc.id === target.accountId
            ? { ...acc, currentBalanceInCents: acc.currentBalanceInCents + delta }
            : acc
        ),
      };
    }),

  retryFailedReceipt: (transactionId) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === transactionId ? { ...t, attachmentSyncStatus: 'synced' } : t
      ),
    })),

  discardFailedReceipt: (transactionId) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === transactionId ? { ...t, attachmentSyncStatus: 'none' } : t
      ),
    })),

  deleteTransactionOfflineSafe: async (transactionId) => {
    const state = get();
    const target = state.transactions.find((t) => t.id === transactionId);
    if (!target) return;

    // Q3: Garbage Collection de comprovante na fila offline antes de excluir a transação
    if (target.attachmentSyncStatus === 'queued') {
      await removeOrphanedOfflineReceipt(transactionId);
    }

    const reverseDelta =
      target.status === 'paid'
        ? target.type === 'income'
          ? -target.amountInCents
          : target.amountInCents
        : 0;

    set({
      transactions: state.transactions.filter((t) => t.id !== transactionId),
      accounts: state.accounts.map((acc) =>
        acc.id === target.accountId
          ? { ...acc, currentBalanceInCents: acc.currentBalanceInCents + reverseDelta }
          : acc
      ),
    });
  },

  anticipateInstallmentWithDiscount: (transactionId, discountInCents) =>
    set((state) => {
      const target = state.transactions.find((t) => t.id === transactionId);
      if (!target || target.isAnticipated) return state;

      const newAmount = Math.max(100, target.amountInCents - discountInCents);

      return {
        transactions: state.transactions.map((t) =>
          t.id === transactionId
            ? {
                ...t,
                originalAmountInCents: t.amountInCents,
                discountInCents,
                amountInCents: newAmount,
                isAnticipated: true,
                statementId: state.cardStatement.id,
                competenceMonth: state.cardStatement.id,
              }
            : t
        ),
        cardStatement: {
          ...state.cardStatement,
          totalAmountInCents: state.cardStatement.totalAmountInCents - discountInCents,
          remainingBalanceInCents: state.cardStatement.remainingBalanceInCents - discountInCents,
        },
      };
    }),

  payCreditCardStatement: (paidAmountInCents) =>
    set((state) => {
      const remaining = Math.max(0, state.cardStatement.totalAmountInCents - paidAmountInCents);
      const isFull = remaining === 0;

      return {
        cardStatement: {
          ...state.cardStatement,
          status: isFull ? 'paid' : 'partial',
          paidAmountInCents,
          remainingBalanceInCents: remaining,
        },
        accounts: state.accounts.map((acc) =>
          acc.id === 'acc-wallet-main'
            ? { ...acc, currentBalanceInCents: acc.currentBalanceInCents - paidAmountInCents }
            : acc
        ),
      };
    }),

  updateRecurringTemplatePrice: (templateId, newAmountInCents) =>
    set((state) => ({
      templates: state.templates.map((tpl) =>
        tpl.id === templateId ? { ...tpl, amountInCents: newAmountInCents } : tpl
      ),
      // Q7: Atualiza apenas ocorrências futuras ainda "pending", preservando meses passados "paid"
      transactions: state.transactions.map((tx) =>
        tx.recurringTemplateId === templateId && tx.status === 'pending'
          ? { ...tx, amountInCents: newAmountInCents }
          : tx
      ),
    })),

  archiveAccountSafe: (accountId) => {
    const state = get();
    const hasPendingFuture = state.transactions.some(
      (t) => t.accountId === accountId && t.status === 'pending'
    );

    if (hasPendingFuture) {
      return {
        ok: false,
        message:
          'Bloqueado (Q5): Esta conta possui lançamentos ou parcelas pendentes. Transfira ou cancele as pendências antes de arquivá-la.',
      };
    }

    set({
      accounts: state.accounts.map((acc) =>
        acc.id === accountId ? { ...acc, isArchived: true } : acc
      ),
    });

    return {
      ok: true,
      message: 'Conta movida para a Gaveta de Arquivados mantendo o histórico passado intacto!',
    };
  },
}));

