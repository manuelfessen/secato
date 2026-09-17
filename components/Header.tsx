"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "./Logo";
import { nav, site, telHref } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="hidden border-b border-line bg-paper text-[0.78rem] text-muted md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2">
          <p>
            {site.address.street}, {site.address.zip} {site.address.city}
          </p>
          <p className="flex items-center gap-4">
            <a
              className="hover:text-ink"
              href={telHref(site.phone)}
            >
              {site.phoneDisplay}
            </a>
            <a className="hover:text-ink" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            if ("children" in item && item.children) {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`inline-flex h-10 items-center px-3 text-[0.92rem] font-medium transition-colors ${
                      active ? "text-red" : "text-ink hover:text-red"
                    }`}
                  >
                    {item.label}
                    <span className="ml-1 text-[0.65rem] text-muted">▾</span>
                  </Link>
                  <div className="invisible absolute left-0 top-[calc(100%-4px)] z-20 min-w-52 border border-line bg-white py-2 opacity-0 shadow-[0_12px_32px_rgba(17,17,17,0.08)] transition-opacity duration-150 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-sm hover:bg-paper ${
                          isActive(pathname, child.href) ? "text-red" : "text-ink"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex h-10 items-center px-3 text-[0.92rem] font-medium transition-colors ${
                  active ? "bg-red text-white" : "text-ink hover:text-red"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
          <span className="relative block h-3.5 w-4" aria-hidden>
            <span
              className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-150 ease-out ${
                open ? "top-[6px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-[6px] left-0 h-px w-4 bg-ink transition-opacity duration-150 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-150 ease-out ${
                open ? "top-[6px] -rotate-45" : "top-[13px]"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
      <div
        id={panelId}
        className="border-t border-line bg-white lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Mobilnavigation">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-line/70 py-2">
              <Link href={item.href} className="block py-1.5 text-base font-medium">
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <div className="pb-1 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1.5 text-sm text-muted"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
      ) : null}
    </header>
  );
}
