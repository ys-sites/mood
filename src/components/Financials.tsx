import { useId, useMemo, useState } from 'react';
import {
  DEFAULT_INPUTS,
  type FinancialInputs,
  calculate,
  formatCount,
  formatMoney,
  formatMoneyCents,
} from '../data/financialAssumptions';
import { Section } from './Section';

type Key = keyof FinancialInputs;
type Draft = Record<Key, string>;

const FIELDS: { key: Key; label: string; hint: string; step: string; money: boolean }[] = [
  { key: 'sellingPrice', label: 'Selling price per shawarma', hint: 'Paid for each of the two', step: '0.25', money: true },
  { key: 'ingredientCost', label: 'Ingredient cost', hint: 'Per shawarma', step: '0.05', money: true },
  { key: 'packagingCost', label: 'Packaging cost', hint: 'Per shawarma, incl. wrapper', step: '0.05', money: true },
  { key: 'laborCost', label: 'Labour cost', hint: 'Per shawarma', step: '0.05', money: true },
  { key: 'contributionPerMeal', label: 'Restaurant contribution', hint: 'Per verified donated meal', step: '0.25', money: true },
  { key: 'distributionCost', label: 'Distribution expenses', hint: 'Whole campaign', step: '25', money: true },
  { key: 'marketingBudget', label: 'Marketing budget', hint: 'Whole campaign', step: '50', money: true },
];

const toDraft = (inputs: FinancialInputs): Draft =>
  Object.fromEntries(Object.entries(inputs).map(([k, v]) => [k, String(v)])) as Draft;

const fromDraft = (draft: Draft): FinancialInputs =>
  Object.fromEntries(Object.entries(draft).map(([k, v]) => [k, Number(v) || 0])) as unknown as FinancialInputs;

const SCENARIOS = [
  { meals: 1000, label: '1,000 meals', note: 'first goal' },
  { meals: 2000, label: '2,000 meals', note: 'possible second goal' },
];

function NumberField({
  label,
  hint,
  value,
  step,
  money,
  onChange,
}: {
  label: string;
  hint: string;
  value: string;
  step: string;
  money: boolean;
  onChange: (v: string) => void;
}) {
  const id = useId();
  return (
    <div className="grid grid-cols-[1fr_6.5rem] items-center gap-3">
      <div>
        <label htmlFor={id} className="block text-[15px] font-semibold leading-snug text-ink">
          {label}
        </label>
        <p id={`${id}-hint`} className="text-[13px] leading-snug text-muted">
          {hint}
        </p>
      </div>
      <div className="flex items-center border border-[#CFCFCF] bg-white focus-within:border-ink">
        {money && <span className="pl-3 text-[15px] text-muted" aria-hidden="true">$</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={step}
          value={value}
          aria-describedby={`${id}-hint`}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 bg-transparent px-2 py-2 text-[16px] tabular-nums text-ink outline-none"
        />
      </div>
    </div>
  );
}

export function Financials() {
  const [draft, setDraft] = useState<Draft>(() => toDraft(DEFAULT_INPUTS));
  const r = useMemo(() => calculate(fromDraft(draft)), [draft]);
  const volumeId = useId();

  const set = (key: Key) => (v: string) => setDraft((d) => ({ ...d, [key]: v }));
  const perMeal = (total: number) => (r.donatedMeals > 0 ? formatMoneyCents(total / r.donatedMeals) : '—');
  const cost = (s: string) => (s === '—' ? s : `−${s}`);

  const costRows = [
    { label: 'Ingredients (both shawarmas)', total: r.ingredients },
    { label: 'Packaging (both shawarmas)', total: r.packaging },
    { label: 'Labour (both shawarmas)', total: r.labor },
    { label: 'Restaurant $1 contribution', total: r.restaurantContribution, restaurant: true },
    { label: 'Distribution (fixed)', total: r.distribution },
    { label: 'Marketing (fixed)', total: r.marketing },
  ];

  return (
    <Section
      id="financials"
      number="09"
      label="Financial feasibility"
      title="What will it cost?"
      intro={
        <p>
          Every figure in the form is a placeholder, not a Shawarma Moods number. Replace them with your own costs and
          the table updates.
        </p>
      }
    >
      <div className="grid gap-12 lg:grid-cols-9 lg:gap-10">
        <form className="lg:col-span-3" onSubmit={(e) => e.preventDefault()} aria-label="Campaign assumptions">
          <fieldset>
            <legend className="text-[15px] font-semibold text-ink">Campaign volume</legend>
            <div className="mt-3 grid grid-cols-2 gap-2" role="group" aria-label="Scenario">
              {SCENARIOS.map((s) => {
                const active = Number(draft.donatedMeals) === s.meals;
                return (
                  <button
                    key={s.meals}
                    type="button"
                    aria-pressed={active}
                    onClick={() => set('donatedMeals')(String(s.meals))}
                    className={`rounded-sm border px-3 py-2 text-left text-sm ${
                      active ? 'border-ink bg-ink text-white' : 'border-[#CFCFCF] bg-white text-ink hover:border-ink'
                    }`}
                  >
                    <span className="block font-semibold">{s.label}</span>
                    <span className={active ? 'text-white/75' : 'text-muted'}>{s.note}</span>
                  </button>
                );
              })}
            </div>
            <label htmlFor={volumeId} className="mt-4 block text-[13px] text-muted">
              Or enter any number of donated meals
            </label>
            <input
              id={volumeId}
              type="number"
              inputMode="numeric"
              min={0}
              step={50}
              value={draft.donatedMeals}
              onChange={(e) => set('donatedMeals')(e.target.value)}
              className="mt-2 w-full border border-[#CFCFCF] bg-white px-3 py-2 text-[16px] tabular-nums text-ink outline-none focus:border-ink"
            />
          </fieldset>

          <div className="mt-8 space-y-4 border-t border-line pt-6">
            {FIELDS.map((f) => (
              <NumberField
                key={f.key}
                label={f.label}
                hint={f.hint}
                value={draft[f.key]}
                step={f.step}
                money={f.money}
                onChange={set(f.key)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setDraft(toDraft(DEFAULT_INPUTS))}
            className="no-print mt-6 text-sm font-semibold text-ink underline underline-offset-4 hover:no-underline"
          >
            Reset to placeholder figures
          </button>
        </form>

        <div className="min-w-0 lg:col-span-6">
          <div className="grid grid-cols-2 gap-6 border-b border-line pb-8">
            <div>
              <p className="text-sm text-muted">Restaurant’s direct campaign cost</p>
              <p className="mt-1 font-display text-[30px] font-extrabold leading-tight tabular-nums text-ink sm:text-[36px]">
                {formatMoney(r.directCampaignCost)}
              </p>
              <p className="mt-1 text-[13px] text-muted">Contribution + distribution + marketing</p>
            </div>
            <div>
              <p className="text-sm text-muted">Estimated contribution margin</p>
              <p className="mt-1 font-display text-[30px] font-extrabold leading-tight tabular-nums text-ink sm:text-[36px]">
                {formatMoney(r.contributionMargin)}
              </p>
              <p className="mt-1 text-[13px] text-muted">
                {r.revenue > 0 ? `${r.marginPercent.toFixed(1)}% of campaign revenue` : 'No revenue at zero meals'}
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-[14px] sm:text-[15px]">
              <caption className="pb-3 text-left text-sm text-muted">
                {formatCount(r.donatedMeals)} donated meals, which means {formatCount(r.shawarmasSold)} shawarmas sold
                and prepared.
              </caption>
              <thead>
                <tr className="border-b-2 border-ink text-left text-[13px] text-muted">
                  <th scope="col" className="py-2 pr-4 font-semibold">Line item</th>
                  <th scope="col" className="py-2 pr-4 text-right font-semibold">Per donated meal</th>
                  <th scope="col" className="py-2 text-right font-semibold">Campaign total</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                <tr className="border-b border-line">
                  <th scope="row" className="py-3 pr-4 text-left font-semibold text-ink">Revenue (customer pays for 2)</th>
                  <td className="py-3 pr-4 text-right">{perMeal(r.revenue)}</td>
                  <td className="py-3 text-right font-semibold text-ink">{formatMoney(r.revenue)}</td>
                </tr>
                {costRows.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <th scope="row" className="py-3 pr-4 text-left font-normal text-body">
                      {row.restaurant ? (
                        <span className="border-l-4 border-gold pl-2">{row.label}</span>
                      ) : (
                        row.label
                      )}
                    </th>
                    <td className="py-3 pr-4 text-right text-body">{cost(perMeal(row.total))}</td>
                    <td className="py-3 text-right text-body">{cost(formatMoney(row.total))}</td>
                  </tr>
                ))}
                <tr className="border-b border-line">
                  <th scope="row" className="py-3 pr-4 text-left font-semibold text-ink">Total costs</th>
                  <td className="py-3 pr-4 text-right">{cost(perMeal(r.totalCosts))}</td>
                  <td className="py-3 text-right font-semibold text-ink">{cost(formatMoney(r.totalCosts))}</td>
                </tr>
                <tr className="border-b-2 border-ink">
                  <th scope="row" className="py-3 pr-4 text-left font-semibold text-ink">Estimated contribution margin</th>
                  <td className="py-3 pr-4 text-right font-semibold text-ink">{perMeal(r.contributionMargin)}</td>
                  <td className="py-3 text-right font-bold text-ink">{formatMoney(r.contributionMargin)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-[15px] font-semibold text-ink">How the calculation works</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-body marker:text-muted">
            <li>Each donated meal means a customer paid for two shawarmas, so revenue is 2 × the selling price.</li>
            <li>
              The kitchen makes both shawarmas, so ingredients, packaging and labour are counted twice. The donated meal
              is not free to produce.
            </li>
            <li>The restaurant’s $1 is paid on top of that, into a separately tracked community fund.</li>
            <li>Distribution and marketing are fixed costs for the whole campaign, spread across the meals in the per-meal column.</li>
            <li>
              Rent, utilities and other overheads are not included. Some of this revenue would have come in anyway from
              regular customers, so read the margin as “does the campaign pay for itself”, not as new profit.
            </li>
          </ol>
        </div>
      </div>
    </Section>
  );
}
