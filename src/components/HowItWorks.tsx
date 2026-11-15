import { CAMPAIGN, HOW_IT_WORKS } from '../data/proposal';
import { formatCount, formatMoney } from '../data/financialAssumptions';
import { Section } from './Section';

export function HowItWorks() {
  return (
    <Section id="how-it-works" number="03" label="How it works" title="A simple idea.">
      <ol className="grid gap-8 sm:grid-cols-3 sm:gap-8">
        {HOW_IT_WORKS.map((step, i) => (
          <li key={step.n} className={`border-t-4 pt-5 ${i === 2 ? 'border-gold' : 'border-ink'}`}>
            <span className="font-display text-sm font-extrabold tabular-nums text-muted">{step.n}</span>
            <h3 className="mt-2 font-display text-xl font-extrabold uppercase text-ink">{step.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-body">{step.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 border border-line bg-paper px-6 py-8 sm:px-8">
        <p className="text-sm font-medium text-muted">At the first goal</p>
        <div className="mt-4 grid items-end gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="font-display text-[40px] font-extrabold leading-none text-ink sm:text-[48px]">
              {formatCount(CAMPAIGN.firstGoal)}
            </p>
            <p className="mt-2 text-base text-body">meals funded by customers</p>
          </div>
          <p aria-hidden="true" className="hidden pb-8 font-display text-3xl font-extrabold text-muted sm:block">
            +
          </p>
          <div>
            <p className="font-display text-[40px] font-extrabold leading-none text-ink sm:text-[48px]">
              <span className="border-b-[6px] border-gold">{formatMoney(CAMPAIGN.firstGoal * CAMPAIGN.contributionPerMeal)}</span>
            </p>
            <p className="mt-2 text-base text-body">added by Shawarma Moods ($1 × 1,000)</p>
          </div>
        </div>
        <p className="mt-8 border-t border-line pt-5 text-[15px] leading-relaxed text-body">
          The second shawarma is not free. The customer pays for both, and the restaurant’s $1 goes into a separately
          tracked community fund.
        </p>
      </div>
    </Section>
  );
}
