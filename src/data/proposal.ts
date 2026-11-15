// All proposal copy lives here so it can be reviewed and edited in one place.
// Nothing below describes a live campaign. Partners and figures are proposals.

export const CAMPAIGN = {
  firstGoal: 1000,
  secondGoal: 2000,
  contributionPerMeal: 1,
  distributionDate: 'December 23',
} as const;

export const NAV_LINKS = [
  { href: '#proposal', label: 'The Proposal' },
  { href: '#marketing-plan', label: 'Marketing Plan' },
  { href: '#financials', label: 'Financials' },
  { href: '#decision', label: 'Next Steps' },
] as const;

export const HOW_IT_WORKS = [
  {
    n: '01',
    title: 'Buy two',
    text: 'The customer purchases two shawarmas at the counter or online.',
  },
  {
    n: '02',
    title: 'Enjoy one, give one',
    text: 'One meal is enjoyed. The second is paid for by the customer and set aside for donation.',
  },
  {
    n: '03',
    title: 'We add $1',
    text: 'Shawarma Moods puts an extra dollar into a separate community fund for every verified donated meal.',
  },
] as const;

export const MARKETING_STAGES = [
  {
    stage: 'Stage 1',
    when: 'Live December 1',
    title: 'Campaign launch',
    text: 'We produce the poster set (French first, English below), a short promotional video, Instagram posts and stories, and counter signs for each participating store. Every piece explains the offer the same way: you buy two, one is donated.',
  },
  {
    stage: 'Stage 2',
    when: 'December 1–21',
    title: 'Customer participation',
    text: 'Customers add the donated shawarma at the counter or online. Each one goes through its own POS button so the count can be checked. We publish the verified total every few days.',
  },
  {
    stage: 'Stage 3',
    when: 'December 1–21',
    title: 'Community engagement',
    text: 'Milestone posts at 250, 500 and 750 meals, footage of the kitchen preparing the meals, and customer stories when people agree to be featured. We will invite Montréal food creators to take part. It is voluntary, and the plan does not depend on free coverage.',
  },
  {
    stage: 'Stage 4',
    when: 'December 5–20',
    title: 'Business partnerships',
    text: 'Local businesses can fund additional meals. For example, Kin Academy could fund one meal for each qualifying crash-course registration.',
    note: 'Hypothetical example. No partnership has been agreed.',
  },
  {
    stage: 'Stage 5',
    when: 'Christmas week',
    title: 'Christmas distribution',
    text: 'Meals are prepared and handed to a confirmed community organization, with December 23 as the target date. Afterwards we publish a report with the verified meal count and the amount Shawarma Moods contributed.',
  },
] as const;

export const SUPPORTING_OFFERS = [
  {
    title: '$10 promotional shawarma',
    text: 'Normally $15. Price to be confirmed: Instagram currently shows 9.99$ for November.',
  },
  {
    title: 'Student discount',
    text: 'Late-evening offer for students. Terms to be defined.',
  },
  {
    title: 'Christmas family box',
    text: 'Serves about ten people. Contents and price to be defined.',
  },
] as const;

export const BUSINESS_VALUE = [
  {
    title: 'Brand awareness',
    text: 'In December most restaurant promotions are discounts. A simple giving offer gives people a different reason to mention Shawarma Moods, and the posters and meal count keep the name visible in stores and online for the whole month.',
  },
  {
    title: 'Customer engagement',
    text: 'Customers join something with a visible goal. Progress updates give them a reason to come back and see how close the count is to 1,000.',
  },
  {
    title: 'Social media content',
    text: 'The campaign produces a month of real material: kitchen prep, milestone counts, customer participation and the Christmas week delivery. It fits the account’s current food-first, send-it-to-a-friend style.',
  },
  {
    title: 'Community partnerships',
    text: 'Working with a community organization and local businesses builds relationships that can continue after Christmas, for example as sponsors of future events.',
  },
] as const;

export const CREATIVE_PIECES = [
  {
    title: 'Main campaign poster',
    format: 'Feed post and in-store print, 4:5',
    status: 'Concept ready',
    ready: true,
  },
  {
    title: '1,000-meal challenge graphic',
    format: 'Story and feed, updated at each milestone',
    status: 'Designed after approval',
    ready: false,
  },
  {
    title: 'Restaurant contribution graphic',
    format: 'Feed post explaining the $1 per meal',
    status: 'Designed after approval',
    ready: false,
  },
  {
    title: 'Instagram Reel',
    format: 'Vertical video, 30–60 seconds',
    status: 'Outline written, filming after approval',
    ready: false,
  },
  {
    title: 'Christmas distribution post',
    format: 'Photo set and recap, filmed with partner consent',
    status: 'Planned for Christmas week',
    ready: false,
  },
] as const;

export const PITCH_VIDEO_OUTLINE = [
  { t: '0:00', text: 'The Christmas opportunity: more than another promotion' },
  { t: '0:25', text: 'The idea: the customer buys two, enjoys one, donates one' },
  { t: '0:55', text: 'Shawarma Moods adds $1 per verified donated meal' },
  { t: '1:25', text: 'The 1,000-meal challenge and tracker (simulated)' },
  { t: '1:55', text: 'Community participation' },
  { t: '2:25', text: 'Creators: voluntary, no promised reach' },
  { t: '2:55', text: 'Future partners, e.g. Kin Academy (hypothetical)' },
  { t: '3:25', text: 'Christmas week plan, Dec 23 target (proposed)' },
  { t: '4:00', text: 'Business value, with no projections' },
  { t: '4:35', text: 'The decision we are asking for' },
] as const;

export const TRAILER_OUTLINE = [
  { t: '0:00', text: '“Un shawarma, c’est pas assez.” (This Christmas, one isn’t enough.)' },
  { t: '0:08', text: 'Achète 2 · Savoure 1 · Donne 1 (paid by the customer)' },
  { t: '0:18', text: '+1 $ from Shawarma Moods per verified donated meal' },
  { t: '0:28', text: 'Goal: 1 000 meals (simulated counter)' },
  { t: '0:38', text: 'Bring a friend, share the story' },
  { t: '0:48', text: 'Prepared fresh for Christmas week (proposed)' },
  { t: '0:54', text: '“Un pour toi. Un pour eux. Partage le mood.”' },
] as const;

export const EXECUTION_STEPS = [
  {
    when: 'Nov 16–25',
    step: 'Planning and approval',
    restaurant: 'Decide scope, bundle price and budget. Set up a POS button for the donated meal.',
    marketing: 'Final proposal, budget sheet and the written campaign rules.',
  },
  {
    when: 'Nov 16–28',
    step: 'Nonprofit coordination',
    restaurant: 'Approve the partner. Agree on meal count, drop-off time and food handling.',
    marketing: 'Shortlist Montréal organizations, make contact, draft a simple written agreement.',
  },
  {
    when: 'Nov 23–30',
    step: 'Marketing production',
    restaurant: 'Kitchen access and staff time for one photo and video shoot.',
    marketing: 'French and English posters, the Reel, counter signs and a short script for staff.',
  },
  {
    when: 'Dec 1',
    step: 'Campaign launch',
    restaurant: 'Brief counter staff. Put signs up in participating stores.',
    marketing: 'Launch post, Reel and stories.',
  },
  {
    when: 'Dec 1–21',
    step: 'Daily progress tracking',
    restaurant: 'Send the daily POS count of donated meals.',
    marketing: 'Check the counts and post progress at 250, 500, 750 and 1,000.',
  },
  {
    when: 'Dec 21–23',
    step: 'Meal preparation',
    restaurant: 'Kitchen staff, ingredients, insulated carriers and temperature logs.',
    marketing: 'Photograph the kitchen prep only.',
  },
  {
    when: 'Dec 23',
    step: 'Christmas distribution',
    restaurant: 'Vehicle, driver and handover to the partner.',
    marketing: 'Confirm timing with the partner. No filming of recipients without consent.',
  },
  {
    when: 'Dec 24 – Jan 8',
    step: 'Impact reporting',
    restaurant: 'Final POS totals and proof of the $1-per-meal transfer.',
    marketing: 'Impact report and a thank-you post with the verified figures.',
  },
] as const;

export const DECISIONS = [
  {
    title: 'Campaign concept approval',
    text: 'Go ahead with Buy One. Give One. as described here.',
  },
  {
    title: 'Budget approval',
    text: 'The marketing budget, plus $1 per donated meal ($1,000 at the first goal).',
  },
  {
    title: 'Participating locations',
    text: 'One flagship store, or all eight locations in Québec and Ontario.',
  },
  {
    title: 'Meal production capacity',
    text: 'How many donated meals the kitchen can prepare for Christmas week.',
  },
  {
    title: 'Distribution partner',
    text: 'Which community organization receives the meals.',
  },
  {
    title: 'Marketing launch schedule',
    text: 'Confirm the December 1 launch and a date for the photo and video shoot.',
  },
] as const;
