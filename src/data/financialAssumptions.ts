// Set to true to show the "What will it cost?" section, its nav link and the
// hero link again. Hidden at the client's request (November 2026).
export const SHOW_FINANCIALS = false;

// Placeholder assumptions for the cost table. None of these are Shawarma Moods'
// actual figures. The owner replaces them in the page and the table recalculates.

export interface FinancialInputs {
  sellingPrice: number; // price the customer pays per shawarma
  ingredientCost: number; // per shawarma
  packagingCost: number; // per shawarma
  laborCost: number; // per shawarma
  contributionPerMeal: number; // restaurant's extra $ per verified donated meal
  distributionCost: number; // fixed, whole campaign
  marketingBudget: number; // fixed, whole campaign
  donatedMeals: number; // campaign volume
}

export const DEFAULT_INPUTS: FinancialInputs = {
  sellingPrice: 15,
  ingredientCost: 3.8,
  packagingCost: 0.65,
  laborCost: 1.55,
  contributionPerMeal: 1,
  distributionCost: 350,
  marketingBudget: 650,
  donatedMeals: 1000,
};

export interface FinancialResult {
  donatedMeals: number;
  shawarmasSold: number;
  revenue: number;
  ingredients: number;
  packaging: number;
  labor: number;
  restaurantContribution: number;
  distribution: number;
  marketing: number;
  totalCosts: number;
  contributionMargin: number;
  marginPercent: number;
  /** What Shawarma Moods spends on the giving itself: $1 per meal + distribution + marketing. */
  directCampaignCost: number;
}

const clean = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

export function calculate(inputs: FinancialInputs): FinancialResult {
  const donatedMeals = Math.round(clean(inputs.donatedMeals));
  // Every donated meal means the customer paid for two shawarmas,
  // and the kitchen makes two. The donated one is not free to produce.
  const shawarmasSold = donatedMeals * 2;

  const revenue = shawarmasSold * clean(inputs.sellingPrice);
  const ingredients = shawarmasSold * clean(inputs.ingredientCost);
  const packaging = shawarmasSold * clean(inputs.packagingCost);
  const labor = shawarmasSold * clean(inputs.laborCost);
  const restaurantContribution = donatedMeals * clean(inputs.contributionPerMeal);
  const distribution = clean(inputs.distributionCost);
  const marketing = clean(inputs.marketingBudget);

  const totalCosts = ingredients + packaging + labor + restaurantContribution + distribution + marketing;
  const contributionMargin = revenue - totalCosts;
  const marginPercent = revenue > 0 ? (contributionMargin / revenue) * 100 : 0;

  return {
    donatedMeals,
    shawarmasSold,
    revenue,
    ingredients,
    packaging,
    labor,
    restaurantContribution,
    distribution,
    marketing,
    totalCosts,
    contributionMargin,
    marginPercent,
    directCampaignCost: restaurantContribution + distribution + marketing,
  };
}

const money0 = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0, minimumFractionDigits: 0 });
const money2 = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 2, minimumFractionDigits: 2 });
const count = new Intl.NumberFormat('en-CA');

// `|| 0` turns -0 into 0 so a rounded value never shows as "-$0".
// Negative amounts use a true minus sign to match the cost rows in the table.
export const formatMoney = (n: number) => money0.format(Math.round(n) || 0).replace('-', '−');
export const formatMoneyCents = (n: number) => money2.format(Math.round(n * 100) / 100 || 0).replace('-', '−');
export const formatCount = (n: number) => count.format(n);
