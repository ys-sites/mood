import React from 'react';
import { Megaphone, Users, Sparkles, Video, Share2, CheckCircle2 } from 'lucide-react';
import { CREATOR_TIERS } from '../data/campaignData';

interface CreatorAmplificationProps {
  lang: 'en' | 'fr';
}

export const CreatorAmplificationSection: React.FC<CreatorAmplificationProps> = ({ lang }) => {
  return (
    <section className="py-20 md:py-28 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Megaphone className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Phase 6 · Creator Amplification' : 'Phase 6 · Amplification Créateurs'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            ORGANIC STORYTELLING: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              COMMUNITY VOICES, ZERO FAKE VIRALITY
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'We never promise artificial viral numbers. Our creator strategy is built on genuine local relationships, sensory food capture, and inviting creators into the kitchen.'
              : 'Nous ne promettons jamais de viralité artificielle. Notre stratégie repose sur des créateurs locaux passionnés, la gourmandise en cuisine et des récits authentiques.'}
          </p>
        </div>

        {/* 3 Creator Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CREATOR_TIERS.map((tier, idx) => (
            <div
              key={tier.category}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-500/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-headline text-3xl text-zinc-600 group-hover:text-amber-500/60 transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400">
                    <Video className="w-5 h-5" />
                  </span>
                </div>
                
                <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
                  {tier.category}
                </h3>
                
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-zinc-500 uppercase font-semibold">Profile:</span>
                    <p className="text-zinc-300 font-medium">{tier.profileExample}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase font-semibold">Target Audience:</span>
                    <p className="text-amber-400/90 font-medium">{tier.reach}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-zinc-500 uppercase font-semibold">Campaign Role:</span>
                    <p className="text-zinc-400 leading-relaxed mt-0.5">{tier.role}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <div className="text-[11px] font-semibold text-zinc-300 bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                  <span className="text-amber-400 font-bold block mb-1">Activation Concept:</span>
                  {tier.approach}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campaign Calendar Timeline */}
        <div className="mt-12 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8">
          <h4 className="font-headline text-xl text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-amber-400" />
            <span>4-Week Content & Social Calendar</span>
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1.5">
              <span className="text-amber-400 font-mono-num font-bold">Week 1 (Dec 1 - 7)</span>
              <div className="text-white font-bold text-sm uppercase">Teaser & Kickoff</div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Launch the 60s cinematic trailer; announce the 1,000 meal challenge; unbox the official posters in-store.
              </p>
            </div>
            
            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1.5">
              <span className="text-amber-400 font-mono-num font-bold">Week 2 (Dec 8 - 14)</span>
              <div className="text-white font-bold text-sm uppercase">Kitchen Takeovers</div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Montréal foodies put on black gloves to roll milestone shawarmas (meals #250 & #500); reveal the $1 match counter.
              </p>
            </div>
            
            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1.5">
              <span className="text-amber-400 font-mono-num font-bold">Week 3 (Dec 15 - 21)</span>
              <div className="text-white font-bold text-sm uppercase">The Final Push</div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Student exam care packages, student club shoutouts, reaching the 750 and 1,000 meal milestones before holiday closing.
              </p>
            </div>
            
            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1.5">
              <span className="text-amber-400 font-mono-num font-bold">Week 4 (Dec 22 - 26)</span>
              <div className="text-white font-bold text-sm uppercase">Delivery & Thanks</div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Dec 23 delivery day recap; behind-the-scenes packing footage; public thank-you report to all participating Montréal guests.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
