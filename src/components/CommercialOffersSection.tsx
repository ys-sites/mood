import React from 'react';
import { Tag, GraduationCap, Users, AlertCircle } from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface CommercialOffersProps {
  lang: Language;
}

export const CommercialOffersSection: React.FC<CommercialOffersProps> = ({ lang }) => {
  return (
    <section id="section-10" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBCE22]/10 border border-[#FBCE22]/40 text-[#FBCE22] text-xs font-bold uppercase tracking-widest">
            <Tag className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '10 · Supporting Commercial Offers' : '10 · Offres Commerciales Secondaires'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'SECONDARY RETAIL PROMOS' : 'OFFRES DE SOUTIEN'}{' '}
            <span className="text-[#FBCE22]">
              {lang === 'en' ? 'ALONGSIDE THE CAMPAIGN' : 'EN APPUI AU TRAFIC'}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'These supporting promotions drive store foot traffic and holiday catering volume while Buy One. Give One. builds community affinity. None are the primary campaign headline.'
              : 'Ces promotions attirent du trafic en magasin pendant que Buy One. Give One. renforce l’image de marque. Elles restent secondaires.'}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-[#FBCE22] bg-[#0B0B0C] border border-zinc-800 px-3 py-1.5 rounded-lg">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Proposed commercial options only · Prices & dates subject to owner confirmation</span>
          </div>
        </div>

        {/* 3 Secondary Offers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Offer 1: Existing Promo Shawarma */}
          <div className="bg-[#0B0B0C] border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#FBCE22] text-[#0B0B0C] font-promo font-extrabold text-[10px] uppercase">
                  Existing Promo Ref
                </span>
                <span className="font-mono-num text-xl font-bold text-[#FBCE22]">9.99$ / $10*</span>
              </div>
              <h3 className="font-headline text-2xl text-white uppercase">
                Promotional Crispy Shawarma
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Observed in Shawarma Moods’ November promotional grid (9.99$ “tout le mois de novembre”, normally ~$15). Extending or adapting this offer into December is subject to owner confirmation of current pricing and dates.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono-num text-zinc-500">
              *Pending confirmation of Dec dates & price
            </div>
          </div>

          {/* Offer 2: Student Discount */}
          <div className="bg-[#0B0B0C] border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-white font-promo font-bold text-[10px] uppercase flex items-center gap-1">
                  <GraduationCap className="w-3 h-3 text-[#EAAA2F]" />
                  Proposed Offer
                </span>
                <span className="font-mono-num text-sm font-bold text-zinc-300">Rate TBD</span>
              </div>
              <h3 className="font-headline text-2xl text-white uppercase">
                Student Exam-Week Discount
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Potential student ID discount near campus locations (Centre-Ville Montréal, Laval, Oakville) during December finals to encourage group visits and tag-a-friend sharing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono-num text-zinc-500">
              *Proposed — discount % unapproved
            </div>
          </div>

          {/* Offer 3: Christmas Family Box */}
          <div className="bg-[#0B0B0C] border border-[#EAAA2F]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#EAAA2F]/20 text-[#EAAA2F] border border-[#EAAA2F]/40 font-promo font-bold text-[10px] uppercase flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Group Catering
                </span>
                <span className="font-mono-num text-sm font-bold text-[#EAAA2F]">Price TBD</span>
              </div>
              <h3 className="font-headline text-2xl text-white uppercase">
                Christmas Family Box (~10 People)
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Proposed holiday platter serving approximately ten people—ideal for office parties and family gatherings—with an optional add-on to fund 1–2 donated meals at checkout.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono-num text-zinc-500">
              *Proposed — menu mix & price pending owner review
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
