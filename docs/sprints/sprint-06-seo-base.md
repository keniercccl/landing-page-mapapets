# Sprint 6 — SEO base (arreglos rápidos)

**Commit:** `54259ad` · **Rama:** `fix/seo-sprint-6-base` (ya borrada, mergeada a `main`)
**Base:** [`docs/seo-auditoria-2026-08-15.md`](../seo-auditoria-2026-08-15.md)

## Qué se hizo

1. **`index.html`: título y meta description estáticos.** Antes: `<title>Mapapets</title>` a secas, sin `<meta name="description">` — es literalmente todo lo que ve un rastreador que no ejecuta JavaScript. `SEO.jsx` los sigue sobrescribiendo por ruta para usuarios reales y el renderizado con JS de Google, sin cambios ahí.
2. **`index.html`: JSON-LD `Organization`** — nombre, dirección de Bogotá, teléfono, redes sociales, logo (`public/logo-mapapets.png`, copia con URL estable del logo que antes solo vivía empaquetado por Vite). Solo `Organization` por ahora: `FAQPage` y otros schemas por página quedan para el Sprint 7, porque hoy `index.html` es compartido por todas las rutas y no se puede scopear correctamente sin pre-renderizado.
3. **`index.html`: se quita `/vite.svg`** (favicon fantasma, el archivo nunca existió en el proyecto).
4. **`Hero.jsx`: bug real de texto en el H1.** "Viaja con tu mascota" y "sin complicaciones" se concatenaban sin espacio (`"mascotasin"`) — invisible visualmente (el diseño usa un `<span className="block">` para separar la línea), pero el texto real que lee cualquier buscador quedaba roto.
5. **`Hero.jsx`: `poster` en el `<video>`** — frame extraído con `ffmpeg` del video ya comprimido, optimizado a WebP (69KB). Ataca el LCP: antes no había nada que pintar mientras el video cargaba.
6. **`SeccionRazonesColombia.jsx`: H2 con keyword real** — "¿Por qué elegir Mapapets?" → "¿Por qué elegir Mapapets para el viaje internacional de tu mascota?".

## Verificado

- `fetch('/')` sin ejecutar JS confirma título y description estáticos presentes, JSON-LD parseable (`JSON.parse` sin error), sin referencia a `vite.svg`.
- H1 renderizado: `"Viaja con tu mascota sin complicaciones"` (con espacio).
- `poster` del video responde 200, `image/webp`.
- `npm run build` y `npm run lint` (71 errores, sin cambios respecto a la base).

## Pendiente (no es parte de este sprint)

- `FAQPage` schema y meta tags realmente por-ruta en el HTML crudo — requiere el Sprint 7 (pre-renderizado).
- Revisar el resto de los H2 de la página con el mismo criterio (se tocó solo el más genérico como prueba de concepto; no se reescribió toda la copy de marketing sin pedirlo).
