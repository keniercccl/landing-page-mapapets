import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Thumbs } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import PhotoCard from "./PhotoCard";

const PhotoCarousel = ({
  photos,
  isMobile,
}) => {
  const [thumbsSwiper, setThumbsSwiper] =
    useState(null);

  if (!photos.length) {
    return null;
  }

  return (
    <div className="w-full">

      {/* =======================================
          MOBILE
      ======================================= */}

      {isMobile ? (
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          modules={[
            Navigation,
            Pagination,
            Autoplay,
          ]}
          className="w-full"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <PhotoCard
                photo={photo}
                isMobile={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          {/* ===================================
              CAROUSEL PRINCIPAL
          =================================== */}

          <Swiper
            spaceBetween={10}
            navigation
            thumbs={{
              swiper:
                thumbsSwiper &&
                  !thumbsSwiper.destroyed
                  ? thumbsSwiper
                  : null,
            }}
            autoplay={{
              delay: 6000,
            }}
            modules={[
              Navigation,
              Thumbs,
              Autoplay,
            ]}
            className="mb-4"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <PhotoCard
                  photo={photo}
                  isMobile={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ===================================
              MINIATURAS
          =================================== */}

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            watchSlidesProgress
            modules={[Thumbs]}
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="
                    h-20
                    w-full
                    object-cover
                    rounded-xl
                    cursor-pointer
                  "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default PhotoCarousel;