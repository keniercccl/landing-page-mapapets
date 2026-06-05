// src/components/Servicios/AvatarRing.jsx
export default function AvatarRing({ src, alt, size = "xl" }) {
  const CORE = {
    lg: "h-32 w-32",
    xl: "h-40 w-40",
  }[size];

  return (
    <div className="relative z-10">
      <div className="rounded-full shadow-[0_0_0_10px_#F1E7FF]">
        <div className="rounded-full bg-white p-[4px]">
          <div className="rounded-full bg-[#7B3FBF]/20 p-[10px]">
            <div className="rounded-full bg-[#6B21A8]/70 p-[10px]">
              <div className={`rounded-full overflow-hidden ${CORE}`}>
                <img src={src} alt={alt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute -right-1 bottom-2 h-3 w-3 rounded-full bg-[#6B21A8] opacity-70" />
    </div>
  );
}
