export interface CampaignMilestone {
  targetMeals: number;
  label: string;
  badge: string;
  description: string;
  impactStatus: string;
  restaurantFunding: number;
}

export interface UnitEconomicsConfig {
  sellingPrice: number;       // e.g. $12.00 promo or $14.00
  regularPrice: number;       // e.g. $15.00
  ingredientCost: number;     // e.g. $3.80
  packagingGlovesCost: number;// e.g. $0.65
  kitchenLaborCost: number;   // e.g. $1.55
  paymentProcessingPct: number; // e.g. 2.9%
  restaurantDonationMatch: number; // $1.00 per donated shawarma
  logisticsDeliveryAlloc: number; // $0.50
}

export interface VideoScene {
  timecode: string;
  visual: string;
  audioVoiceover: string;
  onScreenText: string;
  soundDesign: string;
  bRollNotes: string;
}

export interface CreativePoster {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  format: string;
  imagePath: string;
  isMainPoster?: boolean;
  copyPoints: string[];
}

export interface CreatorTier {
  category: string;
  profileExample: string;
  reach: string;
  role: string;
  approach: string;
}

export interface ChecklistItem {
  id: string;
  category: 'Logistics' | 'Operations' | 'Marketing' | 'Compliance' | 'Community';
  title: string;
  description: string;
  isMandatory: boolean;
  status: 'Ready' | 'In Review' | 'Pending Owner Approval';
}
