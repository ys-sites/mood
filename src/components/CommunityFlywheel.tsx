import React, { useState } from 'react';
import { RefreshCw, ArrowRight, Info } from 'lucide-react';
import { FLYWHEEL_STAGES, Language } from '../data/campaignConstants';

interface CommunityFlywheelProps {
  lang: Language;
}

export const CommunityFlywheel: React.FC<CommunityFlywheelProps> = ({ lang }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeStage = FLYWHEEL_STAGES[selectedIndex];

  // Calculate circular node coordinates on a 380x380 SVG
  const cx = 190;
  const cy = 190;
  const radius = 136;

  return (
    <section id="section-7" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '07 · The Community Growth Flywheel' : '07 · Volant de Croissance'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'HOW ONE MEAL SPARKS' : 'COMMENT UN REPAS CRÉE'}{' '}
            <span className="text-[#EAAA2F]">
              {lang === 'en' ? 'A NEIGHBOURHOOD MOVEMENT' : 'UN ÉLAN COLLECTIF'}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Click any stage on the flywheel to inspect how customer generosity naturally fuels word-of-mouth and business participation. Proposed marketing mechanism—not a guaranteed growth outcome.'
              : 'Cliquez sur chaque étape du cercle pour explorer le mécanisme proposé. Modèle conceptuel, sans garantie de viralité.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Left: Interactive SVG Circular Flywheel */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-square">
              <svg viewBox="0 0 380 380" className="w-full h-full overflow-visible">
                {/* Outer Ring Track */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="none"
                  stroke="#27272A"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Active Highlight Arc */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="none"
                  stroke="#EAAA2F"
                  strokeWidth="3"
                  strokeOpacity="0.45"
                />

                {/* Center Hub */}
                <circle cx={cx} cy={cy} r="58" fill="#141417" stroke="#EAAA2F" strokeWidth="2" />
                <text
                  x={cx}
                  y={cy - 6}
                  textAnchor="middle"
                  className="fill-[#EAAA2F] font-headline text-xl tracking-wider"
                >
                  SPREAD THE
                </text>
                <text
                  x={cx}
                  y={cy + 16}
                  textAnchor="middle"
                  className="fill-white font-headline text-2xl tracking-wider"
                >
                  MOOD
                </text>

                {/* 7 Interactive Nodes */}
                {FLYWHEEL_STAGES.map((stage, idx) => {
                  const angle = (idx * (2 * Math.PI)) / FLYWHEEL_STAGES.length - Math.PI / 2;
                  const x = cx + radius * Math.cos(angle);
                  const y = cy + radius * Math.sin(angle);
                  const isActive = idx === selectedIndex;

                  return (
                    <g
                      key={stage.id}
                      onClick={() => setSelectedIndex(idx)}
                      className="cursor-pointer group"
                    >
                      <circle
                        cx={x}
                        cy={y}
                        r={isActive ? 26 : 22}
                        fill={isActive ? '#EAAA2F' : '#141417'}
                        stroke={isActive ? '#FBCE22' : '#3F3F46'}
                        strokeWidth={isActive ? 3 : 2}
                        className="transition-all duration-200"
                      />
                      <text
                        x={x}
                        y={y + 5}
                        textAnchor="middle"
                        className={`font-mono-num text-xs font-bold ${
                          isActive ? 'fill-[#0B0B0C]' : 'fill-white'
                        }`}
                      >
                        {stage.step}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right: Stage List & Active Explanation */}
          <div className="lg:col-span-6 space-y-5">
            {/* Active Stage Detail Card */}
            <div className="bg-[#141417] border-2 border-[#EAAA2F]/60 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-num text-xs font-bold uppercase text-[#EAAA2F]">
                  Stage {activeStage.step} of 07
                </span>
                <button
                  onClick={() => setSelectedIndex((selectedIndex + 1) % FLYWHEEL_STAGES.length)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#EAAA2F] hover:text-[#FBCE22]"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <h3 className="font-headline text-3xl text-white uppercase tracking-wide">
                {lang === 'en' ? activeStage.label : activeStage.labelFr}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                {activeStage.description}
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-800 text-xs font-mono-num text-[#EAAA2F]">
                {activeStage.mechanism}
              </div>
            </div>

            {/* Clickable 7-Stage Sequence Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FLYWHEEL_STAGES.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`text-left px-3.5 py-2.5 rounded-xl border text-xs transition-all flex items-center gap-2.5 ${
                    idx === selectedIndex
                      ? 'bg-[#EAAA2F] text-[#0B0B0C] border-[#EAAA2F] font-bold'
                      : 'bg-[#141417] text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <span className="font-mono-num text-[11px] opacity-80">{stage.step}</span>
                  <span className="font-promo uppercase tracking-tight truncate">
                    {lang === 'en' ? stage.label : stage.labelFr}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-start gap-2 text-[11px] text-zinc-500">
              <Info className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
              <span>
                Proposed organic growth loop only. Does not guarantee virality, earned impressions, or automated partner sign-ups.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
