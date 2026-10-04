import type { SVGProps } from "react";

import type { ServiceId } from "@/config/site";

/* Iconos de línea estilo cartel: mesa con bancos, bolsa y motoneta.
   Inspirados en el post "Tus antojos como quieras". */

type Props = SVGProps<SVGSVGElement> & { name: ServiceId; withRays?: boolean };

export function ServiceIcon({ name, withRays = true, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 96 80"
      fill="none"
      aria-hidden
      focusable={false}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {withRays && (
          <g>
            <path d="M48 6v8" />
            <path d="M35 9l4 7" />
            <path d="M61 9l-4 7" />
          </g>
        )}
        {name === "aqui" && (
          <g>
            {/* mesa */}
            <path d="M30 36h36" strokeWidth="4.4" />
            <path d="M36 36v34M60 36v34" />
            {/* banco izquierdo */}
            <path d="M14 30v40M14 50h12M26 50v20" />
            {/* banco derecho */}
            <path d="M82 30v40M82 50H70M70 50v20" />
          </g>
        )}
        {name === "pickup" && (
          <g>
            <path d="M27 34h42l4 36H23Z" fill="var(--icon-fill, transparent)" />
            <path d="M38 34v-5a10 10 0 0 1 20 0v5" />
            <path d="M38 41v2M58 41v2" />
          </g>
        )}
        {name === "domicilio" && (
          <g>
            {/* caja de entregas */}
            <path d="M8 18h21v17H8Z" fill="var(--icon-fill, transparent)" />
            {/* asiento */}
            <path d="M24 37h20" strokeWidth="5" />
            {/* carrocería trasera + piso */}
            <path d="M13 60c-3-12 4-20 15-20h15c5 0 7 4 7 9v5h11" />
            {/* escudo frontal y manubrio */}
            <path d="M61 54l6-26" />
            <path d="M61 26h12" />
            <path d="M72 26l3 4" />
            {/* salpicadera */}
            <path d="M63 58a11 11 0 0 1 21 0" />
            {/* llantas */}
            <circle cx="24" cy="62" r="7.5" />
            <circle cx="74" cy="62" r="7.5" />
            {/* velocidad */}
            <path d="M0 46h7M2 54h6" />
          </g>
        )}
      </g>
    </svg>
  );
}
