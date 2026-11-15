import React, { useState } from 'react';
import { Smartphone, Film, Users, Plus, CheckCircle2, Flame } from 'lucide-react';
import { REEL_CONCEPTS, Language } from '../data/campaignConstants';

interface CreatorReelShowcaseProps {
  lang: Language;
}

interface OutreachRow {
  id: string;
  tier: string;
  targetExample: string;
  angle: string;
  status: 'Proposed' | 'Voluntary Invite' | 'Drafted';
}

const INITIAL_OUTREACH: OutreachRow[] = [
  {
    id: 'cr-1',
    tier: 'Owner-Led (In-House)',
    targetExample: '@shawarmamoods (Owner on mic)',
    angle: 'Launch Reel & 500/1,000 milestone check-ins under the yellow MOOD neon.',
    status: 'Proposed',
  },
  {
    id: 'cr-2',
    tier: 'Local Foodies (QC & ON)',
    targetExample: 'Montréal / Laval / Oakville food reviewers',
    angle: 'Voluntary behind-the-counter cameo rolling a shawarma in black gloves.',
    status: 'Voluntary Invite',
  },
  {
    id: 'cr-3',
    tier: 'Campus & Community',
    targetExample: 'Concordia / McGill / UdeM student clubs',
    angle: 'Tag your shawarma partner for finals week + Dec 23 packing recap.',
    status: 'Drafted',
  },
];

export const CreatorReelShowcase: React.FC<CreatorReelShowcaseProps> = ({ lang }) => {
  const [selectedReelId, setSelectedReelId] = useState<string>(REEL_CONCEPTS[0].id);
  const [outreachPlan, setOutreachPlan] = useState<OutreachRow[]>(INITIAL_OUTREACH);
  const [newCreator, setNewCreator] = useState('');
  const [newAngle, setNewAngle] = useState('');

  const activeReel = REEL_CONCEPTS.find((r) => r.id === selectedReelId) ?? REEL_CONCEPTS[0];

  const addOutreachItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCreator.trim()) return;
    setOutreachPlan((prev) => [
      ...prev,
      {
        id: `cr-${Date.now()}`,
        tier: 'Custom Entry',
        targetExample: newCreator.trim(),
        angle: newAngle.trim() || 'Voluntary behind-the-counter feature.',
        status: 'Proposed',
      },
    ]);
    setNewCreator('');
    setNewAngle('');
  };

  return (
    <section id="section-8" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <Film className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '08 · Content Creator Strategy' : '08 · Stratégie Créateurs'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'FIVE REEL CONCEPTS &' : 'CINQ CONCEPTS REELS &'}{' '}
            <span className="text-[#EAAA2F]">
              {lang === 'en' ? 'VOLUNTARY OUTREACH' : 'COLLABORATION ORGANIQUE'}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Grounded in @shawarmamoods’ existing visual DNA: owner on mic, black gloves, sizzle macros, and street-level energy. No fabricated endorsements or guaranteed view counts.'
              : 'Aligné sur l’ADN actuel de @shawarmamoods : gants noirs, grillades et authenticité. Aucune promesse de viralité artificielle.'}
          </p>
        </div>

        {/* Interactive Reel Selector + Mobile Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left: 5 Reel Concept Tabs */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono-num uppercase text-zinc-400 font-bold mb-2">
              Select a Proposed Instagram Reel Concept:
            </div>
            {REEL_CONCEPTS.map((reel) => {
              const isSelected = reel.id === activeReel.id;
              return (
                <button
                  key={reel.id}
                  onClick={() => setSelectedReelId(reel.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-[#0B0B0C] border-[#EAAA2F] shadow-lg shadow-[#EAAA2F]/10'
                      : 'bg-[#0B0B0C]/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-headline text-xl text-white uppercase tracking-wide">
                      {reel.title}
                    </span>
                    <span className="text-[10px] font-mono-num font-bold px-2 py-0.5 rounded bg-[#EAAA2F]/15 text-[#EAAA2F] border border-[#EAAA2F]/30">
                      {reel.format}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">{reel.hook}</p>

                  {isSelected && (
                    <ul className="mt-3 pt-3 border-t border-zinc-800 space-y-1.5 text-xs text-zinc-300">
                      {reel.beats.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EAAA2F] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Realistic Mobile Reel Frame Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[300px] bg-[#0B0B0C] border-[6px] border-[#333333] rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-[9/16] flex flex-col justify-between p-4">
              {/* Background Visual */}
              <img
                src="/buy-one-give-one-poster.jpg"
                alt="Reel Concept Preview"
                className="absolute inset-0 w-full h-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-[#0B0B0C]/80" />

              {/* Top Phone Notch / Header */}
              <div className="relative z-10 flex items-center justify-between text-[10px] text-white font-semibold pt-1">
                <span className="px-2 py-0.5 rounded bg-black/60 border border-zinc-700">
                  CONCEPT REEL
                </span>
                <span className="font-mono-num text-[#EAAA2F]">{activeReel.format}</span>
              </div>

              {/* Center Hook Overlay */}
              <div className="relative z-10 my-auto text-center space-y-2 px-2">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EAAA2F] text-[#0B0B0C] font-promo font-extrabold text-[10px] uppercase">
                  <Flame className="w-3 h-3" />
                  <span>{activeReel.status}</span>
                </div>
                <div className="font-headline text-2xl text-white uppercase leading-tight drop-shadow">
                  {activeReel.title}
                </div>
                <p className="text-[11px] text-zinc-200 bg-black/65 p-2.5 rounded-xl border border-zinc-800 leading-snug">
                  {activeReel.hook}
                </p>
              </div>

              {/* Bottom Instagram UI Chrome */}
              <div className="relative z-10 space-y-2 pb-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#EAAA2F] flex items-center justify-center text-[#0B0B0C] font-headline text-sm">
                    SM
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">@shawarmamoods</div>
                    <div className="text-[10px] text-[#EAAA2F]">Partage le MOOD · Noël 2026</div>
                  </div>
                </div>
                <div className="text-[10px] text-zinc-300 line-clamp-2">
                  Buy two shawarmas: one for you, one donated Dec 23 + $1 from Shawarma Moods.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editable Creator Outreach Content Plan */}
        <div className="bg-[#0B0B0C] border border-zinc-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="font-headline text-2xl text-white uppercase flex items-center gap-2">
                <Users className="w-5 h-5 text-[#EAAA2F]" />
                <span>Editable Creator Outreach Plan (Local Draft)</span>
              </h3>
              <p className="text-xs text-zinc-400">
                Add local creators or store-specific video ideas during the owner review meeting.
              </p>
            </div>
            <span className="text-[11px] font-mono-num text-[#EAAA2F] bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 px-2.5 py-1 rounded">
              VOLUNTARY · NO GUARANTEED REACH
            </span>
          </div>

          <div className="overflow-x-auto mb-5">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase font-mono-num">
                  <th className="pb-2.5 pr-4">Tier</th>
                  <th className="pb-2.5 pr-4">Creator / Channel</th>
                  <th className="pb-2.5 pr-4">Proposed Angle</th>
                  <th className="pb-2.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/70">
                {outreachPlan.map((row) => (
                  <tr key={row.id}>
                    <td className="py-3 pr-4 font-semibold text-[#EAAA2F]">{row.tier}</td>
                    <td className="py-3 pr-4 text-white font-medium">{row.targetExample}</td>
                    <td className="py-3 pr-4 text-zinc-400">{row.angle}</td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 text-[10px] font-mono-num">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <form onSubmit={addOutreachItem} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <input
              type="text"
              value={newCreator}
              onChange={(e) => setNewCreator(e.target.value)}
              placeholder="Creator handle or community group..."
              className="sm:col-span-4 bg-[#141417] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#EAAA2F]"
            />
            <input
              type="text"
              value={newAngle}
              onChange={(e) => setNewAngle(e.target.value)}
              placeholder="Content angle (e.g., behind-the-counter wrap)..."
              className="sm:col-span-6 bg-[#141417] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#EAAA2F]"
            />
            <button
              type="submit"
              className="sm:col-span-2 bg-[#EAAA2F] hover:bg-[#FBCE22] text-[#0B0B0C] font-bold text-xs uppercase rounded-xl px-3 py-2 flex items-center justify-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
