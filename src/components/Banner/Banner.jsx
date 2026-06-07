import React from "react";
import bannerImg from "../../assets/banner-mapapets.jpg";

const Banner = () => {
  return (
    <section className="w-full my-12 px-4">
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
        <img
          src={bannerImg}
          alt="MAPAPETS banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;