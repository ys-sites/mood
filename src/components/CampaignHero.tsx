import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Play, Sparkles, Flame, ShieldCheck, ArrowRight } from 'lucide-react';
import { CAMPAIGN_FACTS, Language } from '../data/campaignConstants';

interface CampaignHeroProps {
  lang: Language;
  onOpenPosterModal: (imgSrc: string) => void;
}

export const CampaignHero: React.FC<CampaignHeroProps> = ({ lang, onOpenPosterModal }) => {
  return (
    <section
      id="section-1"
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-10 pb-16 border-b border-zinc-800/80 bg-[#0B0B0C]"
    >
      {/* Subtle flame-lit & warm string-light ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,170,47,0.14),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(183,141,29,0.12),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Campaign Story Opening */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141417] border border-[#EAAA2F]/40 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? CAMPAIGN_FACTS.labelEn : CAMPAIGN_FACTS.labelFr}</span>
            </div>

            {/* Large Animated Headline */}
            <div className="space-y-2">
              <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight text-white uppercase leading-[0.88]">
                <span className="block">BUY ONE.</span>
                <span className="block text-[#EAAA2F]">GIVE ONE.</span>
              </h1>
              <p className="font-promo font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-white uppercase pt-1">
                {lang === 'en' ? CAMPAIGN_FACTS.taglineEn : CAMPAIGN_FACTS.taglineFr}{' '}
                <span className="text-[#EAAA2F] font-headline tracking-wider text-2xl sm:text-3xl">
                  · CHRISTMAS 2026
                </span>
              </p>
            </div>

            {/* Secondary Text */}
            <div className="space-y-2 max-w-xl">
              <p className="text-lg sm:text-xl font-semibold text-white">
                “{lang === 'en' ? CAMPAIGN_FACTS.subTaglineEn : CAMPAIGN_FACTS.subTaglineFr}”
              </p>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {lang === 'en' ? (
                  <>
                    A customer-funded community campaign for Shawarma Moods. Guests{' '}
                    <strong className="text-white">purchase two shawarmas</strong>—enjoying one hot
                    and funding one for someone in need—while Shawarma Moods contributes{' '}
                    <strong className="text-[#EAAA2F]">+$1 per verified meal</strong> to a separately
                    tracked community fund.
                  </>
                ) : (
                  <>
                    Une campagne communautaire financée par les clients. Le client{' '}
                    <strong className="text-white">achète deux shawarmas</strong>—un pour lui, un
                    financé pour une personne dans le besoin—et Shawarma Moods verse{' '}
                    <strong className="text-[#EAAA2F]">+1 $ par repas vérifié</strong> dans un fonds
                    distinct.
                  </>
                )}
              </p>
            </div>

            {/* Key Proposal Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="bg-[#141417] border border-zinc-800 rounded-xl p-3.5">
                <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  {lang === 'en' ? 'Initial Goal' : 'Objectif Initial'}
                </div>
                <div className="font-mono-num text-2xl font-bold text-white mt-0.5">1,000</div>
                <div className="text-[11px] text-[#EAAA2F] font-medium">
                  {lang === 'en' ? 'Customer-Funded Meals' : 'Repas Financés'}
                </div>
              </div>

              <div className="bg-[#141417] border border-zinc-800 rounded-xl p-3.5">
                <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  {lang === 'en' ? 'Restaurant Match' : 'Contribution Resto'}
                </div>
                <div className="font-mono-num text-2xl font-bold text-[#EAAA2F] mt-0.5">+$1</div>
                <div className="text-[11px] text-zinc-400">
                  {lang === 'en' ? 'Per Verified Meal' : 'Par Repas Vérifié'}
                </div>
              </div>

              <div className="bg-[#141417] border border-zinc-800 rounded-xl p-3.5">
                <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  {lang === 'en' ? 'Target Delivery' : 'Livraison Cible'}
                </div>
                <div className="font-mono-num text-xl font-bold text-white mt-0.5">DEC 23</div>
                <div className="text-[11px] text-zinc-400">Christmas Week 2026</div>
              </div>

              <div className="bg-[#141417] border border-zinc-800 rounded-xl p-3.5">
                <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  {lang === 'en' ? 'Network Footprint' : 'Réseau Actuel'}
                </div>
                <div className="font-mono-num text-xl font-bold text-white mt-0.5">8 STORES</div>
                <div className="text-[11px] text-zinc-400">QC & ON (~125/store)</div>
              </div>
            </div>

            {/* Two Functional Navigation Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#section-2"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#EAAA2F] hover:bg-[#FBCE22] text-[#0B0B0C] font-promo font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#EAAA2F]/20 transition-all hover:scale-[1.02]"
              >
                <span>{lang === 'en' ? 'Discover the Campaign' : 'Découvrir la Campagne'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#section-13"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#141417] hover:bg-[#333333] border border-zinc-700 text-white font-promo font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
              >
                <Play className="w-4 h-4 text-[#EAAA2F] fill-[#EAAA2F]" />
                <span>{lang === 'en' ? 'Watch the Vision' : 'Voir la Vision Vidéo'}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#EAAA2F] shrink-0" />
              <span>{CAMPAIGN_FACTS.flagshipNote}</span>
            </div>
          </motion.div>

          {/* Right Column: Official Supplied Shawarma Moods Poster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 bg-[#EAAA2F]/20 rounded-3xl blur-xl pointer-events-none animate-ember" />
              <div className="relative rounded-2xl bg-[#141417] border border-[#EAAA2F]/40 overflow-hidden shadow-2xl group">
                <div className="bg-[#0B0B0C] px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-headline tracking-wider text-[#EAAA2F] text-sm">
                    <Flame className="w-4 h-4" />
                    <span>CONCEPTUAL CAMPAIGN POSTER</span>
                  </div>
                  <button
                    onClick={() => onOpenPosterModal('/buy-one-give-one-poster.jpg')}
                    className="text-[11px] font-semibold text-zinc-400 hover:text-[#EAAA2F] underline"
                  >
                    Expand 4:5
                  </button>
                </div>

                <div
                  onClick={() => onOpenPosterModal('/buy-one-give-one-poster.jpg')}
                  className="cursor-pointer relative overflow-hidden bg-[#0B0B0C] aspect-[4/5]"
                >
                  <img
                    src="/buy-one-give-one-poster.jpg"
                    alt="Shawarma Moods Buy One Give One Official Concept Poster"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                <div className="px-4 py-3 bg-[#0B0B0C] border-t border-zinc-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-300">Conceptual reference · Not live</span>
                  <span className="px-2 py-0.5 rounded bg-[#EAAA2F]/15 text-[#EAAA2F] border border-[#EAAA2F]/30 font-mono-num text-[11px] font-bold">
                    GOAL: 1,000
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#section-2"
            className="inline-flex flex-col items-center gap-1.5 text-zinc-500 hover:text-[#EAAA2F] transition-colors text-[11px] uppercase tracking-widest font-semibold"
          >
            <span>{lang === 'en' ? 'Scroll to explore proposal' : 'Défiler pour explorer'}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
