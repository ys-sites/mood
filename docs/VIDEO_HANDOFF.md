# Video handoff — Shawarma Moods pitch website

**Status: already integrated (2026-11-15), not committed.** Both videos play in the site's section **08 · The video pitch** (`#video`).

## What changed in `mood/`
| File | Change |
|---|---|
| `src/components/VideoPitch.tsx` | The two "In production" placeholders were replaced with native `<video controls playsInline preload="metadata">` players, each with a poster and an English `<track kind="captions">`; the intro now says these are concept cuts with temporary narration |
| `src/data/proposal.ts` | Only `PITCH_VIDEO_OUTLINE` and `TRAILER_OUTLINE` were rewritten, to match the delivered timecodes |
| `public/videos/` (new) | 6 files, ~44 MB total (below) |

Verified: `npm run lint` and `npm run build` pass. In a real Chrome at desktop (1440 px) and mobile (390 px) widths, both players load metadata (300 s / 60 s), captions are showing, and there are no media errors.

## Files on the site (`public/videos/`)
| File | Spec | Size |
|---|---|---|
| `owner-pitch-5min-720p.mp4` | 1280×720, 30 fps, 5:00.000, H.264 + AAC 96k, faststart | 28.7 MB |
| `owner-pitch-5min.en.vtt` | 72 English caption cues | 5 KB |
| `owner-pitch-poster.jpg` | 1280×720, frame at 0:52 ("Buy one. Give one.") | 93 KB |
| `campaign-trailer-60s.mp4` | 1080×1920, 30 fps, 1:00.000, H.264 + AAC 128k, faststart, captions burned in | 15.8 MB |
| `campaign-trailer-60s.en.vtt` | 13 cues (the last cue is the French closing line) | 1 KB |
| `campaign-trailer-poster.jpg` | 540×960, end card at 0:58.5 | 56 KB |

## Masters (video project, not in the site)
`video/video-projects/shawarma-moods-christmas-2026/exports/`
- `Owner_Pitch_5min.mp4`: 1920×1080 · 30 fps · 9,000 frames · 300.000 s · CRF 16 · AAC 192k · soft EN subtitle track · 654 MB
- `Campaign_Trailer_60sec.mp4`: 1080×1920 · 30 fps · 1,800 frames · 60.000 s · CRF 16 · AAC 192k · 133 MB
- `*.en.srt`, `*.en.vtt`, `*_Transcript.md`, `posters/`, `thumbs/`, `frames/`, `verify.json` (ffprobe facts)

## Notes for whoever maintains the site
- The binaries add ~44 MB to the repo (each file is under GitHub's 50 MB warning). If the repo should stay light, host them on Vercel Blob or a CDN and change the four URLs in `VideoPitch.tsx`.
- To update the videos later, re-run `src/render/finalize.py` in the video project and copy `exports/web/*` over the same filenames.
- Keep the "concept / temporary narration" wording until the owner's voice and real footage replace the v2 cuts.
