import React, { useEffect, useRef } from 'react';

interface NativeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
  title: string;
  children: React.ReactNode;
}

/**
 * Modal nativo utilizando `<dialog closedby="any">` com `showModal()`
 * e fallback de coordenadas para light-dismiss em navegadores sem suporte a `closedby` (ex: Safari).
 */
export const NativeDialog: React.FC<NativeDialogProps> = ({
  isOpen,
  onClose,
  titleId,
  title,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener('close', handleClose);

    // Fallback obrigatório para navegadores sem suporte a HTMLDialogElement.prototype.closedBy (Safari)
    let handleBackdropClick: ((event: MouseEvent) => void) | undefined;
    if (typeof HTMLDialogElement !== 'undefined' && !('closedBy' in HTMLDialogElement.prototype)) {
      handleBackdropClick = (event: MouseEvent) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (isDialogContent) return;
        dialog.close();
      };
      dialog.addEventListener('click', handleBackdropClick);
    }

    return () => {
      dialog.removeEventListener('close', handleClose);
      if (handleBackdropClick) {
        dialog.removeEventListener('click', handleBackdropClick);
      }
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      {...({ closedby: 'any' } as Record<string, string>)}
      className="w-full max-w-md rounded-3xl bg-slate-900 text-slate-100 border border-slate-800 p-5 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-xs m-auto"
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <h2 id={titleId} className="text-base font-bold text-slate-100">
          {title}
        </h2>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-xs font-bold"
          aria-label="Fechar janela"
        >
          ✕
        </button>
      </div>
      {children}
    </dialog>
  );
};

