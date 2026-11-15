import React, { useState } from 'react';
import { Flame, Menu, X, Globe, Presentation, Calculator, FileSignature } from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  presentationMode: boolean;
  onTogglePresentationMode: () => void;
  onOpenChecklist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  presentationMode,
  onTogglePresentationMode,
  onOpenChecklist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: lang === 'en' ? 'Mechanism' : 'Mécanisme', href: '#section-3' },
    { label: lang === 'en' ? '1,000 Goal' : 'Défi 1 000', href: '#section-5' },
    { label: lang === 'en' ? 'Flywheel' : 'Croissance', href: '#section-7' },
    { label: lang === 'en' ? 'Simulator' : 'Finances', href: '#section-11' },
    { label: lang === 'en' ? 'Assets & Video' : 'Visuels & Vidéo', href: '#section-12' },
    { label: lang === 'en' ? 'Roadmap' : 'Calendrier', href: '#section-14' },
  ];

  return (
    <nav className="bg-[#0B0B0C]/90 backdrop-blur-lg border-b border-zinc-800/80 sticky top-[37px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity */}
          <a href="#section-1" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#EAAA2F] flex items-center justify-center shadow-lg shadow-[#EAAA2F]/20 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-[#0B0B0C] fill-[#0B0B0C]" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-2xl tracking-wider text-white leading-none">
                SHAWARMA MOODS
              </span>
              <span className="text-[10px] uppercase font-bold text-[#EAAA2F] tracking-widest leading-tight">
                {lang === 'en' ? 'Buy One. Give One.' : 'Partage le MOOD.'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-[#EAAA2F] px-3 py-2 rounded-md hover:bg-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Tools */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-[#EAAA2F] bg-[#141417] border border-zinc-800 px-2.5 py-1.5 rounded-lg transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#EAAA2F]" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              onClick={onTogglePresentationMode}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors ${
                presentationMode
                  ? 'bg-[#EAAA2F] text-[#0B0B0C] border-[#EAAA2F]'
                  : 'bg-[#141417] text-zinc-200 hover:text-[#EAAA2F] border-zinc-800'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>{presentationMode ? (lang === 'en' ? 'Exit Pitch Mode' : 'Quitter Mode') : (lang === 'en' ? 'Present Mode' : 'Mode Présentation')}</span>
            </button>

            <button
              onClick={onOpenChecklist}
              className="flex items-center gap-1.5 text-xs font-bold text-[#0B0B0C] bg-[#EAAA2F] hover:bg-[#FBCE22] px-3.5 py-1.5 rounded-lg shadow-md shadow-[#EAAA2F]/15 transition-colors"
            >
              <FileSignature className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Owner Decision' : 'Décision'}</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="text-xs font-bold text-zinc-300 border border-zinc-800 px-2 py-1 rounded"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={onTogglePresentationMode}
              className={`p-2 rounded-lg border ${
                presentationMode ? 'bg-[#EAAA2F] text-[#0B0B0C] border-[#EAAA2F]' : 'bg-[#141417] text-zinc-300 border-zinc-800'
              }`}
              aria-label="Toggle presentation mode"
            >
              <Presentation className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2 rounded-lg bg-[#141417] border border-zinc-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0C] border-b border-zinc-800 px-4 pt-2 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#EAAA2F] py-2 border-b border-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex gap-2">
            <a
              href="#section-11"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center text-xs font-bold text-zinc-200 bg-[#141417] border border-zinc-800 py-2.5 rounded-lg flex items-center justify-center gap-1"
            >
              <Calculator className="w-3.5 h-3.5 text-[#EAAA2F]" />
              <span>Economics</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChecklist();
              }}
              className="flex-1 text-center text-xs font-bold text-[#0B0B0C] bg-[#EAAA2F] py-2.5 rounded-lg"
            >
              {lang === 'en' ? 'Owner Decision' : 'Décision'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
