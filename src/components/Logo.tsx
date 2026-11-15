/**
 * The Shawarma Moods logo as supplied by the client (gold mark on its own
 * black ground), cropped only to remove empty margin. Do not redraw or recolour.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/brand/logo.png"
      alt="Shawarma Moods"
      width={398}
      height={178}
      className={`w-auto rounded-[2px] ${className}`}
    />
  );
}
