import React, { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  MessageSquareText,
  LayoutGrid,
  Sparkles,
  X,
  Home,
} from 'lucide-react';
import { Language, PRESENTATION_SECTIONS } from '../data/campaignConstants';

interface PresentationControlsProps {
  lang: Language;
  active: boolean;
  currentSectionIndex: number;
  setCurrentSectionIndex: (idx: number) => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
  onClose: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  lang,
  active,
  currentSectionIndex,
  setCurrentSectionIndex,
  reducedMotion,
  onToggleReducedMotion,
  onClose,
}) => {
  const [showNotes, setShowNotes] = useState(true);
  const [showOverview, setShowOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSection = PRESENTATION_SECTIONS[currentSectionIndex] ?? PRESENTATION_SECTIONS[0];
  const progressPct = Math.round(((currentSectionIndex + 1) / PRESENTATION_SECTIONS.length) * 100);

  const navigateTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(PRESENTATION_SECTIONS.length - 1, idx));
    setCurrentSectionIndex(clamped);
    const target = document.getElementById(PRESENTATION_SECTIONS[clamped].id);
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        navigateTo(currentSectionIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        navigateTo(currentSectionIndex - 1);
      } else if (e.key === 'Escape') {
        setShowOverview(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, currentSectionIndex, reducedMotion]);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      // Fullscreen may be restricted in some embedded contexts
    }
  };

  if (!active) return null;

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 z-[60]">
        <div
          className="h-full bg-[#EAAA2F] transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Overview Index Drawer */}
      {showOverview && (
        <div className="fixed inset-0 z-[55] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141417] border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="font-headline text-2xl text-white uppercase tracking-wider">
                  {lang === 'en' ? 'Campaign Presentation Overview' : 'Vue d’Ensemble de la Présentation'}
                </h3>
                <p className="text-xs text-zinc-400">
                  {lang === 'en'
                    ? 'Select any section to jump directly. Use ← / → arrow keys to advance.'
                    : 'Sélectionnez une section ou utilisez les flèches ← / →.'}
                </p>
              </div>
              <button
                onClick={() => setShowOverview(false)}
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {PRESENTATION_SECTIONS.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => {
                    navigateTo(idx);
                    setShowOverview(false);
                  }}
                  className={`text-left p-3.5 rounded-xl border transition-all ${
                    idx === currentSectionIndex
                      ? 'bg-[#EAAA2F]/15 border-[#EAAA2F] text-white'
                      : 'bg-[#0B0B0C] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <div className="font-mono-num text-[11px] font-bold text-[#EAAA2F]">
                    {sec.number} / 15
                  </div>
                  <div className="font-bold text-xs mt-0.5">
                    {lang === 'en' ? sec.titleEn : sec.titleFr}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Presenter Notes Floating Card */}
      {showNotes && (
        <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 bg-[#141417]/95 backdrop-blur-md border border-[#EAAA2F]/40 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono-num font-bold uppercase tracking-wider text-[#EAAA2F] flex items-center gap-1.5">
              <MessageSquareText className="w-3.5 h-3.5" />
              Presenter Note · {currentSection.number}
            </span>
            <button
              onClick={() => setShowNotes(false)}
              className="text-zinc-500 hover:text-white text-xs"
              aria-label="Hide presenter notes"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-zinc-200 leading-relaxed">
            {lang === 'en' ? currentSection.presenterNoteEn : currentSection.presenterNoteFr}
          </p>
        </div>
      )}

      {/* Bottom Floating Presentation Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl bg-[#141417]/95 backdrop-blur-xl border border-zinc-700/80 rounded-2xl px-3 py-2.5 shadow-2xl flex flex-wrap items-center justify-between gap-2">
        {/* Left: Overview & Home */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => navigateTo(0)}
            className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-[#EAAA2F] border border-zinc-800"
            title="Return to Hero Overview"
          >
            <Home className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowOverview(!showOverview)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 text-zinc-200 hover:text-[#EAAA2F] border border-zinc-800 text-xs font-semibold"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#EAAA2F]" />
            <span className="hidden sm:inline">Overview</span>
          </button>
        </div>

        {/* Center: Prev / Section Indicator / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigateTo(currentSectionIndex - 1)}
            disabled={currentSectionIndex === 0}
            className="p-2 rounded-lg bg-zinc-900 text-white disabled:opacity-30 hover:bg-zinc-800 border border-zinc-800"
            aria-label="Previous section"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="text-center px-2 min-w-[140px]">
            <div className="font-mono-num text-[10px] font-bold text-[#EAAA2F]">
              SECTION {currentSection.number} / {PRESENTATION_SECTIONS.length}
            </div>
            <div className="text-xs font-bold text-white truncate max-w-[170px]">
              {lang === 'en' ? currentSection.titleEn : currentSection.titleFr}
            </div>
          </div>

          <button
            onClick={() => navigateTo(currentSectionIndex + 1)}
            disabled={currentSectionIndex === PRESENTATION_SECTIONS.length - 1}
            className="p-2 rounded-lg bg-[#EAAA2F] text-[#0B0B0C] disabled:opacity-30 hover:bg-[#FBCE22] font-bold"
            aria-label="Next section"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Notes, Reduced Motion, Fullscreen, Exit */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-lg border text-xs ${
              showNotes
                ? 'bg-[#EAAA2F]/20 text-[#EAAA2F] border-[#EAAA2F]/50'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800'
            }`}
            title="Toggle Presenter Notes"
          >
            <MessageSquareText className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleReducedMotion}
            className={`p-2 rounded-lg border text-xs ${
              reducedMotion
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800'
            }`}
            title={reducedMotion ? 'Reduced Motion: ON' : 'Reduced Motion: OFF'}
          >
            <Sparkles className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="px-2.5 py-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 text-xs font-bold"
          >
            Exit
          </button>
        </div>
      </div>
    </>
  );
};
