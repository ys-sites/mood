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

function Pending({ ratio, label }: { ratio: string; label: string }) {
  return (
    <div className={`flex ${ratio} w-full items-center justify-center border border-dashed border-[#C8C8C8] bg-paper p-6 text-center`}>
      <p className="text-[15px] text-muted">
        <span className="block font-semibold text-ink">{label}</span>
        In production. Not yet recorded.
      </p>
    </div>
  );
}

export function VideoPitch() {
  return (
    <Section
      id="video"
      number="08"
      label="The video pitch"
      title="Watch the campaign concept."
      intro="Two videos are planned. Neither has been filmed yet, so the outlines below show what each one will cover. We suggest the owner presents both, as in the restaurant’s current Reels."
    >
      <div className="grid gap-12 sm:grid-cols-5 sm:gap-10">
        <div className="sm:col-span-3">
          <Pending ratio="aspect-video" label="5-minute owner pitch" />
          <h3 className="mt-6 text-[15px] font-semibold text-ink">Planned outline</h3>
          <Outline items={PITCH_VIDEO_OUTLINE} />
        </div>
        <div className="sm:col-span-2">
          <div className="max-w-[10rem]">
            <Pending ratio="aspect-[9/16]" label="60-second trailer" />
          </div>
          <h3 className="mt-6 text-[15px] font-semibold text-ink">Planned outline</h3>
          <Outline items={TRAILER_OUTLINE} />
        </div>
      </div>
    </Section>
  );
}
