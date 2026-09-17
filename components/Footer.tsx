import Link from "next/link";
import { footerNav, site, telHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
        </div>
        <div>
          <p className="font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-muted uppercase">
            Kontakt
          </p>
          <address className="mt-3 not-italic text-[0.95rem] leading-relaxed">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            <a className="mt-2 inline-block hover:text-red" href={telHref(site.phone)}>
              {site.phoneDisplay}
            </a>
            <br />
            <a className="hover:text-red" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </address>
        </div>
        <div>
          <p className="font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-muted uppercase">
            Seiten
          </p>
          <ul className="mt-3 space-y-2 text-[0.95rem]">
            <li>
              <Link className="hover:text-red" href="/produkte">
                Produkte
              </Link>
            </li>
            <li>
              <Link className="hover:text-red" href="/service">
                Service
              </Link>
            </li>
            <li>
              <Link className="hover:text-red" href="/kontakt/ansprechpartner">
                Ansprechpartner
              </Link>
            </li>
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-red" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-[0.78rem] text-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
