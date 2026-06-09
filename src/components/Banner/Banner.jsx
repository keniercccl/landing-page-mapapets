import React from "react";
import { motion } from "framer-motion";

import EstatuaImg from "../../assets/estatua_libertad_1.jpg";
import PerroImg from "../../assets/banner-perro.png";
import LogoImg from "../../assets/logo_nuevo_1.png";

import {
  fadeUp,
  slideLeft,
  slideRight,
} from "../../utility/animation";

const Banner = () => {
  return (
    <section
      id="huella"
      className="w-full px-4 my-8 sm:my-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="
          relative
          overflow-hidden
          rounded-[28px]
          lg:rounded-[40px]
          min-h-[700px]
          lg:min-h-[550px]
          shadow-xl
        "
      >
        {/* ==================================================
            CAPA 1 - IMAGEN DE FONDO
            ==================================================

            CAMBIAR ALTURA:
            min-h-[700px]
            lg:min-h-[550px]

            CAMBIAR OPACIDAD:
            opacity-100

            CAMBIAR ESCALA:
            scale-100
        ================================================== */}

        <motion.img
          variants={fadeUp}
          src={EstatuaImg}
          alt="Estatua de la Libertad"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* ==================================================
            CAPA 2 - OVERLAY MORADO

            CAMBIAR TRANSPARENCIA:

            from-[#5B21B6]
            via-[#5B21B6]/95
            to-transparent

            Más transparente:
            via-[#5B21B6]/70

            Más oscuro:
            via-[#5B21B6]
        ================================================== */}

        <motion.div
          variants={fadeUp}
          className="
            absolute
            inset-0
            bg-gradient-to-l
            from-[#5B21B6]
            via-[#5B21B6]/95
            to-transparent
          "
        />

        {/* ==================================================
            CONTENIDO
        ================================================== */}

        <div
          className="
            relative
            z-20
            h-full
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            px-6
            sm:px-10
            lg:px-16
            py-10
          "
        >
          {/* ==========================================
              COLUMNA IZQUIERDA
          ========================================== */}

          <div
            className="
              flex
              flex-col
              justify-center
              items-center
              lg:items-start
              text-center
              lg:text-left
              gap-4
            "
          >
            <motion.div variants={slideLeft}>
              <h2
                className="
                  text-white
                  font-black
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  leading-none
                "
              >
                Estados
              </h2>

              <h3
                className="
                  text-white
                  font-black
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  leading-none
                "
              >
                Unidos
              </h3>

              <p
                className="
                  text-white
                  text-lg
                  sm:text-xl
                  mt-3
                "
              >
                o cualquier parte del mundo
              </p>
            </motion.div>
          </div>

          {/* ==========================================
              COLUMNA DERECHA
          ========================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              lg:items-end
              justify-center
              gap-6
              mt-10
              lg:mt-0
            "
          >
            {/* ======================================
                LOGO

                CAMBIAR TAMAÑO:

                w-32
                sm:w-40
                lg:w-52

                Más grande desktop:
                lg:w-64
            ====================================== */}

            <motion.img
              variants={fadeUp}
              src={LogoImg}
              alt="MAPAPETS"
              className="
                w-32
                sm:w-40
                lg:w-52
                h-auto
              "
            />

            {/* ======================================
                SLOGAN
            ====================================== */}

            <motion.div
              variants={fadeUp}
              className="
                text-center
                lg:text-right
                text-white
                font-semibold
                text-lg
                sm:text-xl
                max-w-md
              "
            >
              ¡Nos encargamos de todo para tu viaje con tu mascota!
            </motion.div>

            {/* ======================================
                BOTONES DE CONTACTO
            ====================================== */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                w-full
                justify-center
                lg:justify-end
              "
            >
              {/* UBICACIÓN */}

              <motion.a
                variants={slideRight}
                href="https://maps.google.com/?q=Cl.115%20%2352-43%20Bogota"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white
                  rounded-2xl
                  p-4
                  min-w-[240px]
                  hover:scale-105
                  transition
                "
              >
                <div className="flex gap-3 items-start">
                  <i className="bi bi-geo-alt-fill text-[#5B21B6] text-2xl"></i>

                  <div>
                    <p className="text-xs text-gray-500">
                      Visítanos
                    </p>

                    <p className="font-semibold text-gray-800">
                      Cl. 115 #52-43
                    </p>

                    <p className="text-gray-600">
                      Bogotá
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* WHATSAPP */}

              <motion.a
                variants={slideRight}
                href="https://wa.me/573203446611"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white
                  rounded-2xl
                  p-4
                  min-w-[240px]
                  hover:scale-105
                  transition
                "
              >
                <div className="flex gap-3 items-start">
                  <i className="bi bi-whatsapp text-[#5B21B6] text-2xl"></i>

                  <div>
                    <p className="text-xs text-gray-500">
                      Más información
                    </p>

                    <p className="font-semibold text-gray-800">
                      320 344 6611
                    </p>

                    <p className="font-semibold text-gray-800">
                      321 325 1713
                    </p>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* ==================================================
            PERRO (ÚLTIMO ELEMENTO)

            CAMBIAR TAMAÑO:

            w-[260px]
            sm:w-[350px]
            lg:w-[500px]

            CAMBIAR POSICIÓN:

            bottom-0
            left-1/2

            MÁS A LA DERECHA:
            lg:left-[42%]

            MÁS A LA IZQUIERDA:
            lg:left-[58%]

            MÁS ARRIBA:
            lg:bottom-[20px]

            MÁS ABAJO:
            lg:bottom-[-20px]
        ================================================== */}

        <motion.img
          variants={fadeUp}
          src={PerroImg}
          alt="Mascota feliz"
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            lg:left-[22%]
            lg:bottom-[-20px]

            w-[160px]
            sm:w-[250px]
            lg:left-[28%]

            z-30
            pointer-events-none
          "
        />
      </motion.div>
    </section>
  );
};

export default Banner;