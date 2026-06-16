import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

import { SERVICES } from "../Servicios/data/servicesData";

const ServicesCoverflow = () => {
  const [selectedService, setSelectedService] =
    useState(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

    setTimeout(() => {
      setSelectedService(null);
    }, 200);
  };

  return (
    <>
      <section
        id="servicios"
        className="
          py-20
          md:py-28

          bg-[#FAF8FF]
          overflow-hidden
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* HEADER */}

          <div
            className="
              text-center
              mb-14
            "
          >
            <span
              className="
                inline-flex
                px-4
                py-2

                rounded-full

                bg-[#EDE9FE]

                text-[#5B21B6]
                font-semibold
              "
            >
              Servicios especializados
            </span>

            <h2
              className="
                mt-6

                text-4xl
                md:text-5xl

                font-black

                text-[#2B145A]
              "
            >
              Todo lo que tu mascota necesita
              para viajar segura
            </h2>

            <p
              className="
                mt-5

                max-w-3xl
                mx-auto

                text-gray-600

                text-lg
                leading-relaxed
              "
            >
              Te acompañamos desde la planificación
              inicial hasta la llegada a destino,
              gestionando cada requisito para que
              viajes con tranquilidad.
            </p>
          </div>

          {/* COVERFLOW */}

          <Swiper
            modules={[
              EffectCoverflow,
              Pagination,
              Navigation,
              Autoplay,
            ]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: false,
              scale: 0.9,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            className="
              py-10
            "
          >
            {SERVICES.map((service) => (
              <SwiperSlide
                key={service.id}
                className="
                  !w-[300px]
                  sm:!w-[340px]
                "
              >
                <ServiceCard
                  service={service}
                  onOpen={openModal}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CTA */}

          <div
            className="
              mt-16
              text-center
            "
          >
            <a
              href={
                import.meta.env
                  .VITE_GOOGLE_FORM
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center

                px-8
                py-4

                rounded-2xl

                bg-[#A3E635]
                text-[#2B145A]

                font-black

                shadow-lg

                hover:scale-105
                transition
              "
            >
              Solicitar asesoría personalizada
            </a>
          </div>
        </div>
      </section>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ServicesCoverflow;