import type { StaticImageData } from "next/image";

import chicharronRojo from "@/assets/photos/chicharron-rojo.jpg";
import frijolConQueso from "@/assets/photos/frijol-con-queso.jpg";
import huevoVerde from "@/assets/photos/huevo-verde.jpg";
import papaConChorizo from "@/assets/photos/papa-con-chorizo.jpg";
import picadillo from "@/assets/photos/picadillo.jpg";
import tortillasHarina from "@/assets/photos/tortillas-harina.jpg";
import tortillasMaiz from "@/assets/photos/tortillas-maiz.jpg";

import igChicharron from "@/assets/instagram/chicharron.jpg";
import igDidi from "@/assets/instagram/didi-food.jpg";
import igHoyTocaJos from "@/assets/instagram/hoy-toca-jos.jpg";
import igNosVemos from "@/assets/instagram/nos-vemos-al-rato.jpg";
import igNuevoMenu from "@/assets/instagram/nuevo-menu.jpg";
import igPlanPerfecto from "@/assets/instagram/plan-perfecto.jpg";

/* -------------------------------------------------------------------------- */
/*  Toda la información del negocio vive aquí. Cambia un dato aquí y se       */
/*  actualiza en toda la página (textos, links, SEO y datos estructurados).   */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "Tacos Jos",
  concept: "Taquería mañanera",
  tagline: "Tacos mañaneros hechos para quitarte el antojo.",
  footerLine: "Tacos mañaneros en Cd. Madero.",
  /** Cambia esto por el dominio real (o define NEXT_PUBLIC_SITE_URL). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tacosjos.mx",

  address: {
    street: "Calle Guerrero 100",
    neighborhood: "Unidad Nacional",
    city: "Cd. Madero",
    cityLegal: "Ciudad Madero",
    state: "Tamaulipas",
    postalCode: "89410",
    country: "MX",
    /** Texto que se copia con el botón "Copiar dirección". */
    full: "Calle Guerrero 100, Unidad Nacional, Cd. Madero, Tamaulipas",
  },

  phone: {
    display: "833 106 9264",
    e164: "+528331069264",
  },

  whatsapp: {
    /** Número en formato internacional sin "+" (52 = México). */
    number: "528331069264",
    message: "¡Hola Tacos Jos! 🌮 Quiero hacer un pedido:",
  },

  hours: {
    display: "7:30 AM – 1:00 PM",
    days: "Lunes a domingo",
    closedNote: "Martes cerrado",
    /** Minutos desde medianoche. */
    opensAt: 7 * 60 + 30,
    closesAt: 13 * 60,
    /** 0 = domingo, 1 = lunes, 2 = martes… */
    closedWeekdays: [2],
    timeZone: "America/Monterrey",
  },

  links: {
    /** Link exacto del pin que tienen en su bio de Instagram. */
    maps: "https://maps.app.goo.gl/twnj2xFZ1aEBZXx37",
    mapsEmbed:
      "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sC.+Guerrero+100,+Unidad+Nacional,+89410+Cd+Madero,+Tamps.!6i16",
    /** TODO: reemplazar por el link directo de la tienda en DiDi Food (Compartir tienda en la app). */
    didiFood: "https://www.didi-food.com/es-MX/food/",
    instagram: "https://www.instagram.com/tacos_jos/",
  },

  instagramHandle: "@tacos_jos",
} as const;

export function whatsappUrl(message: string = site.whatsapp.message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const telUrl = `tel:${site.phone.e164}`;

/* --------------------------------- Menú ---------------------------------- */

export type Doodle = "chile" | "papa" | "huevo" | "olla" | "queso";

export type MenuItem = {
  id: string;
  name: string;
  /** Notita escrita "a mano" en la tarjeta. */
  note: string;
  doodle: Doodle;
  image: StaticImageData;
  imageAlt: string;
};

/**
 * Las fotos son provisionales (Unsplash). Reemplázalas por fotos reales de
 * Tacos Jos con el mismo nombre de archivo en src/assets/photos/.
 */
export const menu: MenuItem[] = [
  {
    id: "chicharron-rojo",
    name: "Chicharrón rojo",
    note: "en salsa roja",
    doodle: "chile",
    image: chicharronRojo,
    imageAlt: "Tacos de chicharrón en salsa roja",
  },
  {
    id: "papa-con-chorizo",
    name: "Papa con chorizo",
    note: "el clásico",
    doodle: "papa",
    image: papaConChorizo,
    imageAlt: "Tacos de papa con chorizo",
  },
  {
    id: "huevo-verde",
    name: "Huevo verde",
    note: "en salsa verde",
    doodle: "huevo",
    image: huevoVerde,
    imageAlt: "Tacos de huevo en salsa verde",
  },
  {
    id: "picadillo",
    name: "Picadillo",
    note: "como en casa",
    doodle: "olla",
    image: picadillo,
    imageAlt: "Tacos de picadillo",
  },
  {
    id: "frijol-con-queso",
    name: "Frijol con queso",
    note: "nunca falla",
    doodle: "queso",
    image: frijolConQueso,
    imageAlt: "Tacos de frijol con queso",
  },
];

export type Price = {
  tortilla: string;
  price: number;
  image: StaticImageData;
  imageAlt: string;
};

export const prices: Price[] = [
  { tortilla: "Maíz", price: 18, image: tortillasMaiz, imageAlt: "Tortillas de maíz" },
  { tortilla: "Harina", price: 22, image: tortillasHarina, imageAlt: "Tortillas de harina" },
];

/** Promo de sus historias destacadas. Pon `enabled: false` para ocultarla. */
export const promo = {
  enabled: true,
  title: "5 tacos + refresco",
  price: 89,
  note: "El antojo perfecto",
};

/* ------------------------------- Servicios ------------------------------- */

export type ServiceId = "aqui" | "pickup" | "domicilio";

export const services: { id: ServiceId; title: string; detail: string }[] = [
  { id: "aqui", title: "Come aquí", detail: "Guerrero 100, Unidad Nacional" },
  { id: "pickup", title: "Pick up", detail: "Pide por WhatsApp y pasa por ellos" },
  { id: "domicilio", title: "A domicilio", detail: "Por WhatsApp o DiDi Food" },
];

/* ------------------------------- Instagram ------------------------------- */

/** Publicaciones reales de @tacos_jos. Cambia o agrega hasta 6. */
export const instagramPosts: { image: StaticImageData; alt: string }[] = [
  { image: igHoyTocaJos, alt: "Publicación: Hoy toca Jos." },
  { image: igChicharron, alt: "Publicación: taco de chicharrón" },
  { image: igNuevoMenu, alt: "Publicación: nuevo menú, maíz $18 y harina $22" },
  { image: igPlanPerfecto, alt: "Publicación: el plan perfecto, tacos de guisado" },
  { image: igNosVemos, alt: "Publicación: nos vemos al rato, de 7:30 AM a 1:00 PM" },
  { image: igDidi, alt: "Publicación: ya estamos en DiDi Food" },
];

/* ---------------------------------- Nav ---------------------------------- */

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#menu", label: "Menú" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#horarios", label: "Horarios" },
] as const;
