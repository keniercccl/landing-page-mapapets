// HashRouter usa el fragmento de la URL (#...) para enrutar. Un <a href="#seccion">
// nativo reescribe ese mismo fragmento y HashRouter lo interpreta como una
// navegación a una ruta inexistente, cayendo en el catch-all (404) en vez de
// hacer scroll. Este helper hace el scroll a mano sin tocar location.hash.
export const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const handleAnchorClick = (id) => (e) => {
  e.preventDefault();
  scrollToId(id);
};
