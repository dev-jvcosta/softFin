import React from 'react';

export type ActiveTab = 'dashboard' | 'transactions' | 'card' | 'settings';

interface BottomNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenQuickEntry: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenQuickEntry,
}) => {
  const itemClass = (tab: ActiveTab) =>
    `min-h-[48px] flex flex-col items-center justify-center rounded-2xl text-xs font-semibold transition ${
      activeTab === tab
        ? 'bg-emerald-500/15 text-emerald-400'
        : 'text-slate-400 hover:text-slate-200'
    }`;

  return (
    <nav
      aria-label="Navegação Principal"
      className="fixed bottom-0 inset-x-0 z-30 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2"
    >
      <div className="max-w-lg mx-auto grid grid-cols-5 gap-1.5 items-center">
        <button
          type="button"
          onClick={() => onSelectTab('dashboard')}
          className={itemClass('dashboard')}
        >
          <span className="text-base">🏠</span>
          <span>Início</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('transactions')}
          className={itemClass('transactions')}
        >
          <span className="text-base">📑</span>
          <span>Extrato</span>
        </button>

        <button
          type="button"
          onClick={onOpenQuickEntry}
          className="min-h-[48px] flex flex-col items-center justify-center rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-lg"
        >
          <span className="text-base">⚡</span>
          <span>3 Seg</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('card')}
          className={itemClass('card')}
        >
          <span className="text-base">💳</span>
          <span>Cartão</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('settings')}
          className={itemClass('settings')}
        >
          <span className="text-base">⚙️</span>
          <span>Ajustes</span>
        </button>
      </div>
    </nav>
  );
};

