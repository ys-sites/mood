import { NAV_LINKS } from '../data/proposal';
import { Logo } from './Logo';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#proposal" aria-label="Shawarma Moods, back to the top" className="shrink-0">
          <Logo className="h-9 sm:h-10" />
        </a>

        <nav aria-label="Proposal sections" className="no-print hidden md:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-body">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="underline-offset-[6px] hover:text-ink hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <details className="no-print relative md:hidden">
          <summary className="cursor-pointer list-none rounded-sm border border-line px-3 py-1.5 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
            Sections
          </summary>
          <ul className="absolute right-0 mt-2 w-48 border border-line bg-white py-2 text-[15px] shadow-[0_8px_24px_rgb(0_0_0/0.08)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-2 text-body hover:bg-paper hover:text-ink"
                  onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </header>
  );
}
