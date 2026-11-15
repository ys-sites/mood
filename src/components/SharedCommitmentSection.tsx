import React from 'react';
import { DollarSign, ShieldAlert, Award, TrendingUp, HandCoins } from 'lucide-react';

interface SharedCommitmentProps {
  lang: 'en' | 'fr';
}

export const SharedCommitmentSection: React.FC<SharedCommitmentProps> = ({ lang }) => {
  return (
    <section className="py-20 md:py-24 border-b border-zinc-800/80 bg-zinc-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <HandCoins className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Phase 3 · Shared Commitment' : 'Phase 3 · Engagement Partagé'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            OUR SKIN IN THE GAME: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              SHAWARMA MOODS CONTRIBUTES +$1 PER MEAL
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'Real community leadership requires co-investment. For every single shawarma donated by a customer, Shawarma Moods contributes $1.00 cash from restaurant revenue into a separately accounted fund.'
              : 'Un leadership communautaire authentique exige un co-investissement. Pour chaque shawarma offert par un client, Shawarma Moods verse 1,00 $ comptant dans un fonds dédié.'}
          </p>
        </div>

        {/* 2-Column Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Big Graphic Stat */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-500/20 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-3xl p-8 sm:p-10 relative overflow-hidden text-center flex flex-col items-center justify-center">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-xs uppercase font-bold text-amber-400 tracking-widest mb-2">
              Restaurant Pledge
            </span>
            <div className="font-headline text-7xl sm:text-8xl text-white tracking-tight leading-none mb-2">
              +$1.00
            </div>
            <div className="font-headline text-2xl text-amber-400 uppercase tracking-wider mb-4">
              PER VERIFIED DONATED SHAWARMA
            </div>
            <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
              When we achieve our goal of 1,000 meals, Shawarma Moods delivers <strong className="text-white font-semibold">1,000 fresh shawarmas + $1,000 in dedicated community funding</strong>.
            </p>

            <div className="mt-6 w-full pt-6 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-300 font-mono-num">
              <span>Goal: 1,000 Meals</span>
              <span className="text-amber-400 font-bold">$1,000 Contribution</span>
            </div>
          </div>

          {/* Right Column: Why this is Essential for Brand Credibility */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-headline text-xl text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>1. Eliminates Cynicism & "Charity-Washing"</span>
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Modern consumers quickly spot businesses that ask customers to donate while contributing nothing themselves. By matching each donated meal with an unprompted $1 cash investment, Shawarma Moods proves genuine alignment with the community.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-headline text-xl text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                <span>2. Transparent Separate Accounting</span>
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The restaurant's $1 match is held in a segregated ledger specifically reserved for delivery logistics, packaging, and direct winter shelter contributions. No administrative bloat or hidden overhead deductions.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-headline text-xl text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span>3. Predictable, Capped Financial Exposure</span>
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                For the restaurant owner, risk is fully bounded: at the initial target of 1,000 meals, the business contribution is exactly $1,000. Any stretch goal (such as 2,000 meals) requires explicit owner authorization before unlocking.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
