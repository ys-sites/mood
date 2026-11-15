import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, ShieldCheck, PieChart, AlertTriangle, ArrowRight } from 'lucide-react';

interface EconomicsCalculatorProps {
  lang: 'en' | 'fr';
}

export const EconomicsCalculatorSection: React.FC<EconomicsCalculatorProps> = ({ lang }) => {
  // Configurable Unit Economics State (for the 2-shawarma "Buy One. Give One." holiday bundle)
  const [bundlePrice, setBundlePrice] = useState<number>(24.00); // Customer pays for 2 shawarmas ($12/ea)
  const [ingredientCostEach, setIngredientCostEach] = useState<number>(3.80); // $3.80 per shawarma
  const [packagingEach, setPackagingEach] = useState<number>(0.65); // $0.65 packaging
  const [laborEach, setLaborEach] = useState<number>(1.50); // $1.50 labor allocation
  const [paymentFeePct, setPaymentFeePct] = useState<number>(2.9); // 2.9% credit card fee
  const [restaurantMatch, setRestaurantMatch] = useState<number>(1.00); // $1.00 restaurant donation

  // Math Calculations (2 shawarmas per bundle)
  const totalIngredients = ingredientCostEach * 2;
  const totalPackaging = packagingEach * 2;
  const totalLabor = laborEach * 2;
  const paymentFee = Number(((bundlePrice * paymentFeePct) / 100).toFixed(2));
  const totalCostBeforeDonation = totalIngredients + totalPackaging + totalLabor + paymentFee;
  const netMarginPerBundle = Number((bundlePrice - totalCostBeforeDonation - restaurantMatch).toFixed(2));
  const marginPercentage = Math.round((netMarginPerBundle / bundlePrice) * 100);

  // Scenarios for total volume
  const scenarios = [
    { name: 'Conservative (Low Traffic)', meals: 350, bundles: 350 },
    { name: 'Target Campaign Goal', meals: 1000, bundles: 1000, isTarget: true },
    { name: 'Optimistic (Grand Stretch)', meals: 2000, bundles: 2000 },
  ];

  return (
    <section id="economics" className="py-20 md:py-28 border-b border-zinc-800/80 bg-zinc-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Phase 9 · Financial Feasibility' : 'Phase 9 · Faisabilité Économique'}</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            UNIT ECONOMICS & MARGIN SIMULATOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              PROTECTING KITCHEN PROFITABILITY
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {lang === 'en'
              ? 'A sustainable campaign must protect the bottom line. Test assumptions below to see how Shawarma Moods generates net margin while funding 1,000 community meals.'
              : 'Une campagne durable doit protéger la rentabilité. Ajustez les curseurs pour constater comment Shawarma Moods génère du profit tout en finançant 1 000 repas.'}
          </p>
          <div className="inline-block px-3 py-1 rounded bg-zinc-900 border border-amber-500/30 text-amber-300/90 text-xs font-mono-num font-semibold">
            [INTERACTIVE OWNER MODEL · EDITABLE ASSUMPTIONS]
          </div>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Editable Sliders */}
          <div className="lg:col-span-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-headline text-2xl text-white uppercase tracking-wide flex items-center justify-between">
              <span>Cost & Price Assumptions (Bundle of 2)</span>
              <span className="text-xs font-mono-num text-amber-400">Live Reactive</span>
            </h3>

            {/* Slider 1: Bundle Selling Price */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300 font-semibold">Customer Bundle Price (Pays for 2 Shawarmas)</span>
                <span className="font-mono-num font-bold text-amber-400 text-sm">${bundlePrice.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="18.00"
                max="30.00"
                step="0.50"
                value={bundlePrice}
                onChange={(e) => setBundlePrice(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono-num">
                <span>$18 ($9/ea)</span>
                <span>$24 ($12/ea)</span>
                <span>$30 ($15/ea)</span>
              </div>
            </div>

            {/* Slider 2: Ingredient COGS */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300 font-semibold">Food Ingredients COGS (Meat, Pita, Toum, Veggies / meal)</span>
                <span className="font-mono-num font-bold text-white text-sm">${ingredientCostEach.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="2.50"
                max="5.50"
                step="0.10"
                value={ingredientCostEach}
                onChange={(e) => setIngredientCostEach(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="text-[10px] text-zinc-500 font-mono-num">
                Total for 2 shawarmas: ${(ingredientCostEach * 2).toFixed(2)}
              </div>
            </div>

            {/* Slider 3: Packaging & Gloves */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300 font-semibold">Packaging & Black Nitrile Gloves / meal</span>
                <span className="font-mono-num font-bold text-white text-sm">${packagingEach.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.30"
                max="1.50"
                step="0.05"
                value={packagingEach}
                onChange={(e) => setPackagingEach(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Slider 4: Kitchen Labor Allocation */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300 font-semibold">Kitchen Labor Allocation / meal</span>
                <span className="font-mono-num font-bold text-white text-sm">${laborEach.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="1.00"
                max="3.00"
                step="0.10"
                value={laborEach}
                onChange={(e) => setLaborEach(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Fixed Rule: Restaurant $1 Match */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-between text-xs">
              <div className="text-zinc-300 font-medium">
                Shawarma Moods Community Match:
              </div>
              <div className="font-mono-num font-bold text-amber-400">
                +$1.00 / donated meal
              </div>
            </div>
          </div>

          {/* Right Column: Reactive Balance Sheet per Transaction */}
          <div className="lg:col-span-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-headline text-2xl text-white uppercase tracking-wide flex items-center justify-between">
              <span>Per-Bundle Unit Margin Statement</span>
              <span className={`font-mono-num text-xs font-bold px-2 py-0.5 rounded ${
                netMarginPerBundle > 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {marginPercentage}% Net Margin
              </span>
            </h3>

            {/* Statement Breakdown */}
            <div className="space-y-3 text-xs sm:text-sm font-mono-num">
              <div className="flex items-center justify-between py-2 border-b border-zinc-800">
                <span className="text-zinc-300">Customer Purchase Revenue</span>
                <span className="font-bold text-white">${bundlePrice.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 text-zinc-400">
                <span>- Food Ingredients (2 Shawarmas)</span>
                <span className="text-red-400/90">-${totalIngredients.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 text-zinc-400">
                <span>- Packaging & Gloves (2 Sets)</span>
                <span className="text-red-400/90">-${totalPackaging.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 text-zinc-400">
                <span>- Kitchen Labor Allocation</span>
                <span className="text-red-400/90">-${totalLabor.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 text-zinc-400">
                <span>- Payment Processing ({paymentFeePct}%)</span>
                <span className="text-red-400/90">-${paymentFee.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-y border-amber-500/30 text-amber-300 bg-amber-500/5 px-2 rounded">
                <span>- Shawarma Moods $1.00 Community Contribution</span>
                <span className="font-bold">-${restaurantMatch.toFixed(2)}</span>
              </div>

              {/* Bottom Line Margin */}
              <div className="flex items-center justify-between py-3 text-base sm:text-lg font-bold border-t border-zinc-700">
                <span className="text-white font-sans uppercase">Net Contribution to Shawarma Moods:</span>
                <span className={`font-headline text-2xl tracking-wider ${
                  netMarginPerBundle > 0 ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  ${netMarginPerBundle.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 text-xs text-zinc-400 leading-relaxed">
              <strong className="text-white block mb-1">Key Takeaway for Management:</strong>
              Because the customer purchases both shawarmas, the restaurant retains an estimated <strong className="text-emerald-400">${netMarginPerBundle.toFixed(2)} ({marginPercentage}%)</strong> net contribution on every holiday bundle sold, while simultaneously delivering a hot meal to someone in need and contributing $1 to the community fund.
            </div>
          </div>

        </div>

        {/* Volume Sensitivity Matrix */}
        <div className="mt-16 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-10">
          <h4 className="font-headline text-2xl text-white uppercase tracking-wider mb-6 flex items-center justify-between">
            <span>Cumulative Campaign Scenarios (Sensitivity Matrix)</span>
            <span className="text-xs font-sans text-zinc-400 font-normal">Based on current unit slider values</span>
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-mono-num">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-[11px]">
                  <th className="pb-3 font-sans">Scenario</th>
                  <th className="pb-3 text-center">Meals Donated</th>
                  <th className="pb-3 text-center">Gross Sales</th>
                  <th className="pb-3 text-center">Restaurant $1 Fund</th>
                  <th className="pb-3 text-center text-emerald-400">Estimated Net Profit</th>
                  <th className="pb-3 text-right font-sans">Operational Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                {scenarios.map((sc) => {
                  const grossSales = sc.bundles * bundlePrice;
                  const totalFund = sc.meals * restaurantMatch;
                  const totalProfit = sc.bundles * netMarginPerBundle;

                  return (
                    <tr key={sc.name} className={sc.isTarget ? 'bg-amber-500/10 font-bold' : ''}>
                      <td className="py-4 font-sans font-medium text-white flex items-center gap-2">
                        {sc.isTarget && <span className="text-amber-400">★</span>}
                        <span>{sc.name}</span>
                      </td>
                      <td className="py-4 text-center">{sc.meals.toLocaleString()}</td>
                      <td className="py-4 text-center">${grossSales.toLocaleString()}</td>
                      <td className="py-4 text-center text-amber-400">${totalFund.toLocaleString()}</td>
                      <td className="py-4 text-center text-emerald-400 font-bold">${totalProfit.toLocaleString()}</td>
                      <td className="py-4 text-right font-sans text-xs text-zinc-400">
                        {sc.meals === 1000 ? (
                          <span className="text-amber-400 font-semibold">Primary Target Baseline</span>
                        ) : sc.meals > 1000 ? (
                          <span className="text-purple-400 font-semibold">Requires Owner Approval</span>
                        ) : (
                          <span className="text-zinc-500">Break-even exceeded</span>
                        )}
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
