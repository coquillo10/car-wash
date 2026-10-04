import Image from "next/image";

import { FlavorDoodle } from "@/components/illustrations/Doodles";
import type { MenuItem } from "@/config/site";

import styles from "./MenuCard.module.css";

/** Cada sabor como un pequeño cartel impreso de taquería. */
export function MenuCard({ item, index, featured = false }: { item: MenuItem; index: number; featured?: boolean }) {
  const tilt = [-1.4, 1.1, -0.8, 1.5, -1.2][index % 5];

  return (
    <li
      className={`${styles.card} ${featured ? styles.featured : ""}`}
      style={{ "--tilt": `${tilt}deg`, "--reveal-delay": `${(index % 3) * 0.07}s` } as React.CSSProperties}
      data-reveal
    >
      <article className={`checker ${styles.poster}`} aria-labelledby={`sabor-${item.id}`}>
        <div className={`paper ${styles.inner}`}>
          <span className={styles.number} aria-hidden>
            Nº{index + 1}
          </span>
          <FlavorDoodle name={item.doodle} className={styles.doodle} />
          <div className={styles.photo}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes={featured ? "(min-width: 1100px) 220px, (min-width: 720px) 30vw, 92vw" : "(min-width: 1100px) 220px, (min-width: 720px) 30vw, 46vw"}
              placeholder="blur"
              className={styles.img}
            />
          </div>
          <h3 id={`sabor-${item.id}`} className={`display ${styles.name}`}>
            {item.name}
          </h3>
          <p className={`script ${styles.note}`}>{item.note}</p>
        </div>
      </article>
    </li>
  );
}
