import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo.png";      // si ya no lo usas, puedes quitarlo
import { slideUp, slideInFromSide } from "../../utility/animation";

const Hero = () => {
  return (
    <section className="flex-1 flex items-center justify-center px-4 pb-16 sm:pb-20 md:pb-24">
      {/* Panel lila con bordes grandes */}
      <div className="w-full max-w-7xl bg-[#F6EEFF] rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-10 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Columna izquierda: títulos + CTA */}
          <div>
            {/* Logo opcional arriba */}
            {/* <motion.img variants={slideUp(0.1)} initial="initial" animate="animate" src={Logo} alt="Logo" className="h-10 mb-6" /> */}

            <motion.p
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-[#6C2BD9] font-semibold text-2xl"
            >
              Bienvenidos
            </motion.p>

            <motion.h1
              variants={slideUp(0.3)}
              initial="initial"
              animate="animate"
              className="text-[#4C1D95] font-black leading-tight
                         text-4xl sm:text-5xl md:text-6xl"
            >
              Viaja con tu <br />
              <span className="text-[#5B21B6]">Mascota</span> sin <br />
              <span className="text-[#5B21B6]">Complicaciones</span>
            </motion.h1>

            <motion.div
              variants={slideUp(0.9)}
              initial="initial"
              animate="animate"
              className="mt-8"
            >
              <a
                href={import.meta.env.VITE_GOOGLE_FORM}
                target="_blank"
                className="inline-flex items-center justify-center
                           px-6 sm:px-8 py-3 sm:py-4 rounded-full
                           bg-[#A3E635] text-[#1A1A1A] font-extrabold
                           shadow-[0_8px_0_0_rgba(0,0,0,0.08)]
                           hover:brightness-105 transition"
              >
                Quiero viajar con mi mascota
              </a>
            </motion.div>
          </div>

          {/* Columna derecha: video con borde morado y esquinas redondeadas */}
          <motion.div
            variants={slideInFromSide("right", 0.4)}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              {/* marco redondeado y borde grueso morado */}
              <div className="rounded-[24px] border-[8px] border-[#6D28D9] overflow-hidden">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/mfdbdytkvXg?rel=0&modestbranding=1"
                  title="Video introductorio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>


              {/* Botón play superpuesto */}
              <button
                aria-label="Reproducir video"
                className="absolute inset-0 m-auto h-20 w-20 rounded-full
                           bg-white/90 text-[#5B21B6] grid place-items-center
                           shadow-lg hover:scale-105 transition"
                style={{ top: "50%", transform: "translateY(-50%)", left: 0, right: 0 }}
                onClick={() => {/* abre modal o redirige a video */ }}
              >
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </button>

              {/* leyenda bajo el video */}
              <p className="mt-2 text-sm text-[#5B21B6] opacity-80 text-center">
                *video introductorio a los servicios y pasos 1 min
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;