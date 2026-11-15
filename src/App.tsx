import { useEffect, useState } from 'react';
import { Language, PRESENTATION_SECTIONS } from './data/campaignConstants';
import { ProposalBanner } from './components/ProposalBanner';
import { Navbar } from './components/Navbar';
import { PresentationControls } from './components/PresentationControls';
import { CampaignHero } from './components/CampaignHero';
import { NarrativeSection } from './components/NarrativeSection';
import { TwoShawarmaExplainer } from './components/TwoShawarmaExplainer';
import { RestaurantContribution } from './components/RestaurantContribution';
import { DonationSimulator } from './components/DonationSimulator';
import { MilestoneTimeline } from './components/MilestoneTimeline';
import { CommunityFlywheel } from './components/CommunityFlywheel';
import { CreatorReelShowcase } from './components/CreatorReelShowcase';
import { PartnerNetwork } from './components/PartnerNetwork';
import { CommercialOffersSection } from './components/CommercialOffersSection';
import { FinancialSimulator } from './components/FinancialSimulator';
import { CampaignPosterGallery } from './components/CampaignPosterGallery';
import { VideoShowcase } from './components/VideoShowcase';
import { ImplementationTimeline } from './components/ImplementationTimeline';
import { OwnerDecisionPanel } from './components/OwnerDecisionPanel';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [presentationMode, setPresentationMode] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = PRESENTATION_SECTIONS.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) {
              setCurrentSectionIndex(idx);
            }
          }
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 }
    );

    PRESENTATION_SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenChecklist = () => {
    const el = document.getElementById('section-15');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#0B0B0C] text-white selection:bg-[#EAAA2F] selection:text-[#0B0B0C] ${
        reducedMotion ? 'reduce-motion' : ''
      }`}
    >
      <ProposalBanner lang={lang} />
      <Navbar
        lang={lang}
        setLang={setLang}
        presentationMode={presentationMode}
        onTogglePresentationMode={() => setPresentationMode((prev) => !prev)}
        onOpenChecklist={handleOpenChecklist}
      />

      <main>
        <CampaignHero lang={lang} onOpenPosterModal={(img) => setLightboxImg(img)} />
        <NarrativeSection lang={lang} />
        <TwoShawarmaExplainer lang={lang} />
        <RestaurantContribution lang={lang} />
        <DonationSimulator lang={lang} />
        <MilestoneTimeline lang={lang} />
        <CommunityFlywheel lang={lang} />
        <CreatorReelShowcase lang={lang} />
        <PartnerNetwork lang={lang} />
        <CommercialOffersSection lang={lang} />
        <FinancialSimulator lang={lang} />
        <CampaignPosterGallery lang={lang} onOpenPosterModal={(img) => setLightboxImg(img)} />
        <VideoShowcase lang={lang} />
        <ImplementationTimeline lang={lang} />
        <OwnerDecisionPanel lang={lang} />
      </main>

      <Footer />

      <PresentationControls
        lang={lang}
        active={presentationMode}
        currentSectionIndex={currentSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
        onClose={() => setPresentationMode(false)}
      />

      <LightboxModal imgSrc={lightboxImg} onClose={() => setLightboxImg(null)} />
    </div>
  );
}

export default App;
