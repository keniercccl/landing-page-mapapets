import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import WhatsappButton from "../WhatsappSelector/WhatsappButton";

import {
  fadeUp,
  slideLeft,
  slideRight,
} from "../../utility/animation";

import ImagenFamilia from "../../assets/familia_con_mascota.jpg";

const SeccionMensaje = () => {
  return (
    <section
      id="mensaje"
      className="
        py-16
        md:py-24
        bg-[#FAF8FF]
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
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
          "
        >
          {/* =====================================
              COLUMNA IZQUIERDA
          ===================================== */}

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white
                shadow-sm
                text-[#5B21B6]
                font-semibold
                mb-6
              "
            >
              ❤️ Viajar juntos sí es posible
            </div>

            {/* TITULO */}

            <h2
              className="
                text-4xl
                md:text-5xl
                font-black
                text-[#2B145A]
                leading-tight
              "
            >
              Tu mascota no es equipaje.
              <br />
              Es parte de tu familia.
            </h2>

            {/* TEXTO */}

            <p
              className="
                mt-6
                text-gray-700
                text-lg
                leading-relaxed
              "
            >
              Sabemos que viajar con una mascota puede
              generar dudas, trámites y preocupaciones.
              Por eso en Mapapets te acompañamos durante
              todo el proceso para que tu compañero
              viaje de forma segura, legal y con el
              bienestar que merece.
            </p>

            <p
              className="
                mt-4
                text-gray-700
                text-lg
                leading-relaxed
              "
            >
              Desde la documentación sanitaria hasta
              los requisitos específicos del país de
              destino, nuestro equipo te guía paso a
              paso para que puedas enfocarte en tu
              nueva aventura.
            </p>

            {/* =====================================
                ESTADÍSTICAS
            ===================================== */}

            <div
              className="
                mt-10
                grid
                grid-cols-3
                gap-6
              "
            >
              {/* MASCOTAS */}

              <div>
                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    text-[#5B21B6]
                  "
                >
                  +
                  <CountUp
                    end={500}
                    duration={2}
                  />
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-600
                    mt-1
                  "
                >
                  Mascotas asesoradas
                </p>
              </div>

              {/* DESTINOS */}

              <div>
                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    text-[#5B21B6]
                  "
                >
                  +
                  <CountUp
                    end={30}
                    duration={2}
                  />
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-600
                    mt-1
                  "
                >
                  Países de destino
                </p>
              </div>

              {/* EXPERIENCIA */}

              <div>
                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    text-[#5B21B6]
                  "
                >
                  +
                  <CountUp
                    end={6}
                    duration={2}
                  />
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-600
                    mt-1
                  "
                >
                  Años de experiencia
                </p>
              </div>
            </div>

            {/* =====================================
                CTA
            ===================================== */}

            <WhatsappButton
              className="
                          bg-[#5B21B6]
                          text-white
                          px-8
                          py-4
                          rounded-2xl
                          hover:scale-105
                          transition
                          inline-flex
                          items-center
                          justify-center
                          mt-10
                          font-semibold
                          shadow-lg
                          "
            >
              Hablar con un asesor
            </WhatsappButton>
          </motion.div>

          {/* =====================================
              COLUMNA DERECHA
          ===================================== */}

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="
                overflow-hidden
                rounded-[32px]
                shadow-2xl
              "
            >
              <img
                src={ImagenFamilia}
                alt="Familia viajando con su mascota"
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                  aspect-[4/3]
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeccionMensaje;