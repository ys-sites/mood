import React from 'react';
import { Briefcase, GraduationCap, Building, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface BusinessCollaborationProps {
  lang: 'en' | 'fr';
}

export const BusinessCollaborationSection: React.FC<BusinessCollaborationProps> = ({ lang }) => {
  return (
    <section className="py-20 md:py-28 border-b border-zinc-800/80 bg-zinc-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Phase 7 · B2B Partnerships' : 'Phase 7 · Partenariats B2B'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            BUSINESS COLLABORATION: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              EXPANDING THE IMPACT NETWORK
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'Beyond individual walk-in customers, the campaign can scale exponentially by partnering with local Montréal education academies, corporate offices, and student organizations.'
              : 'Au-delà des clients individuels, la campagne peut accélérer son impact en s\'associant à des académies montréalaises et des entreprises locales.'}
          </p>
        </div>

        {/* Featured Case Study: Kin Academy (Hypothetical Concept) */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Conceptual Badge & Summary */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/40">
                  <GraduationCap className="w-4 h-4" /> Hypothetical Case Study
                </span>
                <span className="text-xs text-zinc-400 font-mono-num font-semibold">
                  [SUBJECT TO APPROVAL & MUTUAL AGREEMENT]
                </span>
              </div>

              <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase tracking-wide">
                Kin Academy × Shawarma Moods
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                As a prime example of high-affinity cross-pollination, Shawarma Moods can partner with <strong className="text-white">Kin Academy</strong> (a Montréal-based educational institution preparing students for intensive career milestones).
              </p>

              {/* Proposed Mechanism Box */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2 text-xs">
                <div className="font-headline text-base text-amber-400 uppercase tracking-wide">
                  The Proposed Mechanism:
                </div>
                <div className="text-zinc-300 leading-relaxed">
                  For every student who enrolls in a designated December crash-course or intensive workshop, Kin Academy sponsors <strong className="text-white font-semibold">one complete holiday shawarma meal</strong> for someone in need through Shawarma Moods.
                </div>
                <div className="pt-2 flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>1 Student Enrollment = 1 Fresh Shawarma Funded</span>
                </div>
              </div>

              <div className="text-xs text-zinc-400 italic">
                *Note: Kin Academy is presented purely as a realistic illustrative proposal to demonstrate institutional co-marketing feasibility.
              </div>
            </div>

            {/* Right Column: Partnership Value Matrix */}
            <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800/90 rounded-2xl p-6 space-y-4">
              <h4 className="font-headline text-lg text-white uppercase tracking-wider pb-2 border-b border-zinc-800 flex items-center justify-between">
                <span>Mutual Win Matrix</span>
                <span className="text-xs text-amber-400 font-mono-num font-normal">B2B Tier</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-amber-400 block mb-0.5">For Partner (Kin Academy):</span>
                  <p className="text-zinc-300">
                    Provides an inspiring, purpose-driven incentive for students enrolling during the holiday season. Elevates brand prestige and civic impact in Montréal.
                  </p>
                </div>

                <div>
                  <span className="font-bold text-amber-400 block mb-0.5">For Shawarma Moods:</span>
                  <p className="text-zinc-300">
                    Guarantees bulk batched meal orders (e.g. 50–100 meals per cohort) paid upfront, accelerating progress toward the 1,000 meal milestone.
                  </p>
                </div>

                <div>
                  <span className="font-bold text-amber-400 block mb-0.5">For the Community:</span>
                  <p className="text-zinc-300">
                    Transforms career education investments into hot, dignified food for Montréal's vulnerable populations during freezing weather.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
