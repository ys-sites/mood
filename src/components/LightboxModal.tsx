import React, { useEffect } from 'react';
import { X, ZoomIn, Download, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  imgSrc: string | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ imgSrc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (imgSrc) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [imgSrc, onClose]);

  if (!imgSrc) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative z-10 max-w-2xl w-full max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-headline text-lg tracking-wider text-white uppercase">
              Campaign Artwork Inspector
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Body */}
        <div className="p-4 flex-1 overflow-auto flex items-center justify-center bg-black">
          <img
            src={imgSrc}
            alt="Campaign Poster High Resolution"
            className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Modal Footer */}
        <div className="bg-zinc-900/90 px-6 py-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span className="font-headline tracking-wide uppercase text-amber-400">
            BUY ONE. GIVE ONE. SPREAD THE MOOD.
          </span>
          <span className="text-[11px] text-zinc-500 font-mono-num">
            Press ESC or click outside to close
          </span>
        </div>
      </div>
    </div>
  );
};
