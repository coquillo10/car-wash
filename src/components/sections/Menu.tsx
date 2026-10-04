import Image from "next/image";

import { Sparkle } from "@/components/illustrations/Doodles";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menu, prices, promo } from "@/config/site";

import { MenuCard } from "./MenuCard";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <section id="menu" className={styles.section} aria-labelledby="menu-title">
      <div className="container">
        <SectionHeading id="menu-title" title="Nuestro menú" subtitle="Más tacos. Más antojos." />

        <ul role="list" className={styles.cards}>
          {menu.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} featured={i === 0} />
          ))}
        </ul>

        <div className={styles.board} data-reveal>
          <h3 className="visually-hidden">Precios por taco</h3>
          <p className={`script ${styles.boardNote}`} aria-hidden>
            precio por taco
          </p>
          <ul role="list" className={styles.prices}>
            {prices.map((p) => (
              <li key={p.tortilla} className={styles.price}>
                <span className={styles.tortillaPhoto}>
                  <Image src={p.image} alt={p.imageAlt} fill sizes="120px" className={styles.tortillaImg} />
                </span>
                <span className={`display ${styles.label}`}>{p.tortilla}</span>
                <span className={`display ${styles.amount}`}>
                  <span className={styles.currency}>$</span>
                  {p.price}
                </span>
              </li>
            ))}
          </ul>

          {promo.enabled && (
            <p className={styles.promo}>
              <span className={styles.promoTitle}>{promo.title}</span>
              <span className={styles.promoPrice}>${promo.price}</span>
              <span className={styles.promoNote}>{promo.note}</span>
            </p>
          )}
          <Sparkle className={styles.sparkle} />
        </div>
      </div>
    </section>
  );
}
