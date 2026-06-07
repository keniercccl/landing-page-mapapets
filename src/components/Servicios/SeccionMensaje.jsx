import React from "react";
import fotoDefault from "../../assets/1080x1080 copia 3.jpg"; // cambia por la tuya

export default function SeccionMensaje({ imagen = fotoDefault }) {
  return (
    <section className="w-full my-12">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* TEXTO */}
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-[#2a1154] font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl">
              ¿Vas a viajar y no quieres dejar a{" "}
              <span className="font-black">tu mejor amigo atrás?</span>
            </h3>
            <p className="mt-6 text-[#2a1154]/80 leading-relaxed text-base sm:text-lg">
              En Mapapets somos expertos en gestionar todo el proceso para que tu
              mascota viaje contigo, de forma segura y legal. Desde el microchip
              hasta la llegada a su nuevo hogar, ¡nos encargamos de todo!
            </p>
          </div>

          {/* IMAGEN */}
          <div className="col-span-12 md:col-span-6">
            <div className="relative md:ml-auto max-w-[560px]">
              <div className="overflow-hidden rounded-[36px] sm:rounded-[44px] ring-1 ring-black/5 shadow-[0_22px_70px_rgba(0,0,0,.22)]">
                <img src={imagen} alt="Viajando con tu mascota" className="w-full h-full object-cover aspect-[4/3]" />
              </div>
            </div>
          </div>
        </div>

        {/* línea divisoria opcional */}
        <hr className="mt-10 border-black/10" />
      </div>
    </section>
  );
}
