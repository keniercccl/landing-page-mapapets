// src/components/Equipo/TeamMemberCard.jsx

import React from "react";

const TeamMemberCard = ({ member }) => {
  const {
    name,
    role,
    image,
    shortDescription,
    quote,
    featured,
    linkedin,
    instagram,
  } = member;

  return (
    <article
      className="
        group
        bg-white
        rounded-[28px]
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        border
        border-[#ECE8F8]
        h-full
      "
    >
      {/* =====================================
          FOTO
      ===================================== */}

      <div className="relative">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="
            w-full
            aspect-square
            object-cover
          "
        />

        {/* BADGE */}

        {featured && (
          <div
            className="
              absolute
              top-4
              left-4

              bg-[#5B21B6]
              text-white

              px-4
              py-2

              rounded-full

              text-xs
              font-bold

              shadow-lg
            "
          >
            Destacado
          </div>
        )}
      </div>

      {/* =====================================
          CONTENIDO
      ===================================== */}

      <div
        className="
          p-6
          flex
          flex-col
          h-full
        "
      >
        {/* NOMBRE */}

        <h3
          className="
            text-2xl
            font-black
            text-[#2B145A]
          "
        >
          {name}
        </h3>

        {/* CARGO */}

        <p
          className="
            text-[#5B21B6]
            font-semibold
            mt-1
          "
        >
          {role}
        </p>

        {/* DESCRIPCION */}

        <p
          className="
            mt-4
            text-gray-600
            leading-relaxed
          "
        >
          {shortDescription}
        </p>

        {/* FRASE */}

        <div
          className="
            mt-5

            bg-[#F8F5FF]

            rounded-2xl

            p-4

            border-l-4
            border-[#5B21B6]
          "
        >
          <p
            className="
              text-sm
              italic
              text-[#4B5563]
            "
          >
            "{quote}"
          </p>
        </div>

        {/* REDES OPCIONALES */}

        {(linkedin || instagram) && (
          <div
            className="
              mt-6
              flex
              gap-3
            "
          >
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-[#F6EEFF]

                  flex
                  items-center
                  justify-center

                  text-[#5B21B6]

                  hover:bg-[#5B21B6]
                  hover:text-white

                  transition
                "
              >
                <i className="bi bi-linkedin"></i>
              </a>
            )}

            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-[#F6EEFF]

                  flex
                  items-center
                  justify-center

                  text-[#5B21B6]

                  hover:bg-[#5B21B6]
                  hover:text-white

                  transition
                "
              >
                <i className="bi bi-instagram"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default TeamMemberCard;