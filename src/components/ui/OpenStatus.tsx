"use client";

import { useEffect, useState } from "react";

import { getOpenState, type OpenState } from "@/lib/hours";

import styles from "./OpenStatus.module.css";

/** Etiqueta "¡Abierto ahora!" / "Cerrado · abrimos…" calculada con la hora local de Madero. */
export function OpenStatus({ className }: { className?: string }) {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const update = () => setState(getOpenState());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p
      className={[styles.status, state?.open ? styles.open : styles.closed, className ?? ""].join(" ")}
      aria-live="polite"
      data-ready={state ? "" : undefined}
    >
      {state && (
        <>
          <span className={styles.dot} aria-hidden />
          <strong>{state.label}</strong>
          {state.detail && <span className={styles.detail}>{state.detail}</span>}
        </>
      )}
    </p>
  );
}
