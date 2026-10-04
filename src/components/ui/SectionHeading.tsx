import type { ReactNode } from "react";

import { Rays, Underline } from "@/components/illustrations/Doodles";

import styles from "./SectionHeading.module.css";

type Props = {
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  /** Inclina el título como rótulo pintado. */
  tilt?: boolean;
  underline?: boolean;
  className?: string;
};

/** Título de sección con rayitas a los lados, estilo cartel de taquería. */
export function SectionHeading({
  id,
  title,
  subtitle,
  align = "center",
  tilt = true,
  underline = false,
  className,
}: Props) {
  return (
    <div
      className={[styles.heading, styles[align], className ?? ""].join(" ")}
      data-reveal
    >
      <h2 id={id} className={`display ${styles.title} ${tilt ? styles.tilt : ""}`}>
        <Rays className={styles.rays} />
        <span className={styles.text}>{title}</span>
        <Rays className={styles.rays} flip />
      </h2>
      {underline && <Underline className={styles.underline} />}
      {subtitle && <p className={`script ${styles.subtitle}`}>{subtitle}</p>}
    </div>
  );
}
