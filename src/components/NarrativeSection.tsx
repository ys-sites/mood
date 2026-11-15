import React from 'react';
import { motion } from 'motion/react';
import { Heart, Flame, Users, Snowflake } from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface NarrativeSectionProps {
  lang: Language;
}

export const NarrativeSection: React.FC<NarrativeSectionProps> = ({ lang }) => {
  const pillars = [
    {
      icon: Snowflake,
      title: lang === 'en' ? 'December in Our Cities' : 'Décembre dans Nos Villes',
      body:
        lang === 'en'
          ? 'Across Montréal, Laval, Saint-Jérôme, and Oakville, winter nights hit hard. A hot, flame-roasted meal brings immediate comfort and dignity.'
          : 'À Montréal, Laval, Saint-Jérôme et Oakville, les nuits d’hiver sont rudes. Un repas chaud grillé à la flamme offre un réconfort immédiat.',
    },
    {
      icon: Flame,
      title: lang === 'en' ? '“Because One Is Never Enough.”' : '« Parce qu’un seul ne suffit jamais. »',
      body:
        lang === 'en'
          ? 'Shawarma Moods already owns this phrase. This campaign gives that appetite a second purpose: buy two, enjoy yours, and share the warmth.'
          : 'Shawarma Moods utilise déjà cette phrase. Cette campagne lui donne un sens nouveau : en acheter deux, savourer le vôtre, partager la chaleur.',
    },
    {
      icon: Users,
      title: lang === 'en' ? 'Community Around Food' : 'Rassembler par la Nourriture',
      body:
        lang === 'en'
          ? 'Christmas is a moment for families and neighbourhoods to come together. Shawarma Moods becomes the gathering point for simple, direct generosity.'
          : 'Noël rassemble les familles et les quartiers. Shawarma Moods devient le point de ralliement d’une générosité simple et directe.',
    },
  ];

  return (
    <section
      id="section-2"
      className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#111114] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '02 · Why This Campaign Exists' : '02 · Pourquoi Cette Campagne'}</span>
          </div>

          <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-[0.95]">
            {lang === 'en' ? (
              <>
                WHAT IF YOUR NEXT SHAWARMA <br />
                <span className="text-[#EAAA2F]">COULD MEAN MORE?</span>
              </>
            ) : (
              <>
                ET SI VOTRE PROCHAIN SHAWARMA <br />
                <span className="text-[#EAAA2F]">AVAIT PLUS D’IMPACT ?</span>
              </>
            )}
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Not a preachy charity drive. A food-first, high-energy Shawarma Moods movement where a simple meal becomes a simple act of generosity.'
              : 'Pas une collecte moralisatrice. Un mouvement Shawarma Moods centré sur la bonne bouffe, où un repas devient un geste de solidarité.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-[#0B0B0C] border border-zinc-800 hover:border-[#EAAA2F]/50 rounded-2xl p-7 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 flex items-center justify-center text-[#EAAA2F] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl text-white uppercase tracking-wide mb-2.5">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Brand Voice Callout */}
        <div className="mt-12 bg-[#0B0B0C] border border-[#EAAA2F]/30 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto text-center">
          <p className="font-promo font-extrabold text-xl sm:text-2xl text-[#EAAA2F] uppercase tracking-tight">
            ES-TU DANS LE MOOD? <span className="text-white font-semibold">→ PARTAGE LE MOOD.</span>
          </p>
          <p className="text-xs text-zinc-400 mt-2">
            {lang === 'en'
              ? 'Built directly from Shawarma Moods’ own bilingual social identity — food pleasure first, community warmth second.'
              : 'Inspiré directement de l’identité bilingue de @shawarmamoods — le plaisir d’abord, la générosité ensuite.'}
          </p>
        </div>
      </div>
    </section>
  );
};
