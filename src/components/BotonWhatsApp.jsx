// src/components/BotonWhatsApp.jsx

import React, { useState } from "react";

import whatsappIcon from "../assets/WhatsApp.png";

import WhatsappSelector from "./WhatsappSelector/WhatsappSelector";

const BotonWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* BOTÓN FLOTANTE */}

      <button
        onClick={() => setIsOpen(true)}
        aria-label="Abrir WhatsApp"
        className="
          fixed
          bottom-5
          right-5
          md:bottom-6
          md:right-6

          z-[999]

          group
        "
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