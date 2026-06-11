import React from "react";
import { motion } from "framer-motion";

const PhotoCard = ({ photo, isMobile, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-4xl
          shadow-xl
          bg-white
        "
      >
        {/* FOTO */}

        <img
          src={photo.image}
          alt={photo.title}
          onClick={onClick}
          loading="lazy"
          className={`w-full object-cover cursor-pointer transition hover:scale-[1.02]
            ${isMobile ? "aspect-[4/5]" : "aspect-[16/9]"}
          `}
        />

        {/* OVERLAY */}

        <div
          onClick={onClick}
          className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
              pointer-events-none
            "
        />

        {/* TEXTO */}

        <div
          className="
    absolute
    bottom-0
    left-0
    right-0
    p-4
    md:p-6
    text-white
    pointer-events-none
  "
        >
          <h3
            className="
              font-bold
              text-xl
              md:text-2xl
            "
          >
            {photo.title}
          </h3>

          {!isMobile && (
            <p
              className="
                mt-2
                text-sm
                md:text-base
                text-white/90
              "
            >
              {photo.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoCard;
