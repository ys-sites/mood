import React from 'react';
import { Heart, Snowflake, Flame, Users, Sparkles, Building2 } from 'lucide-react';

interface TheWhySectionProps {
  lang: 'en' | 'fr';
}

export const TheWhySection: React.FC<TheWhySectionProps> = ({ lang }) => {
  return (
    <section id="the-why" className="py-20 md:py-28 border-b border-zinc-800/80 relative bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Phase 1 · The Emotional Hook' : 'Phase 1 · L\'Ancrage Émotionnel'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            WHY THIS CAMPAIGN? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              WARMTH IN A MONTRÉAL WINTER.
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'Christmas is the season of generosity, but in Montréal, winter is severe. Shawarma Moods can transform everyday counter orders into a beacon of community solidarity.'
              : 'Noël est la saison du partage, mais à Montréal, l\'hiver est rude. Shawarma Moods peut transformer une commande au comptoir en un élan de solidarité communautaire.'}
          </p>
        </div>

        {/* Narrative 3-Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: The Montréal Winter Reality */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
              <Snowflake className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-2xl text-white uppercase tracking-wide mb-3">
              1. The Cold Reality
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {lang === 'en'
                ? 'December in Montréal drops well below sub-zero. While families celebrate inside, hundreds of unhoused individuals and struggling students experience food insecurity on freezing streets. A hot, freshly flame-roasted meal provides real physical comfort and human dignity.'
                : 'En décembre à Montréal, les températures chutent bien en dessous de zéro. Un repas chaud, fraîchement grillé à la flamme, apporte un réconfort physique immédiat et une réelle dignité humaine.'}
            </p>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
              <span>Impact Target</span>
              <span className="text-amber-400">Vetted Local Shelters</span>
            </div>
          </div>

          {/* Card 2: The Gathering Spot */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400">
              <Flame className="w-6 h-6 fill-amber-400/20" />
            </div>
            <h3 className="font-headline text-2xl text-white uppercase tracking-wide mb-3">
              2. The Restaurant as a Beacon
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Shawarma Moods is already where youth, friends, and late-night foodies gather for energy and good vibes. By championing this holiday initiative, the brand steps up from being just another restaurant to becoming an active pillar of the neighbourhood.'
                : 'Shawarma Moods rassemble déjà les jeunes et les passionnés de street food pour son énergie. En portant cette initiative, la marque s\'affirme comme un véritable pilier de son quartier montréalais.'}
            </p>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
              <span>Brand Identity</span>
              <span className="text-amber-400">Community Institution</span>
            </div>
          </div>

          {/* Card 3: Dignity & Action */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-2xl text-white uppercase tracking-wide mb-3">
              3. Tangible Direct Action
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Customers are tired of vague corporate charity round-ups. With "Buy One. Give One.", the math is direct and emotional: you eat one hot shawarma today, and another human being receives an identical hot shawarma on December 23.'
                : 'Les clients sont lassés des arrondis caritatifs abstraits. Ici, le lien est direct et concret : vous mangez un shawarma chaud aujourd\'hui, et un voisin dans le besoin reçoit exactement le même le 23 décembre.'}
            </p>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
              <span>Accountability</span>
              <span className="text-emerald-400">1-to-1 Tangible Meal</span>
            </div>
          </div>

        </div>

        {/* Quote Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 via-zinc-900/80 to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
          <p className="font-headline text-2xl sm:text-3xl text-white uppercase tracking-wide">
            "Food isn’t just calories in a Montréal December. It’s dignity, respect, and belonging."
          </p>
          <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mt-2">
            Shawarma Moods Christmas 2026 Campaign Philosophy
          </div>
        </div>

      </div>
    </section>
  );
};
