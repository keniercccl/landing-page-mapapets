// src/components/Equipo/SeccionEquipo.jsx

import React from "react";

import TeamMemberCard from "./TeamMemberCard";
import TeamCTA from "./TeamCTA";

import teamMembers from "../../data/teamData";

import EquipoCover from "../../assets/equipo/equipo-cover.png";

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
        {/* =====================================
            HEADER
        ===================================== */}

        <div
          className="
            text-center
            max-w-4xl
            mx-auto
            mb-14
          "
        >
          <span
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-[#F4EDFF]
              text-[#5B21B6]
              font-semibold
              mb-6
            "
          >
            🐾 Nuestro equipo
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              text-[#2B145A]
              leading-tight
            "
          >
            Personas comprometidas con cada viaje
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-gray-600
              leading-relaxed
            "
          >
            Cada traslado es único. Por eso contamos
            con profesionales que acompañan a las
            familias y a sus mascotas durante todo el
            proceso.
          </p>
        </div>

        {/* =====================================
            COVER
        ===================================== */}

        <div
          className="
            overflow-hidden
            rounded-[32px]
            shadow-xl
            mb-16
          "
        >
          <img
            src={EquipoCover}
            alt="Equipo Mapapets"
            loading="lazy"
            className="
              w-full
              h-[260px]
              sm:h-[380px]
              lg:h-[500px]
              object-cover
            "
          />
        </div>

        {/* =====================================
            TEAM GRID
        ===================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>

        {/* =====================================
            CTA FINAL
        ===================================== */}

        <div className="mt-16">
          <TeamCTA />
        </div>
      </div>
    </section>
  );
};

export default SeccionEquipo;