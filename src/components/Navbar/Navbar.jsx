import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

const NAV_LINKS = [
  { id: 1, title: "Inicio", href: "#inicio" },
  { id: 2, title: "ServiciosSection", href: "#servicios" },
  { id: 3, title: "Nuestra huella", href: "#huella" },
  { id: 4, title: "Contacto", href: "#contacto" },
];

const NAV_REDES = [
  { id: 1, title: "WhatsApp", href: "https://wa.me/XXXXXXXXX", icon: "bi bi-whatsapp" },
  { id: 2, title: "Facebook", href: "https://facebook.com", icon: "bi bi-facebook" },
  { id: 3, title: "Instagram", href: "https://instagram.com", icon: "bi bi-instagram" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // tamaños pensados para móvil por defecto; crecientes en sm/lg
  const chipBase = "rounded-full font-extrabold tracking-tight transition-colors inline-flex items-center justify-center";
  const chipSizes = "px-4 py-1.5 text-sm sm:px-6 sm:py-2.5 sm:text-lg lg:px-7 lg:py-3 lg:text-xl";
  const chipGreen = "bg-[#B4F227] text-[#2a1154] hover:brightness-105";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-black/5">
      {/* altura controlada en móvil para que no sea tan alta */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-2">
          <img src={Logo} alt="MAPAPETS" className="h-8 sm:h-12 xl:h-14 w-auto" />
        </a>

        {/* LINKS desktop */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-3">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a href={l.href} className={`${chipBase} ${chipSizes} ${chipGreen}`}>
                {l.title}
              </a>
            </li>
          ))}
        </ul>

        {/* REDES desktop */}
        <ul className="hidden md:flex items-center gap-2">
          {NAV_REDES.map((r) => (
            <li key={r.id}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.title}
                className="inline-flex items-center justify-center rounded-xl
                           bg-[#5B21B6] text-white hover:opacity-90 transition
                           h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
              >
                <i className={`${r.icon} text-base sm:text-xl lg:text-2xl`} />
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGUESA móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-[#5B21B6] hover:bg-black/5"
          aria-label="Abrir menú"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor">
            {open ? (
              <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M4 7h18M4 13h18M4 19h18" />
            )}
          </svg>
        </button>
      </div>

      {/* MENÚ móvil */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur border-t border-black/5`}
      >
        <div className="px-4 py-4 space-y-3">
          <ul className="grid grid-cols-2 gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`${chipBase} ${chipSizes} ${chipGreen} w-full`}
                >
                  {l.title}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-center gap-3 pt-2">
            {NAV_REDES.map((r) => (
              <li key={r.id}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  aria-label={r.title}
                  className="inline-flex items-center justify-center rounded-xl
                             bg-[#5B21B6] text-white hover:opacity-90 transition
                             h-11 w-11"
                >
                  <i className={`${r.icon} text-xl`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}