# Flujo de Git y despliegue — MapaPets

Proyecto chico, un solo desarrollador (Kenier + Claude) → flujo directo,
sin sistema de Pull Requests. `main` es la única rama permanente, y cada
push a `main` dispara un deploy automático a `www.mapapets.co` en Vercel.
Justo por eso, cuidar cómo y cuándo se pushea a `main` importa más que en
un equipo con revisión de PRs de por medio.

## Ramas

- **`main`**: única rama permanente. Nunca se commitea directo ahí.
- **Ramas de tarea, de vida corta**, convención `tipo/descripcion-corta`:
  `feat/...`, `fix/...`, `chore/...`, `perf/...`, `docs/...`.
- Se avisa explícitamente antes de crear cada rama.
- Se borra al mergear (local — estas ramas normalmente ni se pushean a
  GitHub, salvo que se use un Preview Deployment, ver abajo).

## Ciclo normal (cambios de riesgo bajo)

```bash
git checkout main && git pull
git checkout -b fix/descripcion-corta
# ... trabajo, commits atómicos ...
npm run build && npm run lint      # sin excepción, antes de mergear
git checkout main
git merge fix/descripcion-corta --no-edit
npm run build                       # una vez más, sobre main ya combinado
git push origin main
git branch -d fix/descripcion-corta
```

Esto es lo que se usó durante todo el proyecto hasta ahora (hotfixes,
sprints de performance/SEO/seguridad). Sigue siendo el flujo por defecto.

## Ciclo para cambios de riesgo medio/alto — Preview Deployment antes de producción

Para sprints que tocan algo estructural (el pre-renderizado de SEO, una
migración de router, cualquier cosa donde "funciona en local" no da
suficiente garantía de que funcione igual en el hosting real), se suma un
paso antes de tocar `main`:

```bash
git push -u origin fix/descripcion-corta   # push de la RAMA, no a main
```

Vercel detecta cualquier rama pusheada al repo conectado y genera
automáticamente un **Preview Deployment** en una URL propia
(`landing-page-mapapets-git-<rama>-<usuario>.vercel.app`) — un entorno
idéntico a producción (mismo build, mismas funciones serverless), sin
tocar `www.mapapets.co`. El link aparece en el dashboard de Vercel
(pestaña Deployments) apenas termina el build de la rama.

Con el visto bueno probando ese preview, recién ahí se hace el merge a
`main` y el push que dispara el deploy real:

```bash
git checkout main && git merge fix/descripcion-corta --no-edit
npm run build
git push origin main
git branch -d fix/descripcion-corta
```

## Si algo falla en producción — rollback

**Primera opción, la rápida (segundos, sin depender de git ni de un build
nuevo):** Vercel guarda el historial completo de deploys. Dashboard →
Deployments → elegir el deploy anterior que funcionaba bien → **"Promote
to Production"**. Instantáneo.

**Segunda capa, para que el repo quede consistente con lo que está en
producción:**

```bash
git checkout main && git pull
git revert -m 1 <hash-del-commit-de-merge>   # o el commit puntual si fue un push directo
git push origin main
```

Usar `git revert`, no `git reset --hard` — nunca reescribir el historial
de `main` una vez pusheado.

## QA

- `npm run build` + `npm run lint` antes de cada merge, siempre — no es
  opcional ni "si hay tiempo".
- Cambios visuales: `npm run dev`, verificar en el navegador en al menos
  mobile y desktop antes de dar por terminado.
- Cambios de SEO/metadata: verificar contra el **HTML crudo real**
  (`fetch()` sin ejecutar JS, o `curl`), no solo contra el DOM ya
  renderizado — son cosas distintas en esta app mientras no haya
  pre-renderizado (ver `docs/ROADMAP.md`, Sprint 6-7, y el reporte de
  auditoría SEO referenciado ahí para el porqué completo).
- Cambios de assets pesados (imágenes/video): confirmar el peso final del
  archivo commiteado, no asumir que "se comprimió bien" sin medirlo.
