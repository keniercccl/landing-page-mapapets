# Auditoría SEO — www.mapapets.co

**Fecha:** 15 de agosto de 2026
**Objetivo del cliente:** duplicar la visibilidad de búsqueda del sitio y posicionar por las palabras clave que realmente buscan los dueños de mascotas que necesitan viajar.
**Origen:** 12 observaciones del reporte de [suite.seotesteronline.com](https://suite.seotesteronline.com/), verificadas una por una contra el sitio real (no doy nada por sentado del reporte externo — cada punto tiene evidencia propia abajo).

---

## El hallazgo que explica casi todo

Antes de ir punto por punto: **8 de las 12 observaciones de tu herramienta tienen la misma causa raíz.**

Hice la prueba clave — pedí la página tal como la recibe cualquier robot que **no ejecuta JavaScript** (así es como trabajan la mayoría de las herramientas de auditoría SEO, y como funciona la primera pasada de casi todos los buscadores):

```
GET https://www.mapapets.co/  →  1045 bytes de HTML total
```

Eso es *todo* lo que hay. El contenido real es:

```html
<title>Mapapets</title>
<!-- sin meta description -->
<!-- sin H1 -->
<!-- sin texto -->
<body>
  <div id="root"></div>   <!-- completamente vacío -->
</body>
```

**Todo** — el título real, la descripción, los `<h1>`, los `<h2>`, el texto de servicios, el FAQ, absolutamente todo el contenido que ves en el navegador — se inyecta con JavaScript *después* de que el navegador descargue y ejecute un archivo de 574KB (`index-BLl_sDls.js`, 184KB comprimido). Hasta que ese script termina de correr, la página está objetivamente vacía.

Esto no es un bug de un componente puntual: es una decisión de arquitectura de cuando se armó el proyecto (una SPA de React con Vite, 100% renderizada en el navegador — sin servidor que arme el HTML). Funciona perfecto para las personas (por eso el sitio "se ve bien"), pero para cualquier robot que solo lee HTML crudo, la página **no existe**.

> **Sobre Google específicamente:** Google sí ejecuta JavaScript en una segunda pasada de su rastreo (a diferencia de tu herramienta), así que probablemente termina "viendo" más contenido que lo que muestra tu reporte — pero esa segunda pasada es más lenta, consume el presupuesto de rastreo del sitio, y **el tiempo que tarda en aparecer contenido también es, literalmente, lo que Google mide como Core Web Vitals** (puntos 12 y 13 de tu lista) — que sí son factor de ranking directo. O sea: el mismo problema te golpea dos veces, en rastreo *y* en el puntaje de rendimiento que usa Google para posicionar.

Con este hallazgo como base, el resto del documento tiene sentido.

---

## Punto por punto de las 12 observaciones

| # | Observación de la herramienta | ¿Real? | Causa verificada |
|---|---|---|---|
| 1 | Optimizar el H1 | ✅ Confirmado | El HTML crudo no tiene ningún `<h1>` (se inyecta por JS). Además, encontré un bug real en el texto (ver abajo). |
| 2 | No hay keywords del H1 en el texto | ✅ Confirmado | Mismo origen: sin HTML crudo, no hay texto contra el cual comparar nada. |
| 3 | Optimizar los H2 | ✅ Confirmado | 0 `<h2>` en el HTML crudo. Ya renderizados, hay 12 — pero ninguno visible para un rastreador sin JS. |
| 4 | Número de palabras no óptimo | ✅ Confirmado | HTML crudo: ~0 palabras visibles. Ya renderizado: ~8.070 caracteres de texto visible — razonable, pero irrelevante si el rastreador no lo ve. |
| 5 | Ratio Texto/HTML | ✅ Confirmado (doble motivo) | (a) Antes de JS: 0% de ratio, literal. (b) Ya renderizado: **8.9 KB de texto sobre ~101 KB de HTML final ≈ 8%**, bajo igual, porque Tailwind genera clases larguísimas en cada elemento (`className="..."` de 10-15 líneas es común en este proyecto). |
| 6 | No hay keywords relevantes en el texto | ✅ Confirmado | Mismo origen que el #2. |
| 7 | No hay headings en el texto | ✅ Confirmado | Mismo origen que el #1 y #3. |
| 8 | Google snippet no optimizado | ✅ Confirmado | El snippet que arma Google sale del `<title>`/`<meta description>` que ve en el HTML — y ahí el título real es **"Mapapets"** a secas (no "MAPAPETS \| Viaja con tu mascota sin complicaciones", que es lo que se ve en la pestaña del navegador solo *después* de que carga el JS), y no hay meta description en absoluto. |
| 9 | Título no optimizado | ✅ Confirmado | El `<title>` estático en `index.html` es literalmente `Mapapets` — 8 caracteres, sin ninguna palabra clave. Es el "título de respaldo" que ve cualquiera que no ejecute JS. |
| 10 | Meta Description no optimizada | ✅ Confirmado | No existe ninguna etiqueta `<meta name="description">` en el HTML crudo — la que ves renderizada la agrega JavaScript después. |
| 11 | Microdatos (structured data) no configurados | ✅ Confirmado | Cero etiquetas `<script type="application/ld+json">` en todo el sitio, ni estáticas ni dinámicas. No hay ningún schema.org configurado (ni `Organization`, ni `LocalBusiness`, ni `FAQPage`, ni `Service`). |
| 12 | First Contentful Paint = 28/100 | ✅ Consistente con la arquitectura | El primer contenido visible no puede pintar hasta que se descargue+ejecute el bundle de 574KB. Es esperable un FCP malo en cualquier SPA 100% client-side sin optimizar, y este es un caso de manual. |
| 13 | LCP = 5.0/100 | ✅ Consistente, y con un agravante | Mismo motivo que el FCP, más un agravante concreto: el video del Hero (10.2MB, autoplay) es probablemente el elemento más grande de la pantalla inicial, y **no tiene atributo `poster`** — el navegador no tiene nada que pintar de inmediato mientras el video decodifica su primer frame. |

**Conclusión de esta sección:** tu herramienta tiene razón en las 12 observaciones. No hay ninguna que sea un falso positivo.

---

## Bug concreto encontrado en el H1 (independiente del problema de arquitectura)

Mirando el código del Hero, encontré que el `<h1>` real —una vez renderizado— dice literalmente:

```
"Viaja con tu mascotasin complicaciones"
```

**Sin espacio entre "mascota" y "sin".** Visualmente no se nota (el diseño separa el texto en dos líneas con CSS), pero el *texto real* que lee cualquier motor de búsqueda o lector de pantalla es una palabra pegada sin sentido — "mascotasin" no es una keyword de nadie. Esto es la causa técnica exacta detrás del punto #2 de tu reporte ("no hay keywords del H1 en el texto"): la keyword real ("mascota") ni siquiera existe como palabra completa en el H1.

Es un cambio de una línea de código, cero riesgo, y hay que arreglarlo junto con la optimización general del H1.

---

## Investigación de keywords (para lo que sí quieres: aparecer cuando la gente busca esto)

Basado en el negocio real de MapaPets (asesoría y gestión para viajes internacionales de mascotas, con base en Bogotá, trámite ICA, destinos verificados en el sitio: EE.UU., México, Panamá, Argentina, Suecia, República Dominicana, y los servicios reales que ofrecen: viajes internacionales, trámites sanitarios, microchip, pet nanny, vacunas/desparasitación, prueba de anticuerpos rabia, asesoría personalizada):

### Keywords principales (intención alta, volumen relevante)
- viajar con mascota al extranjero
- transporte internacional de mascotas
- exportar mascota desde Colombia
- requisitos ICA para exportar mascota / trámite ICA mascotas
- certificado sanitario internacional para mascotas
- asesoría para viajar con mascotas
- mudanza internacional con mascotas
- pet relocation Colombia *(la comunidad expat/inmigrante suele buscar en inglés o mixto)*

### Keywords de servicio (para mapear 1 a 1 con cada tarjeta de servicio existente)
- microchip para mascotas viaje internacional → servicio "Implantación de Microchip"
- pet nanny para viajar con mascota / acompañante de mascotas en vuelos → servicio "Pet Nanny"
- prueba de anticuerpos rabia mascota (FAVN) → servicio "Prueba de Anticuerpos Rabia"
- vacunas y desparasitación para viajar con mascota → servicio correspondiente
- trámites sanitarios para exportar mascota → servicio "Trámites Sanitarios"

### Long-tail por destino (mucho menos competencia, conversión más alta — y coincide con los países que ya se muestran en la sección de Destinos)
- requisitos para viajar con perro a México / España / Estados Unidos / Panamá / Argentina
- cuarentena de mascotas en [país]
- aerolíneas que permiten mascotas en cabina

### Keywords tipo pregunta (excelente material — ya existen como preguntas del FAQ, solo falta que un buscador las pueda leer)
- ¿mi mascota puede viajar en cabina?
- ¿las mascotas viajan sedadas?
- ¿qué documentos necesita mi mascota para viajar?
- ¿cuánto tiempo antes debo iniciar el trámite para viajar con mi mascota?

Estas últimas son un caso perfecto para "featured snippets" de Google *si* se marcan con datos estructurados `FAQPage` (ver recomendaciones) — hoy no pueden competir por eso porque, otra vez, el rastreador sin JS no las ve.

---

## Recomendaciones, en dos niveles

### Nivel 1 — Rápidas, bajo riesgo, arrancar ya

1. **Arreglar el `<title>` y agregar `<meta name="description">` estáticos en `index.html`.** Hoy el "título de respaldo" es literalmente "Mapapets". Cambiarlo a algo como `MAPAPETS | Transporte y Asesoría Internacional para Mascotas` y agregar una meta description real directo en el HTML (no solo por JS) — así cualquier rastreador, sin excepción, ve algo decente desde el primer byte. El `<SEO/>` dinámico que ya tenemos puede seguir sobrescribiéndolo por ruta para usuarios reales; esto es solo el piso mínimo garantizado.
2. **Arreglar el bug del H1** ("mascotasin" → "mascota sin").
3. **Agregar datos estructurados (JSON-LD) estáticos en `index.html`**: como mínimo `Organization`/`LocalBusiness` (nombre, dirección de Bogotá, teléfono, redes sociales) y `FAQPage` con las preguntas reales del FAQ. Al ser estático, un rastreador sin JS también lo ve — resuelve el punto #11 de raíz.
4. **Agregar `poster` al video del Hero** — una imagen estática que se vea de inmediato mientras el video carga. Ataca directo el LCP.
5. **Revisar los H2 para que incluyan keywords reales del negocio** en vez de frases genéricas — ej. "¿Por qué elegir Mapapets?" podría ser "¿Por qué elegir Mapapets para el viaje internacional de tu mascota?".

### Nivel 2 — Estructural, más esfuerzo, mayor impacto (esto es lo que de verdad puede acercarte a ese "100% más de visibilidad")

6. **Pre-renderizado (SSG) para las rutas públicas.** Sin reescribir el proyecto ni migrar de framework: usar una herramienta de prerender en el build (genera un HTML ya armado con el contenido real para Home, Política de Privacidad y Términos, que se sirve primero y luego "cobra vida" con React normalmente). Esto resuelve **los 8 primeros puntos de la tabla de arriba, todos a la vez**, y además mejora el FCP porque hay contenido real para pintar antes de que el JS termine de cargar.
7. **Alternativa más liviana**, si el pre-renderizado completo es mucho para este sprint: un servicio de "renderizado para bots" (ej. Prerender.io, o una función en Vercel que detecte el user-agent de un crawler y le sirva una versión pre-renderizada) — mismo resultado para SEO, sin tocar la arquitectura del sitio para usuarios reales.
8. **Reducir el bundle de JS** (ya estaba anotado en la auditoría de performance anterior: 578KB sin dividir) — con `dynamic import()` para el lightbox de fotos, el selector de WhatsApp, y otros componentes que no se necesitan en el primer pintado. Menos JS que descargar y ejecutar antes de FCP.

---

## Resumen para decidir

Los 5 ítems del Nivel 1 se pueden hacer en un sprint chico, con riesgo bajo, y ya deberían mover la aguja en varias de las 12 observaciones. El Nivel 1 no resuelve el problema de fondo (que un rastreador sin JS siga viendo casi nada), pero sí achica el daño inmediato.

El punto #6 (pre-renderizado) es la única acción que ataca la causa raíz completa. Es más trabajo, pero es la diferencia entre "tapar síntomas" y que el sitio compita de verdad por las keywords de la lista de arriba.
