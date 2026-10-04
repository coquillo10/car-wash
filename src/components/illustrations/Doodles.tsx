import type { SVGProps } from "react";

import type { Doodle } from "@/config/site";

/* Dibujitos hechos "a mano" que acompañan títulos y tarjetas.
   Todos usan currentColor y son decorativos (aria-hidden). */

type DoodleProps = SVGProps<SVGSVGElement>;

const base = {
  "aria-hidden": true,
  focusable: false,
  xmlns: "http://www.w3.org/2000/svg",
} as const;

/** Rayitas a los lados de un título, como en los posts de Instagram. */
export function Rays({ flip = false, ...props }: DoodleProps & { flip?: boolean }) {
  return (
    <svg viewBox="0 0 36 64" fill="none" {...base} {...props}>
      <g
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        transform={flip ? "translate(36 0) scale(-1 1)" : undefined}
      >
        <path d="M5 9 L25 21" />
        <path d="M3 33 L27 32" />
        <path d="M6 57 L25 44" />
      </g>
    </svg>
  );
}

/** Subrayado de plumón. */
export function Underline(props: DoodleProps) {
  return (
    <svg viewBox="0 0 300 24" fill="none" preserveAspectRatio="none" {...base} {...props}>
      <path
        d="M8 18 C 80 11, 190 6, 292 7"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Destello de 4 puntas. */
export function Sparkle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path
        fill="currentColor"
        d="M12 0c.9 7.3 3.6 10.4 12 12-8.4 1.6-11.1 4.7-12 12-.9-7.3-3.6-10.4-12-12C8.4 10.4 11.1 7.3 12 0Z"
      />
    </svg>
  );
}

/** Estrella de 5 puntas con trazo irregular. */
export function Star(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...base} {...props}>
      <path
        d="M24 4.5 29.6 17l13.6 1.2-10.4 9 3.3 13.4L24.2 33.4 12.4 40.8l3.1-13.5L5 18.5l13.7-1.4Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Tortillita con manchitas. */
export function Tortilla(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <ellipse
        cx="32"
        cy="32"
        rx="27"
        ry="25"
        fill="var(--doodle-fill, #fff6e4)"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <g fill="currentColor">
        <circle cx="21" cy="24" r="2.2" />
        <circle cx="35" cy="19" r="1.6" />
        <circle cx="43" cy="31" r="2.4" />
        <circle cx="27" cy="38" r="1.8" />
        <circle cx="38" cy="45" r="1.6" />
        <circle cx="18" cy="35" r="1.4" />
      </g>
    </svg>
  );
}

/** Tacita de café mañanero. */
export function Coffee(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 56" fill="none" {...base} {...props}>
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 4c-3 4 3 6 0 10M25 2c-3 4 3 6 0 10" />
        <path d="M8 22h28l-3 28H11Z" fill="var(--doodle-fill, #fff6e4)" />
        <path d="M6 18h32v5H6Z" fill="currentColor" />
        <path d="M10 32h24" />
      </g>
    </svg>
  );
}

/* ---------------------- Dibujitos de cada sabor ------------------------- */

function Chile(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...base} {...props}>
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M14 19c-3 10 3 21 17 23 4 .5 7-1 5-3-9-2-14-8-15-18-.4-3-6-5-7-2Z"
          fill="currentColor"
        />
        <path d="M17 17c0-5 3-8 8-9" />
        <path d="M15 17c2-3 6-3 8 0" />
      </g>
    </svg>
  );
}

function Papa(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...base} {...props}>
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M8 27c-1-9 7-16 17-16 9 0 16 5 15 13-1 9-8 14-18 14-8 0-13-4-14-11Z"
          fill="var(--doodle-fill, #fff6e4)"
        />
        <path d="M18 22h.1M29 19h.1M31 30h.1M20 31h.1" strokeWidth="4" />
      </g>
    </svg>
  );
}

function Huevo(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...base} {...props}>
      <g stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path
          d="M10 26c-4-8 3-17 12-16 5-5 15-2 16 5 6 3 5 13-2 16-3 6-13 8-18 4-6 0-9-4-8-9Z"
          fill="var(--doodle-fill, #fff6e4)"
        />
        <circle cx="25" cy="25" r="7" fill="currentColor" />
      </g>
    </svg>
  );
}

function Olla(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...base} {...props}>
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4c-3 4 3 6 0 10M28 4c-3 4 3 6 0 10" />
        <path d="M9 20h30c0 12-6 21-15 21S9 32 9 20Z" fill="var(--doodle-fill, #fff6e4)" />
        <path d="M9 23H4M39 23h5" />
        <path d="M8 18h32" strokeWidth="4" />
        <path d="M15 28h18" />
      </g>
    </svg>
  );
}

function Queso(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...base} {...props}>
      <g stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path d="M5 34 41 18v18H5Z" fill="var(--doodle-fill, #fff6e4)" />
        <path d="M5 34 41 18" />
        <circle cx="30" cy="29" r="2.8" fill="currentColor" />
        <circle cx="19" cy="32" r="1.8" fill="currentColor" />
        <circle cx="36" cy="25" r="1.4" fill="currentColor" />
      </g>
    </svg>
  );
}

const flavorDoodles: Record<Doodle, (props: DoodleProps) => React.JSX.Element> = {
  chile: Chile,
  papa: Papa,
  huevo: Huevo,
  olla: Olla,
  queso: Queso,
};

export function FlavorDoodle({ name, ...props }: DoodleProps & { name: Doodle }) {
  const Component = flavorDoodles[name];
  return <Component {...props} />;
}
