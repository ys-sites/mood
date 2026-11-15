import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Clock, AlertTriangle, FileSignature, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { CHECKLIST_ITEMS } from '../data/campaignData';
import { ChecklistItem } from '../types';

interface OwnerDecisionProps {
  lang: 'en' | 'fr';
}

export const OwnerDecisionSection: React.FC<OwnerDecisionProps> = ({ lang }) => {
  const [items, setItems] = useState<ChecklistItem[]>(CHECKLIST_ITEMS);
  const [submittedInterest, setSubmittedInterest] = useState(false);
  const [meetingNote, setMeetingNote] = useState('');

  const toggleStatus = (id: string) => {
    setItems((prev) =>
      prev.map((it) => {
        if (it.id === id) {
          const nextStatus =
            it.status === 'Ready'
              ? 'In Review'
              : it.status === 'In Review'
              ? 'Pending Owner Approval'
              : 'Ready';
          return { ...it, status: nextStatus };
        }
        return it;
      })
    );
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedInterest(true);
  };

  return (
    <section id="owner-decision" className="py-20 md:py-28 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <FileSignature className="w-3.5 h-3.5 text-amber-500" />
            <span>Management Action Gate · Owner Approval</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            OWNER DECISION DASHBOARD: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              PRE-LAUNCH APPROVAL CHECKLIST
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'Before any public announcements, media releases, or partner commitments, the owner reviews operational readiness and signs off on the primary milestone.'
              : 'Avant toute annonce publique ou engagement partenaire, la direction valide la préparation opérationnelle et confirme le premier jalon.'}
          </p>
        </div>

        {/* 2-Column Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Readiness Checklist */}
          <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <h3 className="font-headline text-2xl text-white uppercase tracking-wide flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-amber-400" />
                <span>Pre-Flight Readiness Items</span>
              </h3>
              <span className="text-xs text-zinc-500 font-mono-num">Click item to cycle status</span>
            </div>

            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleStatus(item.id)}
                  className="cursor-pointer p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/90 hover:border-amber-500/50 transition-colors flex items-start justify-between gap-4 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold text-amber-400/90 font-mono-num">
                        [{item.category}]
                      </span>
                      <h4 className="font-bold text-sm text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 text-[11px] font-mono-num font-bold px-2.5 py-1 rounded border ${
                      item.status === 'Ready'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : item.status === 'In Review'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-zinc-500 font-mono-num flex items-center justify-between">
              <span>Ready items: {items.filter(i => i.status === 'Ready').length} / {items.length}</span>
              <span>Pending Owner: {items.filter(i => i.status === 'Pending Owner Approval').length}</span>
            </div>
          </div>

          {/* Right Column: Owner Sign-Off Form & Risk Safeguards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Risk Mitigation Summary Box */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="font-headline text-2xl text-white uppercase tracking-wide flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Executive Risk Mitigations</span>
              </h3>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-850">
                  <strong className="text-white block mb-0.5">1. Financial Exposure Capped:</strong>
                  The restaurant's $1 match is strictly capped at $1,000 for Milestone 4 (1,000 meals). No uncapped liabilities.
                </div>

                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-850">
                  <strong className="text-white block mb-0.5">2. Quebec Compliance:</strong>
                  All signage, digital posts, and receipts strictly abide by OQLF French-language requirements and consumer laws.
                </div>

                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-850">
                  <strong className="text-white block mb-0.5">3. Zero False Representation:</strong>
                  Donation tracking is audited daily. Food delivery is conducted through formal nonprofit handoff protocols.
                </div>
              </div>
            </div>

            {/* Strategy Session Request Box */}
            <div className="bg-gradient-to-br from-amber-500/20 via-zinc-900 to-zinc-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8">
              <h3 className="font-headline text-2xl text-white uppercase tracking-wide mb-2">
                Schedule Management Review
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Ready to review production timelines, chef scheduling, or fine-tune pricing? Submit notes below to schedule the alignment session.
              </p>

              {submittedInterest ? (
                <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Review session requested! The strategy team will prepare the updated operational schedule for Shawarma Moods.</span>
                </div>
              ) : (
                <form onSubmit={handleConfirm} className="space-y-3">
                  <textarea
                    rows={3}
                    value={meetingNote}
                    onChange={(e) => setMeetingNote(e.target.value)}
                    placeholder="Enter owner notes, target prep dates, or feedback on pricing..."
                    className="w-full text-xs bg-zinc-950 border border-zinc-700/80 rounded-xl p-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
                  >
                    <span>Request Owner Strategy Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
