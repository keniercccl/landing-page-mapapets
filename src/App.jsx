// src/App.jsx
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/landing-page-mapapets"
          element={<Home />}
        />
        <Route
  path="/landing-page-mapapets/politica-privacidad"
  element={<PoliticaPrivacidad />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;