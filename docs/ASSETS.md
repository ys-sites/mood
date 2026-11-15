# ASSET INVENTORY & MEDIA REGISTRY

## Primary Brand Media
1. **Official Campaign Concept Posters**:
   - Path: `/buy-one-give-one-poster.jpg` (in `public/`, copied from supplied JPG reference)
   - Path: `/Buy One, Give One Shawarma.png` (in `public/`, original PNG reference)
   - Usage: Hero preview (`CampaignHero.tsx`), Campaign Asset Showcase (`CampaignPosterGallery.tsx`), Lightbox (`LightboxModal.tsx`), and Video Placeholder backdrop (`VideoShowcase.tsx`).
2. **Branded Visual Elements & Tokens**:
   - Primary Gold: `#EAAA2F` · Promotional Yellow: `#FBCE22` · Black: `#0B0B0C` · Charcoal: `#333333` · White: `#FFFFFF`
   - Typography: `Bebas Neue` (headlines), `Montserrat` (700/800/900 promo statements), `Inter` (body), `JetBrains Mono` (counters & timecodes)
   - Checkered wrapper motif (`.checkered-motif`) and subtle Montréal winter/string-light overlays

## Conceptual Video Placeholders (Awaiting Final Renders)
- `Owner_Pitch_5min.mp4` (16:9 widescreen preview placeholder in `VideoShowcase.tsx`, synced with `PITCH_VIDEO_MODULES`)
- `Campaign_Trailer_60sec.mp4` (9:16 vertical preview placeholder in `VideoShowcase.tsx`, synced with `TRAILER_SCENES`)
- Status: No `.mp4` files or `VIDEO_HANDOFF.md` exist in the repository yet; UI renders explicitly labeled preview placeholders without fabricated video streams.
