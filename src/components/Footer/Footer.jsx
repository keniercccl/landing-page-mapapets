
import FooterMap from "./FooterMap";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterBrand from "./FooterBrand";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="
        bg-[#5B21B6]
        text-white

        mt-24

        rounded-t-[40px]
        md:rounded-t-[60px]

        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          sm:px-8
          lg:px-10

          py-12
          md:py-16
        "
      >
        {/* ==========================================
            GRID PRINCIPAL
        ========================================== */}

        <div
          className="
            grid

            grid-cols-1

            lg:grid-cols-12

            gap-12
            lg:gap-10
          "
        >
          {/* MAPA */}

          <div
            className="
              lg:col-span-5
            "
          >
            <FooterMap
              address="Calle 115 #52-43, Bogotá, Colombia"
              mapEmbedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.841968423278!2d-74.079!3d4.613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNC42MTMsIC03NC4wNzk!5e0!3m2!1ses-419!2sco!4v1700000000000"
              mapsUrl="https://maps.google.com/?q=Cl.115%20%2352-43%20Bogota"
            />
          </div>

          {/* CONTACTO */}

          <div
            className="
              lg:col-span-3
            "
          >
            <FooterContact
              whatsapp="573203446611"
              phone1="+57 320 344 6611"
              phone2="+57 321 325 1713"
              email="contacto@mapapets.com"
              schedule="Lunes a Viernes · 8:00 AM - 6:00 PM"
            />
          </div>

          {/* LINKS + BRAND */}

          <div
            className="
              lg:col-span-4

              flex
              flex-col

              gap-12
            "
          >
            <FooterLinks />

            <FooterBrand />
          </div>
        </div>

        {/* ==========================================
            DIVISOR
        ========================================== */}

        <div
          className="
            mt-16
            border-t
            border-white/10
            pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              md:flex-row

              items-center
              justify-between

              gap-4
            "
          >
            <p
              className="
                text-sm
                text-white/60
                text-center
                md:text-left
              "
            >
              © {new Date().getFullYear()} Mapapets.
              Todos los derechos reservados.
            </p>

            <p
              className="
                text-sm
                text-white/60
                text-center
              "
            >
              Desarrollado con ☕ por{" "}
              <span
                className="
                  font-semibold
                  text-white/90
                "
              >
                Código Café
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}