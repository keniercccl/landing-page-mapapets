import ReactGA from "react-ga4";

import { pixelTrackEvent } from "./metaPixel";

const MEASUREMENT_ID = "G-2VNND4GPX6";

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const pageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

export const trackEvent = (
  category,
  action,
  label = ""
) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

/**
 * Evento de conversión compartido: se dispara cada vez que un
 * usuario efectivamente abre WhatsApp (no solo cuando abre el
 * selector de asesoras). Registra el evento tanto en GA4 como
 * en Meta Pixel, para que ambas plataformas puedan medir la
 * conversión de las campañas.
 */
export const trackWhatsAppContact = (agentName = "") => {
  trackEvent("WhatsApp", "contact_click", agentName);
  pixelTrackEvent("Contact", { content_name: agentName });
};