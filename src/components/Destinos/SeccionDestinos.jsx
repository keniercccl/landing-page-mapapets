import React from "react";
import { motion } from "framer-motion";

import { fadeUp } from "../../utility/animation";

import { destinos } from "./destinosData";

const SeccionDestinos = () => {
  return (
    <section
      id="destinos"
      className="
        py-16
        md:py-24
        px-4
      "
    >
      <div className="container mx-auto">
        {/* TITULO */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="
              text-[#5B21B6]
              font-semibold
              uppercase
              tracking-wider
            "
          >
            Destinos Internacionales
          </span>

          <h2
            className="
              mt-3
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-black
              text-[#2B145A]
            "
          >
            Tu mascota puede viajar
            <br />
            donde tú vayas
          </h2>

          <p
            className="
              mt-4
              text-gray-600
              max-w-3xl
              mx-auto
              text-lg
            "
          >
            Hemos acompañado a familias y mascotas
            en diferentes destinos alrededor del mundo,
            asegurando un viaje seguro, legal y tranquilo.
          </p>
        </motion.div>

        {/* GRID DESTINOS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-6
          "
        >
          {destinos.map((destino) => (
            <motion.div
              key={destino.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                text-center
                border
                border-purple-100
              "
            >
              <img
                src={destino.flag}
                alt={destino.country}
                className="
    w-16
    h-12
    mx-auto
    mb-4
    object-contain
  "
              />

              <h3
                className="
                  font-bold
                  text-[#2B145A]
                  text-lg
                  mb-3
                "
              >
                {destino.country}
              </h3>

              <p
                className="
                  text-sm
                  text-gray-600
                  leading-relaxed
                "
              >
                {destino.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeccionDestinos;