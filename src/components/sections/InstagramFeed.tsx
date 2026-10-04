import Image from "next/image";

import { InstagramIcon } from "@/components/illustrations/Icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { instagramPosts, site } from "@/config/site";

import styles from "./InstagramFeed.module.css";

export function InstagramFeed() {
  return (
    <section className={styles.section} aria-labelledby="instagram-title">
      <div className="container">
        <SectionHeading id="instagram-title" title="¿Qué se te antoja hoy?" />

        <ul role="list" className={styles.grid} data-reveal>
          {instagramPosts.slice(0, 6).map((post) => (
            <li key={post.alt} className={styles.tile}>
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`${post.alt} — ver en Instagram`}
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 900px) 180px, 33vw"
                  className={styles.img}
                />
                <span className={styles.overlay} aria-hidden>
                  <InstagramIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <ButtonLink href={site.links.instagram} external icon={<InstagramIcon />} size="lg">
            Síguenos en Instagram
          </ButtonLink>
          <p className={`script ${styles.handle}`}>{site.instagramHandle}</p>
        </div>
      </div>
    </section>
  );
}
