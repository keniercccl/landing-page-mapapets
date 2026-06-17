import React from "react";

const navigationLinks = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Servicios",
    href: "#servicios",
  },
  {
    label: "Nuestra Huella",
    href: "#huella",
  },
  {
    label: "Equipo",
    href: "#equipo",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];

const legalLinks = [
  {
    label: "Preguntas Frecuentes",
    href: "#faq",
  },
  {
    label: "Política de Privacidad",
    href: "/landing-page-mapapets/politica-privacidad",
  },
  {
    label: "Términos y Condiciones",
    href: "/terminos-condiciones",
  },
];

export default function FooterLinks() {
  return (
    <div
      className="
        flex
        flex-col
        gap-10
      "
    >
      {/* NAVEGACIÓN */}

      <div>
        <h3
          className="
            text-xl
            md:text-2xl
            font-bold
            text-white
            mb-4
          "
        >
          Navegación
        </h3>

        <ul className="space-y-3">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="
                  text-white/80
                  hover:text-white
                  transition
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* LEGAL */}

      <div>
        <h3
          className="
            text-xl
            md:text-2xl
            font-bold
            text-white
            mb-4
          "
        >
          Información
        </h3>

        <ul className="space-y-3">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="
                  text-white/80
                  hover:text-white
                  transition
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}