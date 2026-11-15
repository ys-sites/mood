import { BUSINESS_VALUE } from '../data/proposal';
import { Section } from './Section';

export function BusinessValue() {
  return (
    <Section id="value" number="06" label="The business value" title="What Shawarma Moods gains.">
      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {BUSINESS_VALUE.map((v) => (
          <div key={v.title} className="border-t border-ink pt-5">
            <dt className="font-display text-lg font-extrabold uppercase text-ink">{v.title}</dt>
            <dd className="mt-3 text-base leading-relaxed text-body">{v.text}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-12 max-w-[42rem] text-[15px] leading-relaxed text-muted">
        These are possible benefits, not guaranteed results. After the campaign we will report reach, participation
        and meals funded, including if they fall short of the goal.
      </p>
    </Section>
  );
}
