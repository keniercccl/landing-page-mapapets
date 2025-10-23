// src/components/Equipo/SeccionEquipo.jsx
import React from "react";

import portada from "../../assets/equipo1.png";
import p1 from "../../assets/avatar1.jpg";
import p2 from "../../assets/avatar2.jpg";
import p3 from "../../assets/avatar3.png";
import p4 from "../../assets/avatar4.png";
import p5 from "../../assets/avatar5.png";

const TEAM = [
  { id: 1, name: "Diana Duarte", img: p1, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
  { id: 2, name: "Diana Duarte", img: p2, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
  { id: 3, name: "Diana Duarte", img: p3, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
  { id: 4, name: "Diana Duarte", img: p4, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
  { id: 5, name: "Diana Duarte", img: p5, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
];

export default function SeccionEquipo({
  title = "En Mapapets, convertimos el sueño de viajar con tu mascota en una realidad",
  ctaText = "Escríbenos Ya",
  ctaHref = "https://wa.me/3203446611",
  team = TEAM,
  cover = portada,
}) {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm">
          <img src={cover} alt="Equipo Mapapets" className="w-full h-[360px] sm:h-[420px] object-cover" />
        </div>

        {/* GRID 2 columnas x 3 filas en desktop */}
        <div
          className="
            mt-12 grid gap-x-16 gap-y-12 place-items-start
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-2
          "
        >
          {/* fila 1 */}
          <Perfil {...team[0]} className="lg:col-start-1 lg:row-start-1" />
          <Perfil {...team[1]} className="lg:col-start-2 lg:row-start-1" />

          {/* fila 2 */}
          <Perfil {...team[2]} className="lg:col-start-1 lg:row-start-2" />
          <Perfil {...team[3]} className="lg:col-start-2 lg:row-start-2" />

          {/* fila 3 */}
          <Perfil {...team[4]} className="lg:col-start-1 lg:row-start-3" />
          <CTA
            title={title}
            ctaText={ctaText}
            href={ctaHref}
            className="lg:col-start-2 lg:row-start-3"
          />
        </div>
      </div>
    </section>
  );
}

function Perfil({ img, name, bio, className = "" }) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <img
        src={img}
        alt={name}
        className="size-20 sm:size-24 rounded-full object-cover ring-1 ring-black/10 shadow"
      />
      <div className="pt-1">
        <h4 className="text-sm font-semibold text-[#3a2c66]">{name}</h4>
        <p className="text-xs text-[#3a2c66]/70 mt-1 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

function CTA({ title, ctaText, href, className = "" }) {
  return (
    <div
      className={`
        relative overflow-visible
        rounded-[18px] border-2 border-[#7B43CC] bg-white
        p-5 sm:p-6 pb-12   /* espacio extra para el botón flotante */
        shadow-sm
        ${className}
      `}
    >
      <p className="text-[#4A239B] leading-snug text-sm sm:text-base">
        En <strong>Mapapets</strong>, convertimos el sueño de viajar{" "}
        <br className="hidden sm:block" />
        <span className="font-extrabold">
          con tu mascota en una realidad
        </span>
      </p>

      {/* Botón flotante centrado, sobresaliendo de la tarjeta */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2
          inline-flex items-center justify-center
          rounded-full bg-[#B8F34C]
          px-6 sm:px-7 py-2.5
          text-[#1f1f1f] font-bold text-sm
          shadow-md ring-1 ring-black/10
          hover:brightness-95 transition
        "
      >
        {ctaText}
      </a>
    </div>
  );
}



