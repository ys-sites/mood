# Shawarma Moods — Christmas 2026 Pitch: BUY ONE. GIVE ONE.

> **SPREAD THE MOOD.**  
> A private owner-facing marketing pitch website and interactive operational proposal for Shawarma Moods, Montréal.

[![CI Build](https://github.com/ys-sites/shawarma-moods/actions/workflows/ci.yml/badge.svg)](https://github.com/ys-sites/shawarma-moods/actions)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com)

---

## 🚀 Deployment to Vercel

This repository is pre-configured with `vercel.json` for zero-configuration, seamless deployment on [Vercel](https://vercel.com).

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete Shawarma Moods Christmas 2026 pitch website"
   git push -u origin main
   ```
2. Navigate to your [Vercel Dashboard](https://vercel.com/new).
3. Click **"Add New..."** → **"Project"** and select your GitHub repository.
4. Vercel automatically detects the **Vite** framework preset:
   - **Build Command:** `npm run build` (or `vite build`)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your live site URL will be ready in under 60 seconds!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Preview Deployment
vercel

# Production Deployment
vercel --prod
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm 9+

### Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (runs on http://localhost:3000)
npm run dev

# 3. Type check with TypeScript
npm run lint

# 4. Build optimized production bundle
npm run build

# 5. Preview the production build locally
npm run preview
```

---

## 📐 Project Architecture & Narrative Order

The site is a single white, editorial business proposal (redesigned November 2026). Sections, in order:

1. **The proposal (`#proposal`)**: Buy One. Give One., the mechanism in one paragraph, and three figures (1,000 meals, $1 per meal, Dec 23).
2. **The opportunity (`#opportunity`)**: why a giving campaign suits Shawarma Moods.
3. **How it works (`#how-it-works`)**: buy two, enjoy one and give one, restaurant adds $1.
4. **The marketing plan (`#marketing-plan`)**: five stages, the Kin Academy hypothetical, supporting offers.
5. **The campaign target (`#target`)**: illustrative 0–2,000 meal slider.
6. **The business value (`#value`)**: four realistic benefits, no guarantees.
7. **The creative campaign (`#creative`)**: concept poster with full-size viewer and the list of planned pieces.
8. **The video pitch (`#video`)**: honest "in production" placeholders and planned outlines.
9. **Financial feasibility (`#financials`)**: editable placeholder assumptions and cost table (1,000 / 2,000 / custom).
10. **Execution plan (`#execution`)**: eight steps with restaurant and marketing responsibilities.
11. **The decision (`#decision`)**: six owner decisions and a print/PDF button.

Copy lives in `src/data/proposal.ts`; the cost model in `src/data/financialAssumptions.ts`; design tokens in the `@theme` block of `src/index.css`.

---

## 🔒 Confidentiality & Proposal Notice

This application is a **private conceptual proposal** created for the owners and management of Shawarma Moods, Montréal. All donation numbers, nonprofit partnership names, and outcomes are conceptual simulations for management review prior to public release.
