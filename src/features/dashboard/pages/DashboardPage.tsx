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
      {/* Card de Saldo Principal (LCP Element) */}
      <section
        aria-label="Resumo de Saldo"
        className="p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400">
            Saldo Atual Disponível (Pago • Q2)
          </span>
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-400">
            Nov 2026
          </span>
        </div>

        <p className="text-3xl font-extrabold tracking-tight text-white mt-1.5">
          {formatCentsBRL(currentBalanceCents, privacyModeEnabled)}
        </p>

        <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-slate-400 block">Saldo Projetado (c/ Pendentes)</span>
            <span className="font-bold text-amber-400 text-sm">
              {formatCentsBRL(projectedBalanceCents, privacyModeEnabled)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-slate-400 block">Pendentes na Carteira</span>
            <span className="font-bold text-rose-400 text-sm">
              - {formatCentsBRL(pendingExpensesCents, privacyModeEnabled)}
            </span>
          </div>
        </div>
      </section>

      {/* Atalho Anotação Relâmpago (Regra dos 3 Segundos - Q8) */}
      <button
        type="button"
        onClick={onOpenQuickEntry}
        className="w-full p-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-between text-left hover:bg-emerald-500/15 transition"
      >
        <div>
          <p className="text-xs font-extrabold text-emerald-400">
            ⚡ Anotação Relâmpago em 3 Segundos (Modo TDAH • Q8)
          </p>
          <p className="text-xs text-slate-300 mt-0.5">
            Digite só o Valor e toque na Categoria. Data, Conta e Descrição preenchem sozinhos!
          </p>
        </div>
        <span className="text-sm font-bold text-emerald-400">Abrir →</span>
      </button>

      {/* Resumo da Caixa da Fatura do Cartão (Q4) */}
      <div
        onClick={() => onNavigateTab('card')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onNavigateTab('card')}
        className="cursor-pointer p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-purple-500/50 transition"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-lg">💳</span>
            <div>
              <p className="text-xs font-bold text-slate-100">Cartão Nubank Ultravioleta</p>
              <p className="text-xs text-slate-400">
                Fecha dia 25 (virada automática) • Vence dia 02
              </p>
            </div>
          </div>
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-purple-500/15 text-purple-300">
            {cardStatement.status === 'paid'
              ? 'Paga'
              : cardStatement.status === 'partial'
              ? 'Paga Parcial'
              : 'Fatura Aberta'}
          </span>
        </div>

        <div className="flex items-baseline justify-between pt-1">
          <span className="text-xs text-slate-400">Saldo restante da fatura:</span>
          <span className="text-base font-extrabold text-slate-100">
            {formatCentsBRL(cardStatement.remainingBalanceInCents, privacyModeEnabled)}
          </span>
        </div>
      </div>

      {/* Contas Fixas do Mês (Molde Automático Q7) */}
      <section className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-200">
            🔁 Contas Fixas do Mês (Molde Automático • Q7)
          </h2>
          <span className="text-xs text-slate-400">Janela de 3 meses</span>
        </div>

        <div className="space-y-2">
          {fixedBillsThisMonth.map((bill) => (
            <div
              key={bill.id}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800"
            >
              <div>
                <p className="text-xs font-bold text-slate-100">{bill.description}</p>
                <p className="text-xs text-slate-400">
                  Vence em {bill.transactionDate} •{' '}
                  {bill.status === 'paid' ? '✅ Pago' : '⏳ Pendente'}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-extrabold text-slate-100">
                  {formatCentsBRL(bill.amountInCents, privacyModeEnabled)}
                </span>
                {bill.status === 'pending' && (
                  <button
                    type="button"
                    onClick={() => markTransactionPaid(bill.id)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                  >
                    Pagar 1-Click
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

