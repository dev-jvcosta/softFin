import React, { useEffect } from 'react';
import { useSoftFinStore } from '../store/useSoftFinStore';
import { SyncStatusBadge } from '../../pwa/components/SyncStatusBadge';
import { OfflineBanner } from './OfflineBanner';
import { BottomNav, TAB_ITEMS, type ActiveTab } from './BottomNav';
import { formatCentsBRL } from '../../shared/utils/currency';

interface AppShellProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenQuickEntry: () => void;
  children: React.ReactNode;
}

const SECTION_TITLES: Record<ActiveTab, string> = {
  dashboard: 'Início',
  transactions: 'Extrato',
  card: 'Cartão',
  settings: 'Ajustes',
};

export const AppShell: React.FC<AppShellProps> = ({
  activeTab,
  onSelectTab,
  onOpenQuickEntry,
  children,
}) => {
  const privacyModeEnabled = useSoftFinStore((s) => s.privacyModeEnabled);
  const togglePrivacyMode = useSoftFinStore((s) => s.togglePrivacyMode);
  const lastQuickEntryUndo = useSoftFinStore((s) => s.lastQuickEntryUndo);
  const undoLastQuickEntry = useSoftFinStore((s) => s.undoLastQuickEntry);
  const dismissQuickEntryUndo = useSoftFinStore((s) => s.dismissQuickEntryUndo);

  // Decisão 5B: Timer automático de 4 segundos para a pílula de Desfazer (Undo)
  useEffect(() => {
    if (!lastQuickEntryUndo) return;
    const timer = window.setTimeout(() => {
      dismissQuickEntryUndo();
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [lastQuickEntryUndo, dismissQuickEntryUndo]);

  const handleUndoTap = () => {
    const undone = undoLastQuickEntry();
    if (undone) {
      onOpenQuickEntry();
    }
  };

  return (
    <div className="min-h-screen bg-[var(--hig-bg-grouped)] text-[var(--hig-label)] md:flex">
      {/* Barra Lateral Adaptativa para iPadOS / macOS (`03-sidebars.md` & `04-tab-bars.md`) */}
      <aside
        aria-label="Barra Lateral de Navegação"
        className="hidden md:flex md:flex-col md:w-64 md:shrink-0 md:sticky md:top-0 md:h-screen hig-liquid-glass border-r p-4 justify-between"
      >
        <div className="space-y-5">
          <div className="px-2 pt-1 flex items-center justify-between">
            <span className="hig-footnote font-semibold uppercase tracking-wider text-[var(--hig-label-secondary)]">
              SoftFin
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenQuickEntry}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl hig-liquid-glass-tinted flex items-center justify-center gap-2 hig-subhead font-semibold active:scale-98 transition"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>Anotar em 3s</span>
          </button>

          <nav aria-label="Seções do Aplicativo" className="space-y-1">
            {TAB_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full min-h-[42px] px-3 py-2 rounded-xl flex items-center gap-3 hig-subhead transition ${
                    isActive
                      ? 'bg-[var(--hig-blue)] text-white font-semibold'
                      : 'text-[var(--hig-label)] hover:bg-[var(--hig-fill-secondary)] font-normal'
                  }`}
                >
                  <span
                    style={{
                      color: isActive ? '#ffffff' : 'var(--hig-blue)',
                    }}
                  >
                    {item.renderIcon(isActive)}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <p className="px-2 hig-caption-1 text-[var(--hig-label-secondary)]">
          Local-First • Sincronização Automática
        </p>
      </aside>

      {/* Área Principal de Conteúdo */}
      <div className="flex-1 min-w-0 pb-32 md:pb-12">
        {/* Top Navigation Bar em Liquid Glass (`12-toolbars.md` & Decisão 4) */}
        <header className="sticky top-0 z-20 hig-liquid-glass border-b px-4 py-3">
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            {/* Large Title da seção atual — Nunca o nome do app (`12-toolbars.md` linha 57) */}
            <h1 className="hig-large-title truncate">{SECTION_TITLES[activeTab]}</h1>

            {/* Controles enxutos da Toolbar: Status da Nuvem + Ícone puro de Privacidade (sem texto "Olhinho") */}
            <div className="flex items-center gap-2 shrink-0">
              <SyncStatusBadge />

              <button
                type="button"
                onClick={togglePrivacyMode}
                aria-label={privacyModeEnabled ? 'Mostrar valores monetários' : 'Ocultar valores monetários'}
                aria-pressed={privacyModeEnabled}
                className="w-9 h-9 rounded-full hig-tertiary-surface flex items-center justify-center text-[var(--hig-blue)] hover:opacity-80 active:scale-95 transition"
              >
                {privacyModeEnabled ? (
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                    <line x1="2" x2="22" y1="2" y2="22" />
                  </svg>
                ) : (
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Pílula de Undo de 4 Segundos para Impulsividade TDAH (`24-undo-and-redo.md` / Decisão 5B) */}
        {lastQuickEntryUndo && (
          <div className="max-w-2xl mx-auto px-4 pt-3">
            <div
              role="status"
              aria-live="polite"
              className="px-4 py-2.5 rounded-2xl hig-liquid-glass border flex items-center justify-between gap-3 shadow-lg"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span aria-hidden="true">{lastQuickEntryUndo.categoryIcon}</span>
                <p className="hig-footnote font-medium truncate">
                  Salvo em <strong>{lastQuickEntryUndo.categoryName}</strong> (
                  {formatCentsBRL(lastQuickEntryUndo.amountInCents, privacyModeEnabled)})
                </p>
              </div>
              <button
                type="button"
                onClick={handleUndoTap}
                className="shrink-0 px-3 py-1 rounded-full bg-[var(--hig-blue)] text-white hig-footnote font-semibold active:scale-95 transition"
              >
                Desfazer
              </button>
            </div>
          </div>
        )}

        <main className="max-w-2xl mx-auto px-4 pt-4">
          <OfflineBanner />
          {children}
        </main>
      </div>

      {/* Tab Bar inferior para iOS (< 768px) + Pílula Flutuante */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={onSelectTab}
        onOpenQuickEntry={onOpenQuickEntry}
      />
    </div>
  );
};
