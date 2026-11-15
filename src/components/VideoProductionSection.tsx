import React, { useState } from 'react';
import { Film, Play, Volume2, Clock, Sparkles, Copy, Check, FileVideo, Music } from 'lucide-react';
import { TRAILER_SCENES, PITCH_VIDEO_MODULES } from '../data/campaignData';

interface VideoProductionProps {
  lang: 'en' | 'fr';
}

export const VideoProductionSection: React.FC<VideoProductionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'trailer' | 'pitch'>('trailer');
  const [copiedScene, setCopiedScene] = useState<number | null>(null);

  const copyScript = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedScene(idx);
    setTimeout(() => setCopiedScene(null), 2000);
  };

  return (
    <section id="video-suite" className="py-20 md:py-28 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Film className="w-3.5 h-3.5 text-amber-500" />
            <span>Storytelling & Video Production Suite · Claude Opus Direction</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            CAMPAIGN VIDEO SUITE: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              SCRIPTS, TIMECODES & SHOT LISTS
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'Complete production-ready storyboards and scripts developed for the customer-facing commercial and the private owner presentation.'
              : 'Scénarimage et scripts de production complets développés pour le spot publicitaire et la présentation à la direction.'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900 p-1.5 rounded-2xl border border-zinc-800 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('trailer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'trailer'
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <FileVideo className="w-4 h-4" />
              <span>60s Public Concept Trailer</span>
            </button>

            <button
              onClick={() => setActiveTab('pitch')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'pitch'
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>5-Min Owner Executive Pitch</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 60-Second Trailer Content */}
        {activeTab === 'trailer' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            
            {/* Trailer Overview Badge Bar */}
            <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <span className="font-bold text-white block">Runtime: Exactly 60 Seconds</span>
                  <span className="text-zinc-400 text-[11px]">Format: 9:16 Vertical (Reels/TikTok) + 16:9 Landscape</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Music className="w-4 h-4 text-amber-400" />
                <span>Audio: Urban Montreal Soul-Hop + Winter Ambience (-14 LUFS)</span>
              </div>
            </div>

            {/* Scene-by-Scene Cards */}
            <div className="space-y-4">
              {TRAILER_SCENES.map((scene, idx) => (
                <div
                  key={scene.timecode}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800 gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-headline text-2xl text-amber-400">
                        Scene 0{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono-num text-xs font-bold">
                        {scene.timecode}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => copyScript(scene.audioVoiceover, idx)}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors self-start sm:self-auto"
                    >
                      {copiedScene === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied Script</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy VO</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 text-xs sm:text-sm">
                    {/* Visual & B-Roll */}
                    <div className="md:col-span-6 space-y-2">
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                        Visual Direction & Camera Work
                      </span>
                      <p className="text-zinc-300 leading-relaxed">
                        {scene.visual}
                      </p>
                      <div className="text-[11px] text-zinc-500 pt-1">
                        <strong className="text-zinc-400">B-Roll Focus:</strong> {scene.bRollNotes}
                      </div>
                    </div>

                    {/* Audio & Typography */}
                    <div className="md:col-span-6 space-y-2">
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                        Voiceover & Sound Design
                      </span>
                      <p className="text-amber-200/90 italic leading-relaxed bg-zinc-950 p-3 rounded-xl border border-zinc-850">
                        {scene.audioVoiceover}
                      </p>
                      <div className="flex flex-col gap-1 pt-1 text-[11px]">
                        <div>
                          <strong className="text-zinc-400">On-Screen Text:</strong>{' '}
                          <span className="text-white font-headline tracking-wide uppercase">{scene.onScreenText}</span>
                        </div>
                        <div>
                          <strong className="text-zinc-400">Sound FX:</strong>{' '}
                          <span className="text-zinc-400">{scene.soundDesign}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: 5-Minute Owner Pitch Content */}
        {activeTab === 'pitch' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            
            <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <span className="font-bold text-white block">Executive Runtime: 5 Minutes</span>
                  <span className="text-zinc-400 text-[11px]">Format: Direct Owner Presentation Walkthrough</span>
                </div>
              </div>
              <span className="text-xs font-mono-num text-amber-400 font-semibold">
                6 Strategic Modules
              </span>
            </div>

            <div className="space-y-4">
              {PITCH_VIDEO_MODULES.map((mod) => (
                <div
                  key={mod.step}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                      <span className="font-headline text-2xl text-amber-400">
                        Module {mod.step}
                      </span>
                      <h3 className="font-headline text-xl text-white uppercase tracking-wide">
                        {mod.title}
                      </h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono-num text-xs font-bold">
                      {mod.duration}
                    </span>
                  </div>

                  <div className="pt-3 space-y-3">
                    <div className="text-xs text-amber-400/90 font-medium">
                      <span className="uppercase text-[10px] text-zinc-500 font-bold block">Objective:</span>
                      {mod.summary}
                    </div>

                    <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-850 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <span className="uppercase text-[10px] font-bold text-zinc-500 block mb-1">Speaker Script:</span>
                      "{mod.script}"
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
