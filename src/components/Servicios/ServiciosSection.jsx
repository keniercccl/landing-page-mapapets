import React from "react";

const SERVICES = [
  { id: 1, title: "Trámite Can Contenido", desc: "Asesoría de documentos y requisitos para tu mascota." },
  { id: 2, title: "Trámite Can Contenido", desc: "Coordinación con aerolínea y veterinario certificado." },
  { id: 3, title: "Trámite Can Contenido", desc: "Guía de kennels y chequeo pre-vuelo." },
  { id: 4, title: "Trámite Can Contenido", desc: "Seguimiento y soporte el día del viaje." },
  { id: 5, title: "Trámite Can Contenido", desc: "Gestión de permisos e impuestos según destino." },
  { id: 6, title: "Trámite Can Contenido", desc: "Entrega de kit viajero para tu mascota." },
];

export default function ServiciosSection({
  bgImage   = "/assets/1700x630.jpg",      // Fondo Coliseo
  leftImage = "/assets/pets-luggage.png",  // PNG con transparencia (perro+gato+maleta+avión)
}) {
  return (
    <section id="servicios"  className="w-full my-12 px-4">
  <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
    <div className="relative overflow-hidden
                    min-h-[70vh] sm:min-h-[80vh] md:min-h-screen
                    rounded-t-[28px] sm:rounded-t-[36px] md:rounded-t-[44px]
                    rounded-b-[72px] sm:rounded-b-[120px] md:rounded-b-[180px]">

      {/* Fondo + overlay */}
      <img src={bgImage} alt="Fondo Coliseo"
           className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-[#6B21A8]/55 sm:bg-[#6B21A8]/60" />

      {/* Mascotas */}
      <img
        src={leftImage}
        alt=""
        className="hidden sm:block absolute bottom-0 left-0 z-10 w-[52%] max-w-[680px] select-none pointer-events-none"
      />

      {/* CONTENIDO centrado como el banner */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 min-h-[600px] py-8 sm:py-12">
          {/* Título */}
          <div className="col-span-12 lg:col-span-6 pl-2 sm:pl-8 flex flex-col">
            <h2 className="text-white font-black drop-shadow-md text-4xl sm:text-5xl md:text-[56px] leading-[1.05]">
              Servicios que <br className="hidden sm:block" /> ofrecemos:
            </h2>
          </div>

          {/* Tarjetas 3×2 */}
          <div className="col-span-12 lg:col-span-6 pr-2 sm:pr-8 grid grid-cols-2 gap-5 content-center justify-items-end">
            {SERVICES.map((s) => (
              <article key={s.id}
                       className="w-[230px] sm:w-[240px] bg-white rounded-2xl p-3 shadow-xl ring-1 ring-black/5">
                <div className="h-9 w-9 rounded-xl bg-[#6B21A8] text-white grid place-items-center mb-3">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                </div>
                <div className="bg-[#6B21A8] text-white rounded-md px-2.5 py-1.5 font-extrabold text-[12px] leading-none inline-block">
                  {s.title}
                </div>
                <p className="mt-2 text-[12px] leading-snug text-[#2a1154] opacity-80">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

