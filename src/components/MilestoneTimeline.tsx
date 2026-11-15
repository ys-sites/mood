import React from 'react';
import { Truck, Thermometer, CameraOff, Calendar, ShieldCheck } from 'lucide-react';
import { DISTRIBUTION_STEPS, Language } from '../data/campaignConstants';

interface MilestoneTimelineProps {
  lang: Language;
}

export const MilestoneTimeline: React.FC<MilestoneTimelineProps> = ({ lang }) => {
  return (
    <section id="section-6" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <Truck className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '06 · Christmas Distribution' : '06 · Distribution de Noël'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'FROM COUNTER ORDER TO' : 'DU COMPTOIR À LA'}{' '}
            <span className="text-[#EAAA2F]">
              {lang === 'en' ? 'DECEMBER 23 DELIVERY' : 'LIVRAISON DU 23 DÉCEMBRE'}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'A disciplined 7-step chain of custody ensures every funded meal is verified, safely prepared above 60°C, and delivered with dignity. Partner organization, location, timing, and capacity remain subject to written agreement.'
              : 'Une chaîne de traçabilité en 7 étapes garantit des repas vérifiés, maintenus au chaud (>60 °C) et remis avec dignité, sous réserve d’entente.'}
          </p>
        </div>

        {/* 7-Step Process Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-12">
          {DISTRIBUTION_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-[#0B0B0C] border border-zinc-800 hover:border-[#EAAA2F]/50 rounded-2xl p-4 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-headline text-2xl text-[#EAAA2F]">{item.step}</span>
                  <span className="text-[10px] font-mono-num text-zinc-500 uppercase">Step</span>
                </div>
                <h3 className="font-promo font-bold text-xs text-white uppercase leading-snug mb-2">
                  {lang === 'en' ? item.title : item.titleFr}
                </h3>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  {lang === 'en' ? item.detail : item.detailFr}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-zinc-800/80 text-[10px] font-mono-num text-[#EAAA2F]/90">
                {item.owner}
              </div>
            </div>
          ))}
        </div>

        {/* Dec 23 Visual Timeline + Dignity & Food Safety Guardrails */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Dec 23 Run Sheet */}
          <div className="lg:col-span-7 bg-[#0B0B0C] border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="font-headline text-2xl text-white uppercase tracking-wide mb-5 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#EAAA2F]" />
              <span>Proposed December 23 Schedule (Illustrative)</span>
            </h3>
            <div className="space-y-4">
              {[
                {
                  time: '07:00 – 10:30',
                  title: 'Batch 1 Prep & Thermal Seal',
                  desc: 'Kitchen team prepares first 500 shawarmas, wraps in foil + checkered parchment, and seals in Cambro hot boxes (>60°C logged).',
                },
                {
                  time: '11:00 – 13:00',
                  title: 'Midday Partner Delivery',
                  desc: 'Insulated vans deliver Lunch Batch to confirmed community shelter intake dock; partner signs meal receipt.',
                },
                {
                  time: '13:30 – 16:30',
                  title: 'Batch 2 Prep & Quality Check',
                  desc: 'Second wave prepared fresh for evening meal service without disrupting regular store walk-in traffic.',
                },
                {
                  time: '17:00 – 19:30',
                  title: 'Evening Community Distribution',
                  desc: 'Final drop-off completed; behind-the-scenes kitchen recap logged for final impact report.',
                },
              ].map((slot) => (
                <div key={slot.time} className="flex gap-4 items-start">
                  <div className="font-mono-num text-xs font-bold text-[#EAAA2F] bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 px-2.5 py-1 rounded shrink-0 mt-0.5">
                    {slot.time}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{slot.title}</div>
                    <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{slot.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food Safety & Respectful Visuals */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0B0B0C] border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <Thermometer className="w-5 h-5 text-[#EAAA2F]" />
                <h4 className="font-headline text-xl text-white uppercase">Food Safety & Capacity</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All donated shawarmas follow identical MAPAQ/public-health standards as counter orders: probe-verified core temperature above 60°C, allergen labeling, and sealed thermal transport.
              </p>
            </div>

            <div className="bg-[#0B0B0C] border border-[#EAAA2F]/30 rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <CameraOff className="w-5 h-5 text-[#EAAA2F]" />
                <h4 className="font-headline text-xl text-white uppercase">Dignity-First Filming Rule</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                No cameras pointed at vulnerable individuals or shelter lines. Campaign documentation focuses strictly on kitchen craft, staff teamwork, black-glove preparation, and sealed box handoffs.
              </p>
            </div>

            <div className="bg-[#141417] border border-zinc-800 rounded-2xl p-4 flex items-center gap-3 text-xs text-zinc-400">
              <ShieldCheck className="w-5 h-5 text-[#EAAA2F] shrink-0" />
              <span>Subject to formal nonprofit partner confirmation & kitchen capacity review.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
