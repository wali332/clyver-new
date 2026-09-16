import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-baseline gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      aria-label="Clyver Digital — home"
    >
      <span className="font-display text-lg tracking-[-0.04em] text-ink sm:text-xl md:text-[1.35rem]">
        Clyver
      </span>
      <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-ink sm:text-xs sm:tracking-[0.22em]">
        Digital
      </span>
    </Link>
  );
}
