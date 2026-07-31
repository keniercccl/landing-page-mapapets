import { AnimatePresence, motion } from "framer-motion";

const ServiceModal = ({
  service,
  isOpen,
  onClose,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              z-[999]
            "
          />

          {/* MODAL */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              inset-0
              z-[1000]

              flex
              items-center
              justify-center

              p-4
            "
          >
            <div
              className="
                relative

                w-full
                max-w-[520px]

                h-[90vh]

                rounded-[36px]
                overflow-hidden

                shadow-2xl
              "
            >
              {/* IMAGEN */}

              <img
                src={service.image}
                alt={service.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* DEGRADADO */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#2B145A]
                  via-[#2B145A]/95
                  via-40%
                  to-transparent
                "
              />

              {/* BOTÓN CERRAR */}

              <button
                onClick={onClose}
                className="
                  absolute
                  top-4
                  right-4

                  h-12
                  w-12

                  rounded-full

                  bg-white/20
                  backdrop-blur

                  text-white
                  text-2xl

                  z-30
                "
              >
                ×
              </button>

              {/* CONTENIDO */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0

                  p-6
                  sm:p-8

                  text-white

                  overflow-y-auto
                  max-h-[70%]
                "
              >
                {/* BADGE */}

                <span
                  className="
                    inline-block

                    bg-[#A3E635]
                    text-[#2B145A]

                    px-4
                    py-2

                    rounded-full

                    font-bold
                    text-sm
                  "
                >
                  Servicio Mapapets
                </span>

                {/* TITULO */}

                <h2
                  className="
                    mt-4

                    text-3xl
                    md:text-4xl

                    font-black
                    leading-tight
                  "
                >
                  {service.title}
                </h2>

                {/* DESCRIPCION */}

                <p
                  className="
                    mt-4

                    text-white/90
                    leading-relaxed
                  "
                >
                  {service.description}
                </p>

                {/* BENEFICIOS */}

                <div
                  className="
                    mt-6
                    space-y-3
                  "
                >
                  {service.benefits?.map(
                    (benefit, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          gap-3
                          items-start
                        "
                      >
                        <span>
                          ✓
                        </span>

                        <span>
                          {benefit}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* CTA */}

                <a
                  href={
                    import.meta.env
                      .VITE_GOOGLE_FORM
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8

                    w-full

                    bg-[#A3E635]
                    text-[#2B145A]

                    font-black

                    py-4

                    rounded-2xl

                    flex
                    items-center
                    justify-center

                    hover:scale-[1.02]
                    transition
                  "
                >
                  Solicitar asesoría
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;