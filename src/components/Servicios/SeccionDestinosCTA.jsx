import React from "react";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";


const PillBtn = ({ children, href, variant = "primary" }) => {
  const base =
    "rounded-full inline-flex items-center justify-center font-extrabold shadow-md";
  const tones = {
    primary: "bg-[#B4F227] text-[#2a1154] hover:brightness-105",
    ghost: "bg-white text-[#2a1154] ring-1 ring-black/10 hover:bg-white/90",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} px-8 py-3 text-base sm:px-9 sm:py-3.5 sm:text-lg`} // tamaño base generoso
    >
      <span className={tones[variant]}>{children}</span>
    </a>
  );
};

const MiniCTA = ({
  foto,
  title,
  visitanosHref,
  whatsappHref,
  size = "xl", // md | lg | xl
}) => {
  const SIZES = {
    md: {
      avatar: "h-20 w-20 ring-[6px]",
      dot: "h-5 w-5",
      text: "text-sm sm:text-base",
      gap: "gap-4",
      space: "mt-4",
      card: "max-w-[360px]",
      btn: "text-sm sm:text-base px-6 sm:px-7 py-2.5 sm:py-3",
    },
    lg: {
      avatar: "h-28 w-28 ring-[10px]",
      dot: "h-6 w-6",
      text: "text-base sm:text-lg",
      gap: "gap-5",
      space: "mt-5",
      card: "max-w-[460px]",
      btn: "text-base sm:text-lg px-8 sm:px-9 py-3 sm:py-3.5",
    },
    xl: {
      avatar: "h-32 w-32 ring-[12px]",
      dot: "h-7 w-7",
      text: "text-lg sm:text-xl",
      gap: "gap-6",
      space: "mt-6",
      card: "max-w-[520px]",
      btn: "text-lg sm:text-xl px-9 sm:px-10 py-3.5 sm:py-4",
    },
  }[size];
   return (
    <div className={`text-center w-full ${SIZES.card}`}>
      {/* avatar grande */}
      <div
        className={`mx-auto relative rounded-full overflow-hidden ring-[#6B21A8]/25 shadow ${SIZES.avatar}`}
      >
        <img src={foto} alt="" className="h-full w-full object-cover" />
        <span
          className={`absolute -bottom-1 -right-1 rounded-full bg-[#B4F227] ring-2 ring-white ${SIZES.dot}`}
        />
      </div>

      <p className={`mt-4 mx-auto max-w-[520px] text-[#2a1154]/80 leading-relaxed ${SIZES.text}`}>
        {title}
      </p>

      <div className={`${SIZES.space} flex items-center justify-center ${SIZES.gap}`}>
        <a
          href={visitanosHref}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full bg-white text-[#2a1154] ring-1 ring-black/10 hover:bg-white/90 font-extrabold ${SIZES.btn}`}
        >
          Visítanos
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full bg-[#B4F227] text-[#2a1154] hover:brightness-105 font-extrabold ${SIZES.btn}`}
        >
          WhatsApp
        </a>
      </div>
    </div>
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
    <section className="w-full my-10">
      {/* << AUMENTAMOS EL ANCHO DEL CONTENEDOR >> */}
      <div className="mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <p className="text-[#6B21A8] font-extrabold text-base sm:text-lg text-center">
          {textTop}
        </p>
        <p className="mt-2 text-center text-[#2a1154]/80 text-sm sm:text-base">
          {countriesText}
        </p>

        {/* dos CTAs más grandes */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
          <MiniCTA
          size="xl"  
            foto={foto1}
            title="Escríbenos para darte toda la información que necesitas"
            visitanosHref={visitanosHref}
            whatsappHref={whatsappHref}
          />
          <MiniCTA
          size="xl"  
            foto={foto2}
            title="Te guiamos paso a paso para que todo salga perfecto"
            visitanosHref={visitanosHref}
            whatsappHref={whatsappHref}
          />
        </div>
      </div>
    </section>
  );
}


