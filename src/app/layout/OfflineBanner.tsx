import React from 'react';
import { useSoftFinStore } from '../store/useSoftFinStore';
import {
  PENDING_WRITES_HARD_LIMIT,
  PENDING_WRITES_WARNING_THRESHOLD,
} from '../../services/firebase/firestore.service';

export const OfflineBanner: React.FC = () => {
  const isOnline = useSoftFinStore((s) => s.isOnline);
  const pendingWritesCount = useSoftFinStore((s) => s.pendingWritesCount);

  if (isOnline && pendingWritesCount === 0) {
    return null;
  }

  const isNearCap = pendingWritesCount >= PENDING_WRITES_WARNING_THRESHOLD;

  return (
    <div
      role="status"
      className={`mb-3 p-3 rounded-2xl border text-xs ${
        isNearCap
          ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
          : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
      }`}
    >
      <div className="flex items-center justify-between font-bold">
        <span>
          {isNearCap
            ? '⚠️ Mochila Offline quase cheia!'
            : '🎒 Modo Offline Ativo (Salvo na memória do aparelho)'}
        </span>
        <span>
          {pendingWritesCount}/{PENDING_WRITES_HARD_LIMIT} na mochila
        </span>
      </div>
      <p className="text-slate-300 mt-1">
        {isNearCap
          ? 'Conecte-se à internet rapidamente para esvaziar a mochila antes de criar novos parcelamentos.'
          : 'Compras parceladas ficam limitadas a até 12x sem internet para manter o app rápido (Q6).'}
      </p>
    </div>
  );
};

