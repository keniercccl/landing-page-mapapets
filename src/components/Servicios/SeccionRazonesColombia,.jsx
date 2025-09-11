/* import React from "react";
/* import mapaCol from "../../assets/mapa-colombia.png"; // tu imagen 
import ColombiaMap from "./components/ColombiaMap";
const Pill = ({ children }) => (
  <div className="w-full rounded-full bg-[#6B21A8] text-white text-center text-sm sm:text-base font-bold py-2.5 shadow">
    {children}
  </div>
);

const CITIES = [
  ["Bogotá", "Medellín", "Cali", "Barranquilla"],
  ["Bucaramanga", "Pereira", "Manizales", "Armenia"],
  ["Cartagena", "Cúcuta", "Ibagué", "Neiva"],
];

export default function SeccionRazonesColombia({ mapa = mapaCol }) {
  return (
    <section className="w-full my-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[#2a1154] font-extrabold mb-4">¿Por qué elegir <span className="text-[#6B21A8]">Mapapets</span>?</p>

        <div className="space-y-3">
          <Pill>+1000 mascotas viajeras felices</Pill>
          <Pill>Trámites rápidos, seguros y sin estrés</Pill>
          <Pill>Atención personalizada, como si fuera nuestro propio peludo</Pill>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-6">
          {/* Mapa}
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-2xl bg-white ring-1 ring-black/5 p-4 shadow">
              <img src={mapa} alt="Mapa de Colombia" className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Ciudades }
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <h4 className="font-extrabold text-[#2a1154] mb-3">
              Llegamos a <span className="text-[#6B21A8]">toda Colombia</span>
            </h4>
            <div className="rounded-2xl bg-white ring-1 ring-black/5 p-4 shadow">
              <div className="grid grid-cols-3 gap-4 text-sm text-[#2a1154]/80">
               <div className="flex items-center justify-center">
      {/* tamaño como tu referencia (mini) }
      <ColombiaMap width={120} height={150} />
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 */