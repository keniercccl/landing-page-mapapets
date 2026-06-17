import React from "react";

import LegalHeader from "../components/Legal/LegalHeader";
import LegalSection from "../components/Legal/LegalSection";

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

export default PoliticaPrivacidad;