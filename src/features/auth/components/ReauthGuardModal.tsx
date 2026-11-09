import React from 'react';
import { NativeDialog } from '../../../shared/components/NativeDialog';
import { useSoftFinStore } from '../../../app/store/useSoftFinStore';

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
      title="🛡️ Proteção da Mochila Offline (Q6)"
    >
      <div className="space-y-4">
        <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-xs text-amber-200 space-y-1.5">
          <p className="font-bold">Sua sessão de login venceu enquanto você estava sem internet!</p>
          <p>
            Mas fique tranquilo: o SoftFin <strong>jamais limpa a sua mochila local</strong> (
            {pendingWritesCount} itens aguardando envio).
          </p>
        </div>

        <p className="text-xs text-slate-300">
          Confirme sua identidade abaixo para renovar o token e enviar automaticamente todos os
          gastos guardados para a nuvem:
        </p>

        <button
          type="button"
          onClick={reauthenticatePreservingBag}
          className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow"
        >
          🔑 Confirmar Minha Conta e Sincronizar Mochila
        </button>
      </div>
    </NativeDialog>
  );
};

