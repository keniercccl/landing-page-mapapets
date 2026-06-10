import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import coSvg from "../../assets/co.svg";
import Penny from "../../assets/penny.png";
import PetNannySvg from "../../assets/pet-nanny.png";

const CITIES = [
  "Bogotá",
  "Medellín",
  "Cali",
  "Cartagena",
  "Barranquilla",
  "Bucaramanga",
  "Pereira",
  "Manizales",
  "Armenia",
  "Ibagué",
  "Cúcuta",
  "Neiva",
  "Villavicencio",
  "Montería",
  "Sincelejo",
  "Valledupar",
  "Popayán",
  "Yopal",
];

function AnimatedCounter({ target = 1000, duration = 1800 }) {
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

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function BenefitCard({ icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="
        bg-white
        rounded-2xl
        p-4
        shadow-sm
        border
        border-[#E9D5FF]
        flex
        items-center
        gap-3
      "
    >
      <i
        className={`${icon} text-[#6B21A8] text-xl flex-shrink-0`}
      />
      <span className="font-medium text-[#2A1154]">
        {text}
      </span>
    </motion.div>
  );
}

export default function SeccionRazonesColombia() {
  return (
    <section
      id="razones-colombia"
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#F8F3FF]
          via-[#F4ECFF]
          to-[#FAF7FF]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            id="titulo-razones"
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-[#2A1154]
              mb-6
            "
          >
            ¿Por qué elegir{" "}
            <span className="text-[#6B21A8]">
              Mapapets
            </span>
            ?
          </h2>

          {/* Social Proof */}
          <div id="social-proof">
            <div
              className="
                text-4xl
                md:text-5xl
                font-black
                text-[#6B21A8]
              "
            >
              +<AnimatedCounter target={1000} />
            </div>

            <p
              className="
                mt-2
                text-lg
                font-semibold
                text-[#2A1154]
              "
            >
              Mascotas viajeras felices
            </p>

            <div
              className="
                flex
                justify-center
                items-center
                gap-1
                mt-3
                text-yellow-400
                text-xl
              "
            >
              ★★★★★
            </div>

            <p
              className="
                text-sm
                md:text-base
                text-[#2A1154]/70
                mt-2
              "
            >
              Más de 1.000 familias han confiado
              en nosotros para el traslado de sus mascotas.
            </p>
          </div>
        </motion.div>

        {/* Beneficios */}
        <div
          id="beneficios-principales"
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
            mb-16
          "
        >
          <BenefitCard
            icon="bi bi-airplane"
            text="Más de 1.000 mascotas viajeras"
          />

          <BenefitCard
            icon="bi bi-shield-check"
            text="Trámites rápidos, seguros y sin estrés"
          />

          <BenefitCard
            icon="bi bi-heart"
            text="Atención personalizada para cada familia"
          />
        </div>

        {/* Cobertura */}
        <div
          id="cobertura-colombia"
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
            mb-20
          "
        >
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={coSvg}
              alt="Cobertura nacional en Colombia"
              className="
                w-[180px]
                sm:w-[220px]
                md:w-[260px]
                h-auto
              "
            />
          </motion.div>

          {/* Ciudades */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="
                text-2xl
                font-bold
                text-[#2A1154]
                mb-2
              "
            >
              Cobertura Nacional
            </h3>

            <p
              className="
                text-[#2A1154]/70
                mb-6
              "
            >
              Llegamos a las principales ciudades de Colombia.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {CITIES.map((city) => (
                <motion.span
                  key={city}
                  whileHover={{ scale: 1.05 }}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-[#E9D5FF]
                    text-[#5A189A]
                    text-sm
                    font-medium
                  "
                >
                  {city}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* PET NANNY */}
        <motion.section
          id="pet-nanny-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="
              relative
              overflow-hidden
              bg-[#5A189A]
              rounded-[32px]
              p-6
              md:p-10
              shadow-xl
            "
          >
            <div
              className="
                absolute
                -top-24
                -right-24
                w-72
                h-72
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
              {/* Texto */}
              <div className="lg:col-span-7">
                <img
                  src={Penny}
                  alt="Pet Nanny"
                  className="
                    h-16
                    md:h-20
                    w-auto
                    mb-6
                  "
                />

                <h3
                  className="
                    text-white
                    text-2xl
                    md:text-3xl
                    font-bold
                    mb-4
                  "
                >
                  Tu mascota nunca viaja sola
                </h3>

                <p
                  className="
                    text-white/90
                    leading-relaxed
                    mb-6
                  "
                >
                  Nuestro servicio Pet Nanny acompaña a tu mascota
                  durante todo el proceso de viaje para brindar
                  tranquilidad, seguridad y apoyo personalizado.
                </p>

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                    text-white
                    mb-6
                  "
                >
                  <span>✓ Atención personalizada</span>
                  <span>✓ Seguimiento continuo</span>
                  <span>✓ Acompañamiento durante el viaje</span>
                  <span>✓ Tranquilidad para tu familia</span>
                </div>

                <button
                  id="pet-nanny-cta"
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
                  "
                >
                  Solicitar asesoría
                </button>
              </div>

              {/* Imagen */}
              <div
                className="
                  lg:col-span-5
                  flex
                  justify-center
                "
              >
                <img
                  src={PetNannySvg}
                  alt="Servicio Pet Nanny"
                  className="
                    h-52
                    sm:h-64
                    md:h-72
                    lg:h-80
                    xl:h-96
                    w-auto
                    object-contain
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