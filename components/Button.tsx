import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-red text-white hover:bg-red-dark focus-visible:outline-red",
  ghost:
    "border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.03] focus-visible:outline-ink",
  light:
    "border border-white/25 bg-white/10 text-white hover:bg-white hover:text-ink focus-visible:outline-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = `inline-flex h-11 items-center justify-center px-5 text-[0.9rem] font-semibold tracking-wide transition-colors duration-150 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`;

  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
