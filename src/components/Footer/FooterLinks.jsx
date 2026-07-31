import { Link } from "react-router-dom";
import { handleAnchorClick } from "../../utility/scrollToId";

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
    href: "#nuestra-huella",
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
    internal: false,
  },
  {
    label: "Política de Privacidad",
    href: "/politica-privacidad",
    internal: true,
  },
  {
    label: "Términos y Condiciones",
    href: "/terminos-condiciones",
    internal: true,
  },
];

export default function FooterLinks() {
  return (
    <div className="flex flex-col gap-10">
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
                onClick={handleAnchorClick(link.href.slice(1))}
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

      {/* INFORMACIÓN */}

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
              {link.internal ? (
                <Link
                  to={link.href}
                  className="
                    text-white/80
                    hover:text-white
                    transition
                  "
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={handleAnchorClick(link.href.slice(1))}
                  className="
                    text-white/80
                    hover:text-white
                    transition
                  "
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}