import React from "react";

// Aquí defines los servicios a mostrar
const SERVICES = [
  {
    id: 1,
    title: "Trámite Can Contenido",
    desc: "Asesoría de documentos y requisitos para tu mascota.",
  },
  {
    id: 2,
    title: "Trámite Can Contenido",
    desc: "Coordinación con aerolínea y veterinario certificado.",
  },
  {
    id: 3,
    title: "Trámite Can Contenido",
    desc: "Guía de kennels y chequeo pre-vuelo.",
  },
  {
    id: 4,
    title: "Trámite Can Contenido",
    desc: "Seguimiento y soporte el día del viaje.",
  },
  {
    id: 5,
    title: "Trámite Can Contenido",
    desc: "Gestión de permisos e impuestos según destino.",
  },
  {
    id: 6,
    title: "Trámite Can Contenido",
    desc: "Entrega de kit viajero para tu mascota.",
  },
];

export default function ServiciosSection({
  bgImage = "/assets/1700x630.jpg",   //  Fondo Coliseo
  /* leftImage = "/assets/pets-luggage.png",    */ //  Mascotas + maleta + avión (PNG con transparencia)
}) {
  return (
    <section id="servicios" className="scroll-mt-24">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Panel principal */}
        <div className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden min-h-[520px] md:min-h-[620px]">
          {/* Imagen de fondo */}
          <img
            src={bgImage}
            alt="Fondo Coliseo"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Capa morada encima */}
          <div className="absolute inset-0 bg-[#6B21A8]/75" />

          {/* Contenido */}
          <div className="relative z-10 grid grid-cols-12 gap-4 md:gap-6 h-full">
            {/* IZQUIERDA */}
            <div className="col-span-12 lg:col-span-7 px-6 sm:px-8 py-8 sm:py-10 flex flex-col">
              <h2 className="text-white text-4xl sm:text-5xl md:text-[52px] leading-[1.05] font-black drop-shadow-md">
                Servicios que <br className="hidden sm:block" /> ofrecemos:
              </h2>

              {/* Imagen decorativa (mascotas+maleta+avión) */}
           {/*    <div className="relative mt-auto">
                <img
                  src={leftImage}
                  alt="Mascotas viajeras con maleta"
                  className="w-[86%] sm:w-[88%] md:w-[92%] max-w-[720px] select-none pointer-events-none drop-shadow-xl"
                />
              </div> */}
            </div>

            {/* DERECHA: tarjetas 3x2 */}
            <div className="col-span-12 lg:col-span-5 py-8 sm:py-10 pr-6 sm:pr-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 content-center">
              {SERVICES.map((s) => (
                <article
                  key={s.id}
                  className="bg-white rounded-2xl p-4 shadow-xl ring-1 ring-black/5"
                >
                  {/* Icono morado */}
                  <div className="h-10 w-10 rounded-xl bg-[#6B21A8] text-white grid place-items-center mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  </div>

                  {/* Franja morada con título */}
                  <div className="bg-[#6B21A8] text-white rounded-lg px-3 py-2 font-extrabold text-[13px] leading-none inline-block">
                    {s.title}
                  </div>

                  {/* Descripción */}
                  <p className="text-[12.5px] text-[#2a1154] opacity-80 mt-2 leading-snug">
                    {s.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Espacio al final */}
      <div className="h-10 sm:h-12" />
    </section>
  );
}
