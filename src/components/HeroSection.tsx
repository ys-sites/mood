import React from 'react';
import { Flame, Heart, Sparkles, ArrowRight, ShieldCheck, Calendar, Users, DollarSign } from 'lucide-react';
import { CAMPAIGN_COPY } from '../data/campaignData';

interface HeroSectionProps {
  lang: 'en' | 'fr';
  onOpenPosterModal: (imgSrc: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenPosterModal }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 border-b border-zinc-800/80">
      {/* Background Atmospheric Layers */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Checkered Accent Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 mb-8 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Campaign Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Super Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>{lang === 'en' ? 'Holiday 2026 Marketing Pitch · Montréal' : 'Proposition Campagne Noël 2026 · Montréal'}</span>
            </div>

            {/* Master Headline */}
            <div className="space-y-2">
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.9]">
                BUY ONE. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  GIVE ONE.
                </span>
              </h1>
              <p className="font-headline text-2xl sm:text-3xl tracking-wide text-zinc-300 uppercase">
                SPREAD THE MOOD. <span className="text-amber-400">· CHRISTMAS 2026</span>
              </p>
            </div>

            {/* Core Mechanism Summary */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl">
              {lang === 'en' ? (
                <>
                  A seasonal landmark campaign for Shawarma Moods, Montréal: A customer <strong className="text-white font-semibold">purchases two shawarmas</strong>—keeps one hot meal for themselves and funds one hot meal for a neighbour in need. Shawarma Moods additionally contributes <strong className="text-amber-400 font-semibold">$1.00 per verified meal</strong> directly into the community fund.
                </>
              ) : (
                <>
                  Une campagne majeure pour Shawarma Moods, Montréal : Le client <strong className="text-white font-semibold">achète deux shawarmas</strong>—savoure un repas chaud et finance un repas chaud pour une personne dans le besoin. Shawarma Moods ajoute <strong className="text-amber-400 font-semibold">1,00 $ par repas vérifié</strong> directement dans le fonds communautaire.
                </>
              )}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3">
                <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Initial Goal</div>
                <div className="font-mono-num text-xl sm:text-2xl font-bold text-white mt-1">1,000</div>
                <div className="text-[11px] text-amber-400/90 font-medium">Donated Meals</div>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3">
                <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Shawarma Moods</div>
                <div className="font-mono-num text-xl sm:text-2xl font-bold text-amber-400 mt-1">+$1.00</div>
                <div className="text-[11px] text-zinc-400">Match Per Meal</div>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3">
                <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Delivery Target</div>
                <div className="font-mono-num text-lg sm:text-xl font-bold text-white mt-1">DEC 23</div>
                <div className="text-[11px] text-zinc-400">Christmas Week</div>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3">
                <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Structure</div>
                <div className="font-mono-num text-lg sm:text-xl font-bold text-emerald-400 mt-1">FUNDED</div>
                <div className="text-[11px] text-zinc-400">By Customer Purchase</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#mechanism"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform"
              >
                <span>{lang === 'en' ? 'Explore Campaign Flow' : 'Découvrir le Mécanisme'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#economics"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-white font-bold text-sm uppercase tracking-wider transition-colors"
              >
                <span>{lang === 'en' ? 'Unit Economics' : 'Modèle Financier'}</span>
              </a>

              <a
                href="#video-suite"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-amber-400 underline underline-offset-4 transition-colors"
              >
                <span>{lang === 'en' ? 'Review Video Script' : 'Lire le Script Vidéo'}</span>
              </a>
            </div>

            {/* Discretion Notice */}
            <div className="flex items-center gap-2 pt-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
              <span>
                {lang === 'en'
                  ? 'Private pitch for restaurant management. Verified donation tracking & separate accounting required upon launch.'
                  : 'Présentation privée pour la direction. Comptabilité distincte et validation requises pour le lancement.'}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Concept Poster Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-amber-500/40 via-amber-600/20 to-transparent rounded-2xl blur-lg opacity-80" />
              
              {/* Poster Card Container */}
              <div className="relative rounded-2xl bg-zinc-950 border border-zinc-800/90 overflow-hidden shadow-2xl group">
                
                {/* Poster Top Ribbon */}
                <div className="bg-zinc-900/90 px-4 py-2 border-b border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-headline tracking-wider text-amber-400">
                    <Flame className="w-4 h-4 text-amber-500" />
                    <span>OFFICIAL POSTER CONCEPT</span>
                  </div>
                  <button
                    onClick={() => onOpenPosterModal('/Buy One, Give One Shawarma.png')}
                    className="text-[11px] font-semibold text-zinc-400 hover:text-amber-300 underline"
                  >
                    Click to Zoom
                  </button>
                </div>

                {/* Poster Image */}
                <div 
                  className="cursor-pointer relative overflow-hidden bg-black aspect-[4/5] flex items-center justify-center"
                  onClick={() => onOpenPosterModal('/Buy One, Give One Shawarma.png')}
                >
                  <img
                    src="/Buy One, Give One Shawarma.png"
                    alt="Shawarma Moods - Buy One Give One Campaign Poster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-black/60 px-3 py-1.5 rounded-lg border border-amber-500/40">
                      View Full Resolution 4:5 Poster
                    </span>
                  </div>
                </div>

                {/* Poster Bottom Stats */}
                <div className="p-4 bg-zinc-900/80 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-white uppercase">Spread the Mood.</div>
                    <div className="text-zinc-400 text-[11px]">Christmas Week Distribution Target</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded text-[11px] font-bold">
                      Goal: 1,000 Meals
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
