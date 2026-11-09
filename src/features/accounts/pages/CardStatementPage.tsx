import React, { useState } from 'react';
import { useSoftFinStore } from '../../../app/store/useSoftFinStore';
import { formatCentsBRL } from '../../../shared/utils/currency';

export const CardStatementPage: React.FC = () => {
  const cardStatement = useSoftFinStore((s) => s.cardStatement);
  const transactions = useSoftFinStore((s) => s.transactions);
  const privacyModeEnabled = useSoftFinStore((s) => s.privacyModeEnabled);
  const anticipateInstallmentWithDiscount = useSoftFinStore(
    (s) => s.anticipateInstallmentWithDiscount
  );
  const payCreditCardStatement = useSoftFinStore((s) => s.payCreditCardStatement);

  const [paymentFeedback, setPaymentFeedback] = useState<string | null>(null);

  const futureInstallments = transactions.filter(
    (t) =>
      t.accountId === 'acc-card-nubank' &&
      t.status === 'pending' &&
      t.competenceMonth > cardStatement.id &&
      !t.isAnticipated
  );

  const handlePayStatement = (mode: 'full' | 'partial') => {
    if (mode === 'full') {
      payCreditCardStatement(cardStatement.remainingBalanceInCents);
      setPaymentFeedback(
        '✅ Fatura paga integralmente! Valor debitado da Carteira Principal.'
      );
    } else {
      const partialAmount = 60000; // R$ 600,00
      const rolledOver = Math.max(0, cardStatement.remainingBalanceInCents - partialAmount);
      payCreditCardStatement(partialAmount);
      setPaymentFeedback(
        `⚠️ Pagamento parcial de R$ 600,00 registrado. O restante (${formatCentsBRL(
          rolledOver
        )}) já foi rolado automaticamente para a fatura do próximo mês (Q4).`
      );
    }
  };

  return (
    <div className="space-y-4">
      {/* Caixa Mensal da Fatura (Q4) */}
      <section className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-100">
              💳 Caixa da Fatura • {cardStatement.id}
            </h2>
            <p className="text-xs text-slate-400">
              Fechamento dia 25 • Compras no dia 25 ou depois já caem no mês seguinte (Q4)
            </p>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-purple-500/15 text-purple-300">
            Status: {cardStatement.status.toUpperCase()}
          </span>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-baseline justify-between">
          <span className="text-xs text-slate-400">Saldo atual da fatura:</span>
          <span className="text-xl font-extrabold text-white">
            {formatCentsBRL(cardStatement.remainingBalanceInCents, privacyModeEnabled)}
          </span>
        </div>
      </section>

      {/* Antecipar Parcelas com Desconto (Estilo Nubank - Q4) */}
      <section className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-100">
            ⚡ Antecipar Parcelas Futuras com Desconto (Q4)
          </h3>
          <span className="text-xs font-semibold text-emerald-400">
            Guarda valor antigo riscado
          </span>
        </div>

        {futureInstallments.length === 0 ? (
          <p className="text-xs text-slate-400">
            Todas as parcelas futuras elegíveis já foram antecipadas para a fatura atual!
          </p>
        ) : (
          <div className="space-y-2">
            {futureInstallments.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2"
              >
                <div>
                  <p className="text-xs font-bold text-slate-100">{item.description}</p>
                  <p className="text-xs text-slate-400">
                    Fatura original: {item.competenceMonth} • Valor:{' '}
                    {formatCentsBRL(item.amountInCents, privacyModeEnabled)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => anticipateInstallmentWithDiscount(item.id, 1500)}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold"
                >
                  Antecipar (-R$ 15,00)
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Pagamento Total vs. Pagamento Parcial (Q4) */}
      <section className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <h3 className="text-xs font-bold text-slate-100">
          💰 Pagamento da Fatura (Total ou Parcial • Q4)
        </h3>
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => handlePayStatement('full')}
            className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
          >
            Pagar Total
          </button>
          <button
            type="button"
            onClick={() => handlePayStatement('partial')}
            className="py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500 text-xs font-bold text-amber-300"
          >
            Pagar Parcial (R$ 600)
          </button>
        </div>

        {paymentFeedback && (
          <p className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-semibold">
            {paymentFeedback}
          </p>
        )}
      </section>
    </div>
  );
};

