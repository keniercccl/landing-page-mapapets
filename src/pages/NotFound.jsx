import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main
      className="
        min-h-screen
        bg-[#F6EEFF]
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          max-w-2xl
          text-center
        "
      >
        {/* Código error */}

        <h1
          className="
            text-[120px]
            md:text-[180px]
            font-black
            leading-none
            text-[#5B21B6]
          "
        >
          404
        </h1>

        {/* Título */}

        <h2
          className="
            text-3xl
            md:text-5xl
            font-bold
            text-[#2B145A]
          "
        >
          Página no encontrada
        </h2>

        {/* Texto */}

        <p
          className="
            mt-6
            text-lg
            text-gray-600
            leading-relaxed
          "
        >
          La página que intentas visitar no existe,
          fue movida o el enlace es incorrecto.
        </p>

        {/* CTA */}

        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
          "
        >
          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center

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
            Volver al inicio
          </Link>

          <a
            href={import.meta.env.VITE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center

              px-8
              py-4

              rounded-2xl

              bg-white

              border
              border-[#5B21B6]/20

              text-[#5B21B6]
              font-bold

              hover:bg-[#F8F5FF]
              transition
            "
          >
            Contactar a MAPAPETS
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;