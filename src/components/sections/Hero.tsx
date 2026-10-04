import Image from "next/image";

import heroPhoto from "@/assets/photos/hero.jpg";
import { Rays, Sparkle, Star, Tortilla, Underline } from "@/components/illustrations/Doodles";
import { ClockIcon, WhatsAppIcon } from "@/components/illustrations/Icons";
import { Logo } from "@/components/illustrations/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { prices, site, whatsappUrl } from "@/config/site";

import styles from "./Hero.module.css";

export function Hero() {
  const lowestPrice = Math.min(...prices.map((p) => p.price));

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <Logo className={styles.kickerLogo} title={site.name} />
            <span className={styles.kickerText}>{site.concept}</span>
          </p>

          <h1 id="hero-title" className={`display ${styles.title}`}>
            <span className="visually-hidden">{site.name}: tacos mañaneros en Cd. Madero. </span>
            <span className={styles.titleInner} aria-hidden>
              <span className={styles.line}>Hoy</span>
              <span className={styles.line}>
                <Rays className={styles.rays} />
                Toca
                <Rays className={styles.rays} flip />
              </span>
              <span className={styles.line}>Jos.</span>
            </span>
            <span className="visually-hidden">Hoy toca Jos.</span>
          </h1>
          <Underline className={styles.underline} />

          <p className={styles.subtitle}>{site.tagline}</p>
          <p className={styles.flavors}>
            Chicharrón rojo, papa con chorizo, huevo verde, picadillo y frijol con queso.
          </p>

          <div className={styles.actions}>
            <ButtonLink href="#menu" variant="secondary">
              Ver menú
            </ButtonLink>
            <ButtonLink href={whatsappUrl()} external icon={<WhatsAppIcon />}>
              Pedir ahora
            </ButtonLink>
          </div>

          <div className={styles.hours}>
            <p className={styles.hoursMain}>
              <ClockIcon className={styles.clock} />
              <span>
                <strong>{site.hours.display}</strong>
                <span className={styles.closedDay}>{site.hours.closedNote}</span>
              </span>
            </p>
            <OpenStatus />
          </div>
        </div>

        <div className={styles.visual}>
          <div className={`checker ${styles.frame}`}>
            <div className={styles.photo}>
              <Image
                src={heroPhoto}
                alt="Plato de tacos recién hechos con salsa y limones"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 900px) 520px, 92vw"
                placeholder="blur"
                className={styles.img}
              />
            </div>
          </div>

          <p className={styles.sticker}>
            <span className={styles.stickerSmall}>desde</span>
            <span className={styles.stickerPrice}>${lowestPrice}</span>
            <span className={styles.stickerSmall}>el taco</span>
          </p>

          <Sparkle className={`${styles.doodle} ${styles.sparkle}`} />
          <Sparkle className={`${styles.doodle} ${styles.sparkleSmall}`} />
          <Star className={`${styles.doodle} ${styles.star}`} />
          <Tortilla className={`${styles.doodle} ${styles.tortilla}`} />
          <p className={`script ${styles.note}`} aria-hidden>
            ¡recién hechos!
          </p>
        </div>
      </div>
    </section>
  );
}
