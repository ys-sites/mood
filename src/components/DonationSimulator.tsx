import React, { useState } from 'react';
import { Target, CheckCircle2, Lock, AlertTriangle, Store } from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface DonationSimulatorProps {
  lang: Language;
}

const MILESTONES = [
  { target: 250, label: 'Batch 1 Reserved', detail: 'Initial protein & checkered packaging allocated.' },
  { target: 500, label: 'Halfway Momentum', detail: 'Partner shelter intake schedule & kitchen shifts locked.' },
  { target: 750, label: 'Thermal Mobilization', detail: 'Insulated Cambro carriers & delivery route finalized.' },
  { target: 1000, label: 'Initial Goal Reached', detail: '1,000 meals funded + $1,000 restaurant contribution.' },
  { target: 2000, label: 'Conditional Stretch', detail: 'Only unlocked after capacity & budget approval.' },
];

export const DonationSimulator: React.FC<DonationSimulatorProps> = ({ lang }) => {
  const [mealsFunded, setMealsFunded] = useState<number>(650);
  const [networkMode, setNetworkMode] = useState<'flagship' | 'chain'>('chain');

  const initialGoal = 1000;
  const restaurantContribution = mealsFunded * 1; // Deterministic: 800 -> $800, 1,000 -> $1,000
  const progressPct = Math.min(100, Math.round((mealsFunded / initialGoal) * 100));
  const remainingMeals = Math.max(0, initialGoal - mealsFunded);
  const perLocationEstimate = networkMode === 'chain' ? Math.round(mealsFunded / 8) : mealsFunded;

  return (
    <section id="section-5" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '05 · The 1,000-Meal Challenge' : '05 · Le Défi des 1 000 Repas'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'INTERACTIVE CHALLENGE TRACKER' : 'SUIVI INTERACTIF DU DÉFI'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Simulate customer-funded meal progress toward the 1,000-meal initial goal and optional 2,000-meal stretch.'
              : 'Simulez la progression des repas financés vers l’objectif initial de 1 000 repas.'}
          </p>

          {/* Mandatory Non-Live Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#FBCE22]/10 border border-[#FBCE22]/50 text-[#FBCE22] text-xs font-mono-num font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>DEMONSTRATION — NOT LIVE DONATION DATA.</span>
          </div>
        </div>

        {/* Simulator Card */}
        <div className="max-w-5xl mx-auto bg-[#141417] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Top Controls: Presets & Scope Toggle */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div className="flex flex-wrap gap-2">
              {[250, 500, 750, 800, 1000, 2000].map((val) => (
                <button
                  key={val}
                  onClick={() => setMealsFunded(val)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono-num font-bold transition-all ${
                    mealsFunded === val
                      ? 'bg-[#EAAA2F] text-[#0B0B0C]'
                      : 'bg-[#0B0B0C] text-zinc-300 border border-zinc-800 hover:border-[#EAAA2F]/50'
                  }`}
                >
                  {val.toLocaleString()} {val === 1000 ? '★' : val === 2000 ? '(Stretch)' : ''}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-[#0B0B0C] p-1 rounded-xl border border-zinc-800 text-xs">
              <button
                onClick={() => setNetworkMode('chain')}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 ${
                  networkMode === 'chain' ? 'bg-[#333333] text-white' : 'text-zinc-400'
                }`}
              >
                <Store className="w-3.5 h-3.5 text-[#EAAA2F]" />
                <span>8 Locations (~{perLocationEstimate}/store)</span>
              </button>
              <button
                onClick={() => setNetworkMode('flagship')}
                className={`px-3 py-1.5 rounded-lg font-semibold ${
                  networkMode === 'flagship' ? 'bg-[#333333] text-white' : 'text-zinc-400'
                }`}
              >
                1 Flagship
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono-num text-zinc-400">
              <span>0</span>
              <span className="text-[#EAAA2F] font-bold">
                Simulated Funded Meals: {mealsFunded.toLocaleString()}
              </span>
              <span>2,000 (Stretch)</span>
            </div>
            <input
              type="range"
              min={0}
              max={2000}
              step={10}
              value={mealsFunded}
              onChange={(e) => setMealsFunded(Number(e.target.value))}
              aria-label="Simulate funded meals"
              className="w-full h-3 bg-[#0B0B0C] rounded-lg appearance-none cursor-pointer accent-[#EAAA2F]"
            />
          </div>

          {/* 4 Required Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#0B0B0C] border border-zinc-800 rounded-2xl p-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Meals Funded (Demo)
              </div>
              <div className="font-headline text-4xl sm:text-5xl text-white mt-1">
                {mealsFunded.toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">
                Distributed so far: <span className="text-zinc-300 font-semibold">0</span> (Target Dec 23)
              </div>
            </div>

            <div className="bg-[#0B0B0C] border border-[#EAAA2F]/40 rounded-2xl p-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#EAAA2F]">
                Restaurant Contribution
              </div>
              <div className="font-headline text-4xl sm:text-5xl text-[#EAAA2F] mt-1">
                ${restaurantContribution.toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1">$1 × {mealsFunded.toLocaleString()} verified</div>
            </div>

            <div className="bg-[#0B0B0C] border border-zinc-800 rounded-2xl p-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Progress to 1,000 Goal
              </div>
              <div className="font-headline text-4xl sm:text-5xl text-white mt-1">
                {progressPct}%
              </div>
              <div className="text-[11px] text-emerald-400 mt-1">
                {mealsFunded > 1000 ? `+${(mealsFunded - 1000).toLocaleString()} toward stretch` : 'Initial milestone'}
              </div>
            </div>

            <div className="bg-[#0B0B0C] border border-zinc-800 rounded-2xl p-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Remaining to Goal
              </div>
              <div className="font-headline text-4xl sm:text-5xl text-white mt-1">
                {remainingMeals.toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1">
                {remainingMeals === 0 ? 'Initial 1,000 goal met!' : 'Meals left to hit 1,000'}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full h-4 bg-[#0B0B0C] rounded-full p-0.5 border border-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#B78D1D] via-[#EAAA2F] to-[#FBCE22] transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Milestones Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {MILESTONES.map((m) => {
              const reached = mealsFunded >= m.target;
              return (
                <div
                  key={m.target}
                  className={`p-4 rounded-xl border transition-all ${
                    reached
                      ? 'bg-[#EAAA2F]/10 border-[#EAAA2F]/50 text-white'
                      : 'bg-[#0B0B0C] border-zinc-800 text-zinc-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono-num text-sm font-bold text-[#EAAA2F]">
                      {m.target.toLocaleString()}
                    </span>
                    {reached ? (
                      <CheckCircle2 className="w-4 h-4 text-[#EAAA2F]" />
                    ) : (
                      <Lock className="w-4 h-4 text-zinc-600" />
                    )}
                  </div>
                  <div className="font-bold text-xs text-white mb-1">{m.label}</div>
                  <p className="text-[11px] text-zinc-400 leading-snug">{m.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
