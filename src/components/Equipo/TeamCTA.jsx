import React from "react";
import WhatsappButton from "../WhatsappSelector/WhatsappButton";

const TeamCTA = () => {
  return (
    <section
      className="
        mt-20
        md:mt-24
      "
    >
      <div
        className="
          relative
          overflow-hidden

          rounded-[32px]
          md:rounded-[40px]

          bg-[#5B21B6]

          px-6
          py-12

          sm:px-10
          sm:py-14

          lg:px-16
          lg:py-16

          shadow-2xl
        "
      >
        {/* Decoración fondo */}

        <div
          className="
            absolute
            -top-24
            -right-24

            w-64
            h-64

            rounded-full

            bg-white/10

            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -left-24

            w-64
            h-64

            rounded-full

            bg-white/10

            blur-3xl
          "
        />

        {/* Contenido */}

        <div
          className="
            relative
            z-10

            flex
            flex-col

            lg:flex-row
            lg:items-center
            lg:justify-between

            gap-8
          "
        >
          {/* Texto */}

          <div className="max-w-2xl">
            <span
              className="
                inline-flex
                items-center

                px-4
                py-2

                rounded-full

                bg-white/15

                text-white

                text-sm
                font-semibold
              "
            >
              🐾 Estamos listos para ayudarte
            </span>

            <h2
              className="
                mt-5

                text-white

                text-3xl
                sm:text-4xl
                md:text-5xl

                font-black
                leading-tight
              "
            >
              ¿Listo para comenzar el viaje de tu mascota?
            </h2>

            <p
              className="
                mt-4

                text-white/90

                text-lg
                leading-relaxed
              "
            >
              Nuestro equipo te acompañará paso a paso
              en cada requisito, trámite y coordinación
              para que tu mascota viaje de forma segura
              junto a su familia.
            </p>
          </div>

          {/* CTA */}

          <div
            className="
              flex
              justify-start
              lg:justify-end
            "
          >
            <WhatsappButton
              className="
                inline-flex
                items-center
                justify-center

                px-8
                py-4

                rounded-2xl

                bg-[#B4F227]
                text-[#1A1A1A]

                font-extrabold

                shadow-xl

                hover:scale-105
                transition
              "
            >
              Solicitar asesoría
            </WhatsappButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCTA;