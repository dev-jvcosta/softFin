import React, { useState } from 'react';
import { useSoftFinStore } from '../../../app/store/useSoftFinStore';
import { formatCentsBRL } from '../../../shared/utils/currency';
import { NativeDialog } from '../../../shared/components/NativeDialog';
import type { Transaction } from '../../../shared/types/domain.types';

export const TransactionsPage: React.FC = () => {
  const transactions = useSoftFinStore((s) => s.transactions);
  const categories = useSoftFinStore((s) => s.categories);
  const privacyModeEnabled = useSoftFinStore((s) => s.privacyModeEnabled);
  const editInstallmentWithScope = useSoftFinStore((s) => s.editInstallmentWithScope);
  const retryFailedReceipt = useSoftFinStore((s) => s.retryFailedReceipt);
  const discardFailedReceipt = useSoftFinStore((s) => s.discardFailedReceipt);
  const deleteTransactionOfflineSafe = useSoftFinStore((s) => s.deleteTransactionOfflineSafe);

  const [editingTx, setEditingTx] = useState<Transaction | null>(null);
  const [newAmountInput, setNewAmountInput] = useState('45.00');

  const openScopeEditor = (tx: Transaction) => {
    setEditingTx(tx);
    setNewAmountInput((tx.amountInCents / 100).toFixed(2));
  };

  const handleApplyScope = (scope: 'single' | 'future') => {
    if (!editingTx) return;
    const cents = Math.max(100, Math.round((parseFloat(newAmountInput) || 0) * 100));
    editInstallmentWithScope(editingTx.id, cents, scope);
    setEditingTx(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-100">Extrato & Parcelas Dinâmicas</h2>
          <p className="text-xs text-slate-400">
            Janela ativa de 3 meses (Q3) • Toque em uma parcela para editar o escopo (Q1)
          </p>
        </div>
      </div>

      <div className="space-y-2.5">
        {transactions.map((tx, index) => {
          const cat = categories.find((c) => c.id === tx.categoryId);
          // MANDATORY (`defer-rendering-heavy-content`): Aplica content-visibility: auto apenas fora da dobra inicial (index >= 6)
          const deferredClass = index >= 6 ? 'tx-item-deferred' : '';

          return (
            <article
              key={tx.id}
              className={`p-3.5 rounded-2xl bg-slate-900 border ${
                tx.attachmentSyncStatus === 'failed'
                  ? 'border-rose-500/50'
                  : 'border-slate-800'
              } space-y-2 ${deferredClass}`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat?.icon || '💸'}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold text-slate-100">{tx.description}</p>
                      {tx.isAnticipated && (
                        <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold">
                          Antecipada
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400">
                      Competência: {tx.competenceMonth} •{' '}
                      {tx.hasPendingWrites ? '🎒 Salvo no aparelho' : '☁️ Sincronizado'}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  {tx.originalAmountInCents && (
                    <span className="text-xs line-through text-rose-400 block">
                      {formatCentsBRL(tx.originalAmountInCents, privacyModeEnabled)}
                    </span>
                  )}
                  <span
                    className={`text-xs font-extrabold ${
                      tx.type === 'income' ? 'text-emerald-400' : 'text-slate-100'
                    }`}
                  >
                    {tx.type === 'income' ? '+ ' : '- '}
                    {formatCentsBRL(tx.amountInCents, privacyModeEnabled)}
                  </span>
                </div>
              </div>

              {/* Q6: Botão "Tentar de Novo" ou "Descartar" quando a foto do comprovante falha 3x */}
              {tx.attachmentSyncStatus === 'failed' && (
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                  <span className="text-xs text-rose-400 font-semibold">
                    ⚠️ Foto não enviada (3 tentativas)
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => retryFailedReceipt(tx.id)}
                      className="px-2.5 py-1 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                    >
                      🔄 Tentar de novo
                    </button>
                    <button
                      type="button"
                      onClick={() => discardFailedReceipt(tx.id)}
                      className="px-2.5 py-1 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                    >
                      Descartar foto
                    </button>
                  </div>
                </div>
              )}

              {/* Ações de Edição de Escopo de Parcela (Q1) e Exclusão com GC de anexo (Q3) */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-end gap-2">
                {tx.installmentGroupId && tx.status === 'pending' && (
                  <button
                    type="button"
                    onClick={() => openScopeEditor(tx)}
                    className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-emerald-400 hover:border-emerald-500/50"
                  >
                    ✏️ Editar Parcela (Q1)
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => void deleteTransactionOfflineSafe(tx.id)}
                  className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 hover:text-rose-400"
                >
                  🗑️ Excluir
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal de Escopo de Edição de Parcela (Q1) */}
      <NativeDialog
        isOpen={Boolean(editingTx)}
        onClose={() => setEditingTx(null)}
        titleId="scope-edit-dialog-title"
        title="🎯 Escopo de Edição da Parcela (Q1)"
      >
        {editingTx && (
          <div className="space-y-4">
            <p className="text-xs text-slate-300">
              Editando: <strong>{editingTx.description}</strong>. Parcelas já pagas nunca são
              alteradas.
            </p>

            <div>
              <label className="text-xs font-bold text-slate-400 block mb-1">
                Novo valor da parcela (R$):
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={newAmountInput}
                onChange={(e) => setNewAmountInput(e.target.value)}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-base font-bold text-white"
              />
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleApplyScope('single')}
                className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500 text-left text-xs font-bold text-slate-100"
              >
                1️⃣ Alterar apenas esta parcela ({editingTx.installmentIndex}/
                {editingTx.installmentTotal})
              </button>

              <button
                type="button"
                onClick={() => handleApplyScope('future')}
                className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500 text-left text-xs font-bold text-emerald-400"
              >
                2️⃣ Alterar esta e todas as futuras em aberto ({editingTx.installmentIndex} até{' '}
                {editingTx.installmentTotal})
              </button>
            </div>
          </div>
        )}
      </NativeDialog>
    </div>
  );
};

