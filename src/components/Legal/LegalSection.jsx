import React from "react";

const LegalSection = ({
  title,
  children,
  items = [],
}) => {
  return (
    <section
      className="
        py-8
        md:py-10
        border-b
        border-gray-200
        last:border-none
      "
    >
      {/* Título */}
      <h2
        className="
          text-2xl
          md:text-3xl
          font-bold
          text-[#2B145A]
          mb-4
        "
      >
        {title}
      </h2>

      {/* Contenido libre */}
      {children && (
        <div
          className="
            space-y-4
            text-gray-700
            leading-relaxed
            text-base
            md:text-lg
          "
        >
          {children}
        </div>
      )}

      {/* Lista opcional */}
      {items.length > 0 && (
        <ul
          className="
            mt-4
            space-y-3
            text-gray-700
            text-base
            md:text-lg
          "
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="
                flex
                items-start
                gap-3
              "
            >
              <span
                className="
                  mt-1
                  text-[#5B21B6]
                  font-bold
                "
              >
                •
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default LegalSection;