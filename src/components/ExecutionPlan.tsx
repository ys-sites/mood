import { EXECUTION_STEPS } from '../data/proposal';
import { Section } from './Section';
import { SHOW_FINANCIALS } from '../data/financialAssumptions';

export function ExecutionPlan() {
  return (
    <Section
      id="execution"
      number={SHOW_FINANCIALS ? '10' : '09'}
      label="Execution plan"
      title="How we launch."
      intro="Eight steps from approval to the final report. Each one shows what the restaurant provides and what the marketing team produces."
      tone="paper"
    >
      <ol className="border-t-2 border-ink md:hidden">
        {EXECUTION_STEPS.map((s) => (
          <li key={s.step} className="border-b border-line py-5">
            <p className="text-sm tabular-nums text-muted">{s.when}</p>
            <h3 className="mt-1 text-base font-semibold text-ink">{s.step}</h3>
            <dl className="mt-3 space-y-3 text-[15px] leading-relaxed">
              <div>
                <dt className="text-[13px] font-semibold text-muted">Restaurant provides</dt>
                <dd className="text-body">{s.restaurant}</dd>
              </div>
              <div>
                <dt className="text-[13px] font-semibold text-muted">Marketing team produces</dt>
                <dd className="text-body">{s.marketing}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>

      <div className="hidden md:block">
        <table className="w-full border-collapse text-left text-[15px]">
          <thead>
            <tr className="border-b-2 border-ink text-[13px] text-muted">
              <th scope="col" className="w-[7.5rem] py-2 pr-4 font-semibold">When</th>
              <th scope="col" className="w-[11rem] py-2 pr-4 font-semibold">Step</th>
              <th scope="col" className="py-2 pr-4 font-semibold">Restaurant provides</th>
              <th scope="col" className="py-2 font-semibold">Marketing team produces</th>
            </tr>
          </thead>
          <tbody>
            {EXECUTION_STEPS.map((s) => (
              <tr key={s.step} className="border-b border-line align-top">
                <td className="whitespace-nowrap py-4 pr-4 tabular-nums text-muted">{s.when}</td>
                <th scope="row" className="py-4 pr-4 font-semibold text-ink">{s.step}</th>
                <td className="py-4 pr-4 leading-relaxed text-body">{s.restaurant}</td>
                <td className="py-4 leading-relaxed text-body">{s.marketing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        <div className="border-t border-ink pt-4">
          <h3 className="text-base font-semibold text-ink">Production capacity</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-body">
            1,000 meals from one kitchen on one day is a large batch. Options are to split production across
            locations, or to plan several drop-offs during Christmas week. The final number is set with the kitchen
            manager before launch.
          </p>
        </div>
        <div className="border-t border-ink pt-4">
          <h3 className="text-base font-semibold text-ink">Food safety</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-body">
            Hot meals are held at 60 °C or above, with temperature logs from the kitchen to the handover, in insulated
            carriers. The partner’s own food-handling rules apply too.
          </p>
        </div>
        <div className="border-t border-ink pt-4">
          <h3 className="text-base font-semibold text-ink">Staffing</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-body">
            Expect extra prep shifts from December 21 to 23, scheduled so regular service stays at normal speed. Counter
            staff need a five-minute briefing on how to explain the offer.
          </p>
        </div>
      </div>
    </Section>
  );
}
