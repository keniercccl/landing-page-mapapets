// src/components/WhatsappSelector/WhatsappSelector.jsx

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { whatsappAgents } from "./whatsappData";

const WhatsappSelector = ({
  isOpen,
  onClose,
}) => {
  const openWhatsapp = (phone) => {
    window.open(
      `https://wa.me/${phone}`,
      "_blank"
    );

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ==========================================
              OVERLAY
          ========================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              bg-black/50
              backdrop-blur-sm
              z-[9998]
            "
          />

          {/* ==========================================
              MODAL CONTAINER
          ========================================== */}

          <div
            className="
              fixed
              inset-0

              flex
              items-center
              justify-center

              p-4

              z-[9999]
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                w-[92vw]
                max-w-[560px]

                max-h-[85vh]

                bg-white
                rounded-3xl

                shadow-[0_20px_80px_rgba(0,0,0,0.25)]

                overflow-hidden
              "
            >
              {/* ==========================================
                  HEADER
              ========================================== */}

              <div
                className="
                  flex
                  items-start
                  justify-between

                  gap-4

                  px-6
                  py-5

                  border-b
                  border-gray-100
                "
              >
                <div>
                  <h3
                    className="
                      text-2xl
                      md:text-3xl

                      font-black
                      text-[#2B145A]

                      leading-tight
                    "
                  >
                    Habla con nuestro equipo
                  </h3>

                  <p
                    className="
                      mt-2
                      text-gray-500
                    "
                  >
                    Selecciona una asesora para continuar por WhatsApp.
                  </p>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="
                    w-10
                    h-10

                    rounded-full

                    flex
                    items-center
                    justify-center

                    hover:bg-gray-100

                    transition
                  "
                >
                  ✕
                </button>
              </div>

              {/* ==========================================
                  LISTADO
              ========================================== */}

              <div
                className="
                  p-5

                  overflow-y-auto

                  max-h-[60vh]

                  space-y-4
                "
              >
                {whatsappAgents.map((agent) => (
                  <button
                    key={agent.id}
                    onClick={() =>
                      openWhatsapp(agent.phone)
                    }
                    className="
                      w-full

                      text-left

                      rounded-2xl

                      border
                      border-gray-200

                      p-4

                      hover:border-[#5B21B6]
                      hover:bg-purple-50

                      transition-all
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >
                      {/* ======================================
                          AVATAR
                      ====================================== */}

                      <div
                        className="
                          shrink-0

                          w-14
                          h-14

                          rounded-full

                          bg-[#5B21B6]

                          text-white
                          font-bold

                          flex
                          items-center
                          justify-center

                          text-xl
                        "
                      >
                        {agent.name.charAt(0)}
                      </div>

                      {/* ======================================
                          INFO
                      ====================================== */}

                      <div className="min-w-0 flex-1">
                        <h4
                          className="
                            font-bold
                            text-[#2B145A]

                            text-lg

                            truncate
                          "
                        >
                          {agent.name}
                        </h4>

                        <p
                          className="
                            text-gray-600
                            text-sm

                            leading-relaxed
                          "
                        >
                          {agent.role}
                        </p>

                        <div
                          className="
                            mt-2

                            flex
                            items-center
                            gap-2

                            text-xs
                            text-green-600
                            font-medium
                          "
                        >
                          <span
                            className="
                              w-2
                              h-2
                              rounded-full
                              bg-green-500
                            "
                          />

                          Disponible hoy
                        </div>
                      </div>

                      {/* ======================================
                          ICONO
                      ====================================== */}

                      <div
                        className="
                          hidden
                          sm:flex

                          items-center
                          justify-center

                          text-[#5B21B6]
                        "
                      >
                        →
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* ==========================================
                  FOOTER
              ========================================== */}

              <div
                className="
                  px-6
                  py-4

                  border-t
                  border-gray-100

                  bg-gray-50
                "
              >
                <p
                  className="
                    text-xs
                    text-gray-500
                    text-center
                  "
                >
                  Te responderemos por WhatsApp lo antes posible.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WhatsappSelector;