import { CampaignMilestone, CreativePoster, CreatorTier, ChecklistItem, VideoScene } from '../types';

export const CAMPAIGN_COPY = {
  brandName: "SHAWARMA MOODS",
  location: "Montréal, QC",
  campaignTitle: "BUY ONE. GIVE ONE.",
  tagline: "SPREAD THE MOOD.",
  subTagline: "One for you. One for someone in need.",
  disclaimer: "CONCEPTUAL PROPOSAL — FOR OWNER REVIEW ONLY. NOT AN ACTIVE CAMPAIGN.",
  coreCallout: "Buy two shawarmas. Enjoy one and donate the other. Shawarma Moods adds $1 to the community fund for every donated meal.",
  targetDate: "Christmas Week · Target Delivery Dec 23, 2026",
  initialGoal: 1000,
  stretchGoal: 2000,
};

export const MILESTONES: CampaignMilestone[] = [
  {
    targetMeals: 250,
    label: "Milestone 1: The Spark",
    badge: "250 MEALS",
    description: "First batch of high-grade chicken, lamb, and signature spices reserved with local butcher partners.",
    impactStatus: "Initial shelter contact established; first 250 insulated containers ordered.",
    restaurantFunding: 250,
  },
  {
    targetMeals: 500,
    label: "Milestone 2: Community Momentum",
    badge: "500 MEALS",
    description: "Halfway point reached. Kitchen schedules dedicated preparation shift for Christmas distribution.",
    impactStatus: "Logistics corridor finalized for delivery vans with temperature-controlled warming units.",
    restaurantFunding: 500,
  },
  {
    targetMeals: 750,
    label: "Milestone 3: Mobilization",
    badge: "750 MEALS",
    description: "Packaging team locks in branded checkered holiday parchment and warming insulation.",
    impactStatus: "Shelter distribution rosters confirmed with partner charity teams across Montréal.",
    restaurantFunding: 750,
  },
  {
    targetMeals: 1000,
    label: "Milestone 4: Primary Mission Accomplished",
    badge: "1,000 MEALS GOAL",
    description: "Target achieved! 1,000 fresh shawarmas funded by guests + $1,000 contributed by Shawarma Moods.",
    impactStatus: "Dec 23 community distribution fully funded and operational.",
    restaurantFunding: 1000,
  },
  {
    targetMeals: 2000,
    label: "Milestone 5: The Grand Stretch",
    badge: "2,000 STRETCH",
    description: "Unlocked only upon owner budget and kitchen capacity approval. Extended to New Year's Eve distribution.",
    impactStatus: "Expands coverage to secondary youth shelters and community pantries in Montréal.",
    restaurantFunding: 2000,
  },
];

export const TRAILER_SCENES: VideoScene[] = [
  {
    timecode: "0:00 - 0:08",
    visual: "Cinematic 4K slow-motion: Cold, snow-dusted Montréal twilight. Rue Sainte-Catherine or Mile End. Breath in the freezing air, holiday string lights reflecting off the wet pavement.",
    audioVoiceover: "Voiceover (warm, grounded Montréal tone): 'Winter in Montréal hits hard. When the snow covers the city, warmth isn't just a luxury... it's human connection.'",
    onScreenText: "MONTRÉAL · WINTER 2026",
    soundDesign: "Subtle winter wind howling, followed by the soft crunch of snow and a distant church bell.",
    bRollNotes: "Arri-style cinematic anamorphic glow on the city streetlights. Shallow depth of field."
  },
  {
    timecode: "0:08 - 0:22",
    visual: "Camera cuts inside Shawarma Moods. Immediate rush of sensory warmth: glowing vertical rotisserie spit rotating with seasoned, sizzling meat. Flame sear, razor-sharp knife slicing thin crisp strips into a tray.",
    audioVoiceover: "Voiceover: 'At Shawarma Moods, the grill never stops. The smell of roasted spices, toasted pita, and fresh garlic toum. Here, food is energy. It's family. It's Mood.'",
    onScreenText: "CRISPY MOODS. REAL FLAME.",
    soundDesign: "Sizzle of meat hitting hot flat-top, rhythmic knife slicing, warm ambient restaurant buzz and low soul/hip-hop beat kicks in.",
    bRollNotes: "Extreme macro 120fps shot of garlic sauce drizzling over crisp golden chicken."
  },
  {
    timecode: "0:22 - 0:38",
    visual: "Black-gloved chef swiftly rolls two shawarmas in signature black/gold checkered paper. One is bagged for a customer with a smile. The second is placed in a clean, designated warming station labeled 'COMMUNITY'.",
    audioVoiceover: "Voiceover: 'This Christmas, we’re doing something we’ve never done before. Buy One. Give One. You order two shawarmas—one hot meal for you, and one fresh hot meal funded for a neighbour who needs it.'",
    onScreenText: "BUY ONE. GIVE ONE. / ONE FOR YOU. ONE FOR SOMEONE IN NEED.",
    soundDesign: "Paper crinkling, tape seal snap, upbeat melodic transition.",
    bRollNotes: "Split screen or dual-frame animation showing the customer picking up their meal and the second meal being logged."
  },
  {
    timecode: "0:38 - 0:48",
    visual: "Graphics overlay: +$1 icon drops into a community vault. Camera reveals the staff assembling thermal delivery boxes stacked tall in the kitchen for December 23.",
    audioVoiceover: "Voiceover: 'And for every single meal our community donates, Shawarma Moods matches with one dollar from our own register into our community kitchen fund. Our goal? 1,000 hot meals.'",
    onScreenText: "+ $1 FROM SHAWARMA MOODS PER DONATED MEAL · GOAL: 1,000",
    soundDesign: "Register chime, punchy bass drop, warm cheering.",
    bRollNotes: "Staff packing insulated boxes with dignity and care. No patronizing charity tropes."
  },
  {
    timecode: "0:48 - 1:00",
    visual: "Dec 23 target distribution: Steam billowing from an opened thermal carrier at a community gathering space in Montréal. Smiling eyes, warm hands holding fresh warm foil-wrapped meals.",
    audioVoiceover: "Voiceover: 'Christmas week, we deliver the warmth. Because nobody in this city should spend the holidays hungry. This Christmas... Spread the Mood.'",
    onScreenText: "SPREAD THE MOOD. · CHRISTMAS 2026 · SHAWARMA MOODS MONTRÉAL",
    soundDesign: "Full musical crescendo, soft festive acoustic guitar strum with modern urban pulse.",
    bRollNotes: "Fade to black with official Shawarma Moods logo and conceptual proposal watermark."
  }
];

export const PITCH_VIDEO_MODULES = [
  {
    step: "01",
    title: "Executive Rationale: Why Christmas 2026?",
    duration: "0:00 - 0:50",
    summary: "Why a direct 'Buy One. Give One.' model elevates Shawarma Moods from a local takeout spot to an essential Montréal cultural institution.",
    script: "Good afternoon. We're here to present a campaign proposal engineered specifically for Shawarma Moods for Christmas 2026. In the restaurant business, December is the highest-volume month, but it's also the season where customers actively look for opportunities to give back. By turning a routine meal purchase into a personal act of holiday generosity, we align Shawarma Moods with community warmth, brand love, and massive customer retention."
  },
  {
    step: "02",
    title: "The Mechanics & Customer Clarity",
    duration: "0:50 - 1:45",
    summary: "Clear breakdown of why the customer pays for two meals, avoiding margin erosion and maximizing community reach.",
    script: "Let's be 100% transparent on the financial mechanics: this is not a 'giveaway' funded out of thin air. The customer purchases two shawarmas at a special festive campaign bundle. They take one home, and the second is immediately earmarked, prepared fresh, and stored under strict cold-chain/warm-chain safety protocols for our mass December 23 delivery. Because the guest funds the food cost, Shawarma Moods protects its operational margin while contributing an additional $1 match per verified meal to demonstrate genuine co-investment."
  },
  {
    step: "03",
    title: "Operational Feasibility & Food Safety",
    duration: "1:45 - 2:40",
    summary: "HACCP compliance, kitchen batch scheduling, insulated thermal carriers, and shelter logistics.",
    script: "One thousand meals sounds daunting if done on the fly, but when planned over three weeks with batched kitchen prep, it represents only ~45 extra shawarmas rolled per day leading up to Dec 23. On distribution day, our prep kitchen operates in two dedicated four-hour blocks. Meals are wrapped in foil and food-grade heat retention bags, maintaining core temperatures above 60°C in Cambro-style thermal boxes during transport to vetted Montréal shelter partners."
  },
  {
    step: "04",
    title: "Creator Amplification & Community PR",
    duration: "2:40 - 3:45",
    summary: "Authentic, ethical storytelling with Montréal foodies; no fake virality or staged charity filming.",
    script: "We do not believe in exploiting people in vulnerable positions for TikTok views. Our creator strategy focuses on the kitchen craft, the sizzling rotisserie, the customer's choice at the counter, and the behind-the-scenes packaging. We partner with local Montréal creators who genuinely love the food, inviting them behind the counter in black gloves to roll the 100th, 500th, and 1,000th shawarma. This drives organic word-of-mouth with zero media waste."
  },
  {
    step: "05",
    title: "Business Collaboration & Commercial Upgrades",
    duration: "3:45 - 4:25",
    summary: "Demonstrating commercial synergy: Kin Academy case study, $10 promotional items, and 10-person Family Holiday Boxes.",
    script: "This campaign also opens doors to institutional B2B orders. For example, local academies like Kin Academy can sponsor 50 meals for their holiday events, or link course signups to meals funded. Alongside the charity mechanism, we cross-sell a $10 promotional shawarma option and a festive 10-person Family Box that drives high-ticket holiday catering revenue."
  },
  {
    step: "06",
    title: "The Owner's Approval Roadmap",
    duration: "4:25 - 5:00",
    summary: "Budget sign-off, nonprofit alignment, and next steps to greenlight production for Q4 2026.",
    script: "Today, this proposal is strictly conceptual. To move to production, we require three checks: 1) Kitchen capacity audit for Dec 22-23; 2) Alignment with a verified Montréal nonprofit; and 3) Sign-off on the $1 match allocation capped at $1,000 for Milestone 4. Let's make Christmas 2026 the moment Shawarma Moods defines what a community restaurant can be."
  }
];

export const CREATIVE_POSTERS: CreativePoster[] = [
  {
    id: "poster-official",
    title: "Official Campaign Master Artwork",
    subtitle: "The Flagship 4:5 Poster Concept",
    tagline: "BUY ONE. GIVE ONE. SPREAD THE MOOD.",
    format: "1080 × 1350 (4:5 Vertical)",
    imagePath: "/Buy One, Give One Shawarma.png",
    isMainPoster: true,
    copyPoints: [
      "Official Shawarma Moods brand artwork provided by client",
      "Features high-contrast golden typography on deep obsidian background",
      "Close-up grilled pita with char marks and visible crisp seasoned meat",
      "Clear visual depiction of the holiday season of giving"
    ]
  },
  {
    id: "poster-mechanism",
    title: "The 3-Step Mechanism Poster",
    subtitle: "In-Store Counter & Table-Tent Graphic",
    tagline: "ONE FOR YOU. ONE FOR SOMEONE IN NEED.",
    format: "1080 × 1350 (4:5)",
    imagePath: "/Buy One, Give One Shawarma.png",
    copyPoints: [
      "Step 1: Order two shawarmas at the counter or online",
      "Step 2: Take one hot meal home, fund one for the community",
      "Step 3: Shawarma Moods kitchen adds $1 and delivers Dec 23",
      "Designed for fast readability during 30-second counter ordering"
    ]
  },
  {
    id: "poster-challenge",
    title: "The 1,000 Shawarma Challenge",
    subtitle: "Social Feed & Stories Community Callout",
    tagline: "CAN MONTRÉAL HIT 1,000 MEALS?",
    format: "1080 × 1350 (4:5)",
    imagePath: "/Buy One, Give One Shawarma.png",
    copyPoints: [
      "Live community goal tracker graphic",
      "Highlights Shawarma Moods matching $1,000 upon completion",
      "Celebrates collective neighbourhood participation",
      "Clear call to visit or order online during December"
    ]
  },
  {
    id: "poster-distribution",
    title: "Christmas Week Delivery Announcement",
    subtitle: "Community Impact Notice",
    tagline: "WARMTH DELIVERED DECEMBER 23.",
    format: "1080 × 1350 (4:5)",
    imagePath: "/Buy One, Give One Shawarma.png",
    copyPoints: [
      "Transparent disclosure of distribution logistics",
      "Notice of community kitchen volunteer packaging session",
      "Ethical, dignified respect for all recipients",
      "Montréal shelter partnership spotlight (pending confirmation)"
    ]
  }
];

export const CREATOR_TIERS: CreatorTier[] = [
  {
    category: "Montréal Food Critics & Halal Guides",
    profileExample: "Local food bloggers & TikTok food reviewers (50K - 250K followers)",
    reach: "High-intent local foodies across Greater Montréal",
    role: "Behind-the-counter kitchen experience; testing the signature crisp crust & toum ratio",
    approach: "Invite to roll their own shawarma in black gloves; explain how the 2nd meal is funded."
  },
  {
    category: "Student & Campus Ambassadors",
    profileExample: "Concordia, McGill, and UdeM student creators (10K - 40K followers)",
    reach: "Youth, late-night diners, campus clubs",
    role: "Highlighting the $10 promo & community giving during finals week in December",
    approach: "Deliver warm boxes to study groups; organic TikTok stories highlighting the 1,000 challenge."
  },
  {
    category: "Community Voices & Cultural Leaders",
    profileExample: "Montréal neighbourhood champions & non-profit advocates",
    reach: "Civic-minded residents, families, local business owners",
    role: "Validating the transparency of the $1 match and December 23 distribution",
    approach: "Participate in thermal box packing and distribution delivery observation."
  }
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "chk-1",
    category: "Operations",
    title: "Kitchen Batch Capacity Audit",
    description: "Verify grill spit throughput and staffing for preparing 1,000 additional meals across December and peak delivery on Dec 23.",
    isMandatory: true,
    status: "In Review"
  },
  {
    id: "chk-2",
    category: "Community",
    title: "Vetted Montréal Nonprofit Partnership",
    description: "Formalize recipient partner agreement (e.g. Old Brewery Mission, Dans la Rue, or local food bank) for safe intake on Dec 23.",
    isMandatory: true,
    status: "Pending Owner Approval"
  },
  {
    id: "chk-3",
    category: "Logistics",
    title: "Thermal Transport & Food Safety (HACCP)",
    description: "Secure insulated Cambro food carriers and verify temperature logging protocols (core temp > 60°C at distribution).",
    isMandatory: true,
    status: "Ready"
  },
  {
    id: "chk-4",
    category: "Compliance",
    title: "Quebec Consumer Protection & Language Review",
    description: "Ensure all counter signage, disclaimers, and social promotions have full French/English parity under Bill 96 guidelines.",
    isMandatory: true,
    status: "Ready"
  },
  {
    id: "chk-5",
    category: "Marketing",
    title: "Creator Code of Ethics & Dignity Filming Policy",
    description: "Strict policy prohibiting intrusive filming of food recipients; focus content on kitchen craft and volunteer packaging.",
    isMandatory: true,
    status: "Ready"
  },
  {
    id: "chk-6",
    category: "Operations",
    title: "Owner Financial Allocation Sign-off",
    description: "Approve dedicated $1,000 cash fund cap matching the 1,000 verified donated shawarmas.",
    isMandatory: true,
    status: "Pending Owner Approval"
  }
];
