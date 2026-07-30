// src/components/BotonWhatsApp.jsx

import React, { useEffect, useRef, useState } from "react";

import whatsappIcon from "../assets/WhatsApp.png";

import WhatsappSelector from "./WhatsappSelector/WhatsappSelector";

const BotonWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Se oculta automáticamente mientras el usuario tenga a la vista
  // otro botón que ya abre WhatsApp (Banner, Nuestra Huella, Footer,
  // Equipo, etc.), para evitar dos llamados a la acción redundantes
  // superpuestos en pantalla (feedback del trafficker digital).
  const [hasVisibleCta, setHasVisibleCta] = useState(false);
  const visibleTargets = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleTargets.current.add(entry.target);
          } else {
            visibleTargets.current.delete(entry.target);
          }
        });

        setHasVisibleCta(visibleTargets.current.size > 0);
      },
      { threshold: 0.2 }
    );

    const observeAll = () => {
      document
        .querySelectorAll('[data-whatsapp-cta="true"]')
        .forEach((el) => observer.observe(el));
    };

    observeAll();

    // Vuelve a buscar CTAs cuando el DOM cambia (modales que se
    // abren, secciones que cargan de forma diferida, etc.).
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* BOTÓN FLOTANTE */}

      <button
        onClick={() => setIsOpen(true)}
        aria-label="Abrir WhatsApp"
        aria-hidden={hasVisibleCta}
        tabIndex={hasVisibleCta ? -1 : 0}
        className={`
          fixed
          bottom-5
          right-5
          md:bottom-6
          md:right-6

          z-[999]

          group

          transition-all
          duration-300
          ${
            hasVisibleCta
              ? "opacity-0 scale-75 pointer-events-none"
              : "opacity-100 scale-100"
          }
        `}
      >
        {/* Halo */}

        <span
          className="
            absolute
            inset-0
            rounded-full

            animate-[ping_3s_ease-in-out_infinite]

            bg-green-500/20
          "
        />

        {/* Botón */}

        <div
          className="
            relative

            w-14
            h-14

            md:w-16
            md:h-16

            rounded-full

            bg-white

            shadow-[0_8px_30px_rgba(0,0,0,0.18)]

            flex
            items-center
            justify-center

            transition-all
            duration-300

            group-hover:scale-110
          "
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="
              w-8
              h-8

              md:w-9
              md:h-9
            "
          />
        </div>
      </button>

      {/* SELECTOR */}

      <WhatsappSelector
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default BotonWhatsApp;