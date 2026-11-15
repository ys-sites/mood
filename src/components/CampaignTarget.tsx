import { useId, useState } from 'react';
import { CAMPAIGN } from '../data/proposal';
import { formatCount, formatMoney } from '../data/financialAssumptions';
import { Section } from './Section';

const MAX = CAMPAIGN.secondGoal;

function statusLine(meals: number) {
  if (meals === 0) return 'Move the slider to see how the totals change.';
  if (meals < CAMPAIGN.firstGoal) return `${formatCount(CAMPAIGN.firstGoal - meals)} meals to go to the first goal.`;
  if (meals === CAMPAIGN.firstGoal) return 'First goal reached.';
  return `First goal reached, plus ${formatCount(meals - CAMPAIGN.firstGoal)} toward a possible second goal of 2,000. A second goal needs capacity and budget approval first.`;
}

export function CampaignTarget() {
  const [meals, setMeals] = useState(500);
  const sliderId = useId();
  const contribution = meals * CAMPAIGN.contributionPerMeal;

  return (
    <Section
      id="target"
      number="05"
      label="The campaign target"
      title="Our first goal: 1,000 meals."
      intro="The campaign has one public number: verified donated meals. Use the slider to see what different results would mean for the restaurant’s contribution."
      tone="paper"
    >
      <div className="border border-line bg-white p-6 sm:p-8">
        <p className="text-[13px] font-semibold tracking-[0.06em] text-muted">ILLUSTRATIVE CAMPAIGN SIMULATION</p>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <p className="font-display text-[40px] font-extrabold leading-none tabular-nums text-ink sm:text-[56px]">
              {formatCount(meals)}
            </p>
            <p className="mt-2 text-[15px] text-body">meals funded</p>
          </div>
          <div>
            <p className="font-display text-[40px] font-extrabold leading-none tabular-nums text-ink sm:text-[56px]">
              <span className="border-b-[6px] border-gold">{formatMoney(contribution)}</span>
            </p>
            <p className="mt-2 text-[15px] text-body">restaurant contribution</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative h-3 bg-line" aria-hidden="true">
            <div className="absolute inset-y-0 left-0 bg-gold" style={{ width: `${(meals / MAX) * 100}%` }} />
            <div className="absolute -top-1.5 bottom-[-6px] left-1/2 w-0.5 bg-ink" />
          </div>
          <div className="relative mt-2 h-10 text-[13px] text-muted" aria-hidden="true">
            <span className="absolute left-0">0</span>
            <span className="absolute left-1/2 -translate-x-1/2 text-center font-semibold text-ink">
              1,000
              <br />
              <span className="font-normal text-muted">first goal</span>
            </span>
            <span className="absolute right-0 text-right">
              2,000
              <br />
              second goal
            </span>
          </div>

          <label htmlFor={sliderId} className="mt-6 block text-[15px] font-semibold text-ink">
            Donated meals
          </label>
          <input
            id={sliderId}
            type="range"
            min={0}
            max={MAX}
            step={10}
            value={meals}
            onChange={(e) => setMeals(Number(e.target.value))}
            aria-valuetext={`${formatCount(meals)} meals, ${formatMoney(contribution)} restaurant contribution`}
            className="mt-3 w-full cursor-pointer accent-ink"
          />
          <p className="mt-4 text-[15px] text-body">{statusLine(meals)}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">
        These are not results. The campaign has not launched, and no meals have been donated yet.
      </p>
    </Section>
  );
}
