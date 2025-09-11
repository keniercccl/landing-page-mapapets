import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Servicios from "./components/Servicios/ServiciosSection";
import SeccionDestinosCTA from "./components/Servicios/SeccionDestinosCTA";
/* import SeccionRazonesColombia from "./components/Servicios/SeccionRazonesColombia,"; */
import SeccionMensaje from "./components/Servicios/SeccionMensaje";
import Fondo from "./assets/Fondo.png";
import bgServicios from "./assets/1700x630.jpg";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO: padding-top para compensar el navbar fijo */}
      <div
        id="inicio"
        className="
          w-full
          bg-[#F6EEFF]
          pt-16 sm:pt-20                 /* 👈 NUEVO: altura del navbar */
          min-h-[70vh] sm:min-h-[80vh] md:min-h-screen
          rounded-t-none
          rounded-b-[72px] sm:rounded-b-[120px] md:rounded-b-[180px]
          overflow-hidden
          flex flex-col
        "
      >
        <Navbar />
        <Hero />
      </div>

      <div className="h-2 sm:h-4" />  {/* separador pequeño */}

      {/* Si tu Banner acepta className, dale la misma altura/curva que el Hero */}
      <Banner
        className="
          min-h-[70vh] sm:min-h-[80vh] md:min-h-screen
          rounded-t-none
          rounded-b-[72px] sm:rounded-b-[120px] md:rounded-b-[180px]
        "
      />

      <div className="h-2 sm:h-4" />

      <Servicios bgImage={bgServicios} />
      <SeccionMensaje />
      <SeccionDestinosCTA whatsappHref="https://wa.me/3203446611" /> 
{/*       <SeccionRazonesColombia /> */}
   {/*    <SeccionPetNanny />
      <SeccionAsesoriaCTA href="#contacto" /> */}
      <div className="h-10 sm:h-12" />
    </div>
  );
}

export default App;