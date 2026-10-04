"use client";

import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/illustrations/Icons";
import { Logo } from "@/components/illustrations/Logo";
import { navLinks, site, telUrl, whatsappUrl } from "@/config/site";

import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header} data-open={open || undefined}>
      <div className={`container ${styles.bar}`}>
        <a href="#inicio" className={styles.brand} aria-label={`${site.name} — inicio`} onClick={close}>
          <Logo className={styles.logo} title={site.name} />
        </a>

        <nav className={styles.nav} aria-label="Principal">
          <ul role="list" id="menu-principal" className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileExtra}>
              <a href={telUrl} className={styles.phone}>
                Llámanos: {site.phone.display}
              </a>
            </li>
          </ul>
        </nav>

        <a
          href={whatsappUrl()}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className={styles.ctaIcon} />
          <span>
            Pedir <span className={styles.ctaLong}>ahora</span>
          </span>
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <span className={styles.burgerLines} aria-hidden />
        </button>
      </div>
    </header>
  );
}
