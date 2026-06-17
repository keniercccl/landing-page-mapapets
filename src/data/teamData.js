// src/data/teamData.js

import DianaImg from "../assets/equipo/diana.png";
import KikiImg from "../assets/equipo/kiki.jpg";
import LizImg from "../assets/equipo/liz.jpg";
import PaolaImg from "../assets/equipo/paola.png";
import MariaPazImg from "../assets/equipo/maria-paz2.png";
import CaneloImg from "../assets/equipo/canelo.jpeg";

const TEAM_MEMBERS = [
  {
    id: 1,
    order: 1,
    name: "Diana Duarte",
    role: "Fundadora",
    image: DianaImg,
    featured: true,
    shortDescription:
      "Lidera el acompañamiento integral para familias que desean viajar junto a sus mascotas alrededor del mundo.",
    quote:
      "Cada mascota merece viajar con la tranquilidad, el cuidado y el amor que recibe dentro de su hogar.",
    linkedin: "",
    instagram: "",
  },
  {
    id: 2,
    order: 2,
    name: "Kiki",
    role: "Asesora Internacional",
    image: KikiImg,
    featured: false,
    shortDescription:
      "Acompaña a las familias durante cada etapa del proceso, resolviendo dudas y coordinando requisitos de viaje.",
    quote:
      "Nuestro objetivo es que cada familia se sienta acompañada desde el primer día.",
    linkedin: "",
    instagram: "",
  },
  {
    id: 3,
    order: 3,
    name: "Liz",
    role: "Asesora Internacional",
    image: LizImg,
    featured: false,
    shortDescription:
      "Brinda orientación personalizada para garantizar que cada documentación y trámite se complete correctamente.",
    quote:
      "Cada caso es diferente, por eso trabajamos con atención personalizada.",
    linkedin: "",
    instagram: "",
  },
  {
    id: 4,
    order: 4,
    name: "Paola Duarte",
    role: "Médica Veterinaria",
    image: PaolaImg,
    featured: false,
    shortDescription:
      "Supervisa aspectos sanitarios, requisitos veterinarios y documentación relacionada con la salud de las mascotas.",
    quote:
      "El bienestar de cada mascota es la prioridad durante todo el proceso de viaje.",
    linkedin: "",
    instagram: "",
  },
  {
    id: 5,
    order: 5,
    name: "María Paz",
    role: "Especialista en Procesos Internacionales",
    image: MariaPazImg,
    featured: true,
    shortDescription:
      "Apoya la coordinación de requisitos específicos de cada país y los procesos administrativos asociados.",
    quote:
      "La planificación adecuada permite que cada viaje sea mucho más simple y seguro.",
    linkedin: "",
    instagram: "",
  },
  {
    id: 6,
    order: 6,
    name: "Canelo",
    role: "Mascota Oficial y Vigilancia Veterinaria",
    image: CaneloImg,
    featured: true,
    shortDescription:
      "Encargado de supervisar que todo funcione correctamente y de recordar que las mascotas siempre son parte de la familia.",
    quote:
      "Si hay snacks cerca, la supervisión está garantizada.",
    linkedin: "",
    instagram: "",
  },
];

export default TEAM_MEMBERS;