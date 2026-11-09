import React from 'react';
import { useSoftFinStore } from '../store/useSoftFinStore';
import { SyncStatusBadge } from '../../pwa/components/SyncStatusBadge';
import { OfflineBanner } from './OfflineBanner';
import { BottomNav, type ActiveTab } from './BottomNav';

interface AppShellProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenQuickEntry: () => void;
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({
  activeTab,
  onSelectTab,
  onOpenQuickEntry,
  children,
}) => {
  const isOnline = useSoftFinStore((s) => s.isOnline);
  const setOnlineStatus = useSoftFinStore((s) => s.setOnlineStatus);
  const privacyModeEnabled = useSoftFinStore((s) => s.privacyModeEnabled);
  const togglePrivacyMode = useSoftFinStore((s) => s.togglePrivacyMode);
  const setSessionExpiredGuard = useSoftFinStore((s) => s.setSessionExpiredGuard);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24">
      <header className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-extrabold text-xs flex items-center justify-center">
                SF
              </span>
              <div>
                <h1 className="text-sm font-bold leading-tight">SoftFin PWA</h1>
                <p className="text-xs text-slate-400">Local-First • Modo TDAH</p>
              </div>
            </div>
            <SyncStatusBadge />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-900">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePrivacyMode}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold hover:border-slate-700"
                title="Olhinho com memória persistente (Q9)"
              >
                {privacyModeEnabled ? '🙈 Olhinho: Oculto' : '👁️ Olhinho: Visível'}
              </button>

              <button
                type="button"
                onClick={() => setOnlineStatus(!isOnline)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold hover:border-slate-700"
              >
                {isOnline ? '🟢 Simular Offline' : '🟠 Voltar Online'}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setSessionExpiredGuard(true)}
              className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-amber-400 font-semibold hover:border-amber-500/40"
              title="Testar proteção de mochila quando sessão expira (Q6)"
            >
              🔑 Testar Re-Login
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-4">
        <OfflineBanner />
        {children}
      </main>

      <BottomNav
        activeTab={activeTab}
        onSelectTab={onSelectTab}
        onOpenQuickEntry={onOpenQuickEntry}
      />
    </div>
  );
};

