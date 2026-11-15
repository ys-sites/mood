import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  number: string;
  label: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  tone?: 'white' | 'paper';
}

/**
 * One chapter of the proposal. The left rail carries the chapter number and
 * name (the proposal is read in order, so the numbering is real); the right
 * side carries the content.
 */
export function Section({ id, number, label, title, intro, children, tone = 'white' }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-line ${tone === 'paper' ? 'bg-paper' : 'bg-white'}`}
    >
      <div className="mx-auto grid max-w-[1160px] gap-x-10 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24">
        <p className="mb-5 text-sm text-muted md:sticky md:top-24 md:col-span-3 md:mb-0 md:self-start">
          <span className="mr-2 font-semibold tabular-nums text-ink">{number}</span>
          {label}
        </p>
        <div className="min-w-0 md:col-span-9">
          <h2
            id={`${id}-title`}
            className="font-display text-[28px] font-extrabold uppercase leading-[1.08] tracking-[-0.01em] text-ink sm:text-[36px] lg:text-[40px]"
          >
            {title}
          </h2>
          {intro && <div className="mt-5 max-w-[40rem] text-[17px] leading-relaxed text-body sm:text-lg">{intro}</div>}
          {children && <div className="mt-10 md:mt-12">{children}</div>}
        </div>
      </div>
    </section>
  );
}
