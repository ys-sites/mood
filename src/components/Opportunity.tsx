import { Section } from './Section';

const FIT = [
  'The brand already says it on Instagram: “Because one is never enough.” This campaign gives buying two a reason.',
  'The customer pays for both shawarmas, so the restaurant’s own contribution is small, fixed per meal and known in advance.',
  'With eight locations in Québec and Ontario, the campaign can run in one flagship store or across the network.',
];

export function Opportunity() {
  return (
    <Section id="opportunity" number="02" label="The opportunity" title="Why this campaign?">
      <div className="grid gap-10 lg:grid-cols-9 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-[17px] leading-relaxed text-body sm:text-lg">
            Christmas gives local businesses an opportunity to connect with their communities. Instead of running
            another discount, Shawarma Moods can offer customers a simple way to give back through a product they
            already enjoy.
          </p>
          <h3 className="mt-10 text-[15px] font-semibold text-ink">Why it suits Shawarma Moods</h3>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {FIT.map((line) => (
              <li key={line} className="py-4 text-base leading-relaxed text-body">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <figure className="lg:col-span-4">
          <img
            src="/images/poster-detail-wrap.jpg"
            alt="A Crispy Moods shawarma held in a black glove, wrapped in the black-and-white checkered paper with the round Shawarma Moods sticker."
            width={404}
            height={505}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
          <figcaption className="mt-3 text-sm text-muted">Detail from the concept poster.</figcaption>
        </figure>
      </div>
    </Section>
  );
}
