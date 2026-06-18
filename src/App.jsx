// src/App.jsx
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
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
      </Routes>
    </HashRouter>
  );
}

export default App;