"use client";

import { useState } from "react";

import { CheckIcon, CopyIcon } from "@/components/illustrations/Icons";

import styles from "./CopyButton.module.css";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Respaldo para navegadores sin Clipboard API (o sin HTTPS).
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  }
}

export function CopyButton({ text, label = "Copiar dirección" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    const ok = await copyText(text);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span aria-live="polite">{copied ? "¡Copiada!" : label}</span>
    </button>
  );
}
