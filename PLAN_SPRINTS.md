# Plan de trabajo — Landing MapaPets
**Para:** Claude Code
**Origen:** auditoría técnica + feedback del trafficker digital, discutidos previamente con otro agente de Claude (Cowork).
**Documento de referencia:** `Auditoria_Landing_MapaPets.md` (auditoría completa, con severidad y detalle de cada hallazgo). Este documento es el backlog accionable derivado de esa auditoría, organizado por sprints.

---

## 0. Instrucciones de trabajo para Claude Code

Este proyecto **no tiene todavía un flujo de control de cambios establecido** (se detectó que los cambios se estaban haciendo directo sobre la rama activa, sin ramas ni commits). A partir de ahora, seguir esta disciplina:

1. **Nunca commitear directo sobre `main`/`master`.** Crear una rama por sprint (o por tarea si el usuario lo prefiere): `feature/sprint-1-git-y-housekeeping`, `feature/sprint-2-analytics`, etc.
2. **Antes de tocar nada**, correr `git status` y `git diff` para revisar si hay cambios sin commitear pendientes de una sesión anterior (ver sección 1 — hay cambios reales ya hechos que hay que revisar).
3. Commits atómicos y descriptivos (un cambio lógico por commit). Sugerido: Conventional Commits (`fix:`, `feat:`, `chore:`, `perf:`).
4. Antes de cerrar cada tarea: correr `npm run lint` y `npm run build` para confirmar que no se rompió nada.
5. No mergear a `main` sin que el usuario (Kenier) lo confirme explícitamente. Dejar la rama lista y avisar.
6. Hay un archivo suelto `check_syntax.mjs` en la raíz del repo (script temporal de verificación de sintaxis, dejado por error en una sesión anterior). **Bórralo** al empezar — no es parte del proyecto.

---

## 1. Estado actual: cambios ya hechos, sin commitear

En la sesión previa (Cowork) ya se implementaron varios cambios directamente sobre los archivos, **sin ningún commit de por medio**. Antes de escribir código nuevo, revisa estos archivos con `git diff` para entender qué ya está hecho, valida que funcione, y luego decide con el usuario si se comitean tal cual (recomendado) o se rehacen.

### Archivos modificados
- `index.html` — `lang="en"` → `lang="es"`; se eliminó el script duplicado de `gtag.js` (ahora GA se inicializa solo desde `src/analytics/analytics.js`).
- `src/App.jsx` — se agregó `useEffect` que llama a `initGA()` e `initPixel()` al montar, y se renderiza `<RouteTracker />` dentro del `<HashRouter>`.
- `src/analytics/analytics.js` — se agregó `trackWhatsAppContact(agentName)`, que dispara un evento tanto en GA4 como en Meta Pixel.
- `src/components/BotonWhatsApp.jsx` — el botón flotante ahora usa `IntersectionObserver` + `MutationObserver` para ocultarse (opacity/scale, con `pointer-events-none`) cuando hay algún elemento `[data-whatsapp-cta="true"]` visible en pantalla.
- `src/components/WhatsappSelector/WhatsappButton.jsx` — el botón interno ahora tiene `data-whatsapp-cta="true"` (así el floating button lo detecta).
- `src/components/WhatsappSelector/WhatsappSelector.jsx` — `openWhatsapp` ahora recibe también el nombre de la asesora y llama a `trackWhatsAppContact(agentName)` antes de abrir `wa.me`.
- `src/components/Footer/FooterContact.jsx` — los dos enlaces directos a `wa.me` (tarjeta de contacto y botón "Solicitar asesoría ahora") ahora tienen `data-whatsapp-cta="true"` y disparan `trackWhatsAppContact(...)`.
- `src/components/Destinos/SeccionDestinos.jsx` — grid de banderas: `grid-cols-1` → `grid-cols-2` en mobile (con paddings/tamaños de fuente ajustados para que quepa bien en 2 columnas).
- `src/pages/PoliticaPrivacidad.jsx` y `src/pages/TerminosCondiciones.jsx` — sus enlaces de WhatsApp también tienen `data-whatsapp-cta="true"`.
- `.env` — se agregó la variable `VITE_META_PIXEL_ID=` (vacía a propósito; ver Sprint 2).

### Archivos nuevos
- `src/analytics/metaPixel.js` — módulo de Meta Pixel. Inyecta el script `fbevents.js` **solo si `VITE_META_PIXEL_ID` tiene valor**; expone `initPixel()`, `pixelPageView()`, `pixelTrackEvent(nombre, params)`.
- `src/analytics/RouteTracker.jsx` — componente montado dentro del router; en cada cambio de ruta llama a `pageView()` (GA4) y `pixelPageView()` (Meta Pixel). Esto corrige el bug detectado en la auditoría: antes, navegar a `/politica-privacidad` o `/terminos-condiciones` no generaba un pageview en Analytics.
- `.env.example` — plantilla de variables de entorno sin secretos reales, para que cualquiera pueda levantar el proyecto sabiendo qué variables necesita.

**Verificación ya hecha:** todos estos archivos se validaron con un parser (`@babel/parser`, modo JSX) y no tienen errores de sintaxis. **No se pudo correr `npm run build`/`npm run lint` end-to-end** por un problema de entorno (el `node_modules` tenía binarios nativos de otra plataforma). Claude Code, al correr localmente en la máquina del usuario, sí debería poder correr `npm install`, `npm run lint` y `npm run build` sin ese problema — hazlo como primer paso de validación real.

---

## 2. Sprint 1 — Control de cambios + housekeeping

- [ ] Crear rama `feature/sprint-1-housekeeping`.
- [ ] Revisar y commitear (o rehacer) los cambios listados en la sección 1, ya en esa rama.
- [ ] Borrar `check_syntax.mjs` de la raíz.
- [ ] `vite.config.js`: el `base` está mal configurado como URL absoluta completa (`https://keniercccl.github.io/landing-page-mapapets/`). Debe ser una ruta relativa. Definir junto con el usuario cuál será el dominio/hosting final antes de fijar el valor correcto (probablemente `base: '/'` si el sitio se sirve desde la raíz de un dominio propio).
- [ ] Revisar dependencias instaladas pero no usadas en ningún import de `src/`: `bootstrap`, , `react-scroll` (`npm uninstall bootstrap react-snowfall react-scroll`). Solo `bootstrap-icons` se usa realmente.
- [ ] Dejaremos `react-snowfall` , ya que el cliente lo quiere usar para la navidad, asi que quiero que dejemos el cambio listo para que se vea la nieve en toda la pagina, (me tienes que decir donde lo activo para que se vea en toda la pagina, activarlo, hacer un push y el auto deploy [que luego configuraremos ], y asi se vea en producción, luego cuando pase la temporada, hago lo mismo, voy al codigo en local, hago el cambio y lo inhabilito)
- [ ] Al igual que  `react-snowfall`, debemos buscar alguna dependencia o libreria, que pueda ser usada en halloween (usuario ha considerado 'react-halloween' , 'halloween-bats.js' o Librerías de Animación General (GSAP o Anime.js)),  para que puedan ser activvadas durante la epoca (tendría que saber como usarlas, modificarlas, activarlas y desactivarlas sin que afecte el funcionamiento de la pagina)
- [ ] Confirmar que `.env` sigue sin trackearse en git (`git ls-files | grep env` debe devolver vacío).

**Criterio de aceptación:** `npm run lint` y `npm run build` pasan sin errores; el diff de esta rama es revisable y coherente por commit.

---

## 3. Sprint 2 — Analytics y Meta Pixel

Contexto: el trafficker digital del cliente pidió conectar Meta Pixel. El usuario **no tiene todavía el Pixel ID** — le indicaron que se lo entregarán junto con instrucciones de instalación. El código ya está preparado para recibirlo sin más cambios.

- [ ] Confirmar con el usuario si ya tiene el Pixel ID de Meta Business Manager.
  - Si no lo tiene: preguntar al usuario que hacer
- [ ] Pegar el Pixel ID real en `.env` (`VITE_META_PIXEL_ID=...`). Mientras esté vacío, `src/analytics/metaPixel.js` no inyecta ningún script (comportamiento seguro por diseño).
- [ ] Validar en el navegador (extensión "Meta Pixel Helper" o pestaña Network) que `fbevents.js` carga y que se dispara `PageView` al entrar y al navegar entre rutas.
- [ ] Validar en Meta Events Manager → "Test Events" que llegan los `PageView` y el evento `Contact` (se dispara cada vez que alguien elige una asesora y se abre WhatsApp, ver `trackWhatsAppContact` en `src/analytics/analytics.js`).
- [ ] Validar en GA4 → DebugView que ahora sí se registran pageviews al navegar a `/politica-privacidad` y `/terminos-condiciones` (antes no se registraban, era un hallazgo crítico de la auditoría).
- [ ] Si el trafficker pide más eventos de conversión (ej. clic en "Solicitar asesoría" del Hero, que hoy va a un Google Form y no a WhatsApp), coordinarlo como tarea aparte — hoy sólo se trackea el contacto real por WhatsApp.

**Criterio de aceptación:** Pixel activo solo si hay ID configurado; eventos visibles en Events Manager y GA4 DebugView; ninguna ruta deja de trackear pageview.

---

## 4. Sprint 3 — UX mobile (feedback del trafficker)

Feedback recibido, ya resuelto en código durante la sesión anterior — este sprint es de **validación en dispositivo real**, no de desarrollo desde cero:

- [ ] **Botón flotante de WhatsApp redundante:** validar en un teléfono real (o DevTools en modo mobile) que el botón flotante (`BotonWhatsApp.jsx`) desaparece con una transición suave cuando el usuario tiene a la vista cualquier otro botón de WhatsApp (Hero, Banner, Nuestra Huella, Footer, páginas legales), y que reaparece cuando ninguno está visible. Ajustar el `threshold` del `IntersectionObserver` (hoy `0.2`) si se ve muy agresivo o muy tardío.
- [ ] **Destinos en 2 columnas en mobile:** validar visualmente en `< 640px` que la sección "Destinos Internacionales" muestra 2 columnas y no 1, sin que el texto se vea apretado. Ajustar `gap`/padding si hace falta.
- [ ] Revisar si el usuario quiere aplicar el mismo criterio de "ocultar botón redundante" también en desktop, o solo en mobile (se implementó para ambos por consistencia; confirmar que esto está bien).
- [ ] Nota de contexto: el enlace `wa.me/56900000000` en el footer (sección "Desarrollo Web & Apps" / Código Café) **no es de MapaPets**, es el contacto de la agencia que desarrolló el sitio — no tocar ni incluir en el tracking de conversión de MapaPets.

**Criterio de aceptación:** sin solapamientos de CTAs en mobile; confirmado visualmente en al menos un dispositivo real o emulado.

---

## 5. Sprint 4 — Performance (imágenes y video)

Hallazgo más importante de la auditoría original: el build pesa ~27 MB, con varias imágenes de 2-2.4 MB cada una.

- [ ] Convertir a WebP (o AVIF) y redimensionar al ancho real de renderizado:
  - `src/assets/servicios/asesoria-internacional.png`, `asesoria-personalizada.png`, `microchip.png`, `pet-nanny_servicio.png`, `prueba-serologia.png`, `tramite-sanitario.png`, `vacunas-desparasitaciones.png` (todas 2-2.4 MB hoy).
  - `src/assets/banner-perro.png` (1.1 MB).
  - `src/assets/equipo/diana.png`, `maria-paz.png`, `maria-paz2.png` (0.5-2 MB).
- [ ] Comprimir o re-encodear `src/assets/videos/mapapets-hero.mp4` (4.8 MB) — evaluar servirlo desde un CDN de video o generar una versión más liviana/adaptativa. (nota de Kenier: si es mejor tener el video en flickr y descargarlo en la carga de la paginaa o mejor comprimirlo, tenerlo en el proyecto, dime)
- [ ] Medir con Lighthouse (mobile) antes y después del cambio; el objetivo es bajar LCP de forma notoria.

**Criterio de aceptación:** build (`dist/`) baja significativamente de peso; Lighthouse Performance mejora respecto a la medición base.

---

## 6. Sprint 5 — SEO, accesibilidad y seguridad restante

- [ ] Agregar `<SEO />` a `src/pages/FAQ.jsx` y a `src/pages/NotFound.jsx` (en `NotFound`, agregar `<meta name="robots" content="noindex" />` para que Google no indexe la 404).
- [ ] Decidir sobre `public/manifest.json` (hoy vacío y no enlazado desde `index.html`): completarlo si van a usar "agregar a inicio" tipo PWA, o eliminarlo si no.
- [ ] Mover la consulta a Flickr (`src/services/flickrService.js`) detrás de una función serverless/proxy para no exponer `VITE_FLICKR_API_KEY` en el bundle público, o rotar/restringir la key por dominio si Flickr lo permite.
- [ ] Evaluar migrar de `HashRouter` a `BrowserRouter` una vez que el hosting final esté definido (mejora URLs para SEO y para compartir en redes/WhatsApp, pero requiere que el hosting soporte rewrites).

---

## 7. Backlog / mejoras menores (sin sprint asignado todavía)

- [ ] Limpiar los `console.log` comentados en `src/components/NuestraHuella/PhotoCarousel.jsx`.
- [ ] Evaluar agregar `PropTypes` o migrar el proyecto a TypeScript si va a seguir creciendo.
- [ ] Aclarar la doble responsabilidad de `src/pages/FAQ.jsx` (se usa como "página" sin ruta propia y como sección embebida en `Home.jsx`) — renombrar o reestructurar si genera confusión a futuro.
- [ ] Mover los números de WhatsApp (`src/components/WhatsappSelector/whatsappData.js`) a variables de entorno o un JSON editable, si esperan que cambien con frecuencia.

---

## 8. Resumen de decisiones ya tomadas por el usuario

- Botón flotante de WhatsApp: **ocultar automáticamente** cuando haya un CTA de WhatsApp visible (no eliminarlo).
- Meta Pixel: el usuario aún no tiene el ID; se lo dará el trafficker junto con instrucciones. El código ya está listo para recibirlo vía `.env`.
- El punto "existen momentos donde hay elementos [...]" del feedback original era el mismo hallazgo de redundancia del botón de WhatsApp — no es un ítem aparte.
