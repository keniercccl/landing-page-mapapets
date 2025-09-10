import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

const NAV_LINKS = [
  { id: 1, title: "Inicio", href: "#inicio" },
  { id: 2, title: "Servicios", href: "#servicios" },
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

  const chipBase =
    "rounded-full font-extrabold tracking-tight transition-colors inline-flex items-center justify-center";
  const chipSizes =
    "px-5 py-2 text-base sm:px-6 sm:py-2.5 sm:text-lg lg:px-7 lg:py-3 lg:text-xl";
  const chipGreen = "bg-[#B4F227] text-[#2a1154] hover:brightness-105";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3">
          <img src={Logo} alt="MAPAPETS" className="h-12 md:h-16 xl:h-20" />
        </a>

        {/* LINKS desktop */}
        <ul className="hidden md:flex items-center gap-3 lg:gap-4">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a href={l.href} className={`${chipBase} ${chipSizes} ${chipGreen}`}>
                {l.title}
              </a>
            </li>
          ))}
        </ul>

        {/* REDES desktop */}
        <ul className="hidden md:flex items-center gap-3">
          {NAV_REDES.map((r) => (
            <li key={r.id}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.title}
                className="inline-flex items-center justify-center rounded-2xl
                           bg-[#5B21B6] text-white hover:opacity-90 transition
                           h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
              >
                <i className={`${r.icon} text-xl sm:text-2xl lg:text-3xl`} />
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGUESA móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl text-[#5B21B6] hover:bg-white/40"
          aria-label="Abrir menú"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor">
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h20M4 13h20M4 19h20" />
            )}
          </svg>
        </button>
      </div>

      {/* MENÚ móvil */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/90 backdrop-blur`}
      >
        <div className="px-4 pb-5 space-y-3">
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
                  className="inline-flex items-center justify-center rounded-2xl
                             bg-[#5B21B6] text-white hover:opacity-90 transition
                             h-12 w-12"
                >
                  <i className={`${r.icon} text-2xl`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

