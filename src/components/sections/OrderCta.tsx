import { Sparkle, Star } from "@/components/illustrations/Doodles";
import { BagIcon, PhoneIcon, WhatsAppIcon } from "@/components/illustrations/Icons";
import { Logo } from "@/components/illustrations/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site, telUrl, whatsappUrl } from "@/config/site";

import styles from "./OrderCta.module.css";

/** Servilleta crema sobre mantel de cuadros: el llamado a pedir. */
export function OrderCta() {
  return (
    <section id="pedir" className={`checker ${styles.section}`} aria-labelledby="pedir-title">
      <div className="container">
        <div data-reveal>
        <div className={`paper ${styles.napkin}`}>
          <Logo className={styles.logo} title={site.name} />

          <h2 id="pedir-title" className={`display ${styles.title}`}>
            <span className={styles.titleInner}>¿Ya te dio hambre?</span>
          </h2>

          <p className={styles.text}>
            Pide tus Tacos Jos y nosotros nos encargamos del antojo.
          </p>

          <div className={styles.actions}>
            <ButtonLink href={whatsappUrl()} external size="lg" block icon={<WhatsAppIcon />}>
              Pedir por WhatsApp
            </ButtonLink>

            <a href={telUrl} className={styles.phone}>
              <PhoneIcon className={styles.phoneIcon} />
              <span>
                <span className={styles.phoneLabel}>o llámanos</span>
                <span className={`display ${styles.phoneNumber}`}>{site.phone.display}</span>
              </span>
            </a>

            <ButtonLink href={site.links.didiFood} external variant="secondary" block icon={<BagIcon />}>
              Pedir en DiDi Food
            </ButtonLink>
          </div>

          <Sparkle className={styles.sparkleA} />
          <Star className={styles.star} />
          <Sparkle className={styles.sparkleB} />
        </div>
        </div>
      </div>
    </section>
  );
}
