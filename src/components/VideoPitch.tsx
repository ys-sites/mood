import { PITCH_VIDEO_OUTLINE, TRAILER_OUTLINE } from '../data/proposal';
import { Section } from './Section';

function Outline({ items }: { items: readonly { t: string; text: string }[] }) {
  return (
    <ol className="mt-4 border-t border-line">
      {items.map((item) => (
        <li key={item.t} className="grid grid-cols-[3.5rem_1fr] gap-3 border-b border-line py-2.5 text-[15px]">
          <span className="tabular-nums text-muted">{item.t}</span>
          <span className="text-body">{item.text}</span>
        </li>
      ))}
    </ol>
  );
}

function Player({ src, poster, captions, ratio, label }: { src: string; poster: string; captions: string; ratio: string; label: string }) {
  return (
    <figure>
      <video
        className={`block w-full ${ratio} bg-black`}
        controls
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" src={captions} srcLang="en" label="English" default />
      </video>
      <figcaption className="mt-2 text-[13px] text-muted">{label}</figcaption>
    </figure>
  );
}

export function VideoPitch() {
  return (
    <Section
      id="video"
      number="08"
      label="The video pitch"
      title="Watch the campaign concept."
      intro="Two concept cuts: a 5-minute owner pitch and a 60-second vertical trailer. Both use motion graphics, imagery from the concept poster and a temporary computer voice. Restaurant footage and the owner’s own voice come after approval. Every figure on screen is illustrative."
    >
      <div className="grid gap-12 sm:grid-cols-5 sm:gap-10">
        <div className="sm:col-span-3">
          <Player
            src="/videos/owner-pitch-5min-720p.mp4"
            poster="/videos/owner-pitch-poster.jpg"
            captions="/videos/owner-pitch-5min.en.vtt"
            ratio="aspect-video"
            label="5-minute owner pitch · concept cut · temporary narration"
          />
          <h3 className="mt-6 text-[15px] font-semibold text-ink">Outline</h3>
          <Outline items={PITCH_VIDEO_OUTLINE} />
        </div>
        <div className="sm:col-span-2">
          <div className="max-w-[18rem]">
            <Player
              src="/videos/campaign-trailer-60s.mp4"
              poster="/videos/campaign-trailer-poster.jpg"
              captions="/videos/campaign-trailer-60s.en.vtt"
              ratio="aspect-[9/16]"
              label="60-second trailer · French first · concept, not live"
            />
          </div>
          <h3 className="mt-6 text-[15px] font-semibold text-ink">Outline</h3>
          <Outline items={TRAILER_OUTLINE} />
        </div>
      </div>
    </Section>
  );
}
