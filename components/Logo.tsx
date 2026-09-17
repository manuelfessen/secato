import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 text-ink no-underline"
      aria-label="Secato Werkzeugverkaufs GmbH – Startseite"
    >
      <svg
        viewBox="0 0 64 56"
        className={compact ? "h-8 w-9" : "h-10 w-11"}
        aria-hidden="true"
      >
        <polygon points="4,52 32,6 32,52" fill="#8a8a8a" />
        <polygon points="32,6 60,52 32,52" fill="#e40421" />
      </svg>
      <span className="leading-none">
        <span className="flex items-start gap-0.5">
          <span className="font-serif text-[1.55rem] font-semibold italic tracking-tight text-ink">
            Secato
          </span>
          <span className="mt-0.5 text-[0.6rem] text-muted">®</span>
        </span>
        <span className="mt-0.5 block text-[0.62rem] font-medium tracking-[0.04em] text-muted">
          Werkzeugverkaufs GmbH
        </span>
      </span>
    </Link>
  );
}

export function Mark({ className = "h-8 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 56" className={className} aria-hidden="true">
      <polygon points="4,52 32,6 32,52" fill="#8a8a8a" />
      <polygon points="32,6 60,52 32,52" fill="#e40421" />
    </svg>
  );
}
