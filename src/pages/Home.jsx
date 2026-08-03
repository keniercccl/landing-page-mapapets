// src/pages/Home.jsx

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Servicios from "../components/Servicios/ServiciosSection";
import NuestraHuella from "../components/NuestraHuella/NuestraHuella";
import SeccionDestinos from "../components/Destinos/SeccionDestinos";
import SeccionMensaje from "../components/Servicios/SeccionMensaje";
import SeccionRazonesColombia from "../components/Servicios/SeccionRazonesColombia";
import SeccionEquipo from "../components/Equipo/SeccionEquipo";
import FAQ from "./FAQ";
import Footer from "../components/Footer/Footer";
import BotonWhatsApp from "../components/BotonWhatsApp";
import SEO from "../components/SEO/SEO";

export default function Home() {
  return (
    <>
    <SEO
    title="MAPAPETS | Viaja con tu mascota sin complicaciones"
    description="Asesoría internacional para viajar con mascotas. Documentación, requisitos sanitarios, aerolíneas y acompañamiento especializado."
    url="https://www.mapapets.co"
  />
    <div className="min-h-screen bg-white">
      {/* ==========================================
          HERO
      ========================================== */}

      <div
        id="inicio"
        className="
          w-full
          bg-[#F6EEFF]

          pt-16
          sm:pt-20

          min-h-[70vh]
          sm:min-h-[80vh]
          md:min-h-screen

          rounded-b-[72px]
          sm:rounded-b-[120px]
          md:rounded-b-[180px]

          overflow-hidden
          flex
          flex-col
        "
      >
        <Navbar />

        <Hero />

        <BotonWhatsApp />
      </div>

      <div className="h-2 sm:h-4" />

      {/* ==========================================
          BANNER
      ========================================== */}

      <Banner />

      <div className="h-4 sm:h-6" />

      {/* ==========================================
          SERVICIOS
      ========================================== */}

      <Servicios />

      {/* ==========================================
          CASOS REALES
      ========================================== */}

      <NuestraHuella />

      {/* ==========================================
          DESTINOS
      ========================================== */}

      <SeccionDestinos />

      {/* ==========================================
          MENSAJE
      ========================================== */}

      <SeccionMensaje />

      {/* ==========================================
          RAZONES
      ========================================== */}

      <SeccionRazonesColombia />

      {/* ==========================================
          EQUIPO
      ========================================== */}

      <SeccionEquipo />

      {/* ==========================================
          FAQ
      ========================================== */}

      <FAQ />

      {/* ==========================================
          FOOTER
      ========================================== */}

      <Footer />

      <div className="h-10 sm:h-12" />
    </div>
    </>
  );
}