import React, { useState } from 'react';
import { Flame, Menu, X, ArrowUpRight, Globe, FileText, Calculator } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
  onOpenChecklist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenChecklist }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: lang === 'en' ? 'The Concept' : 'Le Concept', href: '#the-why' },
    { label: lang === 'en' ? 'Mechanism' : 'Mécanisme', href: '#mechanism' },
    { label: lang === 'en' ? 'Challenge Tracker' : 'Objectif 1 000', href: '#tracker' },
    { label: lang === 'en' ? 'Economics' : 'Économie', href: '#economics' },
    { label: lang === 'en' ? 'Video Pitch' : 'Vidéo Script', href: '#video-suite' },
    { label: lang === 'en' ? 'Posters' : 'Affiches', href: '#posters' },
    { label: lang === 'en' ? 'Owner Decision' : 'Décision', href: '#owner-decision' },
  ];

  return (
    <nav className="bg-[#0B0B0E]/90 backdrop-blur-lg border-b border-zinc-800/80 sticky top-[37px] z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Flame className="w-6 h-6 text-black fill-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-2xl tracking-wider text-white leading-none">
                  SHAWARMA MOODS
                </span>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest leading-tight">
                  Montréal · Holiday 2026
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-amber-400 px-3 py-2 rounded-md hover:bg-zinc-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Tools & Language Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-amber-400 bg-zinc-900 border border-zinc-700/60 px-2.5 py-1.5 rounded-lg transition-colors"
              title="Toggle English / Français"
            >
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Quick jump to Financial Simulator */}
            <a
              href="#economics"
              className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-700/80 px-3 py-1.5 rounded-lg border border-zinc-700/60 transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'en' ? 'Calculator' : 'Calculateur'}</span>
            </a>

            {/* Owner Checklist Modal trigger */}
            <button
              onClick={onOpenChecklist}
              className="flex items-center gap-1.5 text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-3.5 py-1.5 rounded-lg shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Approval Checklist' : 'Feuille de Route'}</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="text-xs font-bold text-zinc-400 border border-zinc-700 px-2 py-1 rounded"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white p-2 rounded-lg bg-zinc-900 border border-zinc-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-zinc-200 hover:text-amber-400 py-2 border-b border-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChecklist();
              }}
              className="w-full text-center text-xs font-bold text-black bg-amber-400 py-2.5 rounded-lg"
            >
              {lang === 'en' ? 'Open Approval Checklist' : 'Ouvrir la Liste d\'Approbation'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
