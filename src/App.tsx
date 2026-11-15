/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ProposalBanner } from './components/ProposalBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TheWhySection } from './components/TheWhySection';
import { MechanismSection } from './components/MechanismSection';
import { SharedCommitmentSection } from './components/SharedCommitmentSection';
import { LiveTrackerSection } from './components/LiveTrackerSection';
import { CommunityDeliverySection } from './components/CommunityDeliverySection';
import { CreatorAmplificationSection } from './components/CreatorAmplificationSection';
import { BusinessCollaborationSection } from './components/BusinessCollaborationSection';
import { CommercialOffersSection } from './components/CommercialOffersSection';
import { EconomicsCalculatorSection } from './components/EconomicsCalculatorSection';
import { VideoProductionSection } from './components/VideoProductionSection';
import { PosterGallerySection } from './components/PosterGallerySection';
import { OwnerDecisionSection } from './components/OwnerDecisionSection';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const handleOpenChecklist = () => {
    const el = document.getElementById('owner-decision');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* 1. Mandatory Top Confidential Proposal Banner */}
      <ProposalBanner />

      {/* 2. Primary Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenChecklist={handleOpenChecklist}
      />

      {/* Main Content Stream in strict AGENTS.md narrative order */}
      <main className="flex-1">
        {/* Hero Section & Official Poster Showcase */}
        <HeroSection
          lang={lang}
          onOpenPosterModal={(src) => setLightboxImg(src)}
        />

        {/* Narrative Step 1: Emotional Hook (The Why) */}
        <TheWhySection lang={lang} />

        {/* Narrative Step 2: The Core 3-Step Mechanism */}
        <MechanismSection lang={lang} />

        {/* Narrative Step 3: Shared Commitment ($1 Match) */}
        <SharedCommitmentSection lang={lang} />

        {/* Narrative Step 4: The 1,000 Challenge & Interactive Demo Tracker */}
        <LiveTrackerSection lang={lang} />

        {/* Narrative Step 5: Community Delivery (Dec 23, HACCP, Dignity Policy) */}
        <CommunityDeliverySection lang={lang} />

        {/* Narrative Step 6: Creator Amplification & Organic Storytelling */}
        <CreatorAmplificationSection lang={lang} />

        {/* Narrative Step 7: B2B Expansion & Case Study (Kin Academy) */}
        <BusinessCollaborationSection lang={lang} />

        {/* Narrative Step 8: Supporting Commercial Offers ($10 deal, student, family box) */}
        <CommercialOffersSection lang={lang} />

        {/* Narrative Step 9: Financial Feasibility & Unit Economics Simulator */}
        <EconomicsCalculatorSection lang={lang} />

        {/* Claude Opus Video Production Suite (60s Trailer & 5min Owner Pitch) */}
        <VideoProductionSection lang={lang} />

        {/* Creative Artwork & Poster Gallery */}
        <PosterGallerySection
          lang={lang}
          onOpenPosterModal={(src) => setLightboxImg(src)}
        />

        {/* Owner Readiness Dashboard & Strategy Alignment CTA */}
        <OwnerDecisionSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Lightbox Modal for Poster Zooming */}
      <LightboxModal
        imgSrc={lightboxImg}
        onClose={() => setLightboxImg(null)}
      />
    </div>
  );
}
