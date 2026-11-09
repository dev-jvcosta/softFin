export type CurrencyCode = 'BRL' | 'USD' | 'EUR';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  currency: CurrencyCode;
  privacyModeEnabled: boolean; // Q9: Olhinho com memória persistente
  lastUsedAccountId?: string;  // Q8: Pré-seleção na Anotação Relâmpago (3s)
  seedCompleted: boolean;      // Q8: Kit Inicial de fábrica
  createdAt: string;
}

export type AccountType = 'checking' | 'wallet' | 'savings' | 'credit_card';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  currentBalanceInCents: number; // Q2 & Q5: Atualizado exclusivamente via increment(delta)
  creditLimitInCents?: number;
  closingDay?: number;           // Q4: Dia de fechamento da fatura (1-31)
  dueDay?: number;               // Q4: Dia de vencimento da fatura (1-31)
  isArchived: boolean;           // Q5: Gaveta de Arquivados (soft-archive)
  color: string;
  icon: string;
  updatedAt: string;
}

export type StatementStatus = 'open' | 'closed' | 'paid' | 'partial';

export interface CreditCardStatement {
  id: string;                      // Formato YYYY-MM
  cardId: string;
  status: StatementStatus;         // Q4: Máquina de estados da fatura
  totalAmountInCents: number;
  paidAmountInCents: number;
  remainingBalanceInCents: number; // Q4: Saldo residual rolado para o mês seguinte
  closingDate: string;
  dueDate: string;
}

export type TransactionType = 'income' | 'expense' | 'transfer';
export type TransactionStatus = 'pending' | 'paid' | 'cancelled';
export type AttachmentSyncStatus = 'none' | 'queued' | 'uploading' | 'synced' | 'failed';
export type InstallmentEditScope = 'single' | 'future';

export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  icon: string;
  color: string;
  isDefaultSeed: boolean; // Q8: Kit inicial de 8 categorias
  isArchived: boolean;    // Q5: Gaveta de Arquivados
}

export interface RecurringTemplate {
  id: string;                    // Q7: "Molde" de Assinaturas e Contas Fixas
  title: string;
  type: 'income' | 'expense';
  amountInCents: number;
  accountId: string;
  categoryId: string;
  dayOfMonth: number;            // 1-31
  isActive: boolean;
  lastMaterializedMonth: string; // Ex: "2027-01"
  updatedAt: string;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  status: TransactionStatus;            // Q2: pending | paid | cancelled
  amountInCents: number;
  originalAmountInCents?: number;       // Q4: Valor antes do desconto de antecipação
  discountInCents?: number;             // Q4: Desconto obtido na antecipação
  description: string;                  // Q8: Fallback automático para o nome da categoria
  accountId: string;
  destinationAccountId?: string;        // Q2: Conta de destino quando type === 'transfer'
  categoryId: string;
  transactionDate: string;              // Q4: Data real do evento/compra (YYYY-MM-DD)
  competenceMonth: string;              // Q4: Mês de competência / fatura (YYYY-MM)
  statementId?: string;

  // Metadados de Parcelamento Dinâmico (Q1 & Q4 & Q6)
  installmentGroupId?: string;
  installmentIndex?: number;            // 1..N
  installmentTotal?: number;            // Máx 12 offline / 48 online
  isAnticipated?: boolean;              // Q4: Etiqueta de parcela antecipada

  // Metadados de Conta Fixa (Q7)
  recurringTemplateId?: string;

  // Metadados de Comprovante e Sincronização Offline (Q3 & Q6)
  attachmentUrl?: string;
  attachmentSyncStatus?: AttachmentSyncStatus;
  hasPendingWrites?: boolean;

  createdAt: string;
  updatedAt: string;
}

