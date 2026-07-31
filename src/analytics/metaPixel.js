// src/analytics/metaPixel.js
//
// Integración de Meta Pixel (Facebook Ads).
//
// No requiere ninguna librería externa: inyecta el script oficial
// de Meta ("fbevents.js") en tiempo de ejecución, solo si hay un
// Pixel ID configurado en las variables de entorno.
//
// Para activarlo:
// 1. Crea el pixel en Meta Business Manager (business.facebook.com
//    -> Administrador de eventos -> Conectar orígenes de datos -> Web).
// 2. Copia el "ID del pixel" (un número de 15-16 dígitos).
// 3. Pégalo en el archivo .env como:
//      VITE_META_PIXEL_ID=1234567890123456
// 4. Reinicia el servidor de desarrollo (npm run dev).
//
// Mientras VITE_META_PIXEL_ID esté vacío, este módulo no hace nada
// (no se inyecta ningún script), así que es seguro dejarlo así
// hasta que tengas el ID real.

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let isInitialized = false;

/**
 * Inyecta el script de Meta Pixel y lo inicializa.
 * Debe llamarse una sola vez, al montar la app.
 */
export const initPixel = () => {
  if (!PIXEL_ID) {
    return;
  }

  if (isInitialized || typeof window === "undefined") {
    return;
  }

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  window.fbq("init", PIXEL_ID);

  isInitialized = true;
};

/**
 * Registra una vista de página (PageView).
 * Llamar en el montaje inicial y en cada cambio de ruta.
 */
export const pixelPageView = () => {
  if (!PIXEL_ID || typeof window === "undefined" || !window.fbq) {
    return;
  }

  window.fbq("track", "PageView");
};

/**
 * Registra un evento estándar de Meta (Contact, Lead, etc.).
 * https://developers.facebook.com/docs/meta-pixel/reference#standard-events
 */
export const pixelTrackEvent = (eventName, params = {}) => {
  if (!PIXEL_ID || typeof window === "undefined" || !window.fbq) {
    return;
  }

  window.fbq("track", eventName, params);
};
