# Tacos Jos — Landing page

Landing page de **Tacos Jos**, taquería mañanera en Calle Guerrero 100, Unidad Nacional, Cd. Madero, Tamaulipas.

Hecha con **Next.js 16 (App Router) + TypeScript + CSS Modules**. Es una sola página, 100 % estática, pensada primero para celular (la mayoría llega desde Instagram).

La identidad visual sale directamente del Instagram de [@tacos_jos](https://www.instagram.com/tacos_jos/): rojo salsa, crema tortilla, mantel de cuadros, rayitas alrededor de los títulos, la mascota del taco con gorra y letras tipo rótulo pintado a mano.

## Cómo correrlo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

Producción:

```bash
npm run build
npm run start
```

## Qué editar y dónde

| Quiero cambiar…                                     | Archivo                                                       |
| --------------------------------------------------- | ------------------------------------------------------------- |
| Teléfono, WhatsApp, dirección, horario, links       | `src/config/site.ts` → `site`                                 |
| Sabores del menú y sus notitas                      | `src/config/site.ts` → `menu`                                 |
| Precios (maíz / harina)                             | `src/config/site.ts` → `prices`                               |
| Promo "5 tacos + refresco $89" (o quitarla)         | `src/config/site.ts` → `promo` (`enabled: false` la oculta)   |
| Publicaciones del grid de Instagram                 | `src/config/site.ts` → `instagramPosts`                       |
| Colores, tamaños de letra, texturas                 | `src/app/globals.css` → bloque `:root`                        |
| Tipografías                                         | `src/app/layout.tsx` (Londrina Solid, Caveat Brush y Rubik)   |
| Título y descripción para Google / WhatsApp         | `src/app/layout.tsx` → `metadata`                             |

Al cambiar un dato en `site.ts` se actualiza en toda la página: botones, footer, horario "abierto ahora", datos estructurados para Google, etc.

### Pendientes antes de publicar

1. **Fotos reales.** Las fotos de los tacos (`src/assets/photos/`) son provisionales de Unsplash. Reemplázalas por fotos reales de Tacos Jos **con el mismo nombre de archivo**:
   - `hero.jpg` — la foto grande del inicio (cuadrada, mínimo 1400 × 1400 px).
   - `chicharron-rojo.jpg`, `papa-con-chorizo.jpg`, `huevo-verde.jpg`, `picadillo.jpg`, `frijol-con-queso.jpg` — vertical 4:5, mínimo 800 × 1000 px.
   - `tortillas-maiz.jpg`, `tortillas-harina.jpg` — cuadradas, mínimo 400 × 400 px.

   Next.js las optimiza solas (AVIF/WebP y tamaños por pantalla).
2. **Grid de Instagram.** `src/assets/instagram/` tiene recortes de una captura de pantalla del perfil. Se verán más nítidos si los cambias por los archivos originales de los posts (formato 3:4, unos 1080 × 1440 px).
3. **Logo.** `src/components/illustrations/Logo.tsx` es un trazo vectorial del logo de la foto de perfil. Si tienen el SVG original, pega su `path` en `LOGO_PATH` (o cambia el componente).
4. **Link de DiDi Food.** En `site.links.didiFood` va el link genérico de DiDi Food; cámbialo por el de la tienda (en la app: tienda → Compartir).
5. **Dominio.** Define la variable `NEXT_PUBLIC_SITE_URL` (por ejemplo `https://tacosjos.mx`) para que Google y la vista previa de WhatsApp usen el dominio correcto.

## Publicar

La forma más sencilla es [Vercel](https://vercel.com/new): importa el repositorio, agrega `NEXT_PUBLIC_SITE_URL` en *Environment Variables* y listo. También funciona en cualquier hosting con Node (`npm run build && npm run start`).

## Estructura

```
src/
  app/
    layout.tsx            fuentes, SEO, datos estructurados (Restaurant)
    page.tsx              arma la página con las secciones
    globals.css           tokens de marca (colores, tipografía, texturas)
    icon.svg, apple-icon.png, opengraph-image.jpg, robots.ts, sitemap.ts
  config/site.ts          TODA la información del negocio
  lib/hours.ts            cálculo de "¡Abierto ahora!" con la hora de Madero
  components/
    layout/               Header (sticky + menú hamburguesa), Footer, botón flotante de WhatsApp
    sections/             Hero, ServicesStrip, Menu (+ MenuCard), Antojos, OrderCta, Location, InstagramFeed
    ui/                   ButtonLink, SectionHeading, OpenStatus, CopyButton, RevealObserver
    illustrations/        Logo, TacoMascot, ServiceIcon, Doodles (rayitas, estrellas, tortilla…), Icons
  assets/                 fotos (importadas para que Next genere placeholders y tamaños)
```

## Detalles

- **Conversión:** WhatsApp con mensaje prellenado en el header, el hero, la franja de servicios, el bloque "¿Ya te dio hambre?" y un botón flotante fijo en celular; Google Maps con el pin exacto de su bio; botón de DiDi Food; teléfono con `tel:`; botón para copiar la dirección.
- **Horario en vivo:** la etiqueta "¡Abierto ahora!" / "Cerrado · abrimos…" se calcula con la zona horaria `America/Monterrey` y sabe que el martes cierran.
- **SEO:** HTML semántico, `lang="es-MX"`, metadatos Open Graph/Twitter con imagen para compartir, JSON-LD de tipo `Restaurant` con dirección, teléfono y horario, `robots.txt` y `sitemap.xml`.
- **Accesibilidad:** enlace "saltar al contenido", foco visible, textos alternativos, controles con `aria-*`, contraste AA y animaciones desactivadas con `prefers-reduced-motion`. Sin JavaScript todo el contenido se ve igual.
- **Rendimiento:** página estática, fuentes autoalojadas con `next/font`, imágenes optimizadas y en lazy-load (excepto la del inicio), mapa con `loading="lazy"`, ilustraciones en SVG.

## Créditos de fotos provisionales

Fotos de [Unsplash](https://unsplash.com/license) (uso libre), solo como relleno mientras llegan las fotos reales:
`photo-1582234363542-ee64d0ccb0d5`, `photo-1613514785940-daed07799d9b`, `photo-1662478839528-a9c2db7e97b6`, `photo-1731090389654-f84a8d454046`, `photo-1599488400918-5f5f96b3f463`, `photo-1648437595587-e6a8b0cdf1f9`, `photo-1600935926387-12d9b03066f0`, `photo-1693193433392-da83457dff20` (en `https://images.unsplash.com/<id>`).
