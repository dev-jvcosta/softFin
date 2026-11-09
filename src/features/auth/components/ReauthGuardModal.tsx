import React from 'react';
import { NativeDialog } from '../../../shared/components/NativeDialog';
import { useSoftFinStore } from '../../../app/store/useSoftFinStore';

/**
 * Alerta Crítico Centralizado da Apple (`02-alerts.md` / Decisão 6):
 * Exibido quando a sessão expira enquanto há itens na mochila offline,
 * preservando integralmente o cache IndexedDB local até a renovação do login.
 */
export const ReauthGuardModal: React.FC = () => {
  const isOpen = useSoftFinStore((s) => s.sessionExpiredWithPendingBag);
  const pendingWritesCount = useSoftFinStore((s) => s.pendingWritesCount);
  const setSessionExpiredGuard = useSoftFinStore((s) => s.setSessionExpiredGuard);
  const reauthenticatePreservingBag = useSoftFinStore((s) => s.reauthenticatePreservingBag);

  return (
    <NativeDialog
      isOpen={isOpen}
      onClose={() => setSessionExpiredGuard(false)}
      titleId="reauth-guard-title"
      title="Sessão Expirada"
      variant="alert"
    >
      <div className="space-y-2">
        <p className="hig-footnote text-[var(--hig-label-secondary)]">
          Seus <strong>{pendingWritesCount} lançamentos offline</strong> continuam protegidos na
          memória deste dispositivo. Confirme sua conta para sincronizá-los com a nuvem.
        </p>

        <div className="pt-3 mt-2 border-t border-[var(--hig-separator)] grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setSessionExpiredGuard(false)}
            className="min-h-[40px] rounded-xl hig-subhead font-normal text-[var(--hig-blue)] hover:bg-[var(--hig-fill-secondary)]"
          >
            Agora Não
          </button>

          <button
            type="button"
            onClick={reauthenticatePreservingBag}
            className="min-h-[40px] rounded-xl hig-subhead font-semibold text-[var(--hig-blue)] hover:bg-[var(--hig-fill-secondary)]"
          >
            Reconectar
          </button>
        </div>
      </div>
    </NativeDialog>
  );
};
