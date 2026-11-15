import { useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { Opportunity } from './components/Opportunity';
import { HowItWorks } from './components/HowItWorks';
import { MarketingPlan } from './components/MarketingPlan';
import { CampaignTarget } from './components/CampaignTarget';
import { BusinessValue } from './components/BusinessValue';
import { CreativeCampaign } from './components/CreativeCampaign';
import { VideoPitch } from './components/VideoPitch';
import { Financials } from './components/Financials';
import { ExecutionPlan } from './components/ExecutionPlan';
import { Decision } from './components/Decision';
import { ImageDialog, type DialogImage } from './components/ImageDialog';

export function App() {
  const [image, setImage] = useState<DialogImage | null>(null);

  return (
    <>
      <a
        href="#proposal-title"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to the proposal
      </a>
      <SiteHeader />
      <main>
        <Hero onOpenImage={setImage} />
        <Opportunity />
        <HowItWorks />
        <MarketingPlan />
        <CampaignTarget />
        <BusinessValue />
        <CreativeCampaign onOpenImage={setImage} />
        <VideoPitch />
        <Financials />
        <ExecutionPlan />
        <Decision />
      </main>
      <footer className="border-t border-line bg-white">
        <div className="mx-auto max-w-[1160px] px-5 py-8 text-sm text-muted sm:px-8">
          Private proposal prepared for Shawarma Moods, November 2026. The campaign is not live. All figures are
          illustrative until approved.
        </div>
      </footer>
      <ImageDialog image={image} onClose={() => setImage(null)} />
    </>
  );
}

export default App;
