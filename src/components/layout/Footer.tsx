import { InstagramIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/illustrations/Icons";
import { Logo } from "@/components/illustrations/Logo";
import { site, telUrl, whatsappUrl } from "@/config/site";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <span className={styles.badge}>
            <Logo className={styles.logo} title={site.name} />
          </span>
          <p className={styles.line}>{site.footerLine}</p>
        </div>

        <ul role="list" className={styles.info}>
          <li>
            <PinIcon className={styles.icon} />
            <div>
              <h2 className={styles.label}>Dirección</h2>
              <a href={site.links.maps} target="_blank" rel="noopener noreferrer">
                {site.address.street}, {site.address.neighborhood}
                <br />
                {site.address.city}, {site.address.state}
              </a>
            </div>
          </li>
          <li>
            <PhoneIcon className={styles.icon} />
            <div>
              <h2 className={styles.label}>Teléfono / WhatsApp</h2>
              <a href={telUrl}>{site.phone.display}</a>
              <br />
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Mándanos WhatsApp
              </a>
            </div>
          </li>
          <li>
            <ClockIcon className={styles.icon} />
            <div>
              <h2 className={styles.label}>Horario</h2>
              <p>
                {site.hours.days}: {site.hours.display}
                <br />
                {site.hours.closedNote}
              </p>
            </div>
          </li>
          <li>
            <InstagramIcon className={styles.icon} />
            <div>
              <h2 className={styles.label}>Instagram</h2>
              <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">
                {site.instagramHandle}
              </a>
            </div>
          </li>
        </ul>
      </div>

      <p className={`display ${styles.slogan}`} aria-label="Más tacos. Más antojos.">
        <span>Más tacos.</span> <span>Más antojos.</span>
      </p>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {site.name} · {site.concept} en {site.address.city}
        </p>
      </div>
    </footer>
  );
}
