import React, { useState } from 'react';
import {
  Film,
  Monitor,
  Smartphone,
  Volume2,
  Clock,
  Camera,
  FileText,
  Maximize2,
  X,
  Info,
} from 'lucide-react';
import { TRAILER_SCENES, PITCH_VIDEO_MODULES } from '../data/campaignData';
import { Language } from '../data/campaignConstants';

interface VideoShowcaseProps {
  lang: Language;
}

type VideoTab = 'pitch' | 'trailer';

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<VideoTab>('pitch');
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const activeTrailerScene = TRAILER_SCENES[activeSceneIndex];
  const activePitchModule = PITCH_VIDEO_MODULES[activeModuleIndex];

  return (
    <section
      id="section-13"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#EAAA2F] mb-3">
            <Film className="w-4 h-4" />
            {lang === 'fr' ? '13 · Présentation Vidéo Cinématique' : '13 · Cinematic Video Presentation'}
          </span>
          <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            {lang === 'fr'
              ? 'Bande-Annonce & Pitch Direction'
              : '60s Trailer & 5-Min Owner Pitch'}
          </h2>
          <p className="text-zinc-400 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
            {lang === 'fr'
              ? 'Scripts synchronisés, minutage et notes de réalisation prêts pour le tournage. Les lecteurs ci-dessous affichent des emplacements de prévisualisation en attente des fichiers MP4 finaux.'
              : 'Timecoded scripts, sound direction, and B-roll storyboards ready for production. The frames below are explicitly labeled preview placeholders awaiting final MP4 exports.'}
          </p>
        </div>

        {/* Format Toggle */}
        <div className="inline-flex p-1 bg-[#141416] border border-zinc-800 rounded-xl self-start">
          <button
            type="button"
            onClick={() => setActiveTab('pitch')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'pitch'
                ? 'bg-[#EAAA2F] text-[#0B0B0C]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>5-Min Owner Pitch (16:9)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('trailer')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'trailer'
                ? 'bg-[#EAAA2F] text-[#0B0B0C]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>60s Trailer (9:16)</span>
          </button>
        </div>
      </div>

      {/* Main Split: Preview Placeholder + Synced Transcript */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Video Placeholder Frame */}
        <div className="lg:col-span-5 space-y-4">
          <div
            className={`relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0B0B0C] shadow-2xl ${
              activeTab === 'trailer' ? 'max-w-xs mx-auto aspect-[9/16]' : 'aspect-video'
            }`}
          >
            {/* Subtle poster backdrop */}
            <img
              src="/buy-one-give-one-poster.jpg"
              alt="Shawarma Moods Buy One Give One Storyboard Frame"
              className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/75 to-[#0B0B0C]/60" />

            {/* Top Bar */}
            <div className="relative z-10 p-4 flex items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded-full bg-[#FBCE22]/15 border border-[#FBCE22]/40 text-[#FBCE22] text-[10px] font-mono uppercase tracking-wider">
                Preview Placeholder · Awaiting Render
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                aria-label="Open fullscreen storyboard viewer"
                className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-[#EAAA2F] hover:border-[#EAAA2F] transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Center Placeholder Content */}
            <div className="relative z-10 px-6 py-8 flex flex-col items-center justify-center text-center h-[calc(100%-8rem)]">
              <div className="w-14 h-14 rounded-full bg-[#EAAA2F]/15 border border-[#EAAA2F]/50 flex items-center justify-center mb-4">
                <Film className="w-6 h-6 text-[#EAAA2F]" />
              </div>
              <div className="font-mono text-[11px] text-[#EAAA2F] uppercase tracking-widest mb-1">
                {activeTab === 'pitch' ? 'Owner_Pitch_5min.mp4' : 'Campaign_Trailer_60sec.mp4'}
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase tracking-wide mb-2">
                {activeTab === 'pitch'
                  ? activePitchModule.title
                  : activeTrailerScene.onScreenText}
              </h3>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-700 px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 text-[#EAAA2F]" />
                <span>
                  {activeTab === 'pitch'
                    ? activePitchModule.duration
                    : activeTrailerScene.timecode}
                </span>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10 p-4 border-t border-zinc-800/80 bg-[#0B0B0C]/90 flex items-center justify-between text-[11px] text-zinc-400">
              <span>Muted-by-default spec · No fabricated video stream</span>
              <span className="font-mono text-[#EAAA2F]">
                {activeTab === 'pitch'
                  ? `Module ${activePitchModule.step}/06`
                  : `Scene 0${activeSceneIndex + 1}/05`}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#141416] border border-zinc-800 flex items-start gap-3 text-xs text-zinc-400">
            <Info className="w-4 h-4 text-[#EAAA2F] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {lang === 'fr'
                ? 'Note : Les fichiers vidéo finaux (.mp4) et VIDEO_HANDOFF.md n’ont pas encore été livrés dans le dépôt. Cette interface synchronise le storyboard et le script exacts en attendant le rendu.'
                : 'Note: Final rendered .mp4 exports and VIDEO_HANDOFF.md are not yet in the repository. Select any timecoded chapter on the right to inspect the exact visual direction, voiceover, and sound cues.'}
            </p>
          </div>
        </div>

        {/* Right: Interactive Timecoded Script & Storyboard */}
        <div className="lg:col-span-7 space-y-4">
          {activeTab === 'pitch' ? (
            <>
              {/* Module Selector Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PITCH_VIDEO_MODULES.map((mod, idx) => (
                  <button
                    key={mod.step}
                    type="button"
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      activeModuleIndex === idx
                        ? 'bg-[#EAAA2F]/10 border-[#EAAA2F] text-white'
                        : 'bg-[#141416] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className="text-[#EAAA2F]">CH {mod.step}</span>
                      <span>{mod.duration}</span>
                    </div>
                    <div className="text-xs font-semibold line-clamp-1">{mod.title}</div>
                  </button>
                ))}
              </div>

              {/* Active Module Detail */}
              <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                  <div>
                    <div className="text-xs font-mono text-[#EAAA2F] uppercase tracking-wider">
                      Module {activePitchModule.step} · {activePitchModule.duration}
                    </div>
                    <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase mt-1">
                      {activePitchModule.title}
                    </h3>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    <FileText className="w-3.5 h-3.5 text-[#EAAA2F]" />
                    <span>Executive Summary</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {activePitchModule.summary}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0B0C] border border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#EAAA2F] mb-2">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Synced Voiceover Script</span>
                  </div>
                  <p className="text-sm text-zinc-200 leading-relaxed italic">
                    "{activePitchModule.script}"
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Trailer Scene Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {TRAILER_SCENES.map((scene, idx) => (
                  <button
                    key={scene.timecode}
                    type="button"
                    onClick={() => setActiveSceneIndex(idx)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      activeSceneIndex === idx
                        ? 'bg-[#EAAA2F]/10 border-[#EAAA2F] text-white'
                        : 'bg-[#141416] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="text-[11px] font-mono text-[#EAAA2F] mb-1">
                      Scene 0{idx + 1}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-300">{scene.timecode}</div>
                  </button>
                ))}
              </div>

              {/* Active Trailer Scene Detail */}
              <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-5">
                <div className="border-b border-zinc-800 pb-4">
                  <div className="text-xs font-mono text-[#EAAA2F] uppercase tracking-wider">
                    Scene 0{activeSceneIndex + 1} · {activeTrailerScene.timecode}
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase mt-1">
                    {activeTrailerScene.onScreenText}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0B0B0C] border border-zinc-800">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#EAAA2F] mb-2">
                      <Camera className="w-3.5 h-3.5" />
                      <span>Visual Direction</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {activeTrailerScene.visual}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B0B0C] border border-zinc-800">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#EAAA2F] mb-2">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Sound Design</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {activeTrailerScene.soundDesign}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0B0C] border border-zinc-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#EAAA2F] mb-2">
                    Voiceover Transcript
                  </div>
                  <p className="text-sm text-zinc-200 leading-relaxed italic">
                    {activeTrailerScene.audioVoiceover}
                  </p>
                </div>

                <div className="text-xs text-zinc-400 font-mono">
                  B-Roll Note: {activeTrailerScene.bRollNotes}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Fullscreen Storyboard Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-3xl w-full rounded-2xl bg-[#141416] border border-zinc-700 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div>
                <div className="text-xs font-mono text-[#EAAA2F] uppercase">
                  Storyboard Preview Placeholder ·{' '}
                  {activeTab === 'pitch' ? 'Owner_Pitch_5min.mp4' : 'Campaign_Trailer_60sec.mp4'}
                </div>
                <h4 className="font-headline text-2xl text-white uppercase">
                  {activeTab === 'pitch'
                    ? activePitchModule.title
                    : activeTrailerScene.onScreenText}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {activeTab === 'pitch' ? activePitchModule.script : activeTrailerScene.visual}
            </p>
            <div className="text-xs font-mono text-zinc-500">
              Status: Production storyboard ready. Awaiting final rendered .mp4 asset delivery.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
