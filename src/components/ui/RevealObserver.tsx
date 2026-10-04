"use client";

import { useEffect } from "react";

/**
 * Hace que los elementos con `data-reveal` aparezcan suavemente desde abajo
 * cuando entran en pantalla. Un solo observer para toda la página.
 */
export function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const show = (el: Element) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
