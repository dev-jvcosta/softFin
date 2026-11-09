import React, { useId, useRef } from 'react';
import { useSoftFinStore } from '../../app/store/useSoftFinStore';

export const SyncStatusBadge: React.FC = () => {
  const isOnline = useSoftFinStore((s) => s.isOnline);
  const pendingWritesCount = useSoftFinStore((s) => s.pendingWritesCount);
  const setOnlineStatus = useSoftFinStore((s) => s.setOnlineStatus);
  const simulatePendingBagLoad = useSoftFinStore((s) => s.simulatePendingBagLoad);
  const setSessionExpiredGuard = useSoftFinStore((s) => s.setSessionExpiredGuard);

  const popoverId = useId();
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const handleTogglePopover = () => {
    const el = popoverRef.current;
    if (!el) return;
    if (typeof el.togglePopover === 'function') {
      el.togglePopover();
    }
  };

  const isOfflineOrPending = !isOnline || pendingWritesCount > 0;

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleTogglePopover}
        aria-label={
          isOfflineOrPending
            ? `Salvo no dispositivo (${pendingWritesCount} pendentes). Toque para opções de sincronização`
            : 'Sincronizado no iCloud/Nuvem. Toque para opções de sincronização'
        }
        className="min-h-[36px] inline-flex items-center gap-1.5 px-3 py-1 rounded-full hig-caption-1 font-semibold hig-tertiary-surface hover:opacity-85 transition"
        style={{
          color: isOfflineOrPending ? 'var(--hig-orange)' : 'var(--hig-green)',
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {isOfflineOrPending ? (
            <>
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              <path d="M12 13v4" />
              <path d="M12 9h.01" />
            </>
          ) : (
            <>
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              <path d="m9 13 2 2 4-4" />
            </>
          )}
        </svg>
        <span>
          {isOfflineOrPending ? `Mochila (${pendingWritesCount})` : 'Sincronizado'}
        </span>
      </button>

      {/* Menu Popover Nativo (05-popovers.md / Decisão 4) */}
      <div
        id={popoverId}
        ref={popoverRef}
        {...({ popover: 'auto' } as Record<string, string>)}
        className="w-72 rounded-2xl hig-liquid-glass border p-3 shadow-2xl text-[var(--hig-label)] m-auto sm:mt-16 sm:mr-4"
      >
        <p className="hig-caption-1 font-semibold text-[var(--hig-label-secondary)] px-2 pb-2 border-b border-[var(--hig-separator)]">
          Diagnóstico Offline & Simulação (Q6)
        </p>

        <div className="pt-2 space-y-1.5">
          <button
            type="button"
            onClick={() => {
              setOnlineStatus(!isOnline);
              popoverRef.current?.hidePopover?.();
            }}
            className="w-full px-3 py-2 rounded-xl text-left hig-footnote font-medium hover:bg-[var(--hig-fill-secondary)] flex items-center justify-between"
          >
            <span>{isOnline ? 'Simular Modo Offline' : 'Reconectar à Internet'}</span>
            <span
              className="hig-caption-1 font-bold"
              style={{ color: isOnline ? 'var(--hig-orange)' : 'var(--hig-green)' }}
            >
              {isOnline ? 'Desconectar' : 'Online'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              simulatePendingBagLoad(150);
              popoverRef.current?.hidePopover?.();
            }}
            className="w-full px-3 py-2 rounded-xl text-left hig-footnote font-medium hover:bg-[var(--hig-fill-secondary)] flex items-center justify-between"
          >
            <span>Testar Aviso Mochila (150 itens)</span>
            <span className="hig-caption-1 font-semibold text-[var(--hig-orange)]">Banner</span>
          </button>

          <button
            type="button"
            onClick={() => {
              simulatePendingBagLoad(250);
              popoverRef.current?.hidePopover?.();
            }}
            className="w-full px-3 py-2 rounded-xl text-left hig-footnote font-medium hover:bg-[var(--hig-fill-secondary)] flex items-center justify-between"
          >
            <span>Testar Teto Mochila (250 itens)</span>
            <span className="hig-caption-1 font-semibold text-[var(--hig-red)]">Alert</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSessionExpiredGuard(true);
              popoverRef.current?.hidePopover?.();
            }}
            className="w-full px-3 py-2 rounded-xl text-left hig-footnote font-medium hover:bg-[var(--hig-fill-secondary)] flex items-center justify-between"
          >
            <span>Simular Sessão Expirada</span>
            <span className="hig-caption-1 font-semibold text-[var(--hig-blue)]">Re-Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};
