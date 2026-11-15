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
import { SHOW_VIDEO } from './data/proposal';
import { Financials } from './components/Financials';
import { SHOW_FINANCIALS } from './data/financialAssumptions';
import { ExecutionPlan } from './components/ExecutionPlan';
import { Decision } from './components/Decision';
import { ImageDialog, type DialogImage } from './components/ImageDialog';
import { Logo } from './components/Logo';

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
        {SHOW_VIDEO && <VideoPitch />}
        {SHOW_FINANCIALS && <Financials />}
        <ExecutionPlan />
        <Decision />
      </main>
      <footer className="bg-black text-white [&_:focus-visible]:outline-white" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
        <div className="mx-auto max-w-[1160px] px-5 py-14 sm:px-8 md:py-16">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <Logo className="h-16 sm:h-20" />
            <p className="font-poster text-[44px] leading-[0.95] text-white sm:text-right sm:text-[56px]">
              Buy one. Give one.
              <br />
              <span className="text-gold">Spread the mood.</span>
            </p>
          </div>
          <p className="mt-12 border-t border-white/15 pt-6 text-sm text-white/65">
            Private proposal prepared for Shawarma Moods, November 2026. The campaign is not live. All figures are
            illustrative until approved.
          </p>
        </div>
      </footer>
      <ImageDialog image={image} onClose={() => setImage(null)} />
    </>
  );
}

export default App;
