import WhatsappButton from "../WhatsappSelector/WhatsappButton";

const FooterCTA = () => {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-gradient-to-r
        from-[#5B21B6]
        to-[#7C3AED]

        rounded-[32px]

        px-6
        sm:px-10
        lg:px-16

        py-12
        md:py-16

        text-white
      "
    >
      {/* Decoración */}

      <div
        className="
          absolute
          -top-10
          -right-10

          w-40
          h-40

          rounded-full
          bg-white/10

          blur-2xl
        "
      />

      <div
        className="
          absolute
          -bottom-10
          -left-10

          w-48
          h-48

          rounded-full
          bg-white/10

          blur-2xl
        "
      />

      {/* Contenido */}

      <div
        className="
          relative
          z-10

          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-8
        "
      >
        {/* Texto */}

        <div className="max-w-2xl">
          <span
            className="
              inline-flex
              items-center

              px-4
              py-2

              rounded-full

              bg-white/15

              text-sm
              font-semibold

              mb-5
            "
          >
            🐾 Tu mascota merece viajar contigo
          </span>

          <h2
            className="
              text-3xl
              md:text-5xl

              font-black
              leading-tight
            "
          >
            Miles de familias ya han confiado en
            Mapapets.
          </h2>

          <p
            className="
              mt-5

              text-base
              md:text-lg

              text-white/90

              leading-relaxed
            "
          >
            Te acompañamos durante todo el proceso
            para que tu mascota viaje segura,
            cumpliendo cada requisito sanitario y
            documental sin complicaciones.
          </p>
        </div>

        {/* CTA */}

        <div
          className="
            flex
            flex-col

            items-center
            lg:items-end

            gap-4
          "
        >
          <WhatsappButton
            className="
              bg-[#B4F227]
              text-[#1F1F1F]

              px-8
              py-4

              rounded-2xl

              font-bold

              hover:scale-105
              transition

              shadow-xl
            "
          >
            Solicitar asesoría
          </WhatsappButton>

          <p
            className="
              text-sm
              text-white/80
            "
          >
            Respuesta rápida por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;