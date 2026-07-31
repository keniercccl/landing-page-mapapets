
const LegalHeader = ({
  title,
  subtitle,
  updatedAt,
}) => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6EEFF]
        rounded-b-[48px]
        md:rounded-b-[72px]
      "
    >
      {/* Decoración de fondo */}
      <div
        className="
          absolute
          top-0
          right-0
          w-72
          h-72
          bg-[#A855F7]/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-6
          md:px-8
          py-16
          md:py-24
        "
      >
        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            rounded-full
            bg-white
            px-4
            py-2
            text-sm
            font-semibold
            text-[#5B21B6]
            shadow-sm
          "
        >
          📄 Información Legal
        </div>

        {/* Título */}
        <h1
          className="
            mt-6
            text-[#2B145A]
            font-black
            leading-tight

            text-4xl
            sm:text-5xl
            md:text-6xl
          "
        >
          {title}
        </h1>

        {/* Subtítulo */}
        {subtitle && (
          <p
            className="
              mt-6
              max-w-3xl
              text-gray-700
              leading-relaxed

              text-lg
              md:text-xl
            "
          >
            {subtitle}
          </p>
        )}

        {/* Fecha */}
        {updatedAt && (
          <div
            className="
              mt-8
              inline-flex
              items-center
              rounded-xl
              bg-white
              px-4
              py-3
              shadow-sm
              border
              border-[#5B21B6]/10
            "
          >
            <span className="text-sm text-gray-500">
              Última actualización:
            </span>

            <span
              className="
                ml-2
                font-semibold
                text-[#5B21B6]
              "
            >
              {updatedAt}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default LegalHeader;