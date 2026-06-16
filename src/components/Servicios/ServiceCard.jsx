import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({
  service,
  onOpen,
}) => {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        bg-white
        rounded-[32px]
        overflow-hidden
        shadow-xl
        w-full
      "
    >
      {/* IMAGEN */}

      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
        "
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition
            duration-500
            hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />
      </div>

      {/* CONTENIDO */}

      <div
        className="
          p-6
        "
      >
        <h3
          className="
            text-[#2B145A]
            font-black
            text-xl
            leading-tight
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-3
            text-gray-600
            text-sm
            leading-relaxed
            min-h-[72px]
          "
        >
          {service.shortDescription}
        </p>

        <button
          onClick={() => onOpen(service)}
          className="
            mt-5
            w-full

            bg-[#5B21B6]
            text-white

            py-3
            rounded-2xl

            font-semibold

            hover:opacity-90
            transition
          "
        >
          Ver más
        </button>
      </div>
    </motion.article>
  );
};

export default ServiceCard;