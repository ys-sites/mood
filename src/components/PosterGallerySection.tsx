import React from 'react';
import { Image, ZoomIn, Sparkles, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { CREATIVE_POSTERS } from '../data/campaignData';

interface PosterGalleryProps {
  lang: 'en' | 'fr';
  onOpenPosterModal: (imgSrc: string) => void;
}

export const PosterGallerySection: React.FC<PosterGalleryProps> = ({ lang, onOpenPosterModal }) => {
  return (
    <section id="posters" className="py-20 md:py-28 border-b border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Image className="w-3.5 h-3.5 text-amber-500" />
            <span>Creative Showcase & Visual Assets</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            CAMPAIGN POSTER SUITE: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              4:5 SOCIAL & IN-STORE ARTWORK
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'Anchored by the official Shawarma Moods brand artwork, formatted for 1080×1350 print and mobile social screens.'
              : 'Ancré dans l\'identité visuelle officielle de Shawarma Moods, adapté aux formats imprimés et mobiles 1080×1350.'}
          </p>
        </div>

        {/* Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREATIVE_POSTERS.map((poster) => (
            <div
              key={poster.id}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
                poster.isMainPoster
                  ? 'bg-zinc-900 border-amber-500/60 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/30'
                  : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Image Preview Container */}
              <div
                onClick={() => onOpenPosterModal(poster.imagePath)}
                className="cursor-pointer relative overflow-hidden bg-black aspect-[4/5] flex items-center justify-center"
              >
                <img
                  src={poster.imagePath}
                  alt={poster.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay hover badge */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="p-3 bg-amber-400 text-black rounded-full font-bold shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>

                {poster.isMainPoster && (
                  <div className="absolute top-3 left-3 bg-amber-400 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                    ★ Primary Official Artwork
                  </div>
                )}
              </div>

              {/* Poster Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider mb-1">
                    {poster.subtitle}
                  </div>
                  <h3 className="font-headline text-xl text-white uppercase tracking-wide">
                    {poster.title}
                  </h3>
                  <div className="font-headline text-sm text-zinc-400 uppercase tracking-wide mt-1">
                    "{poster.tagline}"
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-400">
                    {poster.copyPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500/80 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
                  <span className="font-mono-num text-[11px] text-zinc-500">{poster.format}</span>
                  <button
                    onClick={() => onOpenPosterModal(poster.imagePath)}
                    className="font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 text-[11px]"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master Copy Block Reference */}
        <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h4 className="font-headline text-xl text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Exact Standardized Campaign Copy (AGENTS.md Specification)</span>
          </h4>
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-850 font-headline text-lg sm:text-xl text-zinc-300 uppercase tracking-wider leading-relaxed space-y-1">
            <div className="text-white font-bold">BUY ONE. GIVE ONE.</div>
            <div className="text-amber-400">One for you. One for someone in need.</div>
            <div className="text-zinc-300">Buy two shawarmas. Enjoy one and donate the other.</div>
            <div className="text-zinc-400 text-base">For every donated shawarma, Shawarma Moods adds $1 to the community fund.</div>
            <div className="text-amber-400 font-bold">OUR GOAL: 1,000 SHAWARMAS</div>
            <div className="text-zinc-500 text-sm">Christmas 2026 · Spread the Mood.</div>
          </div>
        </div>

      </div>
    </section>
  );
};
