import { WhatsAppIcon } from "@/components/illustrations/Icons";
import { whatsappUrl } from "@/config/site";

import styles from "./FloatingWhatsApp.module.css";

/** Botón fijo inferior: WhatsApp siempre a la mano. */
export function FloatingWhatsApp() {
  return (
    <aside aria-label="Pedido rápido">
      <a
        href={whatsappUrl()}
        className={styles.button}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon className={styles.icon} />
        <span>Pedir por WhatsApp</span>
      </a>
    </aside>
  );
}
