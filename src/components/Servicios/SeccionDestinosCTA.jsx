// SeccionDestinosCTA.jsx
import React from "react";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import AvatarRing from "./AvatarRing";

/* Botón pastilla */
const PillBtn = ({ children, href, variant = "primary", className = "" }) => {
  const base =
    "rounded-full inline-flex items-center justify-center font-extrabold shadow-md transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const tones = {
    primary: "bg-[#B4F227] text-[#2a1154] focus:ring-[#B4F227]",
    ghost: "bg-white text-[#2a1154] ring-1 ring-black/10 hover:bg-white/90 focus:ring-[#6B21A8]",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${tones[variant]} px-9 py-3.5 text-lg ${className}`}
    >
      {children}
    </a>
  );
};

export default function SeccionDestinosCTA({
  textTop = "¡Tu peludo puede viajar a donde tú vayas!",
  countriesText = "Estados Unidos, Canadá, España, Italia, México, Alemania, Chile, Argentina, República Dominicana, ¡y más!",
  visitanosHref = "#contacto",
  whatsappHref = "https://wa.me/#########",
  foto1 = avatar1,
  foto2 = avatar2,
}) {
  return (
    <section className="w-full my-12">
      <div className="mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        {/* Títulos arriba */}
        <h3 className="text-[#6B21A8] font-extrabold text-2xl sm:text-3xl text-center">
          {textTop}
        </h3>
        <p className="mt-3 text-center text-[#2a1154]/80 text-base sm:text-lg">
          {countriesText}
        </p>

        {/* =============== LAYOUT MÓVIL (simple y limpio) =============== */}
        <div className="mt-8 md:hidden">
          {/* Avatares centrados */}
          <div className="flex items-center justify-center gap-6">
            <AvatarRing src={foto1} alt="Kiki" size="md" />
            <AvatarRing src={foto2} alt="Lizaeth" size="md" />
          </div>

          {/* Texto central */}
          <p className="mt-5 text-center text-[#2a1154] text-xl font-extrabold leading-snug px-6">
            Escríbenos para darte toda la información que necesitas
          </p>

          {/* Botones apilados */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <PillBtn href={visitanosHref} variant="ghost" className="w-full max-w-[300px]">
              Visítanos
            </PillBtn>
            <PillBtn href={whatsappHref} className="w-full max-w-[300px]">
              WhatsApp
            </PillBtn>
          </div>

          {/* Pies de foto */}
          <div className="mt-6 grid grid-cols-1 gap-4 px-6">
            <p className="text-xs text-[#2a1154]/70 text-center">
              Soy Kiki y estoy aquí para apoyarte en cada proceso.
            </p>
            <p className="text-xs text-[#2a1154]/70 text-center">
              Soy Lizaeth y estoy aquí para apoyarte en cada proceso.
            </p>
          </div>

          <p className="mt-3 text-center text-xs text-[#2a1154]/60 italic">
            *enlace mapa
          </p>
        </div>

        {/* =============== LAYOUT DESKTOP (tu diseño actual) =============== */}
        <div className="hidden md:block">
          {/* ====== BARRA CENTRAL + AVATARES ====== */}
          <div className="relative mt-10 flex justify-center">
            {/* franja lila */}
            <div className="w-full max-w-[980px] h-28 bg-[#EFD9FF] rounded-[36px]" />

            {/* avatar IZQ + pie debajo */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[min(8vw,80px)] flex flex-col items-center z-10">
              <AvatarRing src={foto1} alt="Kiki" size="xl" />
              <p className="mt-3 text-xs text-[#2a1154]/70 text-center max-w-[220px]">
                Soy Kiki y estoy aquí para apoyarte en cada proceso.
              </p>
            </div>

            {/* avatar DER + pie debajo */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[min(8vw,80px)] flex flex-col items-center z-10">
              <AvatarRing src={foto2} alt="Lizaeth" size="xl" />
              <p className="mt-3 text-xs text-[#2a1154]/70 text-center max-w-[220px]">
                Soy Lizaeth y estoy aquí para apoyarte en cada proceso.
              </p>
            </div>

            {/* texto centrado dentro de la franja */}
            <div className="absolute inset-0 flex items-center justify-center px-8">
              <p className="text-center text-[#2a1154] text-2xl sm:text-[28px] font-extrabold leading-tight">
                Escríbenos para darte toda la información que
                <br className="hidden sm:block" /> necesitas
              </p>
            </div>
          </div>

          {/* ====== BOTONES CENTRADOS ====== */}
          <div className="mt-8 flex justify-center gap-6">
            <PillBtn href={visitanosHref} variant="ghost">
              Visítanos
            </PillBtn>
            <PillBtn href={whatsappHref}>
              WhatsApp
            </PillBtn>
          </div>

          <p className="mt-2 text-center text-xs text-[#2a1154]/60 italic">
            *enlace mapa
          </p>
        </div>
      </div>
    </section>
  );
}
