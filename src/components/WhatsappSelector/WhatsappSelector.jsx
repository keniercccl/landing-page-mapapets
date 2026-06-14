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
          {/* =====================================
              OVERLAY
          ===================================== */}

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

          {/* =====================================
              MODAL
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              left-1/3
              top-1/4
              -translate-x-1/2
              -translate-y-1/2

              w-[32%]
              max-w-lg

              bg-white
              rounded-3xl
              shadow-2xl

              z-[9999]
              overflow-hidden
            "
          >
            {/* HEADER */}

            <div
              className="
                flex
                justify-between
                items-center
                px-6
                py-5
                border-b
              "
            >
              <div>
                <h3
                  className="
                    text-2xl
                    font-black
                    text-[#2B145A]
                  "
                >
                  Habla con nuestro equipo
                </h3>

                <p
                  className="
                    text-gray-500
                    mt-1
                  "
                >
                  Selecciona una asesora
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  w-10
                  h-10
                  rounded-full
                  hover:bg-gray-100
                  transition
                  text-xl
                "
              >
                ✕
              </button>
            </div>

            {/* LISTADO */}

            <div
              className="
                p-6
                space-y-5
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

                    p-5

                    rounded-2xl
                    border

                    hover:border-[#5B21B6]
                    hover:bg-purple-50

                    transition

                    text-left
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    {/* AVATAR */}

                    <div
                      className="
                        w-14
                        h-14

                        rounded-full

                        bg-[#5B21B6]
                        text-white

                        flex
                        items-center
                        justify-center

                        font-bold
                        text-xl
                      "
                    >
                      {agent.name.charAt(0)}
                    </div>

                    {/* INFO */}

                    <div>
                      <h4
                        className="
                          font-bold
                          text-lg
                          text-[#2B145A]
                        "
                      >
                        {agent.name}
                      </h4>

                      <p
                        className="
                          text-gray-500
                          text-sm
                        "
                      >
                        {agent.role}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WhatsappSelector;