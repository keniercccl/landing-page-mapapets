import React from "react";

const SkeletonCarousel = () => {
  return (
    <div className="w-full animate-pulse">

      {/* Imagen principal */}
      <div
        className="
          w-full
          aspect-[16/9]
          md:aspect-[16/9]
          rounded-4xl
          bg-gray-200
        "
      />

      {/* Miniaturas Desktop */}
      <div
        className="
          hidden
          md:grid
          grid-cols-5
          gap-3
          mt-4
        "
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="
              h-20
              rounded-xl
              bg-gray-200
            "
          />
        ))}
      </div>

      {/* Título */}
      <div
        className="
          h-8
          bg-gray-200
          rounded-lg
          mt-6
          w-1/3
        "
      />

      {/* Descripción */}
      <div
        className="
          h-4
          bg-gray-200
          rounded-lg
          mt-4
          w-full
        "
      />

      <div
        className="
          h-4
          bg-gray-200
          rounded-lg
          mt-2
          w-2/3
        "
      />
    </div>
  );
};

export default SkeletonCarousel;