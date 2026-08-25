# MapaPets — guía para retomar el proyecto

Este archivo es lo primero que hay que leer al arrancar una sesión nueva
en este repo. Documenta convenciones **estables** — cosas que no cambian
sprint a sprint. El estado de avance vivo está en
[`docs/ROADMAP.md`](docs/ROADMAP.md) y en [`docs/sprints/`](docs/sprints/),
no acá.

## Cómo arrancar una sesión nueva (orden recomendado)

1. Este archivo, completo.
2. `docs/ROADMAP.md` — en qué sprint estamos, qué sigue, qué necesita del
   usuario (decisiones, contenido, aprobación de producción).
3. El último `docs/sprints/sprint-NN-*.md` (el de número más alto) — qué
   se hizo en el sprint más reciente, y si quedó algo pendiente explícito.
4. `git status`, `git log --oneline -15` y `git branch -a` — estado real
   del repo, no solo lo que dicen los docs (puede haber una rama abierta
   sin mergear, o cambios sin commitear de una sesión anterior).

No hace falta leer sprints viejos completos salvo que el trabajo nuevo
toque esa área específica — están para consultar, no para releer enteros.

## Reglas de colaboración

- **Comunicación**: español, directo, sin relleno.
- **Autonomía**: avanzar directo en decisiones reversibles o que ya se
  desprenden de algo acordado. Consultar antes solo cuando algo es
  genuinamente difícil de revertir, o cuando falta un dato que solo el
  usuario tiene (contenido real, decisiones de negocio, credenciales de
  cuentas de terceros).
- **Avisar explícitamente antes de**: crear una rama nueva, instalar una
  dependencia nueva (con la justificación de por qué hace falta — incluye
  herramientas de sistema como `ffmpeg`, no solo paquetes de npm).
- **Nunca commitear directo sobre `main`.** Una rama por tarea/sprint,
  `tipo/descripcion-corta`. Ver [`docs/git-workflow.md`](docs/git-workflow.md)
  para el flujo completo, incluida la estrategia de despliegue seguro con
  rollback.
- **Verificar de verdad, no declarar**: `npm run build` y `npm run lint`
  antes de cada merge, sin excepción. Para cambios visuales, levantar
  `npm run dev` y confirmar en el navegador — no alcanza con que compile.
- **Archivos binarios grandes** (video, fotos de equipo sin optimizar):
  nunca commitear tal cual llegan. Ver "Decisiones cerradas" abajo — hay
  un pipeline ya establecido para cada tipo de asset.

## Decisiones cerradas (no hace falta redecidirlas)

- **Hosting**: Vercel, conectado al repo de GitHub con auto-deploy en
  cada push a `main`. Dominio propio `www.mapapets.co` (comprado directo
  en Vercel, DNS autogestionado), con `mapapets.co` (apex) redirigiendo a
  `www`. **GitHub Pages quedó obsoleto** — `vite.config.js` tiene
  `base: '/'` (correcto para Vercel), lo que rompe el script
  `npm run deploy`/`gh-pages` si alguien lo llega a correr por error. No
  usarlo.
- **Routing**: `BrowserRouter` (migrado desde `HashRouter`). Requiere el
  rewrite de `vercel.json` (`/((?!api/).*) -> /index.html`, excluye
  `/api/*` a propósito para no romper las funciones serverless).
- **SEO por ruta**: `src/components/SEO/SEO.jsx` — **no usa
  `react-helmet-async`** (se descartó: la librería no escribía nada al
  DOM en este proyecto, verificado en dev y en build de producción). Es
  un hook simple que manipula `document.title`/`document.head`
  directamente vía `useEffect`. Soporta `noindex` para páginas que no
  deben indexarse (ej. la 404).
- **Galería de Flickr**: proxy serverless (`api/flickr.js`, función de
  Vercel) — la API key vive en variables de entorno **sin** prefijo
  `VITE_` (`FLICKR_API_KEY`, `FLICKR_ALBUM_ID`), configuradas en el
  dashboard de Vercel, nunca en el bundle del cliente. Para probar la
  galería en local hace falta `vercel dev`, no `npm run dev` — Vite no
  corre funciones serverless.
- **Imágenes**: pipeline con `sharp` (devDependency) —
  `scripts/optimize-images.mjs` como referencia reutilizable. Cualquier
  foto/imagen nueva que llegue sin optimizar (fotos de equipo, servicios)
  se convierte a WebP y se redimensiona al ancho real de renderizado
  antes de commitear — nunca el archivo tal cual llega.
- **Video**: se comprime con `ffmpeg` (instalado vía `winget`, no es
  paquete npm) antes de commitear. Patrón usado para el video del Hero
  (vertical 9:16, 1080x1920 original → 720x1280, sin audio —el video va
  `autoPlay muted loop`, el audio nunca se reproduce—, `-crf 26`,
  `-movflags +faststart`).
- **PropTypes**: no instalado. Hay ~70 errores de lint de
  `react/prop-types` sin resolver a propósito — decisión pendiente entre
  agregar PropTypes (dependencia nueva) o migrar a TypeScript más
  adelante. No agregar PropTypes file por file sin esa decisión tomada.
- **Analytics**: GA4 y Meta Pixel se inicializan desde
  `src/analytics/` (no desde `index.html`). Meta Pixel solo se activa si
  `VITE_META_PIXEL_ID` tiene valor — está vacío hasta que el trafficker
  del cliente lo entregue.

## Variables de entorno — dónde va cada una

`.env` (gitignored, no se trackea — confirmar con `git ls-files | grep env`
si hay dudas). `.env.example` documenta los nombres sin valores reales.
Las que necesita `api/flickr.js` (server-side) van **también** en el
dashboard de Vercel (Settings → Environment Variables) — un `.env` local
no llega a producción.

## Stack

Vite + React 18 + React Router 7 (`BrowserRouter`) + Tailwind CSS +
Framer Motion + Swiper. Hosting: Vercel (con una función serverless para
Flickr). Sin backend propio, sin base de datos.
