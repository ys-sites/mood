import React, { useState } from 'react';
import { Image, ZoomIn, Smartphone, Store, Sparkles } from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface CampaignPosterGalleryProps {
  lang: Language;
  onOpenPosterModal: (imgSrc: string) => void;
}

export const CampaignPosterGallery: React.FC<CampaignPosterGalleryProps> = ({
  lang,
  onOpenPosterModal,
}) => {
  const [mockupMode, setMockupMode] = useState<'posters' | 'placements'>('posters');

  const conceptPosters = [
    {
      id: 'main',
      badge: 'Supplied Concept Reference',
      title: 'Main Buy One. Give One. Poster',
      image: '/buy-one-give-one-poster.jpg',
      isPhoto: true,
      frLine: 'ACHÈTE UN. OFFRE UN.',
      enLine: 'BUY ONE. GIVE ONE.',
    },
    {
      id: 'alt-photo',
      badge: 'Supplied Concept Variant',
      title: 'Original Supplied Poster',
      image: '/Buy One, Give One Shawarma.png',
      isPhoto: true,
      frLine: 'PARTAGE LE MOOD.',
      enLine: 'SPREAD THE MOOD.',
    },
    {
      id: 'one-for-you',
      badge: 'Concept Mockup · FR/EN',
      title: 'One For You. One For Them.',
      isPhoto: false,
      goldHeadline: 'UN POUR TOI. UN POUR EUX.',
      whiteSub: 'ONE FOR YOU. ONE FOR SOMEONE IN NEED.',
      detail: 'Deux shawarmas achetés · Un savouré · Un livré le 23 déc.',
    },
    {
      id: 'challenge-1000',
      badge: 'Concept Mockup · Charcoal #333333',
      title: '1,000-Meal Challenge & $1 Match',
      isPhoto: false,
      goldHeadline: 'OBJECTIF : 1 000 SHAWARMAS.',
      whiteSub: 'OUR GOAL: 1,000 MEALS + $1 FROM SHAWARMA MOODS.',
      detail: 'Chaque repas vérifié ajoute 1 $ au fonds communautaire.',
    },
  ];

  return (
    <section id="section-12" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <Image className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '12 · Campaign Asset Showcase' : '12 · Galerie des Visuels'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'POSTERS, STORIES &' : 'AFFICHES, STORIES &'}{' '}
            <span className="text-[#EAAA2F]">
              {lang === 'en' ? 'IN-STORE DISPLAYS' : 'AFFICHAGE COMPTOIR'}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Built with measured #EAAA2F brand gold, #333333 charcoal grounds, and FR-over-EN Québec signage hierarchy. Click any photographic poster to inspect full resolution.'
              : 'Conçu avec le doré #EAAA2F mesuré, fond charbon #333333 et hiérarchie bilingue FR/EN.'}
          </p>

          {/* View Mode Toggle */}
          <div className="pt-2 flex justify-center">
            <div className="bg-[#0B0B0C] p-1 rounded-xl border border-zinc-800 inline-flex gap-1">
              <button
                onClick={() => setMockupMode('posters')}
                className={`px-4 py-2 rounded-lg text-xs font-promo font-bold uppercase ${
                  mockupMode === 'posters' ? 'bg-[#EAAA2F] text-[#0B0B0C]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                4:5 Poster Series
              </button>
              <button
                onClick={() => setMockupMode('placements')}
                className={`px-4 py-2 rounded-lg text-xs font-promo font-bold uppercase ${
                  mockupMode === 'placements' ? 'bg-[#EAAA2F] text-[#0B0B0C]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Story & Counter Mockups
              </button>
            </div>
          </div>
        </div>

        {mockupMode === 'posters' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conceptPosters.map((p) => (
              <div
                key={p.id}
                className="bg-[#0B0B0C] border border-zinc-800 hover:border-[#EAAA2F]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group"
              >
                {p.isPhoto && p.image ? (
                  <div
                    onClick={() => onOpenPosterModal(p.image!)}
                    className="cursor-pointer relative aspect-[4/5] bg-black overflow-hidden"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-3 rounded-full bg-[#EAAA2F] text-[#0B0B0C] shadow-lg">
                        <ZoomIn className="w-5 h-5" />
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#EAAA2F] text-[#0B0B0C] text-[10px] font-bold uppercase">
                      {p.badge}
                    </span>
                  </div>
                ) : (
                  <div className="aspect-[4/5] bg-[#333333] p-6 flex flex-col justify-between relative overflow-hidden border-b border-zinc-800">
                    <div className="checkered-motif h-3 w-full rounded opacity-70" />
                    <div className="space-y-2 my-auto">
                      <span className="text-[10px] font-mono-num uppercase text-[#FBCE22] font-bold">
                        {p.badge}
                      </span>
                      <div className="font-headline text-3xl text-[#EAAA2F] leading-none uppercase">
                        {p.goldHeadline}
                      </div>
                      <div className="font-promo font-extrabold text-xs text-white uppercase">
                        {p.whiteSub}
                      </div>
                      <p className="text-[11px] text-zinc-200 pt-2 border-t border-white/15">
                        {p.detail}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-headline text-[#EAAA2F] tracking-wider uppercase">
                      <span>SHAWARMA MOODS</span>
                      <span>PARTAGE LE MOOD.</span>
                    </div>
                  </div>
                )}

                <div className="p-4">
                  <div className="font-headline text-lg text-white uppercase">{p.title}</div>
                  <div className="text-[11px] text-zinc-500 font-mono-num mt-0.5">
                    1080 × 1350 (4:5) · Concept Draft
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Realistic Instagram Story + Restaurant Counter Mockups */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mockup A: Instagram Story */}
            <div className="bg-[#0B0B0C] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-48 shrink-0 aspect-[9/16] rounded-3xl border-4 border-[#333333] bg-[#0B0B0C] overflow-hidden relative shadow-xl">
                <img
                  src="/buy-one-give-one-poster.jpg"
                  alt="IG Story Mockup"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-3 inset-x-3 flex gap-1">
                  <div className="h-0.5 flex-1 bg-white rounded" />
                  <div className="h-0.5 flex-1 bg-white/30 rounded" />
                </div>
                <div className="absolute bottom-4 inset-x-3 bg-[#EAAA2F] text-[#0B0B0C] text-[9px] font-promo font-extrabold uppercase text-center py-1.5 rounded-lg shadow">
                  TAG YOUR SHAWARMA PARTNER
                </div>
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EAAA2F] uppercase">
                  <Smartphone className="w-4 h-4" />
                  <span>Instagram Story Mockup</span>
                </div>
                <h3 className="font-headline text-2xl text-white uppercase">
                  DM-Share Story Sticker
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Reuses @shawarmamoods’ proven “Send this to your shawarma partner” mechanic with a holiday twist: tag who you’re splitting a Buy One. Give One. duo with.
                </p>
              </div>
            </div>

            {/* Mockup B: In-Store Counter A-Frame / Display */}
            <div className="bg-[#0B0B0C] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-48 shrink-0 aspect-[4/5] rounded-xl border-4 border-[#EAAA2F] bg-[#333333] overflow-hidden relative shadow-xl flex flex-col justify-between p-3">
                <div className="text-[9px] font-mono-num text-[#EAAA2F] uppercase font-bold">
                  COMPTOIR / COUNTER
                </div>
                <img
                  src="/buy-one-give-one-poster.jpg"
                  alt="Counter Display Mockup"
                  className="w-full h-36 object-cover rounded-lg"
                />
                <div className="text-center">
                  <div className="font-headline text-lg text-white leading-none">ACHÈTE 2 · DONNE 1</div>
                  <div className="text-[9px] text-[#FBCE22] font-bold uppercase mt-0.5">
                    +1 $ PAR SHAWARMA MOODS
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EAAA2F] uppercase">
                  <Store className="w-4 h-4" />
                  <span>In-Store Counter Display</span>
                </div>
                <h3 className="font-headline text-2xl text-white uppercase">
                  Point-of-Sale Tent Card
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Placed right beside the register across participating QC & ON stores. Clear FR-over-EN copy prevents any confusion that the second shawarma is free.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-xs text-zinc-500 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#EAAA2F]" />
          <span>Concept mockups only — final artwork requires official logo vectors & raw food photography.</span>
        </div>
      </div>
    </section>
  );
};
