import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center no-underline"
      aria-label="Secato Werkzeugverkaufs GmbH – Startseite"
    >
      <Image
        src="/images/logo.png"
        alt="Secato Werkzeugverkaufs GmbH"
        width={220}
        height={88}
        className={compact ? "h-10 w-auto" : "h-14 w-auto md:h-16"}
        priority
      />
    </Link>
  );
}

export function Mark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      width={220}
      height={88}
      className={className}
      aria-hidden="true"
    />
  );
}
