import React from "react";

import { motion } from "framer-motion";

import { useFlickrPhotos } from "../../hooks/useFlickrPhotos";

import PhotoCarousel from "./PhotoCarousel";
import StatsSection from "./StatsSection";

const NuestraHuella = () => {
  const {
    photos,
    loading,
    error,
    isMobile,
  } = useFlickrPhotos();

  return (
    <section
      id="nuestra-huella"
      className="
        py-16
        lg:py-24
        px-4
      "
    >
      <div className="container mx-auto">

        {/* =====================================
            ENCABEZADO
        ===================================== */}

        <motion.div
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
          }}
          className="
            text-center
            mb-12
          "
        >
          <h2
            className="
              text-4xl
              lg:text-5xl
              font-black
              text-[#5B21B6]
            "
          >
            Nuestra Huella 🐾
          </h2>

          <p
            className="
              mt-4
              text-lg
              lg:text-xl
              text-gray-600
              max-w-3xl
              mx-auto
            "
          >
            Historias reales de mascotas que hoy
            disfrutan junto a sus familias
            alrededor del mundo.
          </p>
        </motion.div>

        {/* =====================================
            ESTADO DE CARGA
        ===================================== */}

        {loading && (
          <div
            className="
              text-center
              py-20
            "
          >
            <div
              className="
                spinner-border
                text-primary
              "
            />
          </div>
        )}

        {/* =====================================
            ERROR
        ===================================== */}

        {error && (
          <div
            className="
              alert
              alert-danger
              text-center
            "
          >
            No fue posible cargar las fotos.
          </div>
        )}

        {/* =====================================
            CAROUSEL
        ===================================== */}

        {!loading &&
          !error &&
          photos.length > 0 && (
            <PhotoCarousel
              photos={photos}
              isMobile={isMobile}
            />
          )}

        {/* =====================================
            ESTADÍSTICAS
        ===================================== */}

        <StatsSection />

        {/* =====================================
            CTA FINAL
        ===================================== */}

        <motion.div
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
          }}
          className="
            text-center
            mt-20
          "
        >
          <h3
            className="
              text-3xl
              lg:text-4xl
              font-bold
              text-gray-800
            "
          >
            ¿Tu mascota será la próxima? 🐾
          </h3>

          <p
            className="
              mt-4
              text-gray-600
              max-w-xl
              mx-auto
            "
          >
            Te acompañamos en cada paso
            para que tu mascota viaje de forma
            segura junto a su familia.
          </p>

          <a
            href="https://wa.me/573203446611"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-8
              px-8
              py-4
              rounded-full
              bg-[#5B21B6]
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              transition
            "
          >
            Solicitar asesoría
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default NuestraHuella;