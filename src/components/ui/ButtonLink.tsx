import type { ReactNode } from "react";

import styles from "./ButtonLink.module.css";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "cream";
  size?: "md" | "lg";
  icon?: ReactNode;
  /** Abre en otra pestaña/app (WhatsApp, Maps, DiDi, Instagram). */
  external?: boolean;
  block?: boolean;
  className?: string;
  "aria-label"?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  external = false,
  block = false,
  className,
  ...rest
}: Props) {
  const classes = [
    styles.btn,
    styles[variant],
    size === "lg" ? styles.lg : "",
    block ? styles.block : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
