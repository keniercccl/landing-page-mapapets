import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Servicios from "./components/Servicios/Servicios"; 
import Fondo from "./assets/Fondo.png";
import bgServicios from "./assets/1700x630.jpg";
function App() {
    const bgImagen = {
        backgroundImage: `url(${Fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        position: "relative",
    };

    return (
   /*      <div
         style={bgImagen}
            className="flex justify-center overflow-hidden min-h-screen" 
        className="flex flex-col items-center min-h-screen bg-white"
        >
            <Navbar />
            <Hero />
        </div> */
       <div className="min-h-screen bg-white">
      {/* Panel lila full-screen, sin margen arriba, redondeado SOLO abajo */}
      <div
       className="
    w-full
    bg-[#F6EEFF]
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

         <div className="h-6 sm:h-10" />   {/* espacio visual */}
      <Banner />

      {/* ...aquí puedes seguir con más secciones */}
      <div className="h-12" />
   
      <Servicios
        bgImage={bgServicios} // Fondo Coliseo
       /*  leftImage="/assets/pets-luggage.png"   */      // Mascotas+maleta+avión (PNG)
      />

      <div className="h-12" /> {/* separador antes de la siguiente sección */}
    </div>
   

    );
}

export default App;
