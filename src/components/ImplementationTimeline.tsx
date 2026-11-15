import React, { useState } from 'react';
import { Calendar, CheckCircle2, Link2, Users } from 'lucide-react';
import { IMPLEMENTATION_PHASES, Language } from '../data/campaignConstants';

interface ImplementationTimelineProps {
  lang: Language;
}

export const ImplementationTimeline: React.FC<ImplementationTimelineProps> = ({ lang }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activePhase = IMPLEMENTATION_PHASES[selectedIndex];

  return (
    <section
      id="section-14"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80"
    >
      {/* Header */}
      <div className="mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#EAAA2F] mb-3">
          <Calendar className="w-4 h-4" />
          {lang === 'fr' ? '14 · Calendrier d’Exécution Proposé' : '14 · Marketing Implementation Plan'}
        </span>
        <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
          {lang === 'fr'
            ? 'Feuille de Route · Nov à Déc 2026'
            : 'Proposed Rollout · Nov to Dec 31, 2026'}
        </h2>
        <p className="text-zinc-400 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
          {lang === 'fr'
            ? 'Séquence opérationnelle proposée de l’approbation de novembre jusqu’au rapport d’impact de fin d’année. Toutes les dates sont sujettes à validation.'
            : 'End-to-end execution schedule from November owner alignment through the December 23 proposed distribution and year-end reconciliation.'}
        </p>
      </div>

      {/* Interactive Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Phase Selector Rail */}
        <div className="lg:col-span-5 space-y-2.5">
          {IMPLEMENTATION_PHASES.map((item, index) => {
            const isActive = selectedIndex === index;
            return (
              <button
                key={item.window}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                  isActive
                    ? 'bg-[#EAAA2F]/10 border-[#EAAA2F]'
                    : 'bg-[#141416] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                    isActive ? 'bg-[#EAAA2F] text-[#0B0B0C]' : 'bg-zinc-900 text-zinc-400'
                  }`}
                >
                  0{index + 1}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#EAAA2F]">
                    {item.window}
                  </div>
                  <div className="font-headline text-xl text-white uppercase tracking-wide">
                    {item.phase}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">{item.owner}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Detail Panel */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-zinc-800 h-full flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EAAA2F]">
                    {activePhase.window}
                  </span>
                  <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase mt-1">
                    {activePhase.phase}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs text-zinc-200">
                  <Users className="w-3.5 h-3.5 text-[#EAAA2F]" />
                  <span>{activePhase.owner}</span>
                </span>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Key Action Items
                </div>
                <ul className="space-y-3">
                  {activePhase.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0B0C] border border-zinc-800/80 text-sm text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#EAAA2F] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FBCE22]/10 border border-[#FBCE22]/30 flex items-center gap-3 text-xs text-[#FBCE22]">
              <Link2 className="w-4 h-4 shrink-0" />
              <div>
                <span className="font-bold uppercase tracking-wider">Gate Dependency: </span>
                <span className="text-zinc-200">{activePhase.dependency}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
