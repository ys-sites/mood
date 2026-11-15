/**
 * The Shawarma Moods logo, cropped unaltered from the supplied campaign poster
 * (gold mark on its own black ground). Replace /brand/logo-from-poster.png with
 * the official logo file when the restaurant provides it.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/brand/logo-from-poster.png"
      alt="Shawarma Moods"
      width={306}
      height={122}
      className={`w-auto rounded-[2px] ${className}`}
    />
  );
}
