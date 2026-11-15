# SHAWARMA MOODS — ANTIGRAVITY MASTER SYSTEM

## Mission
Build a premium, cinematic, mobile-first, interactive **private owner-facing marketing pitch website** for Shawarma Moods, Montréal, presenting the proposed Christmas 2026 campaign **BUY ONE. GIVE ONE.** with the tagline **SPREAD THE MOOD.**

This is a PROPOSAL, not an active campaign. Never portray conceptual donation figures, nonprofit commitments, creator partnerships, outcomes, or mockups as real. Do not implement real payments, donation collection, or public claims without explicit authorization.

## Non-negotiable campaign mechanism
A customer **pays for two shawarmas**, keeps one, and funds one shawarma for someone in need. The second shawarma is NOT free. Shawarma Moods additionally contributes **$1 per verified donated shawarma** to a separately accounted community fund. Initial goal: **1,000 donated shawarmas** and therefore **$1,000 in restaurant contributions if that goal is reached**. Distribution is proposed for Christmas week (target December 23), subject to nonprofit coordination, logistics, food safety, and capacity. If the first goal is reached, consider raising the next goal to 2,000 only after capacity and budget approval.

## Campaign narrative hierarchy — do not reorder
1. Emotional hook: Christmas as a season of giving; a restaurant becomes a gathering point for community generosity.
2. Core mechanism: BUY ONE. GIVE ONE. / One for you. One for someone in need. Clearly explain customer purchases two.
3. Shared commitment: Shawarma Moods adds $1 per verified donated meal.
4. Initial challenge: 1,000 meals; transparent illustrative progress tracker and milestones.
5. Community delivery: preparation and distribution with an appropriate nonprofit during Christmas week.
6. Creator amplification: voluntary outreach and organic storytelling; never promise free promotion or virality.
7. Business collaboration: later expansion, including **Kin Academy** as a hypothetical example (one meal funded per qualifying crash-course enrollment, subject to approval).
8. Supporting commercial offers: existing $10 promotional shawarma (normally $15, pending confirmation), potential student discount and Christmas family box for approximately ten people. These are NOT the campaign headline.
9. Financial and operational feasibility, impact reporting, and a clear owner approval request.

## Brand DNA — grounded in supplied Instagram screenshots and logo
- Black and charcoal surfaces; signature golden yellow; white supporting text.
- Very bold condensed uppercase promotional typography; short punchy headlines.
- Crispy Moods shawarma is the hero: ultra-close-up crisp grilled surface, garlic sauce, juicy fillings, warm flame-lit food photography.
- Black gloves, branded checkered wrappers, restaurant packaging, actual staff, real restaurant atmosphere.
- Youthful, energetic, slightly playful, social-first aesthetic. Food first; warmth and humanity through real interactions.
- Subtle Christmas cues only: warm string lights, occasional pine or restrained festive highlights. Avoid generic red-green holiday templates, cartoonish charity motifs, artificial stock-family dinner scenes, invented logo designs.
- Preserve exact supplied logo; do not redraw or distort it. Prefer user-provided product images. If unavailable, use clearly labeled concept mockups and placeholders, not fabricated official restaurant photos.
- Existing uploaded poster is a **conceptual reference**, not proof of live campaign.

## Recommended project output
Use the existing stack if present; otherwise Next.js App Router + TypeScript + Tailwind CSS. Accessible semantic components, responsive layout, lightweight transitions, optimized image assets. Avoid adding unnecessary dependencies. Do not expose secrets or credentials. Keep a clean, editable content/data layer.

### Pages / sections
- Hero: bold campaign name, Shawarma Moods branding, cinematic food-led visual, 'View the Concept' CTA.
- The Why: emotional Montréal Christmas community narrative.
- The Mechanism: simple three-step flow: purchase two, donate one, restaurant adds $1.
- The Challenge: **DEMO** tracker with adjustable progress, 1,000 initial goal, dollar contribution, milestone states; prominently mark all values as illustrative.
- Campaign Creative: poster gallery (main campaign, two-shawarma explainer, 1,000 challenge, $1 match, Christmas distribution). Lightbox; 4:5 assets. Use provided brand images where possible.
- Storyboard: 60-second campaign trailer and 5-minute owner pitch video, with placeholders for video files, shot list, captions, and scripts.
- Community Impact: proposed Christmas-week distribution timeline; nonprofit coordination and consent-aware filming.
- Amplification: social calendar, creator outreach, milestone sharing, UGC.
- Partnerships: later-stage business sponsorship model, Kin Academy clearly marked as illustrative.
- Supporting Offers: student discount and family box, marked as proposed, not approved.
- Business Case: editable unit-economics assumptions, cost calculator, sensitivity scenarios, KPIs, risks and mitigations.
- Owner Decision: budget, approval checklist, proposed timeline, CTA to discuss launch.

## Data model (demo only)
Define typed entities: CampaignConfig, MealContribution (source: customer/partner; status: pledged/paid/verified/prepared/distributed), Partner, Milestone, FundContribution, DistributionBatch, MediaAsset, CampaignEvent. Count **verified funded meals** separately from **distributed meals**; never double count. Restaurant $1 contribution should derive only from qualifying verified donations, and show separately from customer meal payments. Do not imply donations are tax deductible or charitable receipts exist.

## Business economics and risk guardrails
Provide configurable shawarma selling price, ingredient/packaging/labor costs, processing fees, restaurant $1 commitment, marketing production budget, fulfillment capacity, and delivery expenses. Never invent official costs, margins, partner confirmations, or customer demand. Include food safety, shelter acceptance, safe storage/transport, staffing, operational closure decision, Quebec language and consumer transparency, and nonprofit partnership verification as prelaunch checklist items. Seek legal/accounting review for claims and fundraising mechanics where appropriate.

## Creative assets / posters
Use the user's uploaded official logo and Instagram screenshots as primary visual references. Poster specifications: 1080x1350 (4:5), black/charcoal + golden yellow, crisp food macro imagery, bold hierarchy, no clutter. Core copy:
BUY ONE. GIVE ONE.
One for you. One for someone in need.
Buy two shawarmas. Enjoy one and donate the other.
For every donated shawarma, Shawarma Moods adds $1 to the community fund.
OUR GOAL: 1,000 SHAWARMAS
Christmas 2026
Spread the Mood.
Keep factual copy exact and legible; avoid text baked into generated imagery if it introduces errors. Build typographic overlays in HTML/CSS when possible.

## Video production — Claude Opus lead
Produce a 60-second emotional concept trailer (hook, mechanism, $1 contribution, 1,000 goal, Christmas community impact, CTA) and a 5-minute owner-facing explanation (narrative, mechanics, activation, creators, business partners, operations, budget, decision). Provide timecoded scripts, shot lists, B-roll needs, voiceover, music/SFX guidance, on-screen typography, captions, and asset manifest. Use only licensed/original media and music. Never imply filmed charity delivery has already occurred.

## Agent collaboration
- Claude Opus: campaign narrative, persuasion, scripts, editorial review, storytelling coherence.
- Codex: architecture, UI components, demo tracker, typed data, performance, accessibility, tests.
- Gemini: visual/brand audit of provided references, alternate creative concepts, consistency and QA review.
- Integrator (Antigravity): assign scoped tasks and non-overlapping files; maintain decisions in docs/DECISIONS.md, tasks in docs/TASKS.md, and asset inventory in docs/ASSETS.md. Never have multiple agents rewrite the same file simultaneously. Verify output before claiming completion.

## Work sequence
1. Inspect existing repository and assets. Inventory all supplied logos, screenshots, posters, and video clips.
2. Create docs/BRIEF.md, docs/TASKS.md, docs/ASSETS.md, docs/DECISIONS.md and a draft sitemap.
3. Implement branded design tokens and page shell.
4. Implement story sections in strict narrative order.
5. Build demo tracker and editable economics with explicit DEMO labeling.
6. Add poster gallery and video storyboards with verified assets/placeholders.
7. Add owner approval checklist, risks, and execution roadmap.
8. Review mobile/desktop layouts, accessibility, claims accuracy, asset attribution, and performance.
9. Deliver concise status: implemented files, missing assets, unresolved assumptions, how to run locally.

## Definition of done
A visually polished, credible, responsive owner-facing pitch that can be presented in five minutes, clearly distinguishes the campaign proposal from real activity, makes the customer-funded second meal unmistakable, preserves the Shawarma Moods brand, and gives the owner a realistic path to approve or revise the campaign.

## First instruction to execute
Inspect the current project and uploaded assets. Do not delete or overwrite existing work. Return a short inventory and proposed implementation plan, then begin implementing the pitch website in the prescribed narrative order. Ask only for genuinely blocking information; otherwise use clearly labeled assumptions and placeholders.
