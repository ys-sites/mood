import React, { useState } from 'react';
import { Target, CheckCircle2, Flame, Sparkles, Award, Lock } from 'lucide-react';
import { MILESTONES } from '../data/campaignData';

interface LiveTrackerSectionProps {
  lang: 'en' | 'fr';
}

export const LiveTrackerSection: React.FC<LiveTrackerSectionProps> = ({ lang }) => {
  // Demo interactive state
  const [currentMeals, setCurrentMeals] = useState<number>(640);
  const goal = 1000;
  const progressPercent = Math.min(100, Math.round((currentMeals / goal) * 100));
  const restaurantFund = currentMeals * 1.0;

  return (
    <section id="tracker" className="py-20 md:py-28 border-b border-zinc-800/80 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Target className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Phase 4 · The 1,000 Meal Challenge' : 'Phase 4 · Le Défi des 1 000 Repas'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            COMMUNITY PROGRESS SIMULATOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              LIVE MILESTONE TRACKER (DEMO)
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'This interactive simulator demonstrates how in-store and online counter purchases dynamically update public progress in real time across Montréal.'
              : 'Ce simulateur interactif démontre comment les achats au comptoir et en ligne mettront à jour le compteur public en temps réel.'}
          </p>
          <div className="inline-block px-3 py-1 rounded bg-zinc-900 border border-amber-500/30 text-amber-300/90 text-xs font-mono-num font-semibold">
            [CONCEPTUAL SIMULATION · ILLUSTRATIVE DEMO FOR OWNER REVIEW]
          </div>
        </div>

        {/* Live Simulator Card */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          
          {/* Top Interactive Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
                Interactive Simulation Controls:
              </span>
              <div className="text-xs text-zinc-500">Slide to test different campaign order volumes</div>
            </div>

            {/* Quick preset buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {[150, 400, 640, 1000, 1500, 2000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setCurrentMeals(preset)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono-num font-bold transition-all ${
                    currentMeals === preset
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-500/30'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {preset} {preset === 1000 ? '★ Goal' : preset === 2000 ? '⚡ Stretch' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Range Slider */}
          <div className="py-6 space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono-num">
              <span>0 Meals</span>
              <span className="text-amber-400 font-bold">Current Slider: {currentMeals} Shawarmas</span>
              <span>2,000 Meals (Stretch Max)</span>
            </div>
            <input
              type="range"
              min="0"
              max="2000"
              step="10"
              value={currentMeals}
              onChange={(e) => setCurrentMeals(Number(e.target.value))}
              className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Primary Gauge Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-zinc-800 text-center">
            
            {/* Stat 1 */}
            <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-2xl">
              <div className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-1">
                Guest-Funded Shawarmas
              </div>
              <div className="font-headline text-5xl sm:text-6xl text-white tracking-tight">
                {currentMeals.toLocaleString()}
              </div>
              <div className="text-xs text-amber-400/90 font-medium mt-1">
                {progressPercent}% of 1,000 Target
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 bg-zinc-950/70 border border-amber-500/30 rounded-2xl relative overflow-hidden">
              <div className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-1">
                Shawarma Moods Match
              </div>
              <div className="font-headline text-5xl sm:text-6xl text-amber-400 tracking-tight">
                ${restaurantFund.toLocaleString()}
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-1">
                $1.00 Matched per Verified Meal
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-2xl">
              <div className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-1">
                Community Impact
              </div>
              <div className="font-headline text-5xl sm:text-6xl text-emerald-400 tracking-tight">
                {currentMeals.toLocaleString()}
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-1">
                Warm Meals Delivered Dec 23
              </div>
            </div>

          </div>

          {/* Progress Bar with Milestone Markers */}
          <div className="pt-8 pb-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-headline text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                <span>Road to 1,000 Shawarmas for Montréal</span>
              </span>
              <span className="font-mono-num text-sm font-bold text-amber-400">
                {currentMeals >= 1000 ? 'PRIMARY GOAL ACHIEVED! 🎉' : `${1000 - currentMeals} meals to go`}
              </span>
            </div>

            <div className="w-full bg-zinc-950 h-5 rounded-full p-1 border border-zinc-800 overflow-hidden relative">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 transition-all duration-300 shadow-lg shadow-amber-500/30"
                style={{ width: `${Math.min(100, (currentMeals / 1000) * 100)}%` }}
              />
            </div>
          </div>

          {/* Detailed Milestone Roadmap List */}
          <div className="mt-8 space-y-3">
            <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-3">
              Campaign Milestone Triggers & Kitchen Commitments:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MILESTONES.map((m) => {
                const isReached = currentMeals >= m.targetMeals;
                return (
                  <div
                    key={m.targetMeals}
                    className={`p-4 rounded-xl border transition-all ${
                      isReached
                        ? 'bg-amber-500/10 border-amber-500/40 text-white'
                        : 'bg-zinc-950/40 border-zinc-800/80 text-zinc-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-headline text-lg tracking-wide uppercase flex items-center gap-2">
                        {isReached ? (
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                        ) : (
                          <Lock className="w-4 h-4 text-zinc-600" />
                        )}
                        <span className={isReached ? 'text-white' : 'text-zinc-400'}>{m.label}</span>
                      </span>
                      <span
                        className={`text-[11px] font-mono-num font-bold px-2 py-0.5 rounded ${
                          isReached
                            ? 'bg-amber-400 text-black'
                            : 'bg-zinc-800 text-zinc-500'
                        }`}
                      >
                        {m.badge}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {m.description}
                    </p>
                    <div className="mt-2 text-[11px] font-mono-num text-amber-400/80 flex items-center justify-between pt-2 border-t border-zinc-800/60">
                      <span>Restaurant Fund: ${m.restaurantFunding}</span>
                      <span className={isReached ? 'text-emerald-400 font-semibold' : 'text-zinc-600'}>
                        {isReached ? 'ACTIVE UNLOCKED' : 'LOCKED'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
