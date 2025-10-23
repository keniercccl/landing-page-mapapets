/* import React from "react";

const SERVICES = [
  { id: 1, title: "Trámite ICA en Colombia", desc: "Asesoría de documentos y requisitos para tu mascota." },
  { id: 2, title: "Certificado Veterinario", desc: "Coordinación con aerolínea y veterinario certificado." },
  { id: 3, title: "Kennel y chequeo pre-vuelo", desc: "Guía de kennels y chequeo pre-vuelo." },
  { id: 4, title: "Acompañamiento el día del vuelo", desc: "Seguimiento y soporte el día del viaje." },
  { id: 5, title: "Permisos e impuestos", desc: "Gestión según el destino de tu viaje." },
  { id: 6, title: "Kit viajero", desc: "Entrega de kit viajero para tu mascota." },
];

export default function ServiciosSection({
    bgImage   = "/assets/1700x630.jpg",      // imagen de fondo
  leftImage = "/assets/pets-luggage.png",  // ilustración lateral (PNG)
}) {
  return (
    <section id="servicios" className="w-full my-12 px-4">
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Capa morada suave para contraste del texto */
  /*       <div className="absolute inset-0 bg-[#5b23a6]/70" /> */

/*         {/* Contenido */
/*         <div className="relative z-10 mx-auto max-w-6xl py-10 sm:py-12 md:py-16"> */

          {/* Título real (visible en móvil también) */}
       /*    <h2 className="text-white font-extrabold leading-tight
                         text-2xl sm:text-3xl md:text-4xl">
            Servicios que ofrecemos
          </h2>

          {/* Título decorativo enorme – solo en pantallas md+ */
      /*     <div
            aria-hidden="true"
            className="hidden md:block absolute -top-2 left-4 z-0 select-none pointer-events-none
                       text-white/20 font-extrabold leading-[0.9]
                       text-[72px] lg:text-[96px] xl:text-[120px]"
          >
            Servicios<br />que<br />ofrecemos:
          </div>  */

          {/* Ilustración lateral – solo md+ */}
    /*       <img
            src={leftImage}
            alt=""
            className="hidden md:block absolute -left-10 bottom-0 w-64 lg:w-72 object-contain pointer-events-none select-none"
            aria-hidden="true"
          /> */

          {/* Grid de tarjetas */}
/*           <div className="relative mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white/95 backdrop-blur rounded-2xl shadow-md ring-1 ring-black/5 p-5
                           transition hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center
                                  rounded-full bg-[#6B21A8]/10 text-[#6B21A8]">
                    {/* ícono simple de documento *
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                  </div>

                  <h3 className="text-[#2a1154] font-bold text-sm sm:text-base">
                    {s.title}
                  </h3>
                </div>

                <p className="mt-3 text-[#2a1154]/80 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div> 
      </div>
    </section>
  );
} */
