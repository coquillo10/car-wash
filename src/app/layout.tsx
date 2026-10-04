import type { Metadata, Viewport } from "next";
import { Caveat_Brush, Londrina_Solid, Rubik } from "next/font/google";

import { site } from "@/config/site";

import "./globals.css";

/* Tipografías: se descargan en build y se sirven desde el mismo dominio. */
const display = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-display",
  display: "swap",
});

const script = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const body = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const title = `${site.name} | Tacos mañaneros en Cd. Madero, Tamaulipas`;
const description =
  "Tacos de chicharrón rojo, papa con chorizo, huevo verde, picadillo y frijol con queso. Maíz $18, harina $22. Calle Guerrero 100, Unidad Nacional, Cd. Madero. Abrimos de 7:30 AM a 1:00 PM (martes cerrado). Pide por WhatsApp o DiDi Food.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  keywords: [
    "tacos",
    "tacos mañaneros",
    "tacos de guisado",
    "Ciudad Madero",
    "Cd. Madero",
    "Tampico",
    "Tamaulipas",
    "chicharrón rojo",
    "papa con chorizo",
    "huevo verde",
    "taquería",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Hoy toca Jos.`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Hoy toca Jos.`,
    description,
  },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#c51d24",
  width: "device-width",
  initialScale: 1,
};

/* Datos estructurados para que Google entienda horario, dirección y menú. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.tagline,
  url: site.url,
  telephone: site.phone.e164,
  servesCuisine: ["Mexicana", "Tacos de guisado"],
  priceRange: "$",
  acceptsReservations: false,
  hasMap: site.links.maps,
  sameAs: [site.links.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.neighborhood}`,
    addressLocality: site.address.cityLegal,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:30",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-MX"
      className={`${display.variable} ${script.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Activa las animaciones de entrada solo con JS. Si la app no arranca en 3 s,
            se quitan para que nunca quede contenido escondido. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(d){d.classList.add('js');setTimeout(function(){if(!d.classList.contains('reveal-ready'))d.classList.remove('js')},3000)})(document.documentElement)",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
