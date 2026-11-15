import React from 'react';
import { AlertCircle, Lock } from 'lucide-react';

export const ProposalBanner: React.FC = () => {
  return (
    <div className="bg-amber-500/10 border-b border-amber-500/30 text-amber-300 text-xs py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-400 font-semibold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider border border-amber-500/40">
            <Lock className="w-3 h-3" /> Private Owner Pitch
          </span>
          <span className="font-medium text-amber-200/90">
            Christmas 2026 Campaign Proposal · Shawarma Moods Montréal
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-400/80 text-[11px]">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>All figures, nonprofit models & partnerships are conceptual proposals pending owner approval.</span>
        </div>
      </div>
    </div>
  );
};
