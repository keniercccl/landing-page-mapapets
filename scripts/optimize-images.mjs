// Convierte a WebP y redimensiona las imágenes pesadas identificadas en la
// auditoría (Sprint 4 de PLAN_SPRINTS.md). Uso: node scripts/optimize-images.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const jobs = [
  // servicios: se muestran en tarjetas de ~450-500px, se deja margen 2x retina
  ...[
    "asesoria-internacional",
    "asesoria-personalizada",
    "microchip",
    "pet-nanny_servicio",
    "prueba-serologia",
    "tramite-sanitario",
    "vacunas-desparasitaciones",
  ].map((name) => ({
    input: `src/assets/servicios/${name}.png`,
    output: `src/assets/servicios/${name}.webp`,
    width: 900,
  })),
  // banner-perro: CSS lo muestra a máx. 320px, 2x retina
  {
    input: "src/assets/banner-perro.png",
    output: "src/assets/banner-perro.webp",
    width: 640,
  },
  // maria-paz2: avatar de equipo, sobredimensionada
  {
    input: "src/assets/equipo/maria-paz2.png",
    output: "src/assets/equipo/maria-paz2.webp",
    width: 700,
  },
  // diana: ya tiene un tamaño razonable, solo se recomprime a WebP
  {
    input: "src/assets/equipo/diana.png",
    output: "src/assets/equipo/diana.webp",
    width: null,
  },
];

for (const job of jobs) {
  const inputPath = path.join(root, job.input);
  const outputPath = path.join(root, job.output);

  let pipeline = sharp(inputPath);
  if (job.width) {
    pipeline = pipeline.resize({ width: job.width, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: 82 }).toFile(outputPath);

  console.log(`${job.input} -> ${job.output}`);
}
