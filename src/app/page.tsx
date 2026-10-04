import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Antojos } from "@/components/sections/Antojos";
import { Hero } from "@/components/sections/Hero";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Location } from "@/components/sections/Location";
import { Menu } from "@/components/sections/Menu";
import { OrderCta } from "@/components/sections/OrderCta";
import { ServicesStrip } from "@/components/sections/ServicesStrip";
import { RevealObserver } from "@/components/ui/RevealObserver";

export default function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <ServicesStrip />
        <Menu />
        <Antojos />
        <OrderCta />
        <Location />
        <InstagramFeed />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <RevealObserver />
    </>
  );
}
