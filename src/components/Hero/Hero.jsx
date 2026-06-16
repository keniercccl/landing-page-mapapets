import React from "react";
import { motion } from "framer-motion";

import HeroVideo from "../../assets/videos/mapapets-hero.mp4";

import {
  slideUp,
  slideInFromSide,
} from "../../utility/animation";

const Hero = () => {
  return (
    <section
      className="
        flex-1
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        lg:px-8
        pb-16
        sm:pb-20
        md:pb-24
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          bg-[#F6EEFF]
          rounded-[32px]
          md:rounded-[48px]
          p-6
          sm:p-10
          md:p-12
          lg:p-16
          xl:p-20
        "
      >
       <div
  className="
    grid
    grid-cols-1
    lg:grid-cols-[1.25fr_0.75fr]
    gap-10
    lg:gap-12
    items-center
  "
>
          {/* ===================================================
              COLUMNA IZQUIERDA
          =================================================== */}

          <div id="text-contain">
            <motion.div
              variants={slideInFromSide(
                "right",
                0.6
              )}
              initial="initial"
              animate="animate"
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-white
                text-[#5B21B6]
                font-semibold
                shadow-sm
              "
            >
              🐾 Transporte internacional de mascotas
            </motion.div>

            <motion.h1
              variants={slideInFromSide("left", 0.6)}
              initial="initial"
              animate="animate"
              className="
                mt-6
                max-w-[12ch]

                text-[#2B145A]
                font-black
                leading-[0.95]

                text-[clamp(2.5rem,5vw,5.5rem)]
              "
            >
              Viaja con tu mascota

              <span
                className="
                  block
                  text-[#5B21B6]
                "
              >
                sin complicaciones
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp(0.6)}
              initial="initial"
              animate="animate"
              className="
                mt-6
                text-gray-700
                text-lg
                md:text-xl
                leading-relaxed
                max-w-xl
              "
            >
              Te acompañamos en cada etapa del proceso:
              documentación, requisitos sanitarios,
              aerolíneas y coordinación internacional
              para que tu mascota viaje segura junto
              a su familia.
            </motion.p>

            {/* BENEFICIOS */}

            <motion.ul
              variants={slideUp(0.4)}
              initial="initial"
              animate="animate"
              className="
                mt-8
                space-y-3
                text-gray-700
                font-medium
              "
            >
              <li>✅ Asesoría personalizada</li>
              <li>✅ Gestión documental internacional</li>
              <li>✅ Acompañamiento paso a paso</li>
            </motion.ul>

            {/* CTA */}

            <motion.div
              variants={slideUp(0.6)}
              initial="initial"
              animate="animate"
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >
              <a
                href={import.meta.env.VITE_GOOGLE_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center

                  px-8
                  py-4

                  rounded-2xl

                  bg-[#A3E635]
                  text-[#1A1A1A]

                  font-extrabold

                  shadow-lg

                  hover:scale-105
                  transition
                "
              >
                Solicitar asesoría
              </a>

              <a
                href="#nuestra-huella"
                className="
                  inline-flex
                  items-center
                  justify-center

                  px-8
                  py-4

                  rounded-2xl

                  bg-white
                  text-[#5B21B6]

                  font-bold

                  border
                  border-[#5B21B6]/20

                  hover:bg-[#F8F5FF]
                  transition
                "
              >
                Ver casos reales
              </a>
            </motion.div>
          </div>

          {/* ===================================================
              VIDEO
          =================================================== */}

          <motion.div
            variants={slideInFromSide(
              "right",
              0.6
            )}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <div
              className="
                w-full
                max-w-xl
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[28px]
                  border-[6px]
                  border-[#6D28D9]
                  shadow-2xl
                "
              >
                <video
                  className="
                    w-full
                    aspect-video
                    object-cover
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                >
                  <source
                    src={HeroVideo}
                    type="video/mp4"
                  />
                </video>
              </div>

              <p
                className="
                  mt-3
                  text-center
                  text-sm
                  text-[#5B21B6]
                  opacity-80
                "
              >
                Conoce cómo ayudamos a las familias a
                viajar junto a sus mascotas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;