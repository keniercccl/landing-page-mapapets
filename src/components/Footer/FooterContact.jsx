import React from "react";

import { trackWhatsAppContact } from "../../analytics/analytics";

export default function FooterContact({
  whatsapp = "573203446611",
  phone1 = "+57 320 344 6611",
  phone2 = "+57 321 325 1713",
  email = "contacto@mapapets.com",
  schedule = "Lunes a Viernes · 8:00 AM - 6:00 PM",
}) {
  return (
    <div
      className="
        flex
        flex-col
        h-full
      "
    >
      {/* TÍTULO */}

      <div>
        <h3
          className="
            text-xl
            md:text-2xl
            font-bold
            text-white
          "
        >
          ¿Necesitas ayuda?
        </h3>

        <p
          className="
            mt-2
            text-white/80
            text-sm
            leading-relaxed
          "
        >
          Nuestro equipo puede ayudarte con
          documentación, requisitos sanitarios,
          aerolíneas y todo el proceso de viaje
          de tu mascota.
        </p>
      </div>

      {/* DATOS */}

      <div
        className="
          mt-8
          space-y-4
        "
      >
        {/* WHATSAPP */}

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          data-whatsapp-cta="true"
          onClick={() => trackWhatsAppContact("Footer contacto")}
          className="
            flex
            items-center
            gap-4

            p-4

            rounded-2xl

            bg-white/10
            backdrop-blur-sm

            border
            border-white/10

            hover:bg-white/20
            transition
          "
        >
          <div
            className="
              w-12
              h-12

              rounded-full

              bg-[#25D366]

              flex
              items-center
              justify-center

              text-white
              text-xl
            "
          >
            <i className="bi bi-whatsapp" />
          </div>

          <div>
            <p className="text-xs text-white/70">
              Escríbenos por WhatsApp
            </p>

            <p className="font-semibold text-white">
              {phone1}
            </p>
          </div>
        </a>

        {/* TELÉFONOS */}

        <div
          className="
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
          "
        >
          <div className="flex items-start gap-3">
            <i className="bi bi-telephone-fill text-white text-lg" />

            <div>
              <p className="font-semibold text-white">
                Teléfonos
              </p>

              <p className="text-white/80 text-sm mt-1">
                {phone1}
              </p>

              <p className="text-white/80 text-sm">
                {phone2}
              </p>
            </div>
          </div>
        </div>

        {/* EMAIL */}

        <div
          className="
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
          "
        >
          <div className="flex items-start gap-3">
            <i className="bi bi-envelope-fill text-white text-lg" />

            <div>
              <p className="font-semibold text-white">
                Correo electrónico
              </p>

              <p className="text-white/80 text-sm mt-1 break-all">
                {email}
              </p>
            </div>
          </div>
        </div>

        {/* HORARIO */}

        <div
          className="
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
          "
        >
          <div className="flex items-start gap-3">
            <i className="bi bi-clock-fill text-white text-lg" />

            <div>
              <p className="font-semibold text-white">
                Horario de atención
              </p>

              <p className="text-white/80 text-sm mt-1">
                {schedule}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}

      <div className="mt-8">
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          data-whatsapp-cta="true"
          onClick={() => trackWhatsAppContact("Footer CTA final")}
          className="
            inline-flex
            items-center
            justify-center

            w-full

            px-6
            py-4

            rounded-2xl

            bg-[#B4F227]
            text-[#2B145A]

            font-extrabold

            shadow-lg

            hover:scale-[1.02]
            transition
          "
        >
          Solicitar asesoría ahora
        </a>
      </div>
    </div>
  );
}