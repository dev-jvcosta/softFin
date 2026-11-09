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
        'Fatura paga integralmente. Valor debitado da Carteira Principal.'
      );
    } else {
      const partialAmount = 60000; // R$ 600,00
      const rolledOver = Math.max(0, cardStatement.remainingBalanceInCents - partialAmount);
      payCreditCardStatement(partialAmount);
      setPaymentFeedback(
        `Pagamento parcial de R$ 600,00 registrado. O saldo restante (${formatCentsBRL(
          rolledOver
        )}) foi rolado automaticamente para a próxima fatura.`
      );
    }
  };

  return (
    <div className="space-y-4">
      {/* Resumo da Fatura Mensal (Q4) */}
      <section className="p-5 hig-grouped-card space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="hig-footnote font-medium text-[var(--hig-label-secondary)]">
              Cartão Nubank Ultravioleta • {cardStatement.id}
            </span>
            <p className="hig-large-title mt-1">
              {formatCentsBRL(cardStatement.remainingBalanceInCents, privacyModeEnabled)}
            </p>
          </div>

          <span
            className="hig-caption-1 font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(203, 48, 224, 0.14)',
              color: 'var(--hig-purple)',
            }}
          >
            {cardStatement.status === 'paid'
              ? 'Paga'
              : cardStatement.status === 'partial'
              ? 'Parcial'
              : 'Aberta'}
          </span>
        </div>

        <p className="hig-caption-1 text-[var(--hig-label-secondary)] pt-2 border-t border-[var(--hig-separator)]">
          Fechamento automático dia 25 • Compras no dia 25 ou após entram na fatura seguinte.
        </p>
      </section>

      {/* Antecipar Parcelas com Desconto em Lista Agrupada (`06-lists-and-tables.md` • Q4) */}
      <section className="space-y-2">
        <div className="px-1 flex items-center justify-between">
          <h2 className="hig-footnote font-semibold uppercase tracking-wide text-[var(--hig-label-secondary)]">
            Antecipar Parcelas com Desconto
          </h2>
          <span
            className="hig-caption-1 font-semibold"
            style={{ color: 'var(--hig-green)' }}
          >
            Valor antigo fica riscado
          </span>
        </div>

        <div className="hig-grouped-card hig-grouped-list overflow-hidden">
          {futureInstallments.length === 0 ? (
            <p className="p-4 hig-footnote text-[var(--hig-label-secondary)]">
              Todas as parcelas futuras elegíveis já foram antecipadas para a fatura atual.
            </p>
          ) : (
            futureInstallments.map((item) => (
              <div
                key={item.id}
                className="p-3.5 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <p className="hig-subhead font-semibold truncate">{item.description}</p>
                  <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
                    Fatura original: {item.competenceMonth} •{' '}
                    {formatCentsBRL(item.amountInCents, privacyModeEnabled)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => anticipateInstallmentWithDiscount(item.id, 1500)}
                  className="shrink-0 px-3.5 py-1.5 rounded-full text-white hig-caption-1 font-semibold active:scale-95 transition"
                  style={{ backgroundColor: 'var(--hig-purple)' }}
                >
                  Antecipar (-R$ 15)
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Pagamento Total vs. Parcial (Q4) */}
      <section className="p-4 hig-grouped-card space-y-3">
        <h2 className="hig-subhead font-semibold">Pagamento da Fatura</h2>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => handlePayStatement('full')}
            className="min-h-[44px] px-3 rounded-xl bg-[var(--hig-blue)] text-white hig-footnote font-semibold active:scale-98 transition"
          >
            Pagar Total
          </button>

          <button
            type="button"
            onClick={() => handlePayStatement('partial')}
            className="min-h-[44px] px-3 rounded-xl hig-tertiary-surface hig-footnote font-semibold text-[var(--hig-label)] active:scale-98 transition"
          >
            Pagar Parcial (R$ 600)
          </button>
        </div>

        {paymentFeedback && (
          <p
            role="status"
            className="p-3 rounded-xl hig-tertiary-surface hig-caption-1 font-medium"
            style={{ color: 'var(--hig-green)' }}
          >
            {paymentFeedback}
          </p>
        )}
      </section>
    </div>
  );
};
