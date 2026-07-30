// src/App.jsx
import { useEffect } from "react";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import NotFound from "./pages/NotFound";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import RouteTracker from "./analytics/RouteTracker";
import { initGA } from "./analytics/analytics";
import { initPixel } from "./analytics/metaPixel";

function App() {
  useEffect(() => {
    initGA();
    initPixel();
  }, []);

  return (
    <HashRouter>
      <RouteTracker />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/politica-privacidad"
          element={<PoliticaPrivacidad />}
        />

        <Route
          path="/terminos-condiciones"
          element={<TerminosCondiciones />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;