import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import coSvg from "../../assets/co.svg";
import Penny from "../../assets/penny.png";
import PetNannySvg from "../../assets/pet-nanny.png"; // SVG decorativo

const CITIES = [
  "Armenia",
  "Barranquilla",
  "Bogotá",
  "Bucaramanga",
  "Cali",
  "Cartagena",
  "Cúcuta",
  "Ibagué",
  "Medellín",
  "Manizales",
  "Pereira",
  "Popayán",
  "Neiva",
  "Villavicencio",
  "Yopal",
  "Montería",
  "Sincelejo",
  "Valledupar",
];

function AnimatedCounter({ target = 1000, duration = 2000 }) {
  const [count, setCount] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!isInView) return;

    let startTime;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
    </div>
  );
}

const Pill = ({ children, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="w-full rounded-full bg-[#6B21A8] text-white text-center font-bold py-3 px-4 shadow-md text-sm sm:text-base"
  >
    {children}
  </motion.div>
);

export default function SeccionRazonesColombia() {
  return (
    <section
      id="razones-colombia"
      className="relative w-full py-16 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-[#6B21A8]/8" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="titulo-razones"
            className="text-2xl md:text-3xl font-extrabold text-[#2A1154] mb-6"
          >
            ¿Por qué elegir{" "}
            <span className="text-[#6B21A8]">
              Mapapets
            </span>
            ?
          </h2>
        </motion.div>

        {/* Razones */}
        <div
          id="lista-razones"
          className="space-y-4 mb-12"
        >
          <Pill id="contador-mascotas">
            <span className="inline-flex items-center gap-2">
              Más de
              <AnimatedCounter target={1000} />
              mascotas han viajado con nosotros
            </span>
          </Pill>

          <Pill id="tramites">
            Trámites rápidos, seguros y sin estrés
          </Pill>

          <Pill id="atencion">
            Atención personalizada, como si fuera nuestro propio peludo
          </Pill>
        </div>

        {/* Mapa + ciudades */}
        <div
          id="cobertura-colombia"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* MAPA */}
          <motion.div
            id="mapa-colombia"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <img
                src={coSvg}
                alt="Mapa de Colombia"
                className="
                  w-[180px]
                  sm:w-[220px]
                  md:w-[260px]
                  lg:w-[280px]
                  h-auto
                  object-contain
                "
              />
            </div>
          </motion.div>

          {/* CIUDADES */}
          <motion.div
            id="ciudades-colombia"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#2A1154] mb-4">
              Llegamos a toda{" "}
              <span className="text-[#6B21A8]">
                Colombia
              </span>
            </h3>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-sm md:text-base text-[#2A1154]/80">
                {CITIES.map((city) => (
                  <div key={city}>{city}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* PET NANNY */}
        <motion.section
          id="pet-nanny-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div
            className="
      relative
      overflow-hidden
      bg-[#5A189A]
      rounded-[32px]
      px-6
      py-8
      md:px-8
      lg:px-12
      lg:py-10
      shadow-xl
    "
          >
            {/* Decoración */}
            <div
              className="
        absolute
        -top-20
        -right-20
        w-60
        h-60
        rounded-full
        bg-white/5
      "
            />

            <div
              className="
        relative
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-8
        items-center
      "
            >
              {/* CONTENIDO */}
              <div
                id="pet-nanny-content"
                className="lg:col-span-7 text-center lg:text-left"
              >
                {/* Logo */}
                <img
                  id="logo-pet-nanny"
                  src={Penny}
                  alt="Pet Nanny"
                  className="
            h-16
            md:h-20
            w-auto
            mx-auto
            lg:mx-0
            mb-5
          "
                />

                {/* Título */}
                <h3
                  id="pet-nanny-title"
                  className="
            text-white
            font-bold
            text-2xl
            md:text-3xl
            mb-4
          "
                >
                  Tu mascota nunca viaja sola
                </h3>

                {/* Descripción */}
                <p
                  id="pet-nanny-description"
                  className="
            text-white/90
            text-sm
            md:text-base
            leading-relaxed
            max-w-2xl
            mx-auto
            lg:mx-0
            mb-6
          "
                >
                  Nuestro servicio Pet Nanny acompaña a tu mascota
                  durante todo el proceso de viaje, brindando apoyo,
                  seguimiento y atención personalizada para una
                  experiencia segura y tranquila.
                </p>

                {/* Beneficios */}
                <div
                  id="pet-nanny-benefits"
                  className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-3
            mb-6
          "
                >
                  <div className="flex items-center gap-2 text-white">
                    <span>✓</span>
                    <span>Atención personalizada</span>
                  </div>

                  <div className="flex items-center gap-2 text-white">
                    <span>✓</span>
                    <span>Seguimiento continuo</span>
                  </div>

                  <div className="flex items-center gap-2 text-white">
                    <span>✓</span>
                    <span>Acompañamiento durante el viaje</span>
                  </div>

                  <div className="flex items-center gap-2 text-white">
                    <span>✓</span>
                    <span>Mayor tranquilidad para tu familia</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  id="pet-nanny-button"
                  className="
            bg-white
            text-[#5A189A]
            font-bold
            px-6
            py-3
            rounded-full
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
          "
                >
                  Solicitar información
                </button>
              </div>

              {/* ILUSTRACIÓN */}
              <div
                id="pet-nanny-image-container"
                className="
          lg:col-span-5
          flex
          justify-center
        "
              >
                <img
                  id="pet-nanny-svg"
                  src={PetNannySvg}
                  alt="Mascota viajera"
                  className="
            h-52
            sm:h-60
            md:h-72
            lg:h-80
            xl:h-96
            w-auto
            object-contain
            drop-shadow-2xl
          "
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}