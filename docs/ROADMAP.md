# Hoja de ruta — MapaPets

Estado vivo del proyecto. Se actualiza al cerrar cada sprint. El detalle
de lo ya hecho vive en `docs/sprints/sprint-NN-*.md` — acá solo el
resumen y qué sigue.

**Objetivo actual (desde el 15 de agosto):** que MapaPets aparezca entre
los primeros resultados cuando alguien busque las keywords del negocio
("cómo viajar con mi perro", "cómo viajar con mi gato en avión",
"transporte internacional de mascotas", etc.). Base completa de la
investigación y las 12 observaciones verificadas:
[`docs/seo-auditoria-2026-08-15.md`](seo-auditoria-2026-08-15.md).

| # | Sprint | Esfuerzo | Riesgo | Estado |
|---|---|---|---|---|
| 0-5 | Housekeeping, analytics, UX mobile, performance de imágenes/video, SEO base v1 | — | — | ✅ hecho — ver [`sprint-00-05-historico.md`](sprints/sprint-00-05-historico.md) |
| — | Hotfix crítico: `HashRouter` rompía a un 404 con los enlaces del menú | S | — | ✅ hecho (no estaba planeado, se encontró en el camino) |
| — | Migración de hosting: GitHub Pages → Vercel, dominio `www.mapapets.co` | M | — | ✅ hecho |
| — | Seguridad: 11/15 vulnerabilidades de `npm audit` resueltas (4 quedaron afuera a propósito, ver abajo) | S | — | ✅ hecho |
| — | Video del Hero: formato vertical 9:16, comprimido (155.8MB → 10.2MB), `og-image.jpg`, foto de equipo actualizada | M | — | ✅ hecho |
| 6 | **SEO — arreglos rápidos** (título/meta estáticos en `index.html`, fix del bug de texto del H1, datos estructurados JSON-LD `Organization`+`FAQPage`, `poster` del video del Hero, revisar H2 con keywords reales) | S-M | Bajo | ⏳ siguiente |
| 7 | **SEO — pre-renderizado (SSG) de rutas públicas** — la causa raíz completa: hoy el HTML que recibe cualquier rastreador sin JS está prácticamente vacío | L | Medio-Alto — usar Preview Deployment antes de mergear a `main` (ver `docs/git-workflow.md`) | Pendiente |
| 8 | Code-splitting del bundle JS (`dynamic import()` en lightbox de fotos, selector de WhatsApp) — complementa el Sprint 7 en First Contentful Paint | S-M | Bajo | Pendiente |

## Backlog sin sprint asignado todavía

Los que no bloquean nada de lo de arriba, ordenados por lo que más
conviene resolver primero:

- **Limpiar infraestructura obsoleta de GitHub Pages**: borrar scripts
  `deploy`/`predeploy` de `package.json` y la dependencia `gh-pages` (ya
  no se usan, y `vite.config.js` con `base: '/'` los rompería si alguien
  los corre por error). Decidir qué hacer con la rama `gh-pages` en
  GitHub.
- **Revisar el proyecto duplicado en Vercel** (`landing-page-mapapets`
  sin el sufijo `-bd1g`, apareció al conectar el dominio) — confirmar si
  sigue existiendo y borrarlo si no tiene nada útil.
- **PropTypes vs. TypeScript**: decisión de arquitectura pendiente, ~70
  errores de lint acumulados a propósito hasta que se decida.
- **Meta Pixel**: esperando el Pixel ID del trafficker del cliente.
  Código ya listo (`VITE_META_PIXEL_ID` vacío = inactivo por diseño).
- **Verificación manual en dispositivo real** del botón flotante de
  WhatsApp (ocultarse/reaparecer según el CTA visible) — el entorno de
  pruebas automatizado no puede simular scroll real para confirmarlo.
- **Números de WhatsApp hardcodeados**: mover a config/env si se espera
  que cambien con frecuencia.
- **Doble responsabilidad de `FAQ.jsx`**: se usa embebido en `Home.jsx`
  sin ruta propia, pero el componente está armado como si fuera una
  página — causa el problema de doble `<h1>`/`<main>` mal ubicado que
  también toca el Sprint 6.
- **4 vulnerabilidades de `npm audit` sin resolver, a propósito**: una es
  del dev server únicamente (no afecta producción), la otra es un CVE de
  "RSC Mode" de React Router que esta app no usa (SPA client-side pura).
  Revisar de nuevo si algún día se planea un upgrade mayor de Vite.
- **Ítems de temporada** (nieve de `react-snowfall` para Navidad,
  librería de animación para Halloween) — sin urgencia mientras no se
  acerque la fecha.
- **`.claude/launch.json`**: sigue sin decidir si se deja en el repo
  (sirve para levantar el dev server rápido en cualquier sesión) o se
  borra.
