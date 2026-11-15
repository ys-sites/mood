import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Utensils, HeartHandshake, ArrowRight, RotateCcw, ShieldCheck } from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface TwoShawarmaExplainerProps {
  lang: Language;
}

export const TwoShawarmaExplainer: React.FC<TwoShawarmaExplainerProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const steps = [
    {
      num: 1 as const,
      title: 'CUSTOMER BUYS TWO.',
      titleFr: 'LE CLIENT EN ACHÈTE DEUX.',
      subtitle: '1 Order · 2 Paid Shawarmas',
      descEn:
        'At the counter or online, the guest orders the Buy One. Give One. duo. They pay for two full shawarmas—the second meal is customer-funded, NOT a free giveaway.',
      descFr:
        'Au comptoir ou en ligne, le client commande le duo Buy One. Give One. Il paie deux shawarmas complets—le 2e repas est financé par le client, pas gratuit.',
      icon: ShoppingBag,
    },
    {
      num: 2 as const,
      title: 'ONE TO ENJOY.',
      titleFr: 'UN POUR SAVOURER.',
      subtitle: 'Immediate Counter Fulfillment',
      descEn:
        'Shawarma #1 is wrapped hot in Shawarma Moods’ signature black-and-white checkered paper with gold logo sticker and handed fresh to the customer.',
      descFr:
        'Le shawarma n° 1 est servi chaud sur-le-champ dans le papier quadrillé noir et blanc signature avec autocollant doré.',
      icon: Utensils,
    },
    {
      num: 3 as const,
      title: 'ONE TO DONATE.',
      titleFr: 'UN POUR DONNER.',
      subtitle: 'Queued for Dec 23 Delivery + $1 Match',
      descEn:
        'Shawarma #2 is logged in the POS into the verified community queue for Christmas-week preparation and thermal delivery—and triggers +$1 from Shawarma Moods.',
      descFr:
        'Le shawarma n° 2 est enregistré en caisse pour la préparation fraîche et la livraison isotherme du 23 décembre—déclenchant +1 $ de Shawarma Moods.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="section-3" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <span>{lang === 'en' ? '03 · How Buy One. Give One. Works' : '03 · Le Mécanisme en 3 Étapes'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'TWO PURCHASED.' : 'DEUX ACHETÉS.'}{' '}
            <span className="text-[#EAAA2F]">
              {lang === 'en' ? 'ONE ENJOYED. ONE DONATED.' : 'UN SAVOURÉ. UN DONNÉ.'}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Step through the interactive workflow below to see how every qualifying order splits cleanly into immediate guest satisfaction and verified community impact.'
              : 'Avancez dans les étapes ci-dessous pour visualiser comment chaque commande se divise entre satisfaction immédiate et don vérifié.'}
          </p>
        </div>

        {/* Non-negotiable Rule Callout */}
        <div className="max-w-4xl mx-auto mb-10 bg-[#141417] border border-[#EAAA2F]/40 rounded-2xl p-5 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-[#EAAA2F]/15 text-[#EAAA2F] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <strong className="text-white uppercase font-promo">
              {lang === 'en' ? 'Customer-Funded Mechanism:' : 'Mécanisme Financé par le Client :'}
            </strong>{' '}
            {lang === 'en'
              ? 'One purchased shawarma does NOT automatically generate a free donated shawarma. The customer pays for two shawarmas, keeps one, and funds the second.'
              : 'Un shawarma acheté ne génère PAS automatiquement un don gratuit. Le client paie deux shawarmas, en garde un, et finance le deuxième.'}
          </div>
        </div>

        {/* Interactive Visual Stage */}
        <div className="max-w-5xl mx-auto bg-[#141417] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Step Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div className="flex flex-wrap gap-2">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`px-4 py-2 rounded-xl text-xs font-promo font-bold uppercase tracking-wider transition-all ${
                    activeStep === s.num
                      ? 'bg-[#EAAA2F] text-[#0B0B0C] shadow-md shadow-[#EAAA2F]/20'
                      : 'bg-[#0B0B0C] text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  Step {s.num}: {lang === 'en' ? s.title : s.titleFr}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep(activeStep === 3 ? 1 : ((activeStep + 1) as 1 | 2 | 3))}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EAAA2F] hover:bg-[#FBCE22] text-[#0B0B0C] text-xs font-extrabold uppercase tracking-wider transition-colors"
              >
                <span>{activeStep === 3 ? (lang === 'en' ? 'Replay Flow' : 'Rejouer') : (lang === 'en' ? 'Next Step' : 'Étape Suivante')}</span>
                {activeStep === 3 ? <RotateCcw className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Animated Split Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
            {/* Left: Shawarma #1 -> Customer */}
            <motion.div
              animate={{
                scale: activeStep === 2 ? 1.04 : 1,
                borderColor: activeStep >= 2 ? 'rgba(234, 170, 47, 0.7)' : 'rgba(63, 63, 70, 0.6)',
              }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-4 bg-[#0B0B0C] border-2 rounded-2xl p-6 text-center space-y-3"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl checkered-motif border border-[#EAAA2F]/40 mx-auto">
                <Utensils className="w-7 h-7 text-[#EAAA2F]" />
              </div>
              <div className="font-mono-num text-[11px] font-bold uppercase text-[#EAAA2F]">
                SHAWARMA #1
              </div>
              <h4 className="font-headline text-2xl text-white uppercase">
                {lang === 'en' ? 'TO THE CUSTOMER' : 'POUR LE CLIENT'}
              </h4>
              <p className="text-xs text-zinc-400">
                {activeStep === 1
                  ? 'Ordered & paid at counter'
                  : 'Served fresh & crispy immediately in checkered wrapper'}
              </p>
              <div
                className={`text-[11px] font-bold uppercase px-2.5 py-1 rounded inline-block ${
                  activeStep >= 2 ? 'bg-emerald-500/15 text-emerald-400' : 'bg-zinc-900 text-zinc-500'
                }`}
              >
                {activeStep >= 2 ? '✓ Enjoyed Today' : 'Queued at Counter'}
              </div>
            </motion.div>

            {/* Center: Order Hub */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3">
              <motion.div
                animate={{ scale: activeStep === 1 ? 1.06 : 1 }}
                className="w-20 h-20 rounded-full bg-[#EAAA2F]/15 border-2 border-[#EAAA2F] flex items-center justify-center text-[#EAAA2F]"
              >
                <ShoppingBag className="w-9 h-9" />
              </motion.div>
              <div className="font-headline text-2xl text-white uppercase">
                {lang === 'en' ? '1 QUALIFYING ORDER' : '1 COMMANDE ADMISSIBLE'}
              </div>
              <div className="font-promo font-extrabold text-sm text-[#FBCE22] uppercase">
                {lang === 'en' ? '2 SHAWARMAS PAID' : '2 SHAWARMAS PAYÉS'}
              </div>
              <p className="text-xs text-zinc-400 max-w-xs">
                {lang === 'en'
                  ? steps[activeStep - 1].descEn
                  : steps[activeStep - 1].descFr}
              </p>
            </div>

            {/* Right: Shawarma #2 -> Community Donation */}
            <motion.div
              animate={{
                scale: activeStep === 3 ? 1.04 : 1,
                borderColor: activeStep === 3 ? 'rgba(234, 170, 47, 0.85)' : 'rgba(63, 63, 70, 0.6)',
              }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-4 bg-[#0B0B0C] border-2 rounded-2xl p-6 text-center space-y-3"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EAAA2F]/15 border border-[#EAAA2F]/40 mx-auto">
                <HeartHandshake className="w-7 h-7 text-[#EAAA2F]" />
              </div>
              <div className="font-mono-num text-[11px] font-bold uppercase text-[#EAAA2F]">
                SHAWARMA #2
              </div>
              <h4 className="font-headline text-2xl text-white uppercase">
                {lang === 'en' ? 'TO THE COMMUNITY' : 'POUR LA COMMUNAUTÉ'}
              </h4>
              <p className="text-xs text-zinc-400">
                {activeStep === 3
                  ? 'Verified in POS → Prepared Dec 23 → +$1 Restaurant Match'
                  : 'Customer-funded meal earmarked for Christmas distribution'}
              </p>
              <div
                className={`text-[11px] font-bold uppercase px-2.5 py-1 rounded inline-block ${
                  activeStep === 3 ? 'bg-[#EAAA2F] text-[#0B0B0C]' : 'bg-zinc-900 text-zinc-500'
                }`}
              >
                {activeStep === 3 ? '✓ Logged + $1 Match' : 'Awaiting Step 3'}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
