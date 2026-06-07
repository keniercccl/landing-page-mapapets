import React from "react";

// Fondo y overlays
import bgGradient from "../../assets/bg-gradient.png";
import cloudsBottom from "../../assets/clouds-bottom.png";

// Elementos
import airplane from "../../assets/airplane.png";
import pets from "../../assets/pets-suitcase.png";
import globe from "../../assets/globe.png";

const DocIcon = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

// ✅ Tus servicios reales
const SERVICES = [
  { id: 1, title: "Trámite ICA en Colombia", desc: "Asesoría de documentos y requisitos para tu mascota." },
  { id: 2, title: "Certificado Veterinario", desc: "Coordinación con aerolínea y veterinario certificado." },
  { id: 3, title: "Kennel y chequeo pre-vuelo", desc: "Guía de kennels y chequeo pre-vuelo." },
  { id: 4, title: "Acompañamiento el día del vuelo", desc: "Seguimiento y soporte el día del viaje." },
  { id: 5, title: "Permisos e impuestos", desc: "Gestión según el destino de tu viaje." },
  { id: 6, title: "Kit viajero", desc: "Entrega de kit viajero para tu mascota." },
];

const ServiceCard = ({ title, text }) => (
  <div className="bg-white rounded-[28px] p-5 shadow-[0_10px_28px_rgba(0,0,0,.15)] w-full max-w-[300px] mx-auto">
    <div className="text-purple-700 flex justify-center mb-3">
      <DocIcon />
    </div>
    <div className="w-full flex justify-center">
      <span className="inline-block bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold -mb-2 shadow text-center">
        {title}
      </span>
    </div>
    <div className="mt-4 text-center">
      <p className="text-slate-600 text-sm leading-snug">{text}</p>
    </div>
  </div>
);

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl">
      {/* 🔑 En móvil NO ponemos min-h fija ni layouts absolutos */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg md:min-h-[800px]">

        {/* Fondo */}
        <img src={bgGradient} alt="" className="absolute inset-0 w-full h-full object-cover" />

        {/* Wedge morado SOLO en desktop */}
        <div className="hidden md:block absolute top-0 right-[-6%] h-full w-[46%] -skew-x-6 origin-right">
          <div className="w-full h-full bg-gradient-to-br from-purple-800/90 via-purple-700/85 to-purple-700/80" />
        </div>

        {/* Título móvil (flujo normal) */}
        <div className="relative z-40 md:hidden px-6 pt-8">
          <h2 className="text-white text-3xl font-extrabold leading-tight drop-shadow">
            Servicios que ofrecemos
          </h2>
        </div>

        {/* Título desktop (overlay a la izquierda) */}
        <div className="relative z-50 max-w-xl pt-16 md:pt-20 pl-6 md:pl-10 hidden md:block">
          <h2 className="text-white text-6xl md:text-7xl font-extrabold leading-[0.9] drop-shadow">
            Servicios que<br /> ofrecemos:
          </h2>
        </div>

        {/* Grid:
            - Móvil: flujo normal (NO absolute), con padding top para despegar del título
            - Desktop: overlay a la derecha */}
        <div
          className="
            relative z-40 w-full px-6 pt-6 pb-10
            md:absolute md:inset-y-0 md:right-0 md:w-[58%] md:px-10 md:py-10 md:flex md:items-center
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 w-full place-items-center">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} title={s.title} text={s.desc} />
            ))}
          </div>
        </div>

        {/* Decorativos:
            - En móvil los escondemos para que NO tapen las tarjetas
            - En desktop aparecen */}
        {/* Mascotas SIEMPRE por delante del globo */}
        <img
          src={pets}
          alt="Perro y gato"
          className="
      absolute bottom-0 left-0 
      w-[44%] md:w-[40%]
      z-[60]                 /* Delante del globo */
      pointer-events-none
    "
        />

        {/* 🌍☁️✈️ Globo, nubes y avión detrás */}
        {/* 🌍☁️✈️ Globo, nubes y avión (detrás de mascotas) */}
        <div
          className="
    pointer-events-none
    absolute
    bottom-[0%]               /* lo bajamos como pusiste */
    left-[36%] md:left-[29%]  /* ajustes exactos de consola */
    z-[60]                    /* mayor prioridad visual */
  "
        >
          {/* Nubes */}
          <img
            src={cloudsBottom}
            alt="Nubes"
            className="
      absolute -bottom-6 left-1/2 -translate-x-1/2
      w-[30vw] max-w-[550px] opacity-95 z-[40]
    "
          />

          {/* Globo */}
          <img
            src={globe}
            alt="Globo"
            className="
      relative w-[25vw] max-w-[460px]
      drop-shadow-xl z-[50]
    "
          />

          {/* Avión */}
          <img
            src={airplane}
            alt="Avión"
            className="
      absolute top-[26%] -left-[8%]
      w-[14vw] max-w-[260px]
      rotate-[-10deg]
      drop-shadow-2xl
      z-[55]
    "
          />
        </div>
      </div>



    </section>
  );
}