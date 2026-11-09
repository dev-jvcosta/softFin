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
  const [installmentTotal, setInstallmentTotal] = useState(1);
  const [customEntryInput, setCustomEntryInput] = useState('');

  const maxInstallments = getMaxInstallmentsAllowed(isOnline);
  const effectiveInstallments = Math.min(installmentTotal, maxInstallments);
  const totalCents = Math.max(0, Math.round((parseFloat(amountInput) || 0) * 100));
  const customFirstCents = customEntryInput
    ? Math.round((parseFloat(customEntryInput) || 0) * 100)
    : undefined;

  const previewInstallments = calculateDynamicInstallments(
    totalCents,
    effectiveInstallments,
    customFirstCents
  );

  const handleCategoryTap = (categoryId: string) => {
    if (totalCents <= 0) return;

    addQuickOrInstallmentTransaction({
      amountInCents: totalCents,
      categoryId,
      accountId: selectedAccountId,
      installmentTotal: effectiveInstallments,
      customFirstInstallmentInCents: customFirstCents,
      status: 'paid',
    });

    onClose();
  };

  return (
    <NativeDialog
      isOpen={isOpen}
      onClose={onClose}
      titleId="quick-tx-dialog-title"
      title="⚡ Anotação Relâmpago em 3s (Q1 & Q8)"
    >
      <div className="space-y-4">
        {/* Passo 1: Valor com inputmode="decimal" */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-bold text-emerald-400">Passo 1: Digite o Valor</span>
            <span>Data: Hoje • Status: Pago</span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-lg font-bold text-slate-400">R$</span>
            <input
              type="text"
              inputMode="decimal"
              value={amountInput}
              onChange={(e) => setAmountInput(e.target.value)}
              className="w-full text-2xl font-extrabold bg-transparent border-b border-slate-800 focus:border-emerald-500 focus:outline-none py-1 text-white"
              placeholder="0,00"
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-2.5">
            {[8, 35, 100, 250].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmountInput(preset.toFixed(2))}
                className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold hover:border-emerald-500/50"
              >
                R$ {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Seletor opcional de Conta e Parcelas Dinâmicas (Q1 & Q6) */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <label className="text-xs font-semibold text-slate-300">Conta / Cartão:</label>
            <select
              value={selectedAccountId}
              onChange={(e) => setSelectedAccountId(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-100"
            >
              {accounts.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.icon} {acc.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-slate-300 block">
                Parcelamento (Q1 & Q6):
              </span>
              <span className="text-xs text-slate-400">
                {isOnline ? 'Online: até 48x liberado' : 'Offline: limitado a 12x (protege mochila)'}
              </span>
            </div>

            <select
              value={effectiveInstallments}
              onChange={(e) => setInstallmentTotal(Number(e.target.value))}
              className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-100"
            >
              <option value={1}>À vista (1x)</option>
              <option value={2}>2x</option>
              <option value={3}>3x (Teste Centavos)</option>
              <option value={6}>6x</option>
              <option value={10}>10x</option>
              <option value={12}>12x (Máx Offline)</option>
              {isOnline && <option value={24}>24x (Online)</option>}
              {isOnline && <option value={48}>48x (Online)</option>}
            </select>
          </div>

          {effectiveInstallments > 1 && (
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">1ª Parcela customizada (opcional):</span>
                <input
                  type="text"
                  inputMode="decimal"
                  value={customEntryInput}
                  onChange={(e) => setCustomEntryInput(e.target.value)}
                  placeholder="Automático"
                  className="w-24 bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-right text-xs font-bold"
                />
              </div>
              <p className="text-emerald-400 font-semibold">
                • 1ª Parcela: {formatCentsBRL(previewInstallments[0])}
              </p>
              <p className="text-slate-300">
                • Demais ({effectiveInstallments - 1}x):{' '}
                {formatCentsBRL(previewInstallments[1] ?? 0)} cada
              </p>
            </div>
          )}
        </div>

        {/* Passo 2: Toque Único nas 8 Categorias do Kit Inicial (Q8) */}
        <div>
          <p className="text-xs font-bold text-emerald-400 mb-2">
            Passo 2: Toque na Categoria para Salvar Imediatamente!
          </p>
          <div className="grid grid-cols-4 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryTap(cat.id)}
                className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500 flex flex-col items-center gap-1 transition"
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="text-xs font-semibold truncate w-full text-center">
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

