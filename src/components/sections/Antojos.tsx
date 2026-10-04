import { Rays, Sparkle, Underline } from "@/components/illustrations/Doodles";
import { ServiceIcon } from "@/components/illustrations/ServiceIcon";
import { TacoMascot } from "@/components/illustrations/TacoMascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { services } from "@/config/site";

import styles from "./Antojos.module.css";

/** Sección amarilla: "Tus antojos como quieras" + mascota con su bolsa. */
export function Antojos() {
  return (
    <section className={styles.section} aria-labelledby="antojos-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 id="antojos-title" className={`display ${styles.title}`} data-reveal>
            <span className={styles.titleInner}>
              <span className={styles.line}>
                <Rays className={styles.rays} />
                Tus antojos
              </span>
              <span className={styles.line}>
                como quieras
                <Rays className={styles.rays} flip />
              </span>
            </span>
          </h2>
          <Underline className={styles.underline} />

          <ul role="list" className={styles.icons}>
            {services.map((s, i) => (
              <li
                key={s.id}
                className={styles.iconItem}
                data-reveal
                style={{ "--reveal-delay": `${0.1 + i * 0.1}s` } as React.CSSProperties}
              >
                <ServiceIcon name={s.id} className={styles.icon} />
                <span className={`display ${styles.iconLabel}`}>{s.title}</span>
              </li>
            ))}
          </ul>

          <div className={styles.cta} data-reveal>
            <ButtonLink href="#pedir" size="lg">
              Pide a domicilio
            </ButtonLink>
          </div>
        </div>

        <div className={styles.mascotWrap} aria-hidden>
          <span className={styles.shadow} />
          <TacoMascot pose="bag" className={styles.mascot} />
          <Sparkle className={styles.sparkleA} />
          <Sparkle className={styles.sparkleB} />
        </div>
      </div>
    </section>
  );
}
