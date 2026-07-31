
import LogoMapapets from "../../assets/logo_nuevo_1.png";
import LogoCodigoCafe from "../../assets/codigo-cafe-logo.png";

export default function FooterBrand() {
  return (
    <div
      className="
        flex
        flex-col
        gap-10
      "
    >
      {/* ==========================================
          MAPAPETS
      ========================================== */}

      <div>
        <img
          src={LogoMapapets}
          alt="Mapapets"
          className="
            h-16
            md:h-20
            w-auto
          "
        />

        <p
          className="
            mt-4
            text-white/80
            leading-relaxed
            text-sm
          "
        >
          Ayudamos a las familias a viajar con sus
          mascotas de forma segura, legal y sin
          complicaciones.
        </p>

        {/* REDES */}

        <div
          className="
            flex
            gap-3
            mt-5
          "
        >
          <a
            href="https://www.facebook.com/Mapapets"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-11
              h-11

              rounded-xl

              bg-white/10

              flex
              items-center
              justify-center

              hover:bg-white/20
              transition
            "
          >
            <i className="bi bi-facebook text-white" />
          </a>

          <a
            href="https://www.instagram.com/mapa.pets/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-11
              h-11

              rounded-xl

              bg-white/10

              flex
              items-center
              justify-center

              hover:bg-white/20
              transition
            "
          >
            <i className="bi bi-instagram text-white" />
          </a>

          <a
            href="https://www.tiktok.com/@mapa.pets"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-11
              h-11

              rounded-xl

              bg-white/10

              flex
              items-center
              justify-center

              hover:bg-white/20
              transition
            "
          >
            <i className="bi bi-tiktok text-white" />
          </a>
        </div>
      </div>

      {/* ==========================================
          CÓDIGO CAFÉ
      ========================================== */}

      <div
        className="
          border-t
          border-white/10
          pt-6
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-wider
            text-white/50
            mb-3
          "
        >
          Desarrollo Web & Apps
        </p>

        <img
          src={LogoCodigoCafe}
          alt="Código Café"
          className="
            h-12
            md:h-14
            w-auto
          "
        />

        <p
          className="
            mt-3
            text-white/70
            text-sm
            leading-relaxed
          "
        >
          Diseño y desarrollo de páginas web,
          aplicaciones y soluciones digitales
          para empresas y emprendedores.
        </p>

        <div
          className="
            flex
            gap-3
            mt-4
          "
        >
          <a
            href="https://codigocafe.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4
              py-2

              rounded-xl

              bg-[#B4F227]
              text-[#2B145A]

              text-sm
              font-bold

              hover:scale-105
              transition
            "
          >
            Ver sitio
          </a>

          <a
            href="https://wa.me/56900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4
              py-2

              rounded-xl

              bg-white/10
              text-white

              text-sm
              font-semibold

              hover:bg-white/20
              transition
            "
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}