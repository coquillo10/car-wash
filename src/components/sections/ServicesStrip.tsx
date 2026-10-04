import { ServiceIcon } from "@/components/illustrations/ServiceIcon";
import { services, whatsappUrl, type ServiceId } from "@/config/site";

import styles from "./ServicesStrip.module.css";

const hrefs: Record<ServiceId, { href: string; external?: boolean }> = {
  aqui: { href: "#ubicacion" },
  pickup: { href: whatsappUrl("¡Hola Tacos Jos! 🌮 Quiero pedir para pasar a recoger:"), external: true },
  domicilio: { href: "#pedir" },
};

/** Franja roja: las tres formas de comer Tacos Jos. */
export function ServicesStrip() {
  return (
    <section className={styles.strip} aria-label="Cómo pedir">
      <ul role="list" className={`container ${styles.list}`}>
        {services.map((service, i) => {
          const link = hrefs[service.id];
          return (
            <li
              key={service.id}
              className={styles.item}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              <a
                href={link.href}
                className={styles.link}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <ServiceIcon name={service.id} className={styles.icon} />
                <span className={styles.text}>
                  <span className={`display ${styles.title}`}>{service.title}</span>
                  <span className={styles.detail}>{service.detail}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
