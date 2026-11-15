import { MARKETING_STAGES, SUPPORTING_OFFERS } from '../data/proposal';
import { Section } from './Section';

export function MarketingPlan() {
  return (
    <Section
      id="marketing-plan"
      number="04"
      label="The marketing plan"
      title="How we get people involved."
      intro="Five stages, from launch on December 1 to a published report after Christmas. Each stage has a specific job: explain the offer, record participation, keep people updated, widen support, and deliver the meals."
    >
      <ol className="border-t border-line">
        {MARKETING_STAGES.map((s) => (
          <li key={s.stage} className="grid gap-2 border-b border-line py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <div>
              <p className="text-sm font-semibold text-ink">{s.stage}</p>
              <p className="mt-1 text-sm text-muted">{s.when}</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-extrabold uppercase text-ink sm:text-xl">{s.title}</h3>
              <p className="mt-2 max-w-[42rem] text-base leading-relaxed text-body">{s.text}</p>
              {'note' in s && (
                <p className="mt-3 inline-block border border-ink px-2 py-0.5 text-[13px] font-medium text-ink">
                  {s.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <h3 className="text-[15px] font-semibold text-ink">Supporting offers</h3>
        <p className="mt-1 max-w-[42rem] text-[15px] text-muted">
          These can run alongside the campaign. They are ordinary commercial offers and are not part of the giving
          mechanism.
        </p>
        <dl className="mt-5 grid gap-6 sm:grid-cols-3">
          {SUPPORTING_OFFERS.map((o) => (
            <div key={o.title} className="border-t border-line pt-4">
              <dt className="text-base font-semibold text-ink">{o.title}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-body">{o.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
