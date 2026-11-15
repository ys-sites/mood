import React from 'react';
import { Flame, ArrowUp, ShieldAlert, Heart } from 'lucide-react';
import { CAMPAIGN_COPY } from '../data/campaignData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-850 pt-16 pb-12 relative text-zinc-400 text-xs">
      {/* Checkered Ribbon Header */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 mb-12 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <Flame className="w-5 h-5 text-black fill-black" />
              </div>
              <span className="font-headline text-2xl tracking-wider text-white">
                SHAWARMA MOODS
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Authentic, flame-roasted crispy shawarmas in Montréal. Dedicated to quality ingredients, unmatched energy, and deep community solidarity.
            </p>
            <div className="font-headline text-lg text-amber-400 uppercase tracking-widest">
              BUY ONE. GIVE ONE. SPREAD THE MOOD.
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-headline text-sm text-white uppercase tracking-wider mb-2">
              Proposal Navigation
            </div>
            <ul className="space-y-1.5 text-zinc-400">
              <li><a href="#the-why" className="hover:text-amber-400 transition-colors">The Emotional Hook</a></li>
              <li><a href="#mechanism" className="hover:text-amber-400 transition-colors">Core 3-Step Mechanism</a></li>
              <li><a href="#tracker" className="hover:text-amber-400 transition-colors">1,000 Milestone Simulator</a></li>
              <li><a href="#economics" className="hover:text-amber-400 transition-colors">Unit Economics Calculator</a></li>
              <li><a href="#video-suite" className="hover:text-amber-400 transition-colors">Claude Opus Video Scripts</a></li>
              <li><a href="#posters" className="hover:text-amber-400 transition-colors">4:5 Creative Posters</a></li>
              <li><a href="#owner-decision" className="hover:text-amber-400 transition-colors">Owner Readiness Gate</a></li>
            </ul>
          </div>

          {/* Mandatory Disclaimers */}
          <div className="md:col-span-4 space-y-3 bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
            <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Confidential Proposal Notice</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              This digital presentation is an internal, private marketing and operational concept prepared for the owners and management of Shawarma Moods, Montréal.
            </p>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              No public fundraising, commercial claims, or formal charity guarantees are live until mutual sign-off and legal/nonprofit validation are confirmed.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Shawarma Moods, Montréal. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Prepared with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>for Shawarma Moods Management</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 font-bold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
