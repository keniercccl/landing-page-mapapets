
export default function FooterMap({
  address = "Calle 115 #52-43, Bogotá, Colombia",
  mapEmbedSrc,
  mapsUrl,
}) {
  return (
    <div
      className="
        h-full
        flex
        flex-col
        gap-4
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
          Nuestra ubicación
        </h3>

        <p
          className="
            mt-2
            text-white/80
            text-sm
            leading-relaxed
          "
        >
          Visítanos o agenda una reunión para
          ayudarte con el proceso de viaje de tu mascota.
        </p>
      </div>

      {/* MAPA */}

      <div
        className="
          overflow-hidden
          rounded-[24px]
          border
          border-white/10
          bg-white
          shadow-xl
        "
      >
        <iframe
          src={mapEmbedSrc}
          title="Ubicación Mapapets"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="
            w-full
            h-[260px]
            sm:h-[320px]
            lg:h-[380px]
          "
        />
      </div>

      {/* DIRECCIÓN */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
        "
      >
        <div>
          <p
            className="
              text-white
              font-semibold
            "
          >
            📍 Dirección
          </p>

          <p
            className="
              text-white/80
              text-sm
            "
          >
            {address}
          </p>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center

            px-5
            py-3

            rounded-xl

            bg-[#B4F227]
            text-[#2B145A]

            font-bold

            hover:scale-105
            transition
          "
        >
          Cómo llegar
        </a>
      </div>
    </div>
  );
}