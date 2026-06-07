import React from "react";
import asesoriaImg from "../../assets/asesoria.png";
import Logo from "../../assets/Logo.png";

export default function SeccionAsesoriaCTA({
  title = "¡Reserva con tiempo y asegura el viaje de tu mascota!",
  ctaText = "Agenda tu asesoría gratuitamente ahora",
  href = "https://wa.me/3203446611",
  imgSrc = asesoriaImg,
}) {
  return (
    <section className="w-full bg-white">
      {/* barra superior morada fina */}
      <div className="h-3 w-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* fila superior: texto + pill derecha */}
        {/* fila superior: texto + pill centrados */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-3
                md:justify-center lg:justify-center">
          <p className="text-center text-[18px] sm:text-[20px] text-[#20124d]">
            {title}
          </p>

          <span className="inline-flex items-center rounded-full bg-[#B4F227]
                   px-5 py-2 text-sm font-semibold text-[#256C3D] shadow-sm">
            Cupones Disponibles
          </span>
        </div>

        {/* contenido principal */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* imagen izquierda */}
          <div className="md:col-span-5">
            <img
              src={imgSrc}
              alt="Asesoría Mapapets"
              className="w-full h-[260px] sm:h-[300px] object-cover rounded-2xl shadow"
            />
          </div>

          {/* derecha: SIN tarjeta, solo logo + botón */}
          <div className="md:col-span-7 flex flex-col items-center justify-center">
            {Logo && (
              <img
                src={Logo}
                alt="MAPAPETS"
                className="h-10 sm:h-12 object-contain mb-4"
              />
            )}

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
        inline-flex items-center justify-center
        rounded-full
        bg-[#F6EEFF]
        px-6 py-3
        text-[#1f1f1f]
        font-semibold text-sm sm:text-base
        ring-1 ring-black/10
        shadow-sm
        hover:bg-[#EEE2FF]
        transition
      "
            >
              {ctaText}
            </a>
          </div>
        </div>

      </div>

      {/* barra inferior morada fina */}
      <div className="h-3 w-full" />
    </section>
  );
}
