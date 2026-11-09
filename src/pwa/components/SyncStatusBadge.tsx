import React from 'react';
import { useSoftFinStore } from '../../app/store/useSoftFinStore';

export const SyncStatusBadge: React.FC = () => {
  const isOnline = useSoftFinStore((s) => s.isOnline);
  const pendingWritesCount = useSoftFinStore((s) => s.pendingWritesCount);

  if (!isOnline || pendingWritesCount > 0) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
        <span>🎒</span>
        <span>Salvo no aparelho ({pendingWritesCount})</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
      <span>☁️</span>
      <span>Sincronizado</span>
    </span>
  );
};

