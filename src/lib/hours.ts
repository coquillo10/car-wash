import { site } from "@/config/site";

const WEEKDAYS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const SHORT_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export type OpenState = {
  open: boolean;
  label: string;
  detail: string;
};

function formatTime(minutes: number) {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h24 < 12 ? "AM" : "PM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** Calcula si Tacos Jos está abierto, usando la hora de Cd. Madero. */
export function getOpenState(now: Date = new Date()): OpenState {
  const { opensAt, closesAt, closedWeekdays, timeZone } = site.hours;

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = SHORT_EN.indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));

  const isOpenDay = (d: number) => !(closedWeekdays as readonly number[]).includes(d);
  const opensLabel = formatTime(opensAt);

  if (isOpenDay(day) && minutes >= opensAt && minutes < closesAt) {
    return { open: true, label: "¡Abierto ahora!", detail: `Cerramos a la ${formatTime(closesAt)}` };
  }

  if (isOpenDay(day) && minutes < opensAt) {
    return { open: false, label: "Cerrado", detail: `Abrimos hoy a las ${opensLabel}` };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = (day + offset) % 7;
    if (isOpenDay(next)) {
      const when = offset === 1 ? "mañana" : `el ${WEEKDAYS[next]}`;
      return { open: false, label: "Cerrado", detail: `Abrimos ${when} a las ${opensLabel}` };
    }
  }

  return { open: false, label: "Cerrado", detail: "" };
}
