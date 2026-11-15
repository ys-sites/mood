import { DECISIONS } from '../data/proposal';
import { Section } from './Section';
import { SHOW_FINANCIALS } from '../data/financialAssumptions';

export function Decision() {
  return (
    <Section
      id="decision"
      number={SHOW_FINANCIALS ? '11' : '10'}
      label="The decision"
      title="Let’s make it happen."
      intro="Buy One. Give One. gives Shawarma Moods an opportunity to build a Christmas campaign around community participation, measurable giving, and authentic local engagement."
    >
      <h3 className="text-[15px] font-semibold text-ink">Decisions we need from you</h3>
      <ol className="mt-3 border-t border-line">
        {DECISIONS.map((d, i) => (
          <li key={d.title} className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line py-4 sm:grid-cols-[2.5rem_16rem_1fr]">
            <span className="font-display font-extrabold tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
            <p className="font-semibold text-ink">{d.title}</p>
            <p className="col-start-2 text-[15px] leading-relaxed text-body sm:col-start-3">{d.text}</p>
          </li>
        ))}
      </ol>

      <p className="mt-6 max-w-[42rem] text-[15px] leading-relaxed text-body">
        To launch on December 1, we need these answers by November 25. We can go through them together in a 30-minute
        meeting.
      </p>

      <div className="no-print mt-8">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-sm bg-gold px-6 py-3 text-[15px] font-semibold text-ink hover:bg-promo"
        >
          Print or save as PDF
        </button>
      </div>
    </Section>
  );
}
