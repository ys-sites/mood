export interface FinancialInputs {
  sellingPricePerShawarma: number;       // Qualifying purchase price per shawarma (2x per bundle)
  ingredientCostPerShawarma: number;     // Food COGS per shawarma (applies to BOTH customer + donated meal)
  packagingCostPerShawarma: number;      // Wrapper, sticker, foil, gloves per shawarma
  laborCostPerShawarma: number;          // Prep & kitchen labor allocation per shawarma
  additionalOperatingCostPerMeal: number;// Utilities, payment processing, POS overhead per shawarma
  restaurantContributionPerDonated: number; // $1.00 community fund match per donated meal
  campaignMarketingBudget: number;       // Fixed creative/video/print budget
  distributionTransportExpenses: number; // Fixed Dec 23 thermal boxes, van/delivery expenses
  estimatedDonatedMeals: number;         // Number of qualifying 2-shawarma bundles sold
}

export const DEFAULT_FINANCIAL_INPUTS: FinancialInputs = {
  sellingPricePerShawarma: 12.0,
  ingredientCostPerShawarma: 3.8,
  packagingCostPerShawarma: 0.65,
  laborCostPerShawarma: 1.55,
  additionalOperatingCostPerMeal: 0.45,
  restaurantContributionPerDonated: 1.0,
  campaignMarketingBudget: 650,
  distributionTransportExpenses: 350,
  estimatedDonatedMeals: 1000,
};

export interface FinancialBreakdown {
  donatedMeals: number;
  totalShawarmasProduced: number; // 2x donatedMeals (1 enjoyed + 1 donated)
  qualifyingRevenue: number;
  estimatedProductionCost: number; // Full cost for BOTH shawarmas
  additionalRestaurantContribution: number; // $1 per donated meal -> separate community fund
  campaignDirectFixedCost: number; // Marketing + distribution/transport
  totalAllCosts: number;
  estimatedContributionMargin: number;
  marginPercent: number;
}

export function calculateCampaignEconomics(
  inputs: FinancialInputs,
  overrideMeals?: number
): FinancialBreakdown {
  const donatedMeals = Math.max(0, overrideMeals ?? inputs.estimatedDonatedMeals);
  const totalShawarmasProduced = donatedMeals * 2;

  // Customer pays for two shawarmas per qualifying transaction
  const qualifyingRevenue = totalShawarmasProduced * inputs.sellingPricePerShawarma;

  // CRITICAL RULE: Both the enjoyed shawarma AND the donated shawarma incur full production costs
  const unitCostPerShawarma =
    inputs.ingredientCostPerShawarma +
    inputs.packagingCostPerShawarma +
    inputs.laborCostPerShawarma +
    inputs.additionalOperatingCostPerMeal;

  const estimatedProductionCost = totalShawarmasProduced * unitCostPerShawarma;

  // Separate $1 community fund contribution per verified donated meal
  const additionalRestaurantContribution = donatedMeals * inputs.restaurantContributionPerDonated;

  const campaignDirectFixedCost =
    inputs.campaignMarketingBudget + inputs.distributionTransportExpenses;

  const totalAllCosts =
    estimatedProductionCost + additionalRestaurantContribution + campaignDirectFixedCost;

  const estimatedContributionMargin = qualifyingRevenue - totalAllCosts;
  const marginPercent =
    qualifyingRevenue > 0
      ? Math.round((estimatedContributionMargin / qualifyingRevenue) * 1000) / 10
      : 0;

  return {
    donatedMeals,
    totalShawarmasProduced,
    qualifyingRevenue,
    estimatedProductionCost,
    additionalRestaurantContribution,
    campaignDirectFixedCost,
    totalAllCosts,
    estimatedContributionMargin,
    marginPercent,
  };
}

export const SCENARIO_TARGETS = [
  {
    id: 'conservative',
    label: 'Conservative',
    meals: 500,
    note: 'Moderate counter adoption (~62 meals/location across 8 stores)',
  },
  {
    id: 'target',
    label: 'Target Goal',
    meals: 1000,
    note: 'Primary 1,000-meal goal (~125/location or 1,000 flagship)',
    isTarget: true,
  },
  {
    id: 'stretch',
    label: 'Stretch Goal',
    meals: 2000,
    note: 'Conditional expansion subject to capacity & owner approval',
  },
] as const;
