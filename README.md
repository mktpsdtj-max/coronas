# Perfect Smile Dental — Coronas Dentales

Landing bilingüe (ES/EN) para **coronas dentales**.
Proyecto autónomo, pensado para su propio subdominio.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Rutas que genera

| URL | Qué es |
|---|---|
| `/` | redirige a `/es/` |
| `/es/` | landing en español |
| `/en/` | landing en inglés |

El subdominio ya identifica el tratamiento, así que la URL no lo repite.

## Dónde cambiar cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Cualquier texto de la landing | `src/data/content.ts` |
| Imágenes, galería del hero y posters | `src/data/content.ts` → constante `IMG` |
| Colores, tipografía, botones | `src/styles/global.css` (tokens en `:root`) |
| Navbar / footer / botones compartidos | `src/i18n/ui.ts` |
| Teléfono, WhatsApp, embed del mapa | `src/i18n/ui.ts` → `contact` |
| El subdominio (canónicas y hreflang) | `astro.config.mjs` → `site` |
| Cómo se ve un bloque | su `.astro` en `src/components/` |

## Estructura de la página

Hero con galería (foto completa + galería flotante con dots) →
Quién lo Necesita (video + texto) → Por qué Tijuana (**4 cards** + mapa) →
Materiales (3 cards oscuras: Circonia / E-Max-Porcelana / CAD-CAM) →
Tu Experiencia en la Clínica (imagen izq + 5 pasos + botón) → CTA final.

Para reordenar o quitar una sección, edita `src/pages/[lang]/index.astro`:
las secciones se listan ahí en orden, una línea cada una.

**Nota:** esta landing no tiene bloque de "Proceso" en 3 pasos — los pasos
clínicos viven dentro de "Tu Experiencia en la Clínica", como lista.

## La galería del hero

Se configura desde `content.ts` → `hero.gallery`. Acepta cualquier número de
imágenes: los dots y el autoplay (4 s) se generan solos.

```ts
gallery: [
  { src: '…', alt: '…' },
  { src: '…', alt: '…' },
]
```

El botón secundario del hero (`playCta` / `playHref`) hace scroll a la sección
de materiales. Si cambias el `id` de esa sección, actualiza también `playHref`.

## Videos

El video abre en un modal compartido (`VideoModal.astro`, montado una vez en el
layout). Para activarlo, en `content.ts` llena el objeto `video`:

```ts
video: {
  src: 'https://tu-cdn.com/coronas.mp4',   // o el embed de YouTube/Vimeo
  type: 'mp4',                              // 'mp4' | 'youtube' | 'vimeo'
  poster: 'https://.../preview.jpg',
  alt: '…', eyebrow: '…', title: '…',
}
```

El `poster` **no tiene que ser una foto aparte**: puede ser un fotograma del
propio video, o la miniatura automática de YouTube
(`https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`).

Mientras `src` esté vacío, el modal abre con un mensaje en vez de un
reproductor roto.

## Pendientes antes de publicar

- [ ] Reemplazar las imágenes placeholder (`IMG` en `content.ts`)
- [ ] Cargar el `src` del video
- [ ] Número toll-free y link de WhatsApp reales en `src/i18n/ui.ts`
- [ ] Subdominio real en `astro.config.mjs`

## Nota sobre los otros tratamientos

Este proyecto es autónomo: trae su propia copia del sistema de diseño
(`global.css`), el modal de video y los componentes compartidos. Si cambias un
token de marca o el teléfono, recuerda replicarlo en los otros subdominios.
