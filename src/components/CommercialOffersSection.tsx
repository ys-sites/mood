import React from 'react';
import { Tag, Sparkles, UtensilsCrossed, Users, GraduationCap, AlertCircle } from 'lucide-react';

interface CommercialOffersProps {
  lang: 'en' | 'fr';
}

export const CommercialOffersSection: React.FC<CommercialOffersProps> = ({ lang }) => {
  return (
    <section className="py-20 md:py-28 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Tag className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Phase 8 · Commercial Support' : 'Phase 8 · Offres Commerciales'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            SUPPORTING COMMERCIAL OFFERS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              HIGH-VOLUME HOLIDAY UPGRADES
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'These commercial offers capture everyday seasonal traffic and catering volume. They support restaurant sales alongside the primary "Buy One. Give One." headline.'
              : 'Ces offres commerciales captent le trafic des fêtes et les commandes de groupe en appui à la campagne principale.'}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-300/80 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-md">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Secondary commercial offers · Not the central campaign headline · Subject to final owner pricing approval</span>
          </div>
        </div>

        {/* 3 Commercial Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Offer 1: $10 Promotional Shawarma */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-500/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                  Counter Driver
                </span>
                <span className="font-mono-num text-2xl font-bold text-white">$10.00</span>
              </div>

              <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
                $10 Holiday Solo Deal
              </h3>
              
              <div className="text-xs text-zinc-400 space-y-1">
                <span className="text-zinc-500 line-through mr-2">Normally $15.00</span>
                <span className="text-emerald-400 font-semibold">(Save 33%)</span>
                <p className="pt-2 text-zinc-300 leading-relaxed">
                  Existing high-velocity counter promotional shawarma. Perfect for walk-in traffic, quick lunch rushes, and impulse add-on purchases.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Meat Options:</span>
                  <span className="text-white font-medium">Chicken or Beef</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Toppings:</span>
                  <span className="text-white font-medium">Pickles, Turnips & Garlic</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800">
              <span className="text-[11px] text-zinc-500 block italic">
                *Pending final owner pricing confirmation
              </span>
            </div>
          </div>

          {/* Offer 2: Student Late-Night Care Pack */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-500/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/30">
                  Campus Special
                </span>
                <span className="font-mono-num text-2xl font-bold text-white">$13.50</span>
              </div>

              <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
                Student Finals Care Combo
              </h3>

              <div className="text-xs text-zinc-400 space-y-1">
                <span className="text-blue-400 font-semibold">Valid with Student ID</span>
                <p className="pt-2 text-zinc-300 leading-relaxed">
                  Targeted directly at Concordia, McGill, and UdeM students studying late into the night during December finals week.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Includes:</span>
                  <span className="text-white font-medium">Large Shawarma + Seasoned Fries</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Beverage:</span>
                  <span className="text-white font-medium">Choice of Soft Drink</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800">
              <span className="text-[11px] text-zinc-500 block italic">
                *High social buzz on TikTok / campus Discord groups
              </span>
            </div>
          </div>

          {/* Offer 3: Christmas Family Holiday Feast Box */}
          <div className="bg-zinc-900/60 border border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-400 transition-all relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 px-2.5 py-1 rounded-full shadow-sm shadow-amber-500/20">
                  Catering Hero
                </span>
                <span className="font-mono-num text-2xl font-bold text-amber-400">$139.00</span>
              </div>

              <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
                Christmas Family Box (Serves ~10)
              </h3>

              <div className="text-xs text-zinc-400 space-y-1">
                <span className="text-amber-400 font-semibold">Office Parties & Family Gatherings</span>
                <p className="pt-2 text-zinc-300 leading-relaxed">
                  High-margin catering package: 10 pre-wrapped shawarma halves, spiced rice platter, extra crispy potatoes, homemade garlic toum tub & pickled turnip trays.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Capacity:</span>
                  <span className="text-white font-medium">Feeds 8–10 People Generously</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Impact Tie-in:</span>
                  <span className="text-emerald-400 font-semibold">Funds 2 Donated Meals automatically</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800">
              <span className="text-[11px] text-amber-400 font-semibold block">
                ★ Premium high-ticket holiday revenue engine
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
