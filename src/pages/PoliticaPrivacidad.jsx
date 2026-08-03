// src/pages/PoliticaPrivacidad.jsx

import { Link } from "react-router-dom";

import LegalHeader from "../components/Legal/LegalHeader";
import LegalSection from "../components/Legal/LegalSection";
import SEO from "../components/SEO/SEO";

import { privacyPolicyData } from "../data/legalData";

const PoliticaPrivacidad = () => {
  const {
    title,
    subtitle,
    updatedAt,
    sections,
  } = privacyPolicyData;

  return (
    <main className="min-h-screen bg-white">
      <SEO
  title="Política de Privacidad | MAPAPETS"
  description="Política de tratamiento de datos personales de MAPAPETS."
  url="https://www.mapapets.co/politica-privacidad"
/>
      {/* ==========================================
          NAVEGACIÓN
      ========================================== */}

      <section
        className="
          border-b
          border-gray-100
          bg-white
          sticky
          top-0
          z-40
          backdrop-blur-sm
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto
            px-6
            py-4
          "
        >
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2

              text-[#5B21B6]
              font-semibold

              hover:opacity-80
              transition
            "
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>

      {/* ==========================================
          HEADER
      ========================================== */}

      <LegalHeader
        title={title}
        subtitle={subtitle}
        updatedAt={updatedAt}
      />

      {/* ==========================================
          CONTENIDO
      ========================================== */}

      <section
        className="
          max-w-5xl
          mx-auto
          px-6
          md:px-8
          py-12
          md:py-16
        "
      >
        <div
          className="
            flex
            flex-col
            gap-10
          "
        >
          {sections.map((section) => (
            <LegalSection
              key={section.id}
              title={section.title}
              items={section.items || []}
            >
              {section.content?.map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className="
                      text-gray-700
                      leading-relaxed
                    "
                  >
                    {paragraph}
                  </p>
                )
              )}
            </LegalSection>
          ))}
        </div>
      </section>

      {/* ==========================================
          CTA FINAL
      ========================================== */}

      <section
        className="
          max-w-5xl
          mx-auto
          px-6
          pb-16
        "
      >
        <div
          className="
            bg-[#F6EEFF]
            border
            border-[#E9D8FD]
            rounded-3xl

            p-6
            md:p-8

            text-center
          "
        >
          <h3
            className="
              text-2xl
              font-bold
              text-[#4C1D95]
            "
          >
            ¿Tienes dudas sobre el tratamiento de tus datos?
          </h3>

          <p
            className="
              mt-3
              text-gray-600
              max-w-2xl
              mx-auto
            "
          >
            Si tienes preguntas relacionadas con esta
            política de privacidad o deseas ejercer tus
            derechos sobre tus datos personales,
            puedes contactarnos directamente.
          </p>

          <a
            href="https://wa.me/573203446611"
            target="_blank"
            rel="noopener noreferrer"
            data-whatsapp-cta="true"
            className="
              inline-flex
              items-center
              justify-center

              mt-6

              px-8
              py-4

              rounded-2xl

              bg-[#A3E635]
              text-[#1A1A1A]

              font-bold

              hover:scale-105
              transition
            "
          >
            Contactar a MAPAPETS
          </a>
        </div>
      </section>

      {/* ==========================================
          FOOTER LEGAL
      ========================================== */}

      <footer
        className="
          border-t
          border-gray-200

          py-8
          px-6
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4

            text-sm
            text-gray-500
          "
        >
          <p>
            © {new Date().getFullYear()} MAPAPETS.
            Todos los derechos reservados.
          </p>

          <Link
            to="/"
            className="
              text-[#5B21B6]
              font-medium

              hover:opacity-80
              transition
            "
          >
            Volver al inicio
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default PoliticaPrivacidad;