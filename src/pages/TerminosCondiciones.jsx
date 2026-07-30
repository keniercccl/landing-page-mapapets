import React from "react";
import { Link } from "react-router-dom";

import LegalHeader from "../components/Legal/LegalHeader";
import LegalSection from "../components/Legal/LegalSection";
import SEO from "../components/SEO/SEO";

import { termsAndConditionsData } from "../data/legalData";

const TerminosCondiciones = () => {
  const {
    title,
    subtitle,
    updatedAt,
    sections,
  } = termsAndConditionsData;

  return (
    <main className="min-h-screen bg-white">
      <SEO
  title="Términos y Condiciones | MAPAPETS"
  description="Condiciones de uso de los servicios prestados por MAPAPETS."
  url="https://www.mapapets.com/terminos-condiciones"
/>
      {/* ==========================================
          HEADER
      ========================================== */}

      <LegalHeader
        title={title}
        subtitle={subtitle}
        updatedAt={updatedAt}
      />

      {/* ==========================================
          BOTÓN VOLVER
      ========================================== */}

      <section
        className="
          max-w-5xl
          mx-auto
          px-6
          md:px-8
          pt-8
        "
      >
        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-2

            rounded-xl
            border
            border-[#5B21B6]/20

            px-5
            py-3

            text-[#5B21B6]
            font-semibold

            hover:bg-[#F8F5FF]
            transition
          "
        >
          ← Volver al inicio
        </Link>
      </section>

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
        {sections.map((section) => (
          <LegalSection
            key={section.id}
            title={section.title}
            items={section.items || []}
          >
            {section.content?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </LegalSection>
        ))}
      </section>

      {/* ==========================================
          CONTACTO LEGAL
      ========================================== */}

      <section
        className="
          max-w-5xl
          mx-auto

          px-6
          md:px-8

          pb-16
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-[#5B21B6]/10

            bg-[#F8F5FF]

            p-6
            md:p-8
          "
        >
          <h3
            className="
              text-xl
              md:text-2xl
              font-bold
              text-[#2B145A]
              mb-4
            "
          >
            ¿Tienes dudas sobre estos términos?
          </h3>

          <p
            className="
              text-gray-700
              leading-relaxed
            "
          >
            Si necesitas información adicional sobre
            nuestros servicios de traslado internacional
            de mascotas, puedes comunicarte con el equipo
            de MAPAPETS mediante nuestros canales oficiales
            de atención.
          </p>

          <div
            className="
              mt-6
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >
            <a
              href="https://wa.me/573203446611"
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp-cta="true"
              className="
                inline-flex
                items-center
                justify-center

                px-6
                py-3

                rounded-xl

                bg-[#A3E635]
                text-[#1A1A1A]

                font-bold

                hover:scale-105
                transition
              "
            >
              Contactar por WhatsApp
            </a>

            <Link
              to="/politica-privacidad"
              className="
                inline-flex
                items-center
                justify-center

                px-6
                py-3

                rounded-xl

                border
                border-[#5B21B6]/20

                text-[#5B21B6]
                font-semibold

                hover:bg-[#F8F5FF]
                transition
              "
            >
              Ver Política de Privacidad
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER LEGAL
      ========================================== */}

      <section
        className="
          border-t
          border-gray-200

          py-10
          px-6
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto

            text-center
            text-sm
            text-gray-500
          "
        >
          © {new Date().getFullYear()} MAPAPETS.
          Todos los derechos reservados.
        </div>
      </section>
    </main>
  );
};

export default TerminosCondiciones;