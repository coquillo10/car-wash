import { LOGO_PATH, LOGO_VIEWBOX } from "./Logo";

/* Mascota de Tacos Jos: un taco caminando con su gorra, estilo caricatura
   vintage de manguera (rubber hose). Monocromático: usa currentColor (rojo)
   y --mascot-light para los rellenos claros. */

type Props = {
  /** "bag": camina cargando una bolsa de Tacos Jos. "coffee": con su cafecito. */
  pose?: "bag" | "coffee";
  className?: string;
  title?: string;
};

const LIGHT = "var(--mascot-light, #fff8ec)";

const DOTS: [number, number, number][] = [
  [62, 152, 2.6],
  [86, 174, 2.2],
  [70, 192, 2.4],
  [104, 198, 2],
  [98, 150, 2.4],
  [124, 216, 2.6],
  [154, 214, 2],
  [180, 207, 2.4],
  [120, 172, 2.2],
  [202, 196, 2],
  [142, 194, 1.8],
];

export function TacoMascot({ pose = "bag", className, title }: Props) {
  const labelled = Boolean(title);
  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      role={labelled ? "img" : undefined}
      aria-label={labelled ? title : undefined}
      aria-hidden={labelled ? undefined : true}
      focusable={false}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(-6 140 150)"
      >
        {/* líneas de velocidad */}
        {pose === "bag" && (
          <g strokeWidth="5" fill="none">
            <path d="M4 132h18M0 152h14M8 172h12" />
          </g>
        )}

        {/* piernas */}
        <g fill="none" strokeWidth="9">
          <path d="M112 216c-4 22-14 36-26 46" />
          <path d="M154 218c4 18 8 30 14 40" />
        </g>
        {/* tenis */}
        <g strokeWidth="4">
          <path
            d="M60 270c-1-12 16-18 32-12 9 3 11 12 3 16l-30 3c-4 0-5-3-5-7Z"
            fill="currentColor"
          />
          <path d="M66 272h26" stroke={LIGHT} strokeWidth="3" />
          <path
            d="M150 264c3-12 22-15 34-7 7 5 5 14-3 15l-28 1c-4 0-5-5-3-9Z"
            fill="currentColor"
          />
          <path d="M156 268h24" stroke={LIGHT} strokeWidth="3" />
        </g>

        {/* brazo trasero */}
        <path d="M54 152c-14 6-24 16-28 28" fill="none" strokeWidth="8" />
        <circle cx="24" cy="186" r="11" fill={LIGHT} strokeWidth="4" />
        <path d="M17 180l5 5" strokeWidth="3" fill="none" />

        {/* relleno del taco */}
        <path
          d="M38 128c4-18 16-20 24-14 6-12 20-12 26-3 8-10 22-9 27 1 8-9 22-8 27 2 8-8 22-6 26 4 9-6 22-2 24 10 10-2 18 4 20 14Z"
          fill="currentColor"
          strokeWidth="4"
        />
        <path
          d="M58 120c4 2 6 6 6 8M88 112c3 3 4 8 3 12M118 112c3 3 3 8 2 12"
          fill="none"
          stroke={LIGHT}
          strokeWidth="2.6"
        />

        {/* tortilla */}
        <path
          d="M34 128q106-14 208 0a104 104 0 0 1-208 0Z"
          fill={LIGHT}
          strokeWidth="6"
        />
        <path d="M44 150c4 10 10 19 18 26" fill="none" strokeWidth="3.4" />
        <path d="M40 140c2 6 4 10 7 14" fill="none" strokeWidth="3.4" />
        <g fill="currentColor" stroke="none">
          {DOTS.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </g>

        {/* carita */}
        <g strokeWidth="3.6">
          <ellipse cx="166" cy="158" rx="10" ry="14" fill="#fff" />
          <ellipse cx="196" cy="156" rx="10" ry="14" fill="#fff" />
          <ellipse cx="169.5" cy="161" rx="5" ry="7.5" fill="currentColor" stroke="none" />
          <ellipse cx="199.5" cy="159" rx="5" ry="7.5" fill="currentColor" stroke="none" />
          <circle cx="171.5" cy="157.5" r="1.8" fill="#fff" stroke="none" />
          <circle cx="201.5" cy="155.5" r="1.8" fill="#fff" stroke="none" />
          <path d="M158 182q22 22 46-4q-22 12-46 4Z" fill="currentColor" />
          <path d="M214 176l4-6M221 178l4-6" fill="none" strokeWidth="3" />
        </g>

        {/* gorra */}
        <g strokeWidth="5">
          <path
            d="M112 124c-4-40 24-64 56-64 32 0 52 24 50 62Z"
            fill="currentColor"
          />
          <path
            d="M134 121c0-30 16-48 38-48 24 0 38 21 38 48Z"
            fill={LIGHT}
            strokeWidth="4"
          />
          <path
            d="M204 118c18-6 38-6 50 3-7 9-28 11-50 9Z"
            fill="currentColor"
          />
          <circle cx="168" cy="59" r="5" fill="currentColor" />
          <svg x="144" y="88" width="56" height="22" viewBox={LOGO_VIEWBOX}>
            <path fill="currentColor" stroke="none" fillRule="evenodd" d={LOGO_PATH} />
          </svg>
        </g>

        {/* brazo delantero */}
        {pose === "bag" ? (
          <g>
            <path d="M232 156c14 8 18 22 14 36" fill="none" strokeWidth="8" />
            {/* bolsa */}
            <path d="M210 212h52l4 58h-60Z" fill={LIGHT} strokeWidth="4" />
            <path d="M224 212c0-16 24-16 24 0" fill="none" strokeWidth="4" />
            <g fill="currentColor" stroke="none">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect key={`a${i}`} x={208 + i * 10} y="254" width="5" height="6" />
              ))}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect key={`b${i}`} x={213 + i * 10} y="260" width="5" height="6" />
              ))}
            </g>
            <svg x="214" y="226" width="44" height="18" viewBox={LOGO_VIEWBOX}>
              <path fill="currentColor" stroke="none" fillRule="evenodd" d={LOGO_PATH} />
            </svg>
            {/* guante */}
            <circle cx="244" cy="200" r="12" fill={LIGHT} strokeWidth="4" />
            <path d="M238 204c3 3 8 3 11 0" fill="none" strokeWidth="3" />
          </g>
        ) : (
          <g>
            {/* café */}
            <path d="M268 112c-4-6 4-10 0-16M280 112c-4-6 4-10 0-16" fill="none" strokeWidth="3.4" />
            <path d="M260 130h30l-4 40h-22Z" fill={LIGHT} strokeWidth="4" />
            <path d="M257 122h36v8h-36Z" fill="currentColor" strokeWidth="4" />
            <path d="M262 144h26" strokeWidth="5" />
            <path d="M234 172c10 5 20 5 30 0" fill="none" strokeWidth="8" />
            {/* guante */}
            <circle cx="268" cy="170" r="12" fill={LIGHT} strokeWidth="4" />
            <path d="M262 166h12M262 172h12" fill="none" strokeWidth="3" />
          </g>
        )}
      </g>
    </svg>
  );
}
