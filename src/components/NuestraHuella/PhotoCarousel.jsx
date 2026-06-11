import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Thumbs } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

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

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  if (!photos.length) {
    return null;
  }

  const slides = photos.map((photo) => ({
    src: photo.image,
    title: photo.title,
    description: photo.description || "",
  }));

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
            disableOnInteraction: false,
          }}
          modules={[
            Navigation,
            Pagination,
            Autoplay,
          ]}
          className="w-full"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={photo.id}>
              <PhotoCard
                photo={photo}
                isMobile={true}
                onClick={() => {
                  setCurrentIndex(index);
                  setLightboxOpen(true);
                  console.log("ABRIENDO LIGHTBOX");
                }}
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
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[
              Navigation,
              Thumbs,
              Autoplay,
            ]}
            className="mb-4"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={photo.id}>
                <PhotoCard
                  photo={photo}
                  isMobile={false}
                  onClick={() => {
                    setCurrentIndex(index);
                    setLightboxOpen(true);
                    console.log("ABRIENDO LIGHTBOX");
                  }}
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
            {photos.map((photo, index) => (
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
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Zoom]}

        zoom={{
          maxZoomPixelRatio: 4,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
      />
    </div>
  );
};

export default PhotoCarousel;