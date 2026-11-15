import React from 'react';
import { Calendar, ShieldCheck, Thermometer, Truck, Heart, CameraOff, CheckCircle } from 'lucide-react';

interface CommunityDeliveryProps {
  lang: 'en' | 'fr';
}

export const CommunityDeliverySection: React.FC<CommunityDeliveryProps> = ({ lang }) => {
  return (
    <section className="py-20 md:py-28 border-b border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Truck className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Phase 5 · Community Delivery & Logistics' : 'Phase 5 · Distribution & Logistique'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            DECEMBER 23 DELIVERY PLAN: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              FOOD SAFETY, DIGNITY & REPUTATION
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'Delivering 1,000 hot meals in the middle of winter requires professional kitchen execution, strict temperature compliance, and deep ethical respect for all recipients.'
              : 'Livrer 1 000 repas chauds en plein hiver exige une exécution professionnelle, le respect strict de la chaîne thermique et une dignité absolue.'}
          </p>
        </div>

        {/* 3-Part Operational Blueprint */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Temperature & Food Safety */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Thermometer className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
              1. HACCP & Thermal Chain
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every shawarma is freshly rolled, foil-wrapped, and packed in certified commercial insulated hot boxes (Cambro style). Internal product temperature is monitored and logged to ensure meals remain well above the mandatory 60°C safety threshold upon arrival.
            </p>
            <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-zinc-800">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dual 4-hour kitchen batching windows</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Heavy-duty insulated transport carriers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-time digital probe temperature logging</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Vetted Non-Profit Coordination */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
              2. Shelter Coordination
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Meals will be scheduled directly with verified Montréal shelters, day centers, and youth community spaces (such as Old Brewery Mission or local community hubs, pending formal alignment). Delivery is coordinated to integrate seamlessly with their holiday meal schedule.
            </p>
            <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-zinc-800">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pre-confirmed intake counts per location</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero food waste through scheduled drop-offs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nonprofit intake verification receipt</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Consent & Dignity Policy */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <CameraOff className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
              3. Dignified Storytelling Policy
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We uphold a strict ethical boundary: <strong className="text-white">no cameras in the faces of vulnerable individuals</strong>. Content capturing focuses solely on the sizzle of the Shawarma Moods kitchen, the chefs in black gloves, the packaging line, and the handoff of sealed thermal carriers.
            </p>
            <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-zinc-800">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No invasive filming or patronizing saviorism</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Spotlight stays on kitchen craft & volunteer team</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protects brand integrity and customer respect</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Operational Timeline Ribbon */}
        <div className="mt-12 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8">
          <h4 className="font-headline text-xl text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-500" />
            <span>Target Distribution Day Timeline (Dec 23, 2026)</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-mono-num">
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <div className="text-amber-400 font-bold text-sm">07:00 - 10:30 AM</div>
              <div className="text-white font-sans font-semibold mt-1">Batch 1 Kitchen Prep</div>
              <div className="text-zinc-500 font-sans mt-0.5">Spit roasting, slicing & wrapping 500 meals into thermal bins.</div>
            </div>
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <div className="text-amber-400 font-bold text-sm">11:00 AM - 1:00 PM</div>
              <div className="text-white font-sans font-semibold mt-1">Lunch Distribution Run</div>
              <div className="text-zinc-500 font-sans mt-0.5">Direct transport to primary shelter partner for hot holiday lunch.</div>
            </div>
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <div className="text-amber-400 font-bold text-sm">01:30 - 04:30 PM</div>
              <div className="text-white font-sans font-semibold mt-1">Batch 2 Kitchen Prep</div>
              <div className="text-zinc-500 font-sans mt-0.5">Rolling second wave of 500 meals with fresh garlic toum & fries.</div>
            </div>
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <div className="text-amber-400 font-bold text-sm">05:00 - 07:30 PM</div>
              <div className="text-white font-sans font-semibold mt-1">Evening Holiday Dinner Run</div>
              <div className="text-zinc-500 font-sans mt-0.5">Delivery to evening meal services and youth support hubs across Montréal.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
