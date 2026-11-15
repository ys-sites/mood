import React from 'react';
import { Flame, ArrowUp, ShieldAlert, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0C] border-t border-zinc-800/80 pt-16 pb-12 relative text-zinc-400 text-xs">
      {/* Checkered Ribbon Header */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#EAAA2F] via-[#FBCE22] to-[#B78D1D] mb-12 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#EAAA2F] flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#0B0B0C] fill-[#0B0B0C]" />
              </div>
              <span className="font-headline text-2xl tracking-wider text-white">
                SHAWARMA MOODS
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Authentic, flame-roasted crispy shawarmas across QC & ON. Dedicated to quality ingredients, unmatched energy, and community solidarity.
            </p>
            <div className="font-headline text-lg text-[#EAAA2F] uppercase tracking-widest">
              BUY ONE. GIVE ONE. SPREAD THE MOOD.
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-headline text-sm text-white uppercase tracking-wider mb-2">
              Proposal Navigation
            </div>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <a href="#section-2" className="hover:text-[#EAAA2F] transition-colors">
                  Why This Campaign Exists
                </a>
              </li>
              <li>
                <a href="#section-3" className="hover:text-[#EAAA2F] transition-colors">
                  How Buy One. Give One. Works
                </a>
              </li>
              <li>
                <a href="#section-5" className="hover:text-[#EAAA2F] transition-colors">
                  1,000-Meal Challenge Simulator
                </a>
              </li>
              <li>
                <a href="#section-11" className="hover:text-[#EAAA2F] transition-colors">
                  Unit Economics & Feasibility
                </a>
              </li>
              <li>
                <a href="#section-12" className="hover:text-[#EAAA2F] transition-colors">
                  Campaign Asset Showcase
                </a>
              </li>
              <li>
                <a href="#section-13" className="hover:text-[#EAAA2F] transition-colors">
                  60s Trailer & 5-Min Pitch
                </a>
              </li>
              <li>
                <a href="#section-15" className="hover:text-[#EAAA2F] transition-colors">
                  Owner Decision Checklist
                </a>
              </li>
            </ul>
          </div>

          {/* Mandatory Disclaimers */}
          <div className="md:col-span-4 space-y-3 bg-[#141416] p-4 rounded-2xl border border-zinc-800">
            <div className="flex items-center gap-2 text-[#EAAA2F] font-bold uppercase tracking-wider text-[11px]">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Confidential Proposal Notice</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              This digital presentation is an internal, private marketing and operational concept prepared for the owners and management of Shawarma Moods.
            </p>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              No public fundraising, commercial claims, or formal charity guarantees are live until mutual sign-off and legal/nonprofit validation are confirmed.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Shawarma Moods. Private Proposal Pitch.
          </div>

          <div className="flex items-center gap-2">
            <span>Prepared with</span>
            <Heart className="w-3.5 h-3.5 text-[#EAAA2F] fill-[#EAAA2F]" />
            <span>for Shawarma Moods Management</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-[#EAAA2F] font-bold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
