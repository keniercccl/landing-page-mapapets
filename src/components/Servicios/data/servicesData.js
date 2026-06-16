// src/components/Servicios/data/servicesData.js

import ViajesImg from "../../../assets/servicios/asesoria-internacional.png";
import SanitariosImg from "../../../assets/servicios/tramite-sanitario.png";
import VacunasImg from "../../../assets/servicios/vacunas-desparasitaciones.png";
import RabiaImg from "../../../assets/servicios/asesoria-internacional.png";
import MicrochipImg from "../../../assets/servicios/asesoria-internacional.png";
import PetNannyImg from "../../../assets/servicios/asesoria-internacional.png";
import AsesoriaImg from "../../../assets/servicios/asesoria-internacional.png";

export const SERVICES = [
  {
    id: 1,
    sortOrder: 1,
    slug: "viajes-internacionales",
    featured: true,
    badge: "Más solicitado",
    category: "Viajes Internacionales",
    title: "Viajes Internacionales",
    coverDescription:
      "Tu mascota puede viajar a cualquier parte del mundo con acompañamiento profesional.",
    shortDescription:
      "Gestionamos todo el proceso para que tu mascota viaje segura a cualquier país.",
    fullDescription:
      "Nos encargamos de coordinar cada etapa del viaje internacional de tu mascota: requisitos sanitarios, documentación, coordinación con aerolíneas y validación de normativas del país de destino. Nuestro objetivo es que viajes con tranquilidad sabiendo que todo está bajo control.",
    image: ViajesImg,
    imageAlt: "Mascota viajando internacionalmente",
    icon: "bi bi-airplane",
    theme: "#5B21B6",
    ctaText: "Solicitar asesoría",
    benefits: [
      "Requisitos específicos por país",
      "Coordinación con aerolíneas",
      "Planificación integral del viaje",
      "Acompañamiento de inicio a fin",
    ],
  },

  {
    id: 2,
    sortOrder: 2,
    slug: "tramites-sanitarios",
    featured: false,
    badge: null,
    category: "Viajes Internacionales",
    title: "Trámites Sanitarios",
    coverDescription:
      "Toda la documentación sanitaria requerida para viajar sin inconvenientes.",
    shortDescription:
      "Gestionamos certificados y documentación exigida por las autoridades.",
    fullDescription:
      "Preparamos y revisamos toda la documentación sanitaria requerida para que tu mascota cumpla con las normativas nacionales e internacionales, evitando retrasos, observaciones o rechazos durante el proceso.",
    image: SanitariosImg,
    imageAlt: "Documentación sanitaria para mascotas",
    icon: "bi bi-file-earmark-medical",
    theme: "#5B21B6",
    ctaText: "Solicitar asesoría",
    benefits: [
      "Documentación sanitaria completa",
      "Validación de requisitos",
      "Reducción de errores",
      "Seguimiento documental",
    ],
  },
  {
    id: 3,
    sortOrder: 3,
    slug: "vacunas-y-chequeos",
    featured: false,
    badge: null,
    category: "Viajes Internacionales",
    title: "Chequeos Médicos y Vacunas",
    coverDescription:
      "Preparación veterinaria para cumplir con los requisitos del destino.",
    shortDescription:
      "Coordinamos controles veterinarios, vacunas y desparasitaciones.",
    fullDescription:
      "Nos aseguramos de que tu mascota cumpla con todas las exigencias sanitarias antes del viaje mediante controles médicos, esquemas de vacunación y tratamientos preventivos según el país de destino.",
    image: VacunasImg,
    imageAlt: "Chequeo veterinario para viaje internacional",
    icon: "bi bi-heart-pulse",
    theme: "#5B21B6",
    ctaText: "Solicitar asesoría",
    benefits: [
      "Evaluación veterinaria",
      "Vacunas obligatorias",
      "Desparasitación preventiva",
      "Preparación previa al vuelo",
    ],
  },
  {
    id: 4,
    sortOrder: 4,
    slug: "prueba-rabia",
    featured: false,
    badge: null,
    category: "Viajes Internacionales",
    title: "Prueba de Anticuerpos Rabia",
    coverDescription:
      "Gestión completa de uno de los requisitos más importantes para viajar.",
    shortDescription:
      "Toma de muestra, envío a laboratorio y seguimiento de resultados.",
    fullDescription:
      "Coordinamos la realización de la prueba serológica de anticuerpos contra la rabia, incluyendo la toma de muestra, envío a laboratorio autorizado y seguimiento hasta la obtención de resultados válidos para viajar.",
    image: RabiaImg,
    imageAlt: "Prueba serológica de rabia para mascotas",
    icon: "bi bi-shield-check",
    theme: "#5B21B6",
    ctaText: "Solicitar asesoría",
    benefits: [
      "Toma de muestra",
      "Laboratorio autorizado",
      "Seguimiento de resultados",
      "Cumplimiento internacional",
    ],
  },

  {
    id: 5,
    sortOrder: 5,
    slug: "microchip",
    featured: false,
    badge: null,
    category: "Viajes Internacionales",
    title: "Implantación de Microchip",
    coverDescription:
      "Identificación internacional para una trazabilidad segura.",
    shortDescription:
      "Implantación y registro del microchip exigido por numerosos países.",
    fullDescription:
      "Gestionamos la implantación y correcta identificación mediante microchip, requisito obligatorio para ingresar a muchos países y fundamental para la trazabilidad de tu mascota.",
    image: MicrochipImg,
    imageAlt: "Implantación de microchip para mascotas",
    icon: "bi bi-upc-scan",
    theme: "#5B21B6",
    ctaText: "Solicitar asesoría",
    benefits: [
      "Identificación permanente",
      "Cumplimiento normativo",
      "Trazabilidad internacional",
      "Registro correcto",
    ],
  },
  {
    id: 6,
    sortOrder: 6,
    slug: "pet-nanny",
    featured: true,
    badge: "Premium",
    category: "Viajes Internacionales",
    title: "Servicio Pet Nanny",
    coverDescription:
      "Acompañamiento humano especializado durante todo el trayecto.",
    shortDescription: "Un profesional capacitado viaja junto a tu mascota.",
    fullDescription:
      "Nuestro servicio Pet Nanny permite que un profesional acompañe personalmente a tu mascota durante el viaje, brindándole atención, supervisión y tranquilidad durante todo el trayecto.",
    image: PetNannyImg,
    imageAlt: "Servicio Pet Nanny para mascotas",
    icon: "bi bi-person-hearts",
    theme: "#5B21B6",
    ctaText: "Solicitar Pet Nanny",
    benefits: [
      "Acompañamiento personalizado",
      "Reducción del estrés",
      "Supervisión permanente",
      "Mayor tranquilidad para la familia",
    ],
  },
  {
    id: 7,
    sortOrder: 7,
    slug: "asesoria",
    featured: false,
    badge: "Incluido",
    category: "Viajes Internacionales",
    title: "Asesoría Personalizada",
    coverDescription: "Te guiamos paso a paso durante todo el proceso.",
    shortDescription:
      "Acompañamiento personalizado adaptado a tu destino y mascota.",
    fullDescription:
      "Analizamos cada caso de forma individual para ofrecer orientación clara, resolver dudas y planificar el viaje de acuerdo con las necesidades específicas de tu mascota y del país de destino.",
    image: AsesoriaImg,
    imageAlt: "Asesoría personalizada para viaje de mascotas",
    icon: "bi bi-chat-dots",
    theme: "#5B21B6",
    ctaText: "Hablar con un asesor",
    benefits: [
      "Orientación especializada",
      "Resolución de dudas",
      "Seguimiento continuo",
      "Planificación personalizada",
    ],
  },
];

// Por si mañana quieres mostrarlos ordenados automáticamente

export const ORDERED_SERVICES = [...SERVICES].sort(
  (a, b) => a.sortOrder - b.sortOrder,
);

// Servicios destacados para Hero, Banner o CTA

export const FEATURED_SERVICES = SERVICES.filter((service) => service.featured);
