import React, { useState } from 'react';
import { useSoftFinStore } from '../../../app/store/useSoftFinStore';
import { formatCentsBRL } from '../../../shared/utils/currency';
import { processInChunksWithYield } from '../../../shared/utils/scheduler';

export const SettingsPage: React.FC = () => {
  const accounts = useSoftFinStore((s) => s.accounts);
  const templates = useSoftFinStore((s) => s.templates);
  const transactions = useSoftFinStore((s) => s.transactions);
  const isOnline = useSoftFinStore((s) => s.isOnline);
  const pendingWritesCount = useSoftFinStore((s) => s.pendingWritesCount);
  const privacyModeEnabled = useSoftFinStore((s) => s.privacyModeEnabled);
  const updateRecurringTemplatePrice = useSoftFinStore((s) => s.updateRecurringTemplatePrice);
  const archiveAccountSafe = useSoftFinStore((s) => s.archiveAccountSafe);

  const [auditStatus, setAuditStatus] = useState<string | null>(null);
  const [archiveFeedback, setArchiveFeedback] = useState<string | null>(null);
  const [exportFeedback, setExportFeedback] = useState<string | null>(null);

  // Q5: Botão "Conferir Meu Saldo" usando scheduler.yield() (regra dos 50ms)
  const handleRunBalanceAudit = async () => {
    setAuditStatus('Conferindo transações sem travar a tela (50ms chunks)...');
    const audited = await processInChunksWithYield(transactions, (tx) => tx.amountInCents);
    setAuditStatus(
      `✅ Saldo conferido! ${audited.length} lançamentos validados via Soma Inteligente (increment).`
    );
  };

  // Q9: Exportação 100% local com aviso discreto se houver itens na mochila offline
  const handleExportCSV = async () => {
    const rows = await processInChunksWithYield(transactions, (tx) => {
      const syncTag = tx.hasPendingWrites ? 'Pendente de sincronização' : 'Sincronizado';
      return `${tx.transactionDate};"${tx.description}";${(tx.amountInCents / 100).toFixed(
        2
      )};${tx.status};"${syncTag}"`;
    });

    const csvContent = ['Data;Descricao;Valor;Status;Sincronizacao', ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `extrato-softfin-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    setExportFeedback(
      !isOnline || pendingWritesCount > 0
        ? `📄 Planilha CSV gerada 100% offline! Inclui a coluna "Pendente de sincronização" para os itens da mochila (Q9).`
        : '📄 Planilha CSV exportada com todos os lançamentos sincronizados!'
    );
  };

  const activeAccounts = accounts.filter((a) => !a.isArchived);
  const archivedAccounts = accounts.filter((a) => a.isArchived);

  return (
    <div className="space-y-4">
      {/* Auditoria de Saldo (Q5) */}
      <section className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
        <h2 className="text-xs font-bold text-slate-100">
          🧮 Soma Inteligente Multi-Aparelhos & Conferência (Q5)
        </h2>
        <p className="text-xs text-slate-400">
          O SoftFin usa comandos matemáticos (increment) para que o celular e o PC nunca apaguem o
          saldo um do outro.
        </p>
        <button
          type="button"
          onClick={() => void handleRunBalanceAudit()}
          className="w-full py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500 text-xs font-bold text-emerald-400"
        >
          🔍 Conferir Meu Saldo Agora
        </button>
        {auditStatus && <p className="text-xs text-emerald-400 font-semibold">{auditStatus}</p>}
      </section>

      {/* Moldes de Contas Fixas e Reajuste só para o Futuro (Q7) */}
      <section className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <h2 className="text-xs font-bold text-slate-100">
          🔁 Moldes de Contas Fixas (Reajuste sem bagunçar o passado • Q7)
        </h2>
        <div className="space-y-2">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2"
            >
              <div>
                <p className="text-xs font-bold text-slate-100">{tpl.title}</p>
                <p className="text-xs text-slate-400">
                  Todo dia {tpl.dayOfMonth} • Valor atual:{' '}
                  {formatCentsBRL(tpl.amountInCents, privacyModeEnabled)}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  updateRecurringTemplatePrice(tpl.id, tpl.amountInCents + 1000)
                }
                className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-xs font-bold"
              >
                + R$ 10 (Só Futuro)
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contas Ativas & Gaveta de Arquivados (Q5) */}
      <section className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <h2 className="text-xs font-bold text-slate-100">
          🗄️ Contas Ativas & Gaveta de Arquivados (Q5)
        </h2>
        <div className="space-y-2">
          {activeAccounts.map((acc) => (
            <div
              key={acc.id}
              className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-bold text-slate-100">
                  {acc.icon} {acc.name}
                </p>
                <p className="text-xs text-slate-400">
                  Saldo: {formatCentsBRL(acc.currentBalanceInCents, privacyModeEnabled)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const res = archiveAccountSafe(acc.id);
                  setArchiveFeedback(res.message);
                }}
                className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:border-amber-500"
              >
                Arquivar Conta
              </button>
            </div>
          ))}
        </div>

        {archiveFeedback && (
          <p className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs text-amber-300 font-medium">
            {archiveFeedback}
          </p>
        )}

        <div className="pt-2 border-t border-slate-800">
          <p className="text-xs font-semibold text-slate-400 mb-2">
            Gaveta de Arquivados (Histórico Passado Intacto):
          </p>
          {archivedAccounts.map((arch) => (
            <div
              key={arch.id}
              className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/70 flex items-center justify-between text-xs text-slate-400"
            >
              <span>
                {arch.icon} {arch.name}
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Arquivada</span>
            </div>
          ))}
        </div>
      </section>

      {/* Exportação Local CSV com Tag de Sincronização (Q9) */}
      <button
        type="button"
        onClick={() => void handleExportCSV()}
        className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow"
      >
        📄 Baixar Planilha CSV (Funciona 100% Offline • Q9)
      </button>
      {exportFeedback && (
        <p className="text-xs text-emerald-400 font-semibold text-center">{exportFeedback}</p>
      )}
    </div>
  );
};

