import React from 'react';
import { ShoppingBag, HeartHandshake, Utensils, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

interface MechanismSectionProps {
  lang: 'en' | 'fr';
}

export const MechanismSection: React.FC<MechanismSectionProps> = ({ lang }) => {
  return (
    <section id="mechanism" className="py-20 md:py-28 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Phase 2 · The Core Mechanism' : 'Phase 2 · Le Mécanisme Clé'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            HOW IT WORKS: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              ONE FOR YOU. ONE FOR SOMEONE IN NEED.
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'Complete transparency is our guiding rule: the customer buys two shawarmas, directly funding the second meal. Shawarma Moods protects its kitchen margin and co-invests with an additional $1 match.'
              : 'La transparence totale est notre règle : le client achète deux shawarmas, finançant directement le second repas. Shawarma Moods protège sa marge et co-investit avec 1 $ supplémentaire.'}
          </p>
        </div>

        {/* Vital Rule Callout Box */}
        <div className="mb-12 bg-zinc-900/90 border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto relative overflow-hidden shadow-xl shadow-amber-500/5">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500/20 rounded-xl text-amber-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
                Non-Negotiable Campaign Formula
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The customer <strong className="text-amber-400 font-semibold">pays for both shawarmas</strong> at the counter or online. The second meal is <strong className="text-white underline underline-offset-4">not a free giveaway</strong> at restaurant expense. The guest finances the food cost of the donated meal, and Shawarma Moods adds an extra <strong className="text-amber-400 font-semibold">$1 cash match</strong> to the community kitchen pool for every verified donated meal.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Step Interactive Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-8 relative flex flex-col justify-between group hover:border-amber-500/50 transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-headline text-5xl text-amber-500/30 group-hover:text-amber-500/70 transition-colors">01</span>
                <span className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                  <ShoppingBag className="w-6 h-6" />
                </span>
              </div>
              <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
                Customer Purchases Two
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {lang === 'en'
                  ? 'At checkout, the guest orders the "Buy One. Give One." holiday combo. They pay for two shawarmas under a special holiday pricing structure.'
                  : 'Au comptoir ou en ligne, le client commande le combo des fêtes "Buy One. Give One.". Il paie deux shawarmas selon la formule des fêtes.'}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 text-xs font-semibold text-amber-400/90 flex items-center justify-between">
              <span>Customer Action</span>
              <span>Funds 1 Donated Meal</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-8 relative flex flex-col justify-between group hover:border-amber-500/50 transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-headline text-5xl text-amber-500/30 group-hover:text-amber-500/70 transition-colors">02</span>
                <span className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                  <Utensils className="w-6 h-6" />
                </span>
              </div>
              <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
                Guest Enjoys One Fresh
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {lang === 'en'
                  ? 'The guest receives their signature Crispy Moods shawarma hot, wrapped in branded black/gold checkered packaging, with garlic toum and crispy pickles.'
                  : 'Le client reçoit son shawarma croustillant tout chaud, emballé dans le papier quadrillé noir et or signature avec sauce toum à l\'ail.'}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 text-xs font-semibold text-emerald-400 flex items-center justify-between">
              <span>Customer Takeaway</span>
              <span>Immediate Satisfaction</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-8 relative flex flex-col justify-between group hover:border-amber-500/50 transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-headline text-5xl text-amber-500/30 group-hover:text-amber-500/70 transition-colors">03</span>
                <span className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                  <HeartHandshake className="w-6 h-6" />
                </span>
              </div>
              <h3 className="font-headline text-2xl text-white uppercase tracking-wide">
                Community Meal Queued & Matched
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {lang === 'en'
                  ? 'The second meal is logged into the verified counter. Shawarma Moods adds $1 to the community fund. On Dec 23, fresh hot meals are delivered to local shelters.'
                  : 'Le second repas est enregistré dans le compteur certifié. Shawarma Moods ajoute 1 $ au fonds. Le 23 décembre, les repas sont livrés chauds aux refuges.'}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 text-xs font-semibold text-amber-400 flex items-center justify-between">
              <span>Shawarma Moods Contribution</span>
              <span>+$1.00 Cash Added</span>
            </div>
          </div>

        </div>

        {/* Visual Balance Sheet Table */}
        <div className="mt-12 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h4 className="font-headline text-xl text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <span>Customer Receipt Breakdown Comparison (Example)</span>
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase font-mono-num">
                  <th className="pb-3">Component</th>
                  <th className="pb-3 text-center">Regular Single Order</th>
                  <th className="pb-3 text-center text-amber-400">"Buy One. Give One." Holiday Bundle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-3 font-medium">Customer Receives</td>
                  <td className="py-3 text-center">1 Shawarma</td>
                  <td className="py-3 text-center font-bold text-white">1 Shawarma (in-hand)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Community Fund Receives</td>
                  <td className="py-3 text-center text-zinc-400">—</td>
                  <td className="py-3 text-center font-bold text-emerald-400">1 Full Shawarma to Local Shelter</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Shawarma Moods Contribution</td>
                  <td className="py-3 text-center text-zinc-400">—</td>
                  <td className="py-3 text-center font-bold text-amber-400">+$1.00 Cash per Verified Meal</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Food Safety & Logistics</td>
                  <td className="py-3 text-center">Standard Dine-in / Takeout</td>
                  <td className="py-3 text-center">Batched for Christmas Week Warm Delivery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
