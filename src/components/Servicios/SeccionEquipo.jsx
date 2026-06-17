import React from "react";

import { TEAM_MEMBERS } from "../../data/teamData";

import TeamCTA from "./TeamCTA";
import TeamMemberCard from "./TeamMemberCard";

import TeamCover from "../../assets/team/team-cover.png";

const SeccionEquipo = () => {
  return (
    <section
      id="equipo"
      className="
        py-20
        md:py-28
        bg-white
      "
    >
      <div
        className="
          container
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================
            COVER
        =================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            md:rounded-[40px]
            shadow-2xl
          "
        >
          <img
            src={TeamCover}
            alt="Equipo Mapapets"
            className="
              w-full
              h-[320px]
              md:h-[500px]
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-8
              left-8
              right-8
            "
          >
            <h2
              className="
                text-white
                text-3xl
                md:text-5xl
                font-black
                max-w-3xl
              "
            >
              Conoce al equipo que hará posible
              el viaje de tu mascota
            </h2>
          </div>
        </div>

        {/* ===================================
            TITULO
        =================================== */}

        <div className="mt-20 text-center">
          <span
            className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-[#F6EEFF]
              text-[#5B21B6]
              font-semibold
            "
          >
            Nuestro equipo
          </span>

          <h3
            className="
              mt-6
              text-4xl
              md:text-5xl
              font-black
              text-[#2B145A]
            "
          >
            Personas que aman a las mascotas
          </h3>

          <p
            className="
              mt-4
              text-gray-600
              max-w-3xl
              mx-auto
            "
          >
            Cada proceso es acompañado por personas
            reales que entienden la importancia de
            mantener unida a tu familia.
          </p>
        </div>

        {/* ===================================
            TEAM GRID
        =================================== */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>

        {/* ===================================
            ESTADISTICAS
        =================================== */}

        <div
          className="
            mt-20
            grid
            grid-cols-3
            gap-6
            text-center
          "
        >
          <div>
            <h4
              className="
                text-4xl
                font-black
                text-[#5B21B6]
              "
            >
              +500
            </h4>

            <p className="text-gray-600">
              Mascotas asesoradas
            </p>
          </div>

          <div>
            <h4
              className="
                text-4xl
                font-black
                text-[#5B21B6]
              "
            >
              +30
            </h4>

            <p className="text-gray-600">
              Destinos
            </p>
          </div>

          <div>
            <h4
              className="
                text-4xl
                font-black
                text-[#5B21B6]
              "
            >
              +6
            </h4>

            <p className="text-gray-600">
              Años
            </p>
          </div>
        </div>

        {/* CTA */}

        <TeamCTA />
      </div>
    </section>
  );
};

export default SeccionEquipo;