import { faqData } from "../data/faqData";

import FAQCategory from "../components/Faq/FAQCategory";

export default function FAQ() {
  return (
    <main
    id="faq"
      className="
        min-h-screen
        bg-[#FAF8FF]
      "
    >
      <section
        className="
          max-w-5xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8

          py-20
        "
      >
        <div className="text-center">
          <span
            className="
              inline-block
              px-4
              py-2

              rounded-full

              bg-white

              text-[#5B21B6]
              font-semibold
            "
          >
            Preguntas frecuentes
          </span>

          <h1
            className="
              mt-6

              text-4xl
              md:text-6xl

              font-black

              text-[#2B145A]
            "
          >
            Resolvemos tus dudas
          </h1>

          <p
            className="
              mt-6

              text-lg

              text-gray-600

              max-w-2xl
              mx-auto
            "
          >
            Encuentra respuestas rápidas sobre
            documentación, viajes internacionales,
            requisitos sanitarios y servicios de
            asesoría para tu mascota.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {faqData.map((section) => (
            <FAQCategory
              key={section.category}
              category={section.category}
              questions={section.questions}
            />
          ))}
        </div>
      </section>
    </main>
  );
}