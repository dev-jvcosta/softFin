import React, { Suspense, lazy, useEffect, useState } from 'react';
import { AppShell } from './layout/AppShell';
import type { ActiveTab } from './layout/BottomNav';
import { DashboardPage } from '../features/dashboard/pages/DashboardPage';
import { QuickTransactionModal } from '../features/transactions/components/QuickTransactionModal';
import { ReauthGuardModal } from '../features/auth/components/ReauthGuardModal';
import { useSoftFinStore } from './store/useSoftFinStore';

const TransactionsPage = lazy(() =>
  import('../features/transactions/pages/TransactionsPage').then((m) => ({
    default: m.TransactionsPage,
  }))
);
const CardStatementPage = lazy(() =>
  import('../features/accounts/pages/CardStatementPage').then((m) => ({
    default: m.CardStatementPage,
  }))
);
const SettingsPage = lazy(() =>
  import('../features/settings/pages/SettingsPage').then((m) => ({
    default: m.SettingsPage,
  }))
);

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [isQuickModalOpen, setIsQuickModalOpen] = useState(false);
  const setOnlineStatus = useSoftFinStore((s) => s.setOnlineStatus);

  // Q3: Listeners de conectividade + fallback de visibilitychange para Safari / iOS
  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && navigator.onLine) {
        setOnlineStatus(true);
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [setOnlineStatus]);

  return (
    <AppShell
      activeTab={activeTab}
      onSelectTab={setActiveTab}
      onOpenQuickEntry={() => setIsQuickModalOpen(true)}
    >
      {activeTab === 'dashboard' && (
        <DashboardPage
          onNavigateTab={setActiveTab}
          onOpenQuickEntry={() => setIsQuickModalOpen(true)}
        />
      )}
      <Suspense
        fallback={
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 text-center">
            Carregando módulo...
          </div>
        }
      >
        {activeTab === 'transactions' && <TransactionsPage />}
        {activeTab === 'card' && <CardStatementPage />}
        {activeTab === 'settings' && <SettingsPage />}
      </Suspense>

      <QuickTransactionModal
        isOpen={isQuickModalOpen}
        onClose={() => setIsQuickModalOpen(false)}
      />

      <ReauthGuardModal />
    </AppShell>
  );
};

