import React from "react";
// ❌ Quita esto si aún lo tienes
// import { ReactComponent as ColombiaMap } from "../../assets/co.svg";

// ✅ Usa el SVG como imagen
import coSvg from "../../assets/co.svg";
import Penny from "../../assets/penny.png";

const Pill = ({ children }) => (
  <div className="w-full rounded-full bg-[#6B21A8] text-white text-center text-sm sm:text-base font-bold py-2.5 shadow">
    {children}
  </div>
);

export default function SeccionRazonesColombia() {
  return (
    <section className="w-full my-12 bg-[#f8f3ff] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[#2a1154] font-extrabold mb-4 text-lg">
          ¿Por qué elegir <span className="text-[#6B21A8]">Mapapets</span>?
        </p>

        <div className="space-y-3 mb-10">
          <Pill>+1000 mascotas viajeras felices</Pill>
          <Pill>Trámites rápidos, seguros y sin estrés</Pill>
          <Pill>Atención personalizada, como si fuera nuestro propio peludo</Pill>
        </div>

        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Mapa */}
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <div className="rounded-2xl bg-white ring-1 ring-black/5 p-4 shadow">
              {/* ⬇️ Imagen en lugar del componente SVG */}
              <img
                src={coSvg}
                alt="Mapa de Colombia"
                className="w-[220px] h-[260px] object-contain"
              />
            </div>
          </div>

          {/* Ciudades */}
          <div className="col-span-12 md:col-span-7">
            <h4 className="font-extrabold text-[#2a1154] mb-3 text-lg">
              Llegamos a <span className="text-[#6B21A8]">toda Colombia</span>
            </h4>
            <div className="rounded-2xl bg-white ring-1 ring-black/5 p-6 shadow">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-sm text-[#2a1154]/80">
                <ul>
                  <li>Armenia</li><li>Barranquilla</li><li>Bogotá</li>
                  <li>Bucaramanga</li><li>Cali</li><li>Cartagena</li>
                </ul>
                <ul>
                  <li>Cúcuta</li><li>Ibagué</li><li>Medellín</li>
                  <li>Manizales</li><li>Pereira</li><li>Popayán</li>
                </ul>
                <ul>
                  <li>Neiva</li><li>Villavicencio</li><li>Yopal</li>
                  <li>Montería</li><li>Sincelejo</li><li>Valledupar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Franja Pet Nanny (opcional si la usas aquí) */}
        <div className="mt-10">
          <div className="bg-[#5b23a6] rounded-[32px] p-5 sm:p-8 shadow">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {Penny ? (
          <img
            src={Penny}
            alt="Pet Nanny"
            className="h-14 sm:h-16 md:h-20 w-auto"
          />
        ) : (
          <span className="text-white font-semibold">Pet Nanny</span>
        )}
     
              
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl shadow p-4">
                  <p className="font-bold text-[#2a1154] text-sm">Fecha: 08/04/2025</p>
                  <p className="text-[#2a1154] text-sm">Destino: <span className="font-bold">Colombia</span></p>
                  <p className="text-[#2a1154] text-sm">Origen: <span className="font-bold">Europa</span></p>
                  <p className="text-[#2a1154] text-sm">ingreso por <span className="font-bold">Madrid</span></p>
                </div>
                <div className="bg-white rounded-2xl shadow p-4">
                  <p className="font-bold text-[#2a1154] text-sm">Fecha: 08/04/2025</p>
                  <p className="text-[#2a1154] text-sm">Destino: <span className="font-bold">Colombia</span></p>
                  <p className="text-[#2a1154] text-sm">Origen: <span className="font-bold">Europa</span></p>
                  <p className="text-[#2a1154] text-sm">ingreso por <span className="font-bold">Madrid</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}






/* import React from "react";
/* import mapaCol from "../../assets/mapa-colombia.png"; // tu imagen 
import mapaColomSVG from 
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


