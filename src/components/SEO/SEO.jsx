import { useEffect } from "react";

// react-helmet-async v3.0.0 no aplica ningun cambio al DOM en esta app
// (verificado: ni title ni meta tags se actualizaban, en dev y en build de
// produccion). En vez de depurar la libreria, se reemplaza por un efecto
// simple que escribe directo al head — esta es una SPA 100% cliente, sin
// SSR, asi que no hace falta ningun manejo especial de "request context".
const setMeta = (attr, key, content) => {
  if (!content) return;

  let el = document.head.querySelector(`meta[${attr}="${key}"]`);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
};

const SEO = ({
  title = "MAPAPETS | Transporte Internacional de Mascotas",
  description = "Asesoría especializada para viajar con tu mascota a cualquier país del mundo. Gestionamos requisitos sanitarios, documentación y acompañamiento internacional.",
  image = "/logo_nuevo_1.png",
  url = "https://www.mapapets.co",
  type = "website",
  noindex = false,
}) => {
  useEffect(() => {
    document.title = title;

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex" : "index, follow");
    setCanonical(url);

    // Open Graph (Facebook / WhatsApp)
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", "MAPAPETS");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, image, url, type, noindex]);

  return null;
};

export default SEO;
