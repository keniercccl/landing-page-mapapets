import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Mascotas reunidas con sus familias",
  },
  {
    value: 15,
    suffix: "+",
    label: "Países de destino",
  },
  {
    value: 300,
    suffix: "+",
    label: "Procesos exitosos",
  },
];

const StatsSection = () => {
  return (
    <section className="mt-16">
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        "
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-6
              text-center
            "
          >
            <div
              className="
                text-4xl
                lg:text-5xl
                font-black
                text-[#5B21B6]
              "
            >
              <CountUp
                end={item.value}
                duration={2}
                suffix={item.suffix}
              />
            </div>

            <p
              className="
                mt-3
                text-gray-600
                font-medium
              "
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
