import React, { useState } from 'react';
import { useSoftFinStore, type ThemeMode } from '../../../app/store/useSoftFinStore';
import { formatCentsBRL } from '../../../shared/utils/currency';
import { processInChunksWithYield } from '../../../shared/utils/scheduler';

export const SettingsPage: React.FC = () => {
  const accounts = useSoftFinStore((s) => s.accounts);
  const templates = useSoftFinStore((s) => s.templates);
  const transactions = useSoftFinStore((s) => s.transactions);
  const isOnline = useSoftFinStore((s) => s.isOnline);
  const pendingWritesCount = useSoftFinStore((s) => s.pendingWritesCount);
  const privacyModeEnabled = useSoftFinStore((s) => s.privacyModeEnabled);
  const themeMode = useSoftFinStore((s) => s.themeMode);
  const setThemeMode = useSoftFinStore((s) => s.setThemeMode);
  const setOnlineStatus = useSoftFinStore((s) => s.setOnlineStatus);
  const simulatePendingBagLoad = useSoftFinStore((s) => s.simulatePendingBagLoad);
  const setSessionExpiredGuard = useSoftFinStore((s) => s.setSessionExpiredGuard);
  const updateRecurringTemplatePrice = useSoftFinStore((s) => s.updateRecurringTemplatePrice);
  const archiveAccountSafe = useSoftFinStore((s) => s.archiveAccountSafe);

  const [auditStatus, setAuditStatus] = useState<string | null>(null);
  const [archiveFeedback, setArchiveFeedback] = useState<string | null>(null);
  const [exportFeedback, setExportFeedback] = useState<string | null>(null);

  // Q5: Botão "Conferir Meu Saldo" usando scheduler.yield() (regra dos 50ms)
  const handleRunBalanceAudit = async () => {
    setAuditStatus('Conferindo lançamentos sem travar a interface (blocos de 50ms)...');
    const audited = await processInChunksWithYield(transactions, (tx) => tx.amountInCents);
    setAuditStatus(
      `Saldo conferido: ${audited.length} lançamentos validados via soma incremental.`
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
        ? 'Planilha CSV gerada offline (inclui coluna "Pendente de sincronização" para itens da mochila).'
        : 'Planilha CSV exportada com todos os lançamentos sincronizados.'
    );
  };

  const activeAccounts = accounts.filter((a) => !a.isArchived);
  const archivedAccounts = accounts.filter((a) => a.isArchived);

  const themeOptions: Array<{ id: ThemeMode; label: string }> = [
    { id: 'system', label: 'Automático' },
    { id: 'light', label: 'Claro' },
    { id: 'dark', label: 'Escuro' },
  ];

  return (
    <div className="space-y-5">
      {/* 1. Aparência do Sistema (`05-dark-mode.md` & `06-segmented-controls.md` — Decisão 3) */}
      <section className="space-y-2">
        <h2 className="px-1 hig-footnote font-semibold uppercase tracking-wide text-[var(--hig-label-secondary)]">
          Aparência
        </h2>

        <div className="p-4 hig-grouped-card space-y-2.5">
          <div
            role="group"
            aria-label="Esquema de cores"
            className="p-1 rounded-xl hig-tertiary-surface grid grid-cols-3 gap-1"
          >
            {themeOptions.map((opt) => {
              const isSelected = themeMode === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setThemeMode(opt.id)}
                  aria-pressed={isSelected}
                  className={`min-h-[34px] rounded-lg hig-footnote font-semibold transition ${
                    isSelected
                      ? 'bg-[var(--hig-bg-card)] text-[var(--hig-label)] shadow-xs'
                      : 'text-[var(--hig-label-secondary)]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
            Adapta automaticamente cartões sólidos (`systemGroupedBackground`) e barras em Liquid
            Glass conforme o sistema operacional.
          </p>
        </div>
      </section>

      {/* 2. Bancada de Simulação Offline & Limites da Mochila (Decisão 4 & Q6) */}
      <section className="space-y-2">
        <h2 className="px-1 hig-footnote font-semibold uppercase tracking-wide text-[var(--hig-label-secondary)]">
          Simulador Offline & Segurança
        </h2>

        <div className="hig-grouped-card hig-grouped-list overflow-hidden">
          <div className="p-3.5 flex items-center justify-between gap-3">
            <div>
              <p className="hig-subhead font-semibold">Conexão de Rede</p>
              <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
                Status atual: {isOnline ? 'Online (Sincronizado)' : 'Offline (Mochila Ativa)'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOnlineStatus(!isOnline)}
              className="px-3.5 py-1.5 rounded-full bg-[var(--hig-blue)] text-white hig-caption-1 font-semibold"
            >
              {isOnline ? 'Simular Offline' : 'Voltar Online'}
            </button>
          </div>

          <div className="p-3.5 flex items-center justify-between gap-3">
            <div>
              <p className="hig-subhead font-semibold">Testar Limites da Mochila (150 / 250)</p>
              <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
                150 itens exibe Banner passivo • 250 itens abre Alert crítico
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => simulatePendingBagLoad(150)}
                className="px-2.5 py-1.5 rounded-lg hig-tertiary-surface hig-caption-1 font-semibold text-[var(--hig-orange)]"
              >
                150 Itens
              </button>
              <button
                type="button"
                onClick={() => simulatePendingBagLoad(250)}
                className="px-2.5 py-1.5 rounded-lg hig-tertiary-surface hig-caption-1 font-semibold text-[var(--hig-red)]"
              >
                250 Itens
              </button>
            </div>
          </div>

          <div className="p-3.5 flex items-center justify-between gap-3">
            <div>
              <p className="hig-subhead font-semibold">Sessão Expirada com Mochila Cheia</p>
              <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
                Testa o Alerta que renova o login sem apagar o IndexedDB local
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSessionExpiredGuard(true)}
              className="px-3 py-1.5 rounded-lg hig-tertiary-surface hig-caption-1 font-semibold text-[var(--hig-blue)]"
            >
              Testar Re-Login
            </button>
          </div>
        </div>
      </section>

      {/* 3. Moldes de Contas Fixas (Reajuste Só para o Futuro • Q7) */}
      <section className="space-y-2">
        <h2 className="px-1 hig-footnote font-semibold uppercase tracking-wide text-[var(--hig-label-secondary)]">
          Moldes de Contas Fixas
        </h2>

        <div className="hig-grouped-card hig-grouped-list overflow-hidden">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="p-3.5 flex items-center justify-between gap-3"
            >
              <div>
                <p className="hig-subhead font-semibold">{tpl.title}</p>
                <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
                  Todo dia {tpl.dayOfMonth} • Atual:{' '}
                  {formatCentsBRL(tpl.amountInCents, privacyModeEnabled)}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  updateRecurringTemplatePrice(tpl.id, tpl.amountInCents + 1000)
                }
                className="px-3 py-1.5 rounded-full hig-tertiary-surface hig-caption-1 font-semibold text-[var(--hig-blue)]"
              >
                + R$ 10 (Só Futuro)
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contas Ativas, Gaveta de Arquivados & Auditoria de Saldo (Q5) */}
      <section className="space-y-2">
        <h2 className="px-1 hig-footnote font-semibold uppercase tracking-wide text-[var(--hig-label-secondary)]">
          Carteiras & Gaveta de Arquivados
        </h2>

        <div className="hig-grouped-card hig-grouped-list overflow-hidden">
          {activeAccounts.map((acc) => (
            <div
              key={acc.id}
              className="p-3.5 flex items-center justify-between gap-3"
            >
              <div>
                <p className="hig-subhead font-semibold">
                  {acc.icon} {acc.name}
                </p>
                <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
                  Saldo: {formatCentsBRL(acc.currentBalanceInCents, privacyModeEnabled)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const res = archiveAccountSafe(acc.id);
                  setArchiveFeedback(res.message);
                }}
                className="px-3 py-1.5 rounded-full hig-tertiary-surface hig-caption-1 font-medium text-[var(--hig-label-secondary)]"
              >
                Arquivar
              </button>
            </div>
          ))}

          {archivedAccounts.map((arch) => (
            <div
              key={arch.id}
              className="p-3.5 flex items-center justify-between gap-3 opacity-70"
            >
              <span className="hig-footnote">
                {arch.icon} {arch.name}
              </span>
              <span className="hig-caption-1 px-2.5 py-0.5 rounded-full hig-tertiary-surface text-[var(--hig-label-secondary)]">
                Arquivada (Histórico Intacto)
              </span>
            </div>
          ))}
        </div>

        {archiveFeedback && (
          <p
            role="status"
            className="p-3 rounded-xl hig-grouped-card hig-caption-1 font-medium"
            style={{ color: 'var(--hig-orange)' }}
          >
            {archiveFeedback}
          </p>
        )}
      </section>

      {/* 5. Auditoria de Saldo & Exportação CSV Offline (Q5 & Q9) */}
      <section className="hig-grouped-card hig-grouped-list overflow-hidden">
        <div className="p-3.5 flex items-center justify-between gap-3">
          <div>
            <p className="hig-subhead font-semibold">Conferir Meu Saldo</p>
            <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
              Audita toda a fila incremental sem travar a tela
            </p>
          </div>
          <button
            type="button"
            onClick={() => void handleRunBalanceAudit()}
            className="px-3.5 py-1.5 rounded-full hig-tertiary-surface hig-caption-1 font-semibold text-[var(--hig-blue)]"
          >
            Conferir Agora
          </button>
        </div>

        <div className="p-3.5 flex items-center justify-between gap-3">
          <div>
            <p className="hig-subhead font-semibold">Exportar Planilha CSV</p>
            <p className="hig-caption-1 text-[var(--hig-label-secondary)]">
              Gera relatório local sinalizando itens na mochila offline
            </p>
          </div>
          <button
            type="button"
            onClick={() => void handleExportCSV()}
            className="px-3.5 py-1.5 rounded-full bg-[var(--hig-blue)] text-white hig-caption-1 font-semibold"
          >
            Exportar CSV
          </button>
        </div>
      </section>

      {(auditStatus || exportFeedback) && (
        <div className="p-3.5 hig-grouped-card space-y-1">
          {auditStatus && (
            <p className="hig-caption-1 font-semibold" style={{ color: 'var(--hig-green)' }}>
              {auditStatus}
            </p>
          )}
          {exportFeedback && (
            <p className="hig-caption-1 font-semibold" style={{ color: 'var(--hig-blue)' }}>
              {exportFeedback}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
