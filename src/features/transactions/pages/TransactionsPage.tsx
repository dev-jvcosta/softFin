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

  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [newAmountInput, setNewAmountInput] = useState('45.00');

  const openActionSheetForTx = (tx: Transaction) => {
    setSelectedTx(tx);
    setNewAmountInput((tx.amountInCents / 100).toFixed(2));
  };

  const handleApplyScope = (scope: 'single' | 'future') => {
    if (!selectedTx) return;
    const cents = Math.max(
      100,
      Math.round((parseFloat(newAmountInput.replace(',', '.')) || 0) * 100)
    );
    editInstallmentWithScope(selectedTx.id, cents, scope);
    setSelectedTx(null);
  };

  const handleDeleteSelected = async () => {
    if (!selectedTx) return;
    const idToDelete = selectedTx.id;
    setSelectedTx(null);
    await deleteTransactionOfflineSafe(idToDelete);
  };

  return (
    <div className="space-y-4">
      <div className="px-1 flex items-center justify-between">
        <p className="hig-footnote text-[var(--hig-label-secondary)]">
          Janela ativa de 3 meses • Toque em um item para opções
        </p>
      </div>

      {/* Inset Grouped List do iOS (`06-lists-and-tables.md`) */}
      <div className="hig-grouped-card hig-grouped-list overflow-hidden">
        {transactions.map((tx, index) => {
          const cat = categories.find((c) => c.id === tx.categoryId);
          // MANDATORY (`defer-rendering-heavy-content`): Aplica content-visibility: auto apenas fora da dobra inicial (index >= 6)
          const deferredClass = index >= 6 ? 'tx-item-deferred' : '';

          return (
            <div key={tx.id} className={`p-3.5 transition ${deferredClass}`}>
              {/* Linha Principal Limpa — abre Action Sheet ao tocar (Decisão 2) */}
              <button
                type="button"
                onClick={() => openActionSheetForTx(tx)}
                className="w-full flex items-center justify-between gap-3 text-left group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    aria-hidden="true"
                    className="w-10 h-10 rounded-xl hig-tertiary-surface flex items-center justify-center text-lg shrink-0"
                  >
                    {cat?.icon || '💸'}
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="hig-subhead font-semibold truncate">
                        {tx.description}
                      </span>
                      {tx.isAnticipated && (
                        <span
                          className="hig-caption-1 px-2 py-0.5 rounded-full font-semibold"
                          style={{
                            backgroundColor: 'rgba(203, 48, 224, 0.14)',
                            color: 'var(--hig-purple)',
                          }}
                        >
                          Antecipada
                        </span>
                      )}
                    </div>

                    <p className="hig-caption-1 text-[var(--hig-label-secondary)] truncate">
                      {tx.competenceMonth} •{' '}
                      {tx.hasPendingWrites ? 'Salvo no aparelho' : 'Sincronizado'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="text-right">
                    {tx.originalAmountInCents && (
                      <span
                        className="hig-caption-1 line-through block"
                        style={{ color: 'var(--hig-label-secondary)' }}
                      >
                        {formatCentsBRL(tx.originalAmountInCents, privacyModeEnabled)}
                      </span>
                    )}
                    <span
                      className="hig-subhead font-semibold"
                      style={{
                        color:
                          tx.type === 'income'
                            ? 'var(--hig-green)'
                            : 'var(--hig-label)',
                      }}
                    >
                      {tx.type === 'income' ? '+ ' : '- '}
                      {formatCentsBRL(tx.amountInCents, privacyModeEnabled)}
                    </span>
                  </div>

                  {/* Disclosure Indicator da Apple (`06-lists-and-tables.md`) */}
                  <span
                    aria-hidden="true"
                    className="text-[var(--hig-label-tertiary)] text-lg leading-none"
                  >
                    ›
                  </span>
                </div>
              </button>

              {/* Exceção de Segurança TDAH (Decisão 2): Erro de foto offline permanece visível direto na linha */}
              {tx.attachmentSyncStatus === 'failed' && (
                <div className="mt-2.5 pt-2.5 border-t border-[var(--hig-separator)] flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className="hig-caption-1 font-semibold"
                    style={{ color: 'var(--hig-red)' }}
                  >
                    ⚠️ Comprovante não enviado (3 tentativas)
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => retryFailedReceipt(tx.id)}
                      className="px-3 py-1 rounded-full bg-[var(--hig-blue)] text-white hig-caption-1 font-semibold"
                    >
                      Tentar de novo
                    </button>
                    <button
                      type="button"
                      onClick={() => discardFailedReceipt(tx.id)}
                      className="px-3 py-1 rounded-full hig-tertiary-surface hig-caption-1 font-medium text-[var(--hig-label-secondary)]"
                    >
                      Descartar
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Folha de Ação Nativa do iOS (`01-action-sheets.md` & `03-context-menus.md` — Decisões 2 & 6) */}
      <NativeDialog
        isOpen={Boolean(selectedTx)}
        onClose={() => setSelectedTx(null)}
        titleId="tx-action-sheet-title"
        title={selectedTx ? `${selectedTx.description}` : 'Opções do Lançamento'}
        variant="action-sheet"
        cancelLabel="Cancelar"
      >
        {selectedTx && (
          <div className="hig-grouped-list">
            {/* Se for parcela pendente, exibe o editor rápido + 2 opções de escopo na Action Sheet */}
            {selectedTx.installmentGroupId && selectedTx.status === 'pending' && (
              <>
                <div className="p-3.5 bg-[var(--hig-bg-card)]/50 space-y-1.5">
                  <label
                    htmlFor="action-sheet-installment-input"
                    className="hig-caption-1 font-medium text-[var(--hig-label-secondary)] block text-center"
                  >
                    Novo valor da parcela (R$) — parcelas pagas permanecem intactas
                  </label>
                  <input
                    id="action-sheet-installment-input"
                    type="text"
                    inputMode="decimal"
                    value={newAmountInput}
                    onChange={(e) => setNewAmountInput(e.target.value)}
                    className="w-full rounded-xl hig-tertiary-surface px-3 py-2 text-center hig-headline"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleApplyScope('single')}
                  className="w-full min-h-[50px] px-4 py-3 text-center hig-body text-[var(--hig-blue)] hover:bg-[var(--hig-fill-secondary)] transition"
                >
                  Alterar Apenas Esta Parcela ({selectedTx.installmentIndex}/
                  {selectedTx.installmentTotal})
                </button>

                <button
                  type="button"
                  onClick={() => handleApplyScope('future')}
                  className="w-full min-h-[50px] px-4 py-3 text-center hig-headline text-[var(--hig-blue)] hover:bg-[var(--hig-fill-secondary)] transition"
                >
                  Alterar Esta e Todas as Futuras ({selectedTx.installmentIndex} até{' '}
                  {selectedTx.installmentTotal})
                </button>
              </>
            )}

            {/* Ação Destrutiva em Vermelho (`systemRed` — `01-action-sheets.md` linha 35) */}
            <button
              type="button"
              onClick={() => void handleDeleteSelected()}
              className="w-full min-h-[50px] px-4 py-3 text-center hig-body font-semibold hover:bg-[var(--hig-fill-secondary)] transition"
              style={{ color: 'var(--hig-red)' }}
            >
              Excluir Lançamento
            </button>
          </div>
        )}
      </NativeDialog>
    </div>
  );
};
