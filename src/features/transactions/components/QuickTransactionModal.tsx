import React, { useState } from 'react';
import { NativeDialog } from '../../../shared/components/NativeDialog';
import { useSoftFinStore } from '../../../app/store/useSoftFinStore';
import {
  calculateDynamicInstallments,
  formatCentsBRL,
  getMaxInstallmentsAllowed,
} from '../../../shared/utils/currency';

interface QuickTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickTransactionModal: React.FC<QuickTransactionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const isOnline = useSoftFinStore((s) => s.isOnline);
  const categories = useSoftFinStore((s) => s.categories).filter((c) => !c.isArchived);
  const accounts = useSoftFinStore((s) => s.accounts).filter((a) => !a.isArchived);
  const lastUsedAccountId = useSoftFinStore((s) => s.lastUsedAccountId);
  const addQuickOrInstallmentTransaction = useSoftFinStore(
    (s) => s.addQuickOrInstallmentTransaction
  );

  const [amountInput, setAmountInput] = useState('100.00');
  const [selectedAccountId, setSelectedAccountId] = useState(lastUsedAccountId);
  const [paymentMode, setPaymentMode] = useState<'single' | 'installment'>('single');
  const [installmentTotal, setInstallmentTotal] = useState(3);
  const [customEntryInput, setCustomEntryInput] = useState('');

  const maxInstallments = getMaxInstallmentsAllowed(isOnline);
  const effectiveInstallments =
    paymentMode === 'single' ? 1 : Math.max(2, Math.min(installmentTotal, maxInstallments));

  const totalCents = Math.max(0, Math.round((parseFloat(amountInput.replace(',', '.')) || 0) * 100));
  const hasCustomEntryText = customEntryInput.trim().length > 0;
  const parsedCustomCents = hasCustomEntryText
    ? Math.round((parseFloat(customEntryInput.replace(',', '.')) || 0) * 100)
    : undefined;

  // Decisão 5A (`04-entering-data.md`): Validação dinâmica da 1ª parcela (entrada < valor total)
  const isCustomEntryInvalid =
    effectiveInstallments > 1 &&
    hasCustomEntryText &&
    (parsedCustomCents === undefined ||
      parsedCustomCents <= 0 ||
      parsedCustomCents >= totalCents);

  const validCustomFirstCents =
    !isCustomEntryInvalid && parsedCustomCents ? parsedCustomCents : undefined;

  const previewInstallments = calculateDynamicInstallments(
    totalCents,
    effectiveInstallments,
    validCustomFirstCents
  );

  const isSaveDisabled = totalCents <= 0 || isCustomEntryInvalid;

  const handleCategoryTap = (categoryId: string) => {
    if (isSaveDisabled) return;

    const saved = addQuickOrInstallmentTransaction({
      amountInCents: totalCents,
      categoryId,
      accountId: selectedAccountId,
      installmentTotal: effectiveInstallments,
      customFirstInstallmentInCents: validCustomFirstCents,
      status: 'paid',
    });

    if (saved) {
      onClose();
    }
  };

  return (
    <NativeDialog
      isOpen={isOpen}
      onClose={onClose}
      titleId="quick-tx-dialog-title"
      title="Anotação Relâmpago"
      variant="sheet"
      cancelLabel="Cancelar"
    >
      <div className="space-y-4">
        {/* Bloco 1: Valor Principal em Destaque (SF Pro Large Title + inputmode="decimal") */}
        <div className="p-4 hig-grouped-card space-y-3">
          <div className="flex items-center justify-between hig-caption-1 text-[var(--hig-label-secondary)]">
            <span className="font-semibold text-[var(--hig-blue)]">1. Digite o Valor</span>
            <span>Hoje • Preenchimento Automático</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="hig-title-2 text-[var(--hig-label-secondary)]">R$</span>
            <input
              type="text"
              inputMode="decimal"
              aria-label="Valor do lançamento em reais"
              value={amountInput}
              onChange={(e) => setAmountInput(e.target.value)}
              className="w-full hig-large-title bg-transparent border-b border-[var(--hig-separator)] focus:border-[var(--hig-blue)] focus:outline-none py-1"
              placeholder="0,00"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {[15, 35, 100, 250].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmountInput(preset.toFixed(2))}
                className="px-3 py-1 rounded-full hig-tertiary-surface hig-caption-1 font-semibold hover:opacity-80 transition"
              >
                R$ {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Bloco 2: Conta & Segmented Control de Parcelamento (`06-segmented-controls.md` & `08-steppers.md`) */}
        <div className="p-4 hig-grouped-card space-y-3.5">
          {/* Seleção de Conta em Pílulas Rápidas */}
          <div className="space-y-1.5">
            <span className="hig-caption-1 font-semibold text-[var(--hig-label-secondary)] block">
              Conta ou Cartão
            </span>
            <div className="grid grid-cols-2 gap-2">
              {accounts.map((acc) => {
                const isSelected = acc.id === selectedAccountId;
                return (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => setSelectedAccountId(acc.id)}
                    aria-pressed={isSelected}
                    className={`min-h-[40px] px-3 py-2 rounded-xl hig-footnote font-semibold flex items-center gap-2 truncate transition ${
                      isSelected
                        ? 'bg-[var(--hig-blue)] text-white'
                        : 'hig-tertiary-surface text-[var(--hig-label)]'
                    }`}
                  >
                    <span aria-hidden="true">{acc.icon}</span>
                    <span className="truncate">{acc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Apple Segmented Control: À Vista vs Parcelado (`06-segmented-controls.md`) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="hig-caption-1 font-semibold text-[var(--hig-label-secondary)]">
                Forma de Lançamento
              </span>
              <span className="hig-caption-1 text-[var(--hig-label-secondary)]">
                {isOnline ? 'Online: até 48x' : 'Offline: máx. 12x'}
              </span>
            </div>

            <div
              role="group"
              aria-label="Modo de parcelamento"
              className="p-1 rounded-xl hig-tertiary-surface grid grid-cols-2 gap-1"
            >
              <button
                type="button"
                onClick={() => {
                  setPaymentMode('single');
                  setCustomEntryInput('');
                }}
                aria-pressed={paymentMode === 'single'}
                className={`min-h-[34px] rounded-lg hig-footnote font-semibold transition ${
                  paymentMode === 'single'
                    ? 'bg-[var(--hig-bg-card)] text-[var(--hig-label)] shadow-xs'
                    : 'text-[var(--hig-label-secondary)]'
                }`}
              >
                À Vista (1x)
              </button>
              <button
                type="button"
                onClick={() => setPaymentMode('installment')}
                aria-pressed={paymentMode === 'installment'}
                className={`min-h-[34px] rounded-lg hig-footnote font-semibold transition ${
                  paymentMode === 'installment'
                    ? 'bg-[var(--hig-bg-card)] text-[var(--hig-label)] shadow-xs'
                    : 'text-[var(--hig-label-secondary)]'
                }`}
              >
                Parcelado ({effectiveInstallments > 1 ? `${effectiveInstallments}x` : '2x+'})
              </button>
            </div>
          </div>

          {/* Opções de Parcelamento + Stepper + Entrada Customizada */}
          {paymentMode === 'installment' && (
            <div className="pt-2 border-t border-[var(--hig-separator)] space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[2, 3, 6, 10, 12].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setInstallmentTotal(n)}
                      className={`px-2.5 py-1 rounded-lg hig-caption-1 font-semibold transition ${
                        effectiveInstallments === n
                          ? 'bg-[var(--hig-blue)] text-white'
                          : 'hig-tertiary-surface text-[var(--hig-label)]'
                      }`}
                    >
                      {n}x
                    </button>
                  ))}
                  {isOnline && (
                    <button
                      type="button"
                      onClick={() => setInstallmentTotal(24)}
                      className={`px-2.5 py-1 rounded-lg hig-caption-1 font-semibold transition ${
                        effectiveInstallments === 24
                          ? 'bg-[var(--hig-blue)] text-white'
                          : 'hig-tertiary-surface text-[var(--hig-label)]'
                      }`}
                    >
                      24x
                    </button>
                  )}
                </div>

                {/* Apple Stepper (`08-steppers.md`) */}
                <div className="inline-flex items-center rounded-xl hig-tertiary-surface overflow-hidden">
                  <button
                    type="button"
                    aria-label="Diminuir número de parcelas"
                    onClick={() => setInstallmentTotal(Math.max(2, effectiveInstallments - 1))}
                    className="w-9 h-8 flex items-center justify-center hig-headline text-[var(--hig-blue)] border-r border-[var(--hig-separator)]"
                  >
                    −
                  </button>
                  <button
                    type="button"
                    aria-label="Aumentar número de parcelas"
                    onClick={() =>
                      setInstallmentTotal(Math.min(maxInstallments, effectiveInstallments + 1))
                    }
                    className="w-9 h-8 flex items-center justify-center hig-headline text-[var(--hig-blue)]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Campo de 1ª Parcela Customizada com Validação Dinâmica (Decisão 5A) */}
              <div className="p-3 rounded-xl hig-tertiary-surface space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <label
                    htmlFor="custom-first-installment"
                    className="hig-caption-1 font-medium text-[var(--hig-label-secondary)]"
                  >
                    1ª Parcela / Entrada (opcional):
                  </label>
                  <input
                    id="custom-first-installment"
                    type="text"
                    inputMode="decimal"
                    value={customEntryInput}
                    onChange={(e) => setCustomEntryInput(e.target.value)}
                    placeholder="Automático"
                    aria-invalid={isCustomEntryInvalid}
                    className="w-28 rounded-lg bg-[var(--hig-bg-card)] border px-2.5 py-1 text-right hig-footnote font-semibold focus:outline-none"
                    style={{
                      borderColor: isCustomEntryInvalid
                        ? 'var(--hig-red)'
                        : 'var(--hig-separator)',
                    }}
                  />
                </div>

                {isCustomEntryInvalid ? (
                  <p
                    role="alert"
                    className="hig-caption-1 font-semibold"
                    style={{ color: 'var(--hig-red)' }}
                  >
                    A 1ª parcela precisa ser maior que zero e menor que o valor total (
                    {formatCentsBRL(totalCents)}).
                  </p>
                ) : (
                  <div className="flex items-center justify-between hig-caption-1 pt-1">
                    <span className="font-semibold text-[var(--hig-blue)]">
                      1ª: {formatCentsBRL(previewInstallments[0])}
                    </span>
                    <span className="text-[var(--hig-label-secondary)]">
                      Demais ({effectiveInstallments - 1}x):{' '}
                      <strong>{formatCentsBRL(previewInstallments[1] ?? 0)}</strong>
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bloco 3: Toque Único nas 8 Categorias (Salva e Fecha na Hora — Decisão 2) */}
        <div className="space-y-2">
          <p className="hig-caption-1 font-semibold text-[var(--hig-blue)] px-1">
            2. Toque na Categoria para Salvar na Hora
          </p>

          <div className="grid grid-cols-4 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                disabled={isSaveDisabled}
                onClick={() => handleCategoryTap(cat.id)}
                className="min-h-[68px] p-2.5 hig-grouped-card flex flex-col items-center justify-center gap-1 hover:border-[var(--hig-blue)] active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition"
              >
                <span className="text-xl" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="hig-caption-1 font-medium truncate w-full text-center">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </NativeDialog>
  );
};
