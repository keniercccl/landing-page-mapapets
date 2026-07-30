// src/analytics/RouteTracker.jsx
//
// Se monta una sola vez dentro del <HashRouter> (ver App.jsx) y
// registra un "pageview" en Google Analytics y en Meta Pixel cada
// vez que el usuario navega a una ruta distinta (incluida la carga
// inicial). Antes de esto, GA solo registraba la primera carga y
// nunca las vistas de /politica-privacidad, /terminos-condiciones, etc.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { pageView as gaPageView } from "./analytics";
import { pixelPageView } from "./metaPixel";

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;

    gaPageView(path);
    pixelPageView();
  }, [location.pathname, location.search]);

  return null;
};

export default RouteTracker;
