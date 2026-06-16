import React from "react";
import { motion } from "framer-motion";

import EstatuaImg from "../../assets/estatua_libertad_1.jpg";
import PerroImg from "../../assets/banner-perro.png";
import LogoImg from "../../assets/logo_nuevo_1.png";

import WhatsappButton from "../WhatsappSelector/WhatsappButton";

import {
  fadeUp,
  slideLeft,
  slideRight,
} from "../../utility/animation";

const Banner = () => {
  return (
    <section
      id="banner-internacional"
      className="
        w-full
        px-4
        my-8
        sm:my-12
      "
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          lg:rounded-[48px]
          min-h-[620px]
          lg:min-h-[560px]
          shadow-2xl
        "
      >
        {/* Fondo */}

        <motion.img
          variants={fadeUp}
          src={EstatuaImg}
          alt="Destino internacional"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-l
            from-[#2B145A]/95
            via-[#5B21B6]/90
            to-[#5B21B6]/55
          "
        />

        {/* Contenido */}

        <div
          className="
            relative
            z-20
            h-full

            grid
            grid-cols-1
            lg:grid-cols-2

            gap-10

            px-6
            sm:px-10
            lg:px-16

            py-12
          "
        >
          {/* IZQUIERDA */}

          <motion.div
            variants={slideLeft}
            className="
              flex
              flex-col
              justify-center

              text-center
              lg:text-left
            "
          >
            <div
              className="
                inline-flex
                self-center
                lg:self-start

                px-4
                py-2

                rounded-full

                bg-white/15
                backdrop-blur

                text-white
                font-semibold
                text-sm
              "
            >
              🌎 Transporte internacional de mascotas
            </div>

            <h2
              className="
                mt-6

                text-white
                font-black

                text-4xl
                sm:text-5xl
                lg:text-6xl

                leading-none
              "
            >
              Conectamos familias y mascotas
            </h2>

            <h3
              className="
                mt-2

                text-[#C4FF3B]
                font-black

                text-4xl
                sm:text-5xl
                lg:text-6xl

                leading-none
              "
            >
              en cualquier parte del mundo
            </h3>

            <p
              className="
                mt-6

                text-white/95

                text-lg
                md:text-xl

                max-w-xl
              "
            >
              Gestionamos documentación,
              coordinación internacional,
              requisitos sanitarios y logística
              para que tu mascota viaje segura
              junto a su familia.
            </p>

            <div
              className="
                mt-8

                flex
                flex-wrap

                gap-3

                justify-center
                lg:justify-start
              "
            >
              <span className="bg-white/15 backdrop-blur text-white px-4 py-2 rounded-full">
                ✈️ Vuelos internacionales
              </span>

              <span className="bg-white/15 backdrop-blur text-white px-4 py-2 rounded-full">
                📄 Gestión documental
              </span>

              <span className="bg-white/15 backdrop-blur text-white px-4 py-2 rounded-full">
                🐶 Acompañamiento experto
              </span>
            </div>
          </motion.div>

          {/* DERECHA */}

          <motion.div
            variants={slideRight}
            className="
              flex
              flex-col
              items-center
              lg:items-end
              justify-center
            "
          >
            <img
              src={LogoImg}
              alt="Mapapets"
              className="
                w-32
                sm:w-40
                lg:w-52
                h-auto
              "
            />

            <p
              className="
                mt-4

                text-white
                text-center
                lg:text-right

                text-lg
                sm:text-xl

                max-w-md
              "
            >
              Más que un traslado,
              ayudamos a mantener unidas
              a las familias.
            </p>

            <div className="mt-8">
              <WhatsappButton
                className="
                  bg-[#C4FF3B]
                  text-[#2B145A]

                  px-8
                  py-4

                  rounded-2xl

                  font-bold

                  shadow-xl

                  hover:scale-105
                  transition
                "
              >
                Solicitar asesoría
              </WhatsappButton>
            </div>
          </motion.div>
        </div>

        {/* Mascota */}

        <motion.img
          variants={fadeUp}
          src={PerroImg}
          alt="Mascota feliz"
          className="
            absolute

            bottom-0
            left-1/2
            -translate-x-1/2

            lg:left-[30%]

            w-[170px]
            sm:w-[240px]
            lg:w-[320px]

            z-30
            pointer-events-none
          "
        />
      </motion.div>
    </section>
  );
};

export default Banner;