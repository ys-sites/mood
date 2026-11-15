import { CREATIVE_PIECES } from '../data/proposal';
import { MAIN_POSTER } from './Hero';
import type { DialogImage } from './ImageDialog';
import { Section } from './Section';

export function CreativeCampaign({ onOpenImage }: { onOpenImage: (img: DialogImage) => void }) {
  return (
    <Section
      id="creative"
      number="07"
      label="The creative campaign"
      title="What the campaign will look like."
      intro="The main poster sets the look for everything else: the Crispy Moods shawarma, black gloves, the checkered wrapper and the brand gold. The other pieces follow the same layout and are designed once the concept is approved."
    >
      <div className="grid gap-10 lg:grid-cols-9 lg:gap-12">
        <figure className="lg:col-span-4">
          <button
            type="button"
            onClick={() => onOpenImage(MAIN_POSTER)}
            className="block w-full overflow-hidden rounded-sm"
            aria-label="Open the main campaign poster at full size"
          >
            <img
              src="/images/poster-main.jpg"
              alt={MAIN_POSTER.alt}
              width={1086}
              height={1448}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </button>
          <figcaption className="mt-3 flex justify-between gap-4 text-sm text-muted">
            <span>Main campaign poster, concept.</span>
            <button
              type="button"
              onClick={() => onOpenImage(MAIN_POSTER)}
              className="no-print shrink-0 font-medium text-ink underline underline-offset-4 hover:no-underline"
            >
              View full size
            </button>
          </figcaption>
        </figure>

        <div className="lg:col-span-5">
          <h3 className="text-[15px] font-semibold text-ink">Campaign pieces</h3>
          <ul className="mt-3 border-t border-line">
            {CREATIVE_PIECES.map((p) => (
              <li key={p.title} className="border-b border-line py-4">
                <p className="text-base font-semibold text-ink">{p.title}</p>
                <p className="text-sm text-muted">{p.format}</p>
                <p className="mt-1 text-sm">
                  <span className={p.ready ? 'border-b-2 border-gold font-semibold text-ink' : 'text-body'}>{p.status}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] leading-relaxed text-body">
            Posters will be bilingual, French first with English below, as on the restaurant’s existing promotions. The
            French tagline would be <span className="font-semibold text-ink">Partage le MOOD</span>, a reply to the
            current bio line “Es-tu dans le MOOD?”.
          </p>
        </div>
      </div>
    </Section>
  );
}
