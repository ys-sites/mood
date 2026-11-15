import React, { useState } from 'react';
import { Calculator, RotateCcw, AlertTriangle, BarChart3, ShieldCheck } from 'lucide-react';
import {
  DEFAULT_FINANCIAL_INPUTS,
  FinancialInputs,
  SCENARIO_TARGETS,
  calculateCampaignEconomics,
} from '../data/financialAssumptions';
import { Language } from '../data/campaignConstants';

interface FinancialSimulatorProps {
  lang: Language;
}

export const FinancialSimulator: React.FC<FinancialSimulatorProps> = ({ lang }) => {
  const [inputs, setInputs] = useState<FinancialInputs>(DEFAULT_FINANCIAL_INPUTS);

  const updateField = (key: keyof FinancialInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: Number.isFinite(value) ? value : 0 }));
  };

  const result = calculateCampaignEconomics(inputs);
  const unitCostEach =
    inputs.ingredientCostPerShawarma +
    inputs.packagingCostPerShawarma +
    inputs.laborCostPerShawarma +
    inputs.additionalOperatingCostPerMeal;

  const maxChartVal = Math.max(result.qualifyingRevenue, result.totalAllCosts, 1);

  return (
    <section id="section-11" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F] text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '11 · Financial Simulator' : '11 · Simulateur Financier'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {lang === 'en' ? 'UNIT ECONOMICS &' : 'RENTABILITÉ &'}{' '}
            <span className="text-[#EAAA2F]">
              {lang === 'en' ? 'CAMPAIGN FEASIBILITY' : 'FAISABILITÉ FINANCIÈRE'}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Every assumption below is editable. Crucially, the customer-funded second shawarma still incurs full ingredient, packaging, labor, and distribution costs—and the $1 community fund match is tracked separately.'
              : 'Toutes les hypothèses sont modifiables. Le deuxième shawarma inclut bien ses coûts complets de production, et le 1 $ est comptabilisé à part.'}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141417] border border-[#EAAA2F]/40 text-[#EAAA2F] text-xs font-mono-num font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>ILLUSTRATIVE ASSUMPTIONS ONLY — NO GUARANTEED PROFITS</span>
          </div>
        </div>

        {/* Main Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 9 Editable Inputs */}
          <div className="lg:col-span-6 bg-[#141417] border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <h3 className="font-headline text-2xl text-white uppercase">
                Editable Assumptions (9 Inputs)
              </h3>
              <button
                onClick={() => setInputs(DEFAULT_FINANCIAL_INPUTS)}
                className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-[#EAAA2F] font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <label className="space-y-1 block">
                <span className="text-zinc-300 font-semibold block">Selling Price / Shawarma ($)</span>
                <input
                  type="number"
                  step="0.25"
                  min="0"
                  value={inputs.sellingPricePerShawarma}
                  onChange={(e) => updateField('sellingPricePerShawarma', parseFloat(e.target.value))}
                  className="w-full bg-[#0B0B0C] border border-zinc-800 rounded-xl px-3 py-2 font-mono-num text-white focus:outline-none focus:border-[#EAAA2F]"
                />
              </label>

              <label className="space-y-1 block">
                <span className="text-zinc-300 font-semibold block">Estimated Donated Meals</span>
                <input
                  type="number"
                  step="50"
                  min="0"
                  value={inputs.estimatedDonatedMeals}
                  onChange={(e) => updateField('estimatedDonatedMeals', parseInt(e.target.value, 10))}
                  className="w-full bg-[#0B0B0C] border border-zinc-800 rounded-xl px-3 py-2 font-mono-num text-[#EAAA2F] font-bold focus:outline-none focus:border-[#EAAA2F]"
                />
              </label>

              <label className="space-y-1 block">
                <span className="text-zinc-300 font-semibold block">Ingredient Cost / Shawarma ($)</span>
                <input
                  type="number"
                  step="0.10"
                  min="0"
                  value={inputs.ingredientCostPerShawarma}
                  onChange={(e) => updateField('ingredientCostPerShawarma', parseFloat(e.target.value))}
                  className="w-full bg-[#0B0B0C] border border-zinc-800 rounded-xl px-3 py-2 font-mono-num text-white focus:outline-none focus:border-[#EAAA2F]"
                />
              </label>

              <label className="space-y-1 block">
                <span className="text-zinc-300 font-semibold block">Packaging Cost / Shawarma ($)</span>
                <input
                  type="number"
                  step="0.05"
                  min="0"
                  value={inputs.packagingCostPerShawarma}
                  onChange={(e) => updateField('packagingCostPerShawarma', parseFloat(e.target.value))}
                  className="w-full bg-[#0B0B0C] border border-zinc-800 rounded-xl px-3 py-2 font-mono-num text-white focus:outline-none focus:border-[#EAAA2F]"
                />
              </label>

              <label className="space-y-1 block">
                <span className="text-zinc-300 font-semibold block">Labor Cost / Shawarma ($)</span>
                <input
                  type="number"
                  step="0.05"
                  min="0"
                  value={inputs.laborCostPerShawarma}
                  onChange={(e) => updateField('laborCostPerShawarma', parseFloat(e.target.value))}
                  className="w-full bg-[#0B0B0C] border border-zinc-800 rounded-xl px-3 py-2 font-mono-num text-white focus:outline-none focus:border-[#EAAA2F]"
                />
              </label>

              <label className="space-y-1 block">
                <span className="text-zinc-300 font-semibold block">Additional Operating / Meal ($)</span>
                <input
                  type="number"
                  step="0.05"
                  min="0"
                  value={inputs.additionalOperatingCostPerMeal}
                  onChange={(e) =>
                    updateField('additionalOperatingCostPerMeal', parseFloat(e.target.value))
                  }
                  className="w-full bg-[#0B0B0C] border border-zinc-800 rounded-xl px-3 py-2 font-mono-num text-white focus:outline-none focus:border-[#EAAA2F]"
                />
              </label>

              <label className="space-y-1 block">
                <span className="text-[#EAAA2F] font-semibold block">Restaurant Match / Donated ($)</span>
                <input
                  type="number"
                  step="0.25"
                  min="0"
                  value={inputs.restaurantContributionPerDonated}
                  onChange={(e) =>
                    updateField('restaurantContributionPerDonated', parseFloat(e.target.value))
                  }
                  className="w-full bg-[#0B0B0C] border border-[#EAAA2F]/40 rounded-xl px-3 py-2 font-mono-num text-[#EAAA2F] focus:outline-none focus:border-[#EAAA2F]"
                />
              </label>

              <label className="space-y-1 block">
                <span className="text-zinc-300 font-semibold block">Campaign Marketing Budget ($)</span>
                <input
                  type="number"
                  step="50"
                  min="0"
                  value={inputs.campaignMarketingBudget}
                  onChange={(e) => updateField('campaignMarketingBudget', parseFloat(e.target.value))}
                  className="w-full bg-[#0B0B0C] border border-zinc-800 rounded-xl px-3 py-2 font-mono-num text-white focus:outline-none focus:border-[#EAAA2F]"
                />
              </label>

              <label className="space-y-1 block sm:col-span-2">
                <span className="text-zinc-300 font-semibold block">
                  Distribution & Transportation Expenses ($)
                </span>
                <input
                  type="number"
                  step="50"
                  min="0"
                  value={inputs.distributionTransportExpenses}
                  onChange={(e) =>
                    updateField('distributionTransportExpenses', parseFloat(e.target.value))
                  }
                  className="w-full bg-[#0B0B0C] border border-zinc-800 rounded-xl px-3 py-2 font-mono-num text-white focus:outline-none focus:border-[#EAAA2F]"
                />
              </label>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0B0B0C] border border-zinc-800 text-[11px] text-zinc-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#EAAA2F] shrink-0 mt-0.5" />
              <span>
                Unit production cost = <strong className="text-white">${unitCostEach.toFixed(2)}</strong> per shawarma × 2 shawarmas ={' '}
                <strong className="text-white">${(unitCostEach * 2).toFixed(2)}</strong> per qualifying bundle (plus separate ${inputs.restaurantContributionPerDonated.toFixed(2)} community fund match).
              </span>
            </div>
          </div>

          {/* Right: Live Financial Outputs + Interactive Visual Chart */}
          <div className="lg:col-span-6 bg-[#141417] border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <h3 className="font-headline text-2xl text-white uppercase">
                Calculated Campaign Economics
              </h3>
              <span
                className={`px-2.5 py-1 rounded font-mono-num text-xs font-bold ${
                  result.estimatedContributionMargin >= 0
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-red-500/15 text-red-400'
                }`}
              >
                {result.marginPercent}% Margin
              </span>
            </div>

            {/* Output Ledger */}
            <div className="space-y-2.5 text-xs sm:text-sm font-mono-num">
              <div className="flex justify-between py-2 border-b border-zinc-800">
                <span className="text-zinc-300 font-sans">
                  Revenue from Qualifying Purchases ({result.totalShawarmasProduced.toLocaleString()} shawarmas)
                </span>
                <span className="text-white font-bold">${result.qualifyingRevenue.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-1.5 text-zinc-400">
                <span className="font-sans">
                  − Estimated Production Cost (All {result.totalShawarmasProduced.toLocaleString()} meals)
                </span>
                <span className="text-red-400">-${result.estimatedProductionCost.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-1.5 text-zinc-400">
                <span className="font-sans">− Campaign Direct Cost (Marketing + Transport)</span>
                <span className="text-red-400">-${result.campaignDirectFixedCost.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-2 px-3 rounded-lg bg-[#EAAA2F]/10 border border-[#EAAA2F]/30 text-[#EAAA2F]">
                <span className="font-sans font-semibold">
                  − Additional Restaurant Contribution (Separate Community Fund)
                </span>
                <span className="font-bold">-${result.additionalRestaurantContribution.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-3 border-t border-zinc-700 text-base font-bold">
                <span className="font-sans text-white uppercase">Estimated Contribution Margin</span>
                <span
                  className={`font-headline text-3xl tracking-wider ${
                    result.estimatedContributionMargin >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  ${result.estimatedContributionMargin.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Interactive Visual Bar Chart */}
            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-300">
                <BarChart3 className="w-4 h-4 text-[#EAAA2F]" />
                <span>Revenue Allocation Breakdown</span>
              </div>

              {[
                { label: 'Qualifying Revenue', val: result.qualifyingRevenue, color: 'bg-white' },
                { label: 'Production Cost (2× Meals)', val: result.estimatedProductionCost, color: 'bg-zinc-500' },
                { label: 'Community Fund ($1/Meal)', val: result.additionalRestaurantContribution, color: 'bg-[#EAAA2F]' },
                { label: 'Marketing & Delivery', val: result.campaignDirectFixedCost, color: 'bg-[#B78D1D]' },
                {
                  label: 'Est. Contribution Margin',
                  val: Math.max(0, result.estimatedContributionMargin),
                  color: 'bg-emerald-400',
                },
              ].map((bar) => (
                <div key={bar.label} className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono-num text-zinc-400">
                    <span>{bar.label}</span>
                    <span className="text-white font-semibold">${bar.val.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#0B0B0C] rounded-full overflow-hidden border border-zinc-800">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${bar.color}`}
                      style={{ width: `${Math.min(100, (bar.val / maxChartVal) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Scenario Comparison Table */}
        <div className="mt-10 bg-[#141417] border border-zinc-800 rounded-3xl p-6 sm:p-8">
          <h3 className="font-headline text-2xl text-white uppercase mb-5">
            Three-Scenario Sensitivity Comparison (Under Current Assumptions)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-mono-num">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-[11px] font-sans">
                  <th className="pb-3 pr-4">Scenario</th>
                  <th className="pb-3 pr-4 text-center">Donated Meals</th>
                  <th className="pb-3 pr-4 text-center">Qualifying Revenue</th>
                  <th className="pb-3 pr-4 text-center">Production + Direct Cost</th>
                  <th className="pb-3 pr-4 text-center text-[#EAAA2F]">Community Fund</th>
                  <th className="pb-3 text-right text-emerald-400">Est. Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/70">
                {SCENARIO_TARGETS.map((sc) => {
                  const calc = calculateCampaignEconomics(inputs, sc.meals);
                  const isTarget = 'isTarget' in sc && sc.isTarget;
                  return (
                    <tr
                      key={sc.id}
                      onClick={() => updateField('estimatedDonatedMeals', sc.meals)}
                      className={`cursor-pointer hover:bg-zinc-900/60 transition-colors ${
                        isTarget ? 'bg-[#EAAA2F]/10' : ''
                      }`}
                    >
                      <td className="py-4 pr-4 font-sans">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          {isTarget && <span className="text-[#EAAA2F]">★</span>}
                          <span>{sc.label}</span>
                        </div>
                        <div className="text-[11px] text-zinc-400">{sc.note}</div>
                      </td>
                      <td className="py-4 pr-4 text-center text-white font-bold">
                        {calc.donatedMeals.toLocaleString()}
                      </td>
                      <td className="py-4 pr-4 text-center text-zinc-200">
                        ${calc.qualifyingRevenue.toLocaleString()}
                      </td>
                      <td className="py-4 pr-4 text-center text-zinc-400">
                        ${(calc.estimatedProductionCost + calc.campaignDirectFixedCost).toLocaleString()}
                      </td>
                      <td className="py-4 pr-4 text-center text-[#EAAA2F] font-bold">
                        ${calc.additionalRestaurantContribution.toLocaleString()}
                      </td>
                      <td
                        className={`py-4 text-right font-bold ${
                          calc.estimatedContributionMargin >= 0 ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        ${calc.estimatedContributionMargin.toLocaleString()} ({calc.marginPercent}%)
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
