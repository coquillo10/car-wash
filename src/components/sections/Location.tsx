import { PinIcon } from "@/components/illustrations/Icons";
import { TacoMascot } from "@/components/illustrations/TacoMascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CopyButton } from "@/components/ui/CopyButton";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";

import styles from "./Location.module.css";

const WEEK = [
  { short: "L", name: "Lunes", day: 1 },
  { short: "M", name: "Martes", day: 2 },
  { short: "M", name: "Miércoles", day: 3 },
  { short: "J", name: "Jueves", day: 4 },
  { short: "V", name: "Viernes", day: 5 },
  { short: "S", name: "Sábado", day: 6 },
  { short: "D", name: "Domingo", day: 0 },
];

export function Location() {
  const closed = site.hours.closedWeekdays as readonly number[];

  return (
    <section id="ubicacion" className={styles.section} aria-labelledby="ubicacion-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <div className={styles.headingRow}>
            <SectionHeading
              id="ubicacion-title"
              title={
                <>
                  Nos vemos
                  <br />
                  al rato
                </>
              }
              align="left"
              className={styles.heading}
            />
            <TacoMascot pose="coffee" className={styles.mascot} />
          </div>

          <address className={styles.address} data-reveal>
            <PinIcon className={styles.pin} />
            <span>
              <strong className={`display ${styles.street}`}>{site.address.street}</strong>
              {site.address.neighborhood}
              <br />
              {site.address.city}, {site.address.state}
            </span>
          </address>

          <div className={styles.actions} data-reveal>
            <ButtonLink href={site.links.maps} external size="lg" icon={<PinIcon />}>
              Cómo llegar
            </ButtonLink>
            <CopyButton text={site.address.full} />
          </div>

          <div id="horarios" className={`paper ${styles.hours}`} data-reveal>
            <h3 className={`display ${styles.hoursLabel}`}>Horario</h3>
            <p className={`display ${styles.hoursTime}`}>{site.hours.display}</p>
            <p className={styles.hoursDays}>
              {site.hours.days} · <strong>{site.hours.closedNote}</strong>
            </p>
            <ul role="list" className={styles.week} aria-label="Días de servicio">
              {WEEK.map((d) => {
                const isClosed = closed.includes(d.day);
                return (
                  <li key={d.name} className={isClosed ? styles.dayClosed : styles.day}>
                    <span aria-hidden>{d.short}</span>
                    <span className="visually-hidden">
                      {d.name}: {isClosed ? "cerrado" : "abierto"}
                    </span>
                  </li>
                );
              })}
            </ul>
            <OpenStatus className={styles.status} />
          </div>
        </div>

        <div className={styles.mapWrap} data-reveal>
          <span className={`${styles.tape} ${styles.tapeA}`} aria-hidden />
          <span className={`${styles.tape} ${styles.tapeB}`} aria-hidden />
          <div className={styles.map}>
            <iframe
              title={`Mapa: ${site.name} en ${site.address.full}`}
              src={site.links.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a href={site.links.maps} className={styles.mapLink} target="_blank" rel="noopener noreferrer">
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
