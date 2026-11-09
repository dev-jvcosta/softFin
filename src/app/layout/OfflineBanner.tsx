import React from 'react';
import { useSoftFinStore } from '../store/useSoftFinStore';
import {
  PENDING_WRITES_HARD_LIMIT,
  PENDING_WRITES_WARNING_THRESHOLD,
} from '../../services/firebase/firestore.service';
import { NativeDialog } from '../../shared/components/NativeDialog';

export const OfflineBanner: React.FC = () => {
  const isOnline = useSoftFinStore((s) => s.isOnline);
  const pendingWritesCount = useSoftFinStore((s) => s.pendingWritesCount);
  const bagFullAlertOpen = useSoftFinStore((s) => s.bagFullAlertOpen);
  const setBagFullAlertOpen = useSoftFinStore((s) => s.setBagFullAlertOpen);
  const setOnlineStatus = useSoftFinStore((s) => s.setOnlineStatus);

  const showPassiveBanner = !isOnline || pendingWritesCount > 0;
  const isWarningLevel = pendingWritesCount >= PENDING_WRITES_WARNING_THRESHOLD;

  return (
    <>
      {showPassiveBanner && (
        <div
          role="status"
          className="mb-4 p-3.5 hig-grouped-card border-l-4"
          style={{
            borderLeftColor: isWarningLevel ? 'var(--hig-red)' : 'var(--hig-orange)',
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <span
              className="hig-footnote font-semibold"
              style={{ color: isWarningLevel ? 'var(--hig-red)' : 'var(--hig-orange)' }}
            >
              {isWarningLevel
                ? 'Mochila Offline Quase Cheia'
                : 'Modo Offline • Salvo no Dispositivo'}
            </span>
            <span className="hig-caption-1 font-semibold text-[var(--hig-label-secondary)]">
              {pendingWritesCount}/{PENDING_WRITES_HARD_LIMIT} itens
            </span>
          </div>
          <p className="hig-caption-1 text-[var(--hig-label-secondary)] mt-1">
            {isWarningLevel
              ? 'Conecte-se à internet em breve para sincronizar sua fila antes do limite de segurança (250 itens).'
              : 'Seus lançamentos estão seguros neste aparelho. Parcelamentos ficam limitados a 12x sem conexão.'}
          </p>
        </div>
      )}

      {/* Apple Alert Centralizado em Liquid Glass exclusivamente para o bloqueio crítico de 250 itens (02-alerts.md / Decisão 6) */}
      <NativeDialog
        isOpen={bagFullAlertOpen}
        onClose={() => setBagFullAlertOpen(false)}
        titleId="bag-full-alert-title"
        title="Limite Offline Atingido"
        variant="alert"
      >
        <p className="hig-footnote text-[var(--hig-label-secondary)]">
          Sua mochila offline atingiu o limite máximo de segurança ({PENDING_WRITES_HARD_LIMIT}{' '}
          lançamentos pendentes). Conecte-se à internet para sincronizar antes de adicionar novas
          parcelas.
        </p>

        <div className="pt-3 mt-3 border-t border-[var(--hig-separator)] grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setBagFullAlertOpen(false)}
            className="min-h-[40px] rounded-xl hig-subhead font-normal text-[var(--hig-blue)] hover:bg-[var(--hig-fill-secondary)]"
          >
            Entendi
          </button>
          <button
            type="button"
            onClick={() => {
              setOnlineStatus(true);
              setBagFullAlertOpen(false);
            }}
            className="min-h-[40px] rounded-xl hig-subhead font-semibold text-[var(--hig-blue)] hover:bg-[var(--hig-fill-secondary)]"
          >
            Sincronizar Agora
          </button>
        </div>
      </NativeDialog>
    </>
  );
};
