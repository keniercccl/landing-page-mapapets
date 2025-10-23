import React from "react";
import Logo from "../../assets/Logo.png";

export default function Footer({
  phone1 = "320 344 6611",
  phone2 = "321 325 1713",
  address = "Calle 115 #52-43, Bogotá",
  mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.841968423278!2d-74.079!3d4.613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNC42MTMsIC03NC4wNzk!5e0!3m2!1ses-419!2sco!4v1700000000000",
}) {
  return (
    <footer className="w-full bg-[#5c1cb8] text-white pt-3 pb-14 rounded-t-[36px]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Layout principal: mapa a la izquierda, columna derecha */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
      
      {/* Mapa (izquierda) */}
      <div className="md:col-span-6">
        {/* 👇 bajamos el bloque del mapa */}
        <div className="rounded-xl overflow-hidden ring-1 ring-black/10 shadow-md bg-white mt-4 md:mt-8 lg:mt-12">
          <div className="aspect-[16/10] w-full">
            <iframe
              src={mapEmbedSrc}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              title="Ubicación Mapapets"
            />
          </div>
        </div>
      </div>

      {/* Columna derecha: “¿Tienes dudas?” + burbujas */}
      {/* 👇 la dejamos centrada verticalmente, sin márgenes extra grandes */}
      <div className="md:col-span-6 flex flex-col justify-center">
        <div className="mt-4 md:mt-6">
          <p className="font-semibold mb-2">¿Tienes dudas?</p>

          <div className="flex flex-wrap gap-2 mb-3">
            <Chip>
              <span className="inline-flex size-4 items-center justify-center rounded-full bg-red-500/90 text-[10px] mr-2">☎</span>
              {phone1}
            </Chip>
            <Chip>
              <span className="inline-flex size-4 items-center justify-center rounded-full bg-red-500/90 text-[10px] mr-2">☎</span>
              {phone2}
            </Chip>
          </div>

          <Chip className="mb-6">
            <span className="inline-flex size-4 items-center justify-center rounded-full bg-pink-500/90 text-[10px] mr-2">📍</span>
            {address}
          </Chip>

          {/* Burbuja grande */}
          <div
            className="
              w-full rounded-[28px] bg-[#6b2acb]/35 px-6 py-5
              border border-dashed border-white/60
              shadow-[0_0_0_3px_rgba(255,255,255,0.15)_inset]
            "
          >
            <p className="text-center font-semibold leading-snug">
              ¡Nos encargamos de todo <br className="hidden sm:block" />
              para tu viaje con tu mascota!
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* LOGO inferior centrado (forzado a blanco) */}
    <div className="mt-10 flex justify-center">
      {Logo ? (
        <img
          src={Logo}
          alt="MAPAPETS"
          className="h-10 sm:h-12 object-contain filter brightness-0 invert opacity-95"
        />
      ) : (
        <span className="text-white/90 font-extrabold text-lg">MAPAPETS</span>
      )}
    </div>
  </div>
</footer>

  );
}

/* Pill reutilizable */
function Chip({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full
                  bg-white text-[#5c1cb8] font-medium text-xs
                  px-3 py-1.5 shadow ring-1 ring-black/5 ${className}`}
    >
      {children}
    </span>
  );
}
