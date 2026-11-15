import React from 'react';
import { AlertCircle, Lock } from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface ProposalBannerProps {
  lang: Language;
}

export const ProposalBanner: React.FC<ProposalBannerProps> = ({ lang }) => {
  return (
    <div className="bg-[#0B0B0C]/95 border-b border-[#EAAA2F]/30 text-[#EAAA2F] text-xs py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-[#EAAA2F]/15 text-[#EAAA2F] font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider border border-[#EAAA2F]/40">
            <Lock className="w-3 h-3" />
            {lang === 'en' ? 'Private Owner Pitch' : 'Présentation Privée'}
          </span>
          <span className="font-medium text-white/90">
            {lang === 'en'
              ? 'Christmas 2026 Campaign Proposal · Shawarma Moods (QC & ON)'
              : 'Proposition Campagne Noël 2026 · Shawarma Moods (QC & ON)'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
          <AlertCircle className="w-3.5 h-3.5 text-[#EAAA2F]" />
          <span>
            {lang === 'en'
              ? 'Conceptual proposal only — not a live donation campaign. Pending owner sign-off.'
              : 'Proposition conceptuelle uniquement — aucune collecte en direct sans approbation.'}
          </span>
        </div>
      </div>
    </div>
  );
};
