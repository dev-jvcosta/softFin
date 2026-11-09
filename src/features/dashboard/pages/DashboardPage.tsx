import React from 'react';
import { useSoftFinStore } from '../../../app/store/useSoftFinStore';
import { formatCentsBRL } from '../../../shared/utils/currency';
import type { ActiveTab } from '../../../app/layout/BottomNav';

interface DashboardPageProps {
  onNavigateTab: (tab: ActiveTab) => void;
  onOpenQuickEntry: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onNavigateTab,
  onOpenQuickEntry,
}) => {
  const accounts = useSoftFinStore((s) => s.accounts);
  const transactions = useSoftFinStore((s) => s.transactions);
  const cardStatement = useSoftFinStore((s) => s.cardStatement);
  const privacyModeEnabled = useSoftFinStore((s) => s.privacyModeEnabled);
  const markTransactionPaid = useSoftFinStore((s) => s.markTransactionPaid);

  const mainWallet = accounts.find((a) => a.id === 'acc-wallet-main');
  const currentBalanceCents = mainWallet?.currentBalanceInCents ?? 0;

  // Q2: Saldo Projetado considera itens "pending" do mês corrente (2026-11) na Carteira Principal
  const pendingExpensesCents = transactions
    .filter(
      (t) =>
        t.accountId === 'acc-wallet-main' &&
        t.status === 'pending' &&
        t.competenceMonth === '2026-11'
    )
    .reduce((acc, cur) => acc + cur.amountInCents, 0);

  const projectedBalanceCents = currentBalanceCents - pendingExpensesCents;

  const fixedBillsThisMonth = transactions.filter(
    (t) => Boolean(t.recurringTemplateId) && t.competenceMonth === '2026-11'
  );

  return (
    <div className="space-y-4">
      {/* Card de Saldo Principal Sólido (`systemGroupedBackground` • LCP Element) */}
      <section aria-label="Resumo de Saldo" className="p-5 hig-grouped-card">
        <div className="flex items-center justify-between">
          <span className="hig-footnote font-medium text-[var(--hig-label-secondary)]">
            Saldo Disponível (Carteira Principal)
          </span>
          <span
            className="hig-caption-1 font-semibold px-2.5 py-0.5 rounded-full"
            style={{
              backgroundColor: 'rgba(52, 199, 89, 0.14)',
              color: 'var(--hig-green)',
            }}
          >
            Nov 2026
          </span>
        </div>

        <p className="hig-large-title mt-1">
          {formatCentsBRL(currentBalanceCents, privacyModeEnabled)}
        </p>

        <div className="mt-4 pt-3 border-t border-[var(--hig-separator)] grid grid-cols-2 gap-3">
          <div>
            <span className="hig-caption-1 text-[var(--hig-label-secondary)] block">
              Saldo Projetado do Mês
            </span>
            <span
              className="hig-subhead font-semibold"
              style={{ color: 'var(--hig-orange)' }}
            >
              {formatCentsBRL(projectedBalanceCents, privacyModeEnabled)}
            </span>
          </div>
          <div className="text-right">
            <span className="hig-caption-1 text-[var(--hig-label-secondary)] block">
              Pendentes a Pagar
            </span>
            <span
              className="hig-subhead font-semibold"
              style={{ color: 'var(--hig-red)' }}
            >
              - {formatCentsBRL(pendingExpensesCents, privacyModeEnabled)}
            </span>
          </div>
        </div>
      </section>

      {/* Card de Atalho Rápido (Regra dos 3 Segundos • Estilo Apple Wallet/Reminders) */}
      <button
        type="button"
        onClick={onOpenQuickEntry}
        className="w-full p-4 hig-grouped-card flex items-center justify-between gap-3 text-left hover:border-[var(--hig-blue)] active:scale-99 transition"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            aria-hidden="true"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
            style={{ backgroundColor: 'var(--hig-blue)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="hig-subhead font-semibold text-[var(--hig-blue)]">
              Anotação Relâmpago em 3 Segundos
            </p>
            <p className="hig-caption-1 text-[var(--hig-label-secondary)] truncate">
              Digite o valor e toque na categoria. Tudo preenche sozinho.
            </p>
          </div>
        </div>
        <span
          aria-hidden="true"
          className="text-[var(--hig-label-tertiary)] text-xl leading-none shrink-0"
        >
          ›
        </span>
      </button>

      {/* Resumo da Fatura do Cartão (Q4) */}
      <button
        type="button"
        onClick={() => onNavigateTab('card')}
        className="w-full p-4 hig-grouped-card text-left space-y-2.5 hover:border-[var(--hig-purple)] transition"
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <span
              aria-hidden="true"
              className="w-10 h-10 rounded-xl hig-tertiary-surface flex items-center justify-center text-lg shrink-0"
            >
              💳
            </span>
            <div className="min-w-0">
              <p className="hig-subhead font-semibold truncate">Cartão Nubank Ultravioleta</p>
              <p className="hig-caption-1 text-[var(--hig-label-secondary)] truncate">
                Corte dia 25 • Vencimento dia 02
              </p>
            </div>
          </div>

          <span
            className="hig-caption-1 font-semibold px-2.5 py-0.5 rounded-full shrink-0"
            style={{
              backgroundColor: 'rgba(203, 48, 224, 0.14)',
              color: 'var(--hig-purple)',
            }}
          >
            {cardStatement.status === 'paid'
              ? 'Paga'
              : cardStatement.status === 'partial'
              ? 'Parcial'
              : 'Fatura Aberta'}
          </span>
        </div>

        <div className="pt-2 border-t border-[var(--hig-separator)] flex items-baseline justify-between">
          <span className="hig-caption-1 text-[var(--hig-label-secondary)]">
            Saldo atual da fatura
          </span>
          <div className="flex items-center gap-2">
            <span className="hig-title-3">
              {formatCentsBRL(cardStatement.remainingBalanceInCents, privacyModeEnabled)}
            </span>
            <span aria-hidden="true" className="text-[var(--hig-label-tertiary)] text-lg">
              ›
            </span>
          </div>
        </div>
      </button>

      {/* Contas Fixas do Mês em Lista Agrupada (`06-lists-and-tables.md` • Q7) */}
      <section className="space-y-2">
        <div className="px-1 flex items-center justify-between">
          <h2 className="hig-footnote font-semibold uppercase tracking-wide text-[var(--hig-label-secondary)]">
            Contas Fixas do Mês
          </h2>
          <span className="hig-caption-1 text-[var(--hig-label-secondary)]">
            Janela de 3 meses
          </span>
        </div>

        <div className="hig-grouped-card hig-grouped-list overflow-hidden">
          {fixedBillsThisMonth.map((bill) => (
            <div
              key={bill.id}
              className="p-3.5 flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <p className="hig-subhead font-semibold truncate">{bill.description}</p>
                <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
                  Vence em {bill.transactionDate} •{' '}
                  {bill.status === 'paid' ? 'Pago' : 'Pendente'}
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <span className="hig-subhead font-semibold">
                  {formatCentsBRL(bill.amountInCents, privacyModeEnabled)}
                </span>
                {bill.status === 'pending' ? (
                  <button
                    type="button"
                    onClick={() => markTransactionPaid(bill.id)}
                    className="px-3 py-1.5 rounded-full bg-[var(--hig-blue)] text-white hig-caption-1 font-semibold active:scale-95 transition"
                  >
                    Pagar
                  </button>
                ) : (
                  <span
                    className="hig-caption-1 font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: 'rgba(52, 199, 89, 0.14)',
                      color: 'var(--hig-green)',
                    }}
                  >
                    Pago
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
