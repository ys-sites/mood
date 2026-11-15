import type { DialogImage } from './ImageDialog';
import { SHOW_FINANCIALS } from '../data/financialAssumptions';

export const MAIN_POSTER: DialogImage = {
  src: '/Buy One, Give One Shawarma.png',
  alt: 'Concept poster: Buy One Give One. Enjoy your shawarma and donate another to someone in need. Buy 2 shawarmas, 1 donated to the community, plus $1 from Shawarma Moods. Our goal: 1,000 shawarmas for the community. Distribution during Christmas week. Spread the Mood.',
};

const FIGURES = [
  { value: '1,000', label: 'Initial meal target', restaurant: false },
  { value: '$1', label: 'Restaurant contribution per donated meal', restaurant: true },
  { value: 'Dec 23', label: 'Proposed distribution date', restaurant: false },
];

export function Hero({ onOpenImage }: { onOpenImage: (img: DialogImage) => void }) {
  return (
    <section id="proposal" aria-labelledby="proposal-title" className="bg-white">
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-12 md:gap-10 md:pb-20 md:pt-12">
        <div className="md:col-span-7">
          <p className="text-sm font-semibold tracking-[0.06em] text-muted">CHRISTMAS 2026 — MARKETING PROPOSAL</p>

          <h1
            id="proposal-title"
            className="mt-5 font-poster text-[72px] leading-[0.92] tracking-[0.01em] text-ink sm:text-[88px] lg:text-[100px]"
          >
            Buy one.
            <br />
            <span className="mt-1 inline-block bg-gold px-3 pt-1">Give one.</span>
          </h1>

          <p className="mt-6 text-[21px] font-semibold leading-snug text-ink sm:text-[23px]">
            One for you. One for someone in need.
          </p>

          <p className="mt-4 max-w-[36rem] text-[17px] leading-relaxed text-body sm:text-lg">
            This Christmas, we’re proposing a simple giving campaign for Shawarma Moods. Customers purchase two
            shawarmas, enjoy one, and fund the second for someone in need. For every donated meal, Shawarma Moods
            contributes an additional $1.
          </p>

          <dl className="mt-9 grid max-w-[36rem] grid-cols-3 border-t border-line">
            {FIGURES.map((f, i) => (
              <div key={f.label} className={`pt-4 ${i > 0 ? 'border-l border-line pl-4 sm:pl-6' : 'pr-4'}`}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-display text-[26px] font-extrabold leading-none text-ink sm:text-[32px]">
                  <span className={f.restaurant ? 'border-b-4 border-gold' : ''}>{f.value}</span>
                </dd>
                <dd className="mt-2 text-[13px] leading-snug text-muted sm:text-sm" aria-hidden="true">
                  {f.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="no-print mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#how-it-works"
              className="rounded-sm bg-gold px-6 py-3 text-[15px] font-semibold text-ink hover:bg-promo"
            >
              See how it works
            </a>
            <a
              href={SHOW_FINANCIALS ? '#financials' : '#decision'}
              className="text-[15px] font-semibold text-ink underline underline-offset-4 hover:no-underline"
            >
              {SHOW_FINANCIALS ? 'Go to the costs' : 'See what we need from you'}
            </a>
          </div>
        </div>

        <figure className="md:col-span-5">
          <button
            type="button"
            onClick={() => onOpenImage(MAIN_POSTER)}
            className="group block w-full overflow-hidden rounded-sm"
            aria-label="Open the concept poster at full size"
          >
            <img
              src="/images/poster-main.jpg"
              alt={MAIN_POSTER.alt}
              width={1086}
              height={1448}
              fetchPriority="high"
              className="aspect-[3/4] w-full object-cover"
            />
          </button>
          <figcaption className="mt-3 flex justify-between gap-4 text-sm text-muted">
            <span>Concept poster. Not yet published.</span>
            <button
              type="button"
              onClick={() => onOpenImage(MAIN_POSTER)}
              className="no-print shrink-0 font-medium text-ink underline underline-offset-4 hover:no-underline"
            >
              View full size
            </button>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
