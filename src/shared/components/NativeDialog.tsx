import React, { useEffect, useRef } from 'react';

export type AppleModalVariant = 'sheet' | 'action-sheet' | 'alert';

interface NativeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
  title: string;
  variant?: AppleModalVariant;
  cancelLabel?: string;
  rightAction?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };
  children: React.ReactNode;
}

/**
 * Componente nativo `<dialog>` aderente à Apple HIG:
 * - `sheet` (07-sheets.md): Folha inferior com grabber, "Cancelar" à esquerda e título centralizado.
 * - `action-sheet` (01-action-sheets.md): Folha de ação inferior com grupo de opções e botão Cancelar separado.
 * - `alert` (02-alerts.md): Alerta centralizado em Liquid Glass exclusivo para bloqueios críticos.
 */
export const NativeDialog: React.FC<NativeDialogProps> = ({
  isOpen,
  onClose,
  titleId,
  title,
  variant = 'sheet',
  cancelLabel = 'Cancelar',
  rightAction,
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
      dialog.returnValue = '';
      onClose();
    };

    dialog.addEventListener('close', handleClose);

    // Fallback obrigatório para navegadores sem suporte a HTMLDialogElement.prototype.closedBy (Safari)
    let handlePointerDown: ((e: PointerEvent) => void) | undefined;
    let handlePointerUp: ((e: PointerEvent) => void) | undefined;

    if (
      variant !== 'alert' &&
      typeof HTMLDialogElement !== 'undefined' &&
      !('closedBy' in HTMLDialogElement.prototype)
    ) {
      let pressedOutside = false;
      const isOutside = (e: PointerEvent) => {
        const r = dialog.getBoundingClientRect();
        return (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        );
      };

      handlePointerDown = (e: PointerEvent) => {
        if (e.target !== dialog) {
          pressedOutside = false;
          return;
        }
        pressedOutside = isOutside(e);
      };

      handlePointerUp = (e: PointerEvent) => {
        if (pressedOutside && e.target === dialog && isOutside(e)) {
          dialog.close();
        }
        pressedOutside = false;
      };

      dialog.addEventListener('pointerdown', handlePointerDown);
      dialog.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      dialog.removeEventListener('close', handleClose);
      if (handlePointerDown) dialog.removeEventListener('pointerdown', handlePointerDown);
      if (handlePointerUp) dialog.removeEventListener('pointerup', handlePointerUp);
    };
  }, [onClose, variant]);

  if (variant === 'alert') {
    return (
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        {...({ closedby: 'closerequest' } as Record<string, string>)}
        className="w-[calc(100%-2rem)] max-w-[310px] rounded-[20px] hig-liquid-glass border p-0 shadow-2xl m-auto text-[var(--hig-label)]"
      >
        <div className="p-5 text-center space-y-2">
          <h2 id={titleId} className="hig-headline">
            {title}
          </h2>
          {children}
        </div>
      </dialog>
    );
  }

  if (variant === 'action-sheet') {
    return (
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        {...({ closedby: 'any' } as Record<string, string>)}
        className="w-full max-w-md bg-transparent border-0 p-3 mt-auto mb-0 mx-auto text-[var(--hig-label)]"
      >
        <div className="space-y-2">
          <div className="rounded-[18px] hig-liquid-glass border overflow-hidden">
            <div className="px-4 py-3 text-center border-b border-[var(--hig-separator)]">
              <h2 id={titleId} className="hig-footnote font-semibold text-[var(--hig-label-secondary)]">
                {title}
              </h2>
            </div>
            {children}
          </div>

          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="w-full min-h-[52px] rounded-[18px] bg-[var(--hig-bg-card)] border border-[var(--hig-separator)] hig-headline text-[var(--hig-blue)] active:opacity-80 transition"
          >
            {cancelLabel}
          </button>
        </div>
      </dialog>
    );
  }

  // Default: Apple HIG Sheet (07-sheets.md)
  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      {...({ closedby: 'any' } as Record<string, string>)}
      className="w-full max-w-lg rounded-t-[28px] sm:rounded-[28px] bg-[var(--hig-bg-grouped)] text-[var(--hig-label)] border border-[var(--hig-separator)] p-0 shadow-2xl mt-auto mb-0 sm:m-auto max-h-[92dvh]"
    >
      {/* Grabber handle nativo do iOS (07-sheets.md) */}
      <div className="pt-2 pb-1 flex justify-center">
        <span
          aria-hidden="true"
          className="w-9 h-1.5 rounded-full bg-[var(--hig-label-tertiary)]"
        />
      </div>

      {/* Sheet Toolbar: Cancelar na extremidade inicial + Título central + OK opcional na extremidade final */}
      <div className="px-4 pb-3 pt-1 border-b border-[var(--hig-separator)] grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="min-h-[36px] px-1 hig-body text-[var(--hig-blue)] font-normal hover:opacity-80 text-left"
          >
            {cancelLabel}
          </button>
        </div>

        <h2 id={titleId} className="hig-headline text-center truncate">
          {title}
        </h2>

        <div className="flex justify-end">
          {rightAction && (
            <button
              type="button"
              disabled={rightAction.disabled}
              onClick={rightAction.onClick}
              className="min-h-[36px] px-1 hig-headline text-[var(--hig-blue)] disabled:opacity-40 text-right"
            >
              {rightAction.label}
            </button>
          )}
        </div>
      </div>

      <div className="p-4 overflow-y-auto max-h-[calc(92dvh-72px)]">{children}</div>
    </dialog>
  );
};
