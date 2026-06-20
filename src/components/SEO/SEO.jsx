import React from "react";

import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "MAPAPETS | Transporte Internacional de Mascotas",
  description = "Asesoría especializada para viajar con tu mascota a cualquier país del mundo. Gestionamos requisitos sanitarios, documentación y acompañamiento internacional.",
  image = "/logo_nuevo_1.png",
  url = "https://www.mapapets.com",
  type = "website",
}) => {
  return (
    <Helmet>
      {/* =====================================
          SEO GENERAL
      ===================================== */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={url}
      />

      {/* =====================================
          OPEN GRAPH (Facebook / WhatsApp)
      ===================================== */}

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:site_name"
        content="MAPAPETS"
      />

      {/* =====================================
          TWITTER
      ===================================== */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
};

export default SEO;