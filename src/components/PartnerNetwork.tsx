import React, { useState } from 'react';
import { Briefcase, GraduationCap, Dumbbell, ShoppingBag, Wrench, Utensils, ShieldCheck } from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface PartnerNetworkProps {
  lang: Language;
}

const SECTORS = [
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    example: 'Kin Academy (Illustrative Example)',
    model: '1 qualifying crash-course enrollment = 1 donated shawarma funded.',
    note: 'Proposed concept only — not an existing partner commitment.',
  },
  {
    id: 'fitness',
    name: 'Fitness',
    icon: Dumbbell,
    example: 'Local Gyms & Boxing Clubs',
    model: 'Holiday class pass or charity workout funds 10–25 shawarmas.',
    note: 'Great fit with Shawarma Moods’ high-protein, active youth audience.',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingBag,
    example: 'Neighbourhood Boutiques & Barber Shops',
    model: 'Match 1 meal for every gift card or holiday bundle sold in-store.',
    note: 'Cross-promotes local foot traffic in Montréal, Laval & Oakville.',
  },
  {
    id: 'services',
    name: 'Local Services',
    icon: Wrench,
    example: 'Clinics, Tech Shops & Agencies',
    model: 'Direct team sponsorship of a 25, 50, or 100-meal holiday block.',
    note: 'Replaces generic holiday gifts with tangible local meals.',
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    icon: Utensils,
    example: 'Complementary Beverage / Dessert Spots',
    model: 'Optional co-hosted dessert or drink pairing to add to Dec 23 boxes.',
    note: 'Shawarma Moods remains the sole lead and owner of the campaign.',
  },
];

export const PartnerNetwork: React.FC<PartnerNetworkProps> = ({ lang }) => {
  const [activeSectorId, setActiveSectorId] = useState<string>('education');
  const activeSector = SECTORS.find((s) => s.id === activeSectorId) ?? SECTORS[0];

  return (
    <section id="section-9" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '09 · Business Partnerships' : '09 · Partenariats d’Affaires'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'LOCAL B2B EXPANSION:' : 'EXPANSION B2B :'}{' '}
            <span className="text-[#EAAA2F]">
              {lang === 'en' ? 'SHAWARMA MOODS AT THE CENTER' : 'SHAWARMA MOODS AU CENTRE'}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Later-stage business collaboration allows trusted local brands to sponsor meal blocks while Shawarma Moods retains full ownership and leadership of the campaign.'
              : 'Des entreprises locales peuvent parrainer des blocs de repas, tout en laissant à Shawarma Moods la pleine direction de la campagne.'}
          </p>
        </div>

        {/* Interactive Network Visualization + Kin Academy Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: Hub-and-Spoke Interactive Network */}
          <div className="lg:col-span-6 bg-[#141417] border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 rounded-2xl bg-[#EAAA2F] text-[#0B0B0C] font-headline text-2xl tracking-wider uppercase shadow-lg shadow-[#EAAA2F]/20">
                SHAWARMA MOODS (CAMPAIGN LEAD)
              </div>
              <div className="text-[11px] text-zinc-400 mt-2">
                Click any sector node below to explore how local businesses plug in
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SECTORS.map((sec) => {
                const Icon = sec.icon;
                const isActive = sec.id === activeSector.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectorId(sec.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col gap-2 ${
                      isActive
                        ? 'bg-[#EAAA2F]/15 border-[#EAAA2F] text-white'
                        : 'bg-[#0B0B0C] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#EAAA2F]' : 'text-zinc-500'}`} />
                    <span className="font-promo font-bold text-xs uppercase">{sec.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Sector / Kin Academy Detail */}
          <div className="lg:col-span-6 bg-[#141417] border border-[#EAAA2F]/40 rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-[#EAAA2F]/15 text-[#EAAA2F] border border-[#EAAA2F]/30 text-xs font-bold uppercase">
                {activeSector.name} Sector
              </span>
              <span className="text-[11px] font-mono-num text-zinc-400">
                ILLUSTRATIVE CONCEPT · NOT CONFIRMED
              </span>
            </div>

            <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase">
              {activeSector.example}
            </h3>

            <div className="p-4 rounded-xl bg-[#0B0B0C] border border-zinc-800 space-y-1.5">
              <div className="text-[11px] font-bold uppercase text-[#EAAA2F] tracking-wider">
                Proposed Contribution Model
              </div>
              <p className="text-sm text-white font-medium">{activeSector.model}</p>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">{activeSector.note}</p>

            <div className="pt-3 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-[#EAAA2F] shrink-0" />
              <span>
                Campaign branding, kitchen standards, and distribution remain 100% owned by Shawarma Moods.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
