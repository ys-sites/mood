import { useEffect, useRef } from 'react';

export interface DialogImage {
  src: string;
  alt: string;
}

/** Full-size image viewer built on the native <dialog> (Esc closes it, focus is trapped). */
export function ImageDialog({ image, onClose }: { image: DialogImage | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (image && !dialog.open) dialog.showModal();
    if (!image && dialog.open) dialog.close();
  }, [image]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-label={image?.alt ?? 'Image'}
      className="m-auto max-h-[94vh] max-w-[94vw] bg-transparent p-0"
    >
      {image && (
        <div className="flex flex-col items-end gap-3">
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="rounded-sm bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-paper"
          >
            Close
          </button>
          <img src={image.src} alt={image.alt} className="max-h-[84vh] w-auto max-w-full object-contain" />
        </div>
      )}
    </dialog>
  );
}
