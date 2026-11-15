import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HandCoins, Plus, Equal, ShieldCheck, ArrowRight } from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface RestaurantContributionProps {
  lang: Language;
}

export const RestaurantContribution: React.FC<RestaurantContributionProps> = ({ lang }) => {
  const [scaleView, setScaleView] = useState<'unit' | 'goal'>('goal');

  return (
    <section id="section-4" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <HandCoins className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '04 · Shared Commitment' : '04 · Engagement Partagé'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'SHAWARMA MOODS' : 'SHAWARMA MOODS'}{' '}
            <span className="text-[#EAAA2F]">
              {lang === 'en' ? 'CONTRIBUTES TOO.' : 'CONTRIBUE AUSSI.'}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Guests aren’t asked to give alone. Every verified donated shawarma triggers a $1.00 cash contribution from Shawarma Moods into a separately tracked community fund.'
              : 'Les clients ne donnent pas seuls. Chaque shawarma donné vérifié déclenche 1,00 $ versé par Shawarma Moods dans un fonds communautaire distinct.'}
          </p>
        </div>

        {/* Scale Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#0B0B0C] p-1 rounded-xl border border-zinc-800 inline-flex gap-1">
            <button
              onClick={() => setScaleView('unit')}
              className={`px-4 py-2 rounded-lg text-xs font-promo font-bold uppercase tracking-wider transition-all ${
                scaleView === 'unit'
                  ? 'bg-[#EAAA2F] text-[#0B0B0C]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'Per Meal Unit' : 'Par Repas'}
            </button>
            <button
              onClick={() => setScaleView('goal')}
              className={`px-4 py-2 rounded-lg text-xs font-promo font-bold uppercase tracking-wider transition-all ${
                scaleView === 'goal'
                  ? 'bg-[#EAAA2F] text-[#0B0B0C]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'At 1,000-Meal Goal' : 'À l’Objectif 1 000'}
            </button>
          </div>
        </div>

        {/* Cinematic Equation Display */}
        <motion.div
          key={scaleView}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-5xl mx-auto bg-[#0B0B0C] border border-[#EAAA2F]/40 rounded-3xl p-8 sm:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center text-center">
            {/* Left Term */}
            <div className="md:col-span-4 p-6 rounded-2xl bg-[#141417] border border-zinc-800">
              <div className="font-headline text-6xl sm:text-7xl text-white leading-none">
                {scaleView === 'unit' ? '1' : '1,000'}
              </div>
              <div className="font-promo font-extrabold text-sm sm:text-base text-white uppercase mt-2">
                {scaleView === 'unit' ? 'DONATED SHAWARMA' : 'SHAWARMAS'}
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                {lang === 'en' ? 'Funded by customer purchases' : 'Financés par les clients'}
              </div>
            </div>

            {/* Plus */}
            <div className="md:col-span-1 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-[#EAAA2F]/15 border border-[#EAAA2F]/40 flex items-center justify-center text-[#EAAA2F]">
                <Plus className="w-6 h-6" />
              </div>
            </div>

            {/* Right Term */}
            <div className="md:col-span-4 p-6 rounded-2xl bg-[#141417] border border-[#EAAA2F]/50">
              <div className="font-headline text-6xl sm:text-7xl text-[#EAAA2F] leading-none">
                {scaleView === 'unit' ? '$1' : '$1,000'}
              </div>
              <div className="font-promo font-extrabold text-sm sm:text-base text-[#EAAA2F] uppercase mt-2">
                {scaleView === 'unit' ? 'FROM SHAWARMA MOODS' : 'RESTAURANT CONTRIBUTION'}
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                {lang === 'en' ? 'Separately tracked Community Fund' : 'Fonds communautaire séparé'}
              </div>
            </div>

            {/* Equals / Summary */}
            <div className="md:col-span-2 flex flex-col items-center justify-center p-4 rounded-2xl bg-[#EAAA2F]/10 border border-[#EAAA2F]/30">
              <Equal className="w-6 h-6 text-[#EAAA2F] mb-1" />
              <div className="font-promo font-extrabold text-xs text-white uppercase">
                {scaleView === 'unit' ? 'CO-INVESTED' : 'TOTAL IMPACT'}
              </div>
              <div className="text-[11px] text-zinc-300 mt-1">
                {scaleView === 'unit' ? 'Meal + $1 Cash' : '1,000 Meals + $1,000'}
              </div>
            </div>
          </div>

          {/* Clarification Strip */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#EAAA2F] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Important accounting distinction:</strong> The $1.00
                restaurant contribution is cash support entering a separately tracked community fund
                for partner logistics and winter relief—it is <strong className="text-white">not</strong>{' '}
                a second free shawarma.
              </span>
            </div>
            <a
              href="#section-5"
              className="shrink-0 inline-flex items-center gap-1 text-[#EAAA2F] hover:text-[#FBCE22] font-bold"
            >
              <span>Simulate 1,000 Goal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
