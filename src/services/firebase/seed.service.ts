import type { Account, Category, RecurringTemplate } from '../../shared/types/domain.types';

/**
 * Q8: Kit Inicial Pronto no 1º Login (Zero Tela em Branco / Perfil TDAH)
 * Cria automaticamente a "Carteira Principal", 1 Cartão de exemplo e as 8 Categorias Essenciais.
 */
export const DEFAULT_SEED_ACCOUNTS: Account[] = [
  {
    id: 'acc-wallet-main',
    name: 'Carteira Principal',
    type: 'checking',
    currentBalanceInCents: 425000, // R$ 4.250,00
    isArchived: false,
    color: '#10B981',
    icon: '🏦',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'acc-card-nubank',
    name: 'Cartão Nubank Ultravioleta',
    type: 'credit_card',
    currentBalanceInCents: -124000, // Fatura atual R$ 1.240,00
    creditLimitInCents: 1000000,    // R$ 10.000,00
    closingDay: 25,                 // Q4: Virada automática a partir do dia 25
    dueDay: 2,
    isArchived: false,
    color: '#8B5CF6',
    icon: '💳',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'acc-archived-inter',
    name: 'Conta Banco Inter (Antiga)',
    type: 'checking',
    currentBalanceInCents: 0,
    isArchived: true,               // Q5: Gaveta de Arquivados (preserva relatórios passados)
    color: '#F97316',
    icon: '🗄️',
    updatedAt: new Date().toISOString(),
  },
];

export const DEFAULT_SEED_CATEGORIES: Category[] = [
  { id: 'cat-food', name: 'Alimentação', type: 'expense', icon: '🍔', color: '#F59E0B', isDefaultSeed: true, isArchived: false },
  { id: 'cat-home', name: 'Moradia', type: 'expense', icon: '🏠', color: '#3B82F6', isDefaultSeed: true, isArchived: false },
  { id: 'cat-transport', name: 'Transporte', type: 'expense', icon: '🚗', color: '#6366F1', isDefaultSeed: true, isArchived: false },
  { id: 'cat-leisure', name: 'Lazer', type: 'expense', icon: '🎮', color: '#EC4899', isDefaultSeed: true, isArchived: false },
  { id: 'cat-health', name: 'Saúde', type: 'expense', icon: '💊', color: '#EF4444', isDefaultSeed: true, isArchived: false },
  { id: 'cat-subs', name: 'Assinaturas', type: 'expense', icon: '🔁', color: '#8B5CF6', isDefaultSeed: true, isArchived: false },
  { id: 'cat-salary', name: 'Salário', type: 'income', icon: '💰', color: '#10B981', isDefaultSeed: true, isArchived: false },
  { id: 'cat-other', name: 'Outros', type: 'expense', icon: '📦', color: '#64748B', isDefaultSeed: true, isArchived: false },
];

export const DEFAULT_SEED_TEMPLATES: RecurringTemplate[] = [
  {
    id: 'tpl-rent',
    title: 'Aluguel Apartamento',
    type: 'expense',
    amountInCents: 150000, // R$ 1.500,00
    accountId: 'acc-wallet-main',
    categoryId: 'cat-home',
    dayOfMonth: 10,
    isActive: true,
    lastMaterializedMonth: '2027-01',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'tpl-netflix',
    title: 'Netflix Padrão',
    type: 'expense',
    amountInCents: 4490, // R$ 44,90
    accountId: 'acc-card-nubank',
    categoryId: 'cat-subs',
    dayOfMonth: 15,
    isActive: true,
    lastMaterializedMonth: '2027-01',
    updatedAt: new Date().toISOString(),
  },
];

