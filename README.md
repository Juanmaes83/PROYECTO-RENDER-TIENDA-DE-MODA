# RENDER — Moda Editorial

Una experiencia editorial de moda contemporánea con tipografía dramática, carrusel 2-up con GSAP, y paleta rojo impactante.

**Live Site:** https://kxcvdwboh6vpm.ok.kimi.link

## Arquitectura

Sitio **standalone basado en CDN** (sin paso de build):
- React 18 via CDN (UMD)
- Tailwind CSS via CDN
- **GSAP 3.12.5 core via CDN** (única dependencia)
- Babel standalone para JSX
- Assets servidos estáticamente

## GSAP Animations (3 WOW Effects)

### A) Intro Cinematic (run once)
- Back card: `from {y:26, x:10, rotate:1.6, opacity:0, scale:0.985}` → visible
- Front card: `from {y:34, x:-10, rotate:-1.8, opacity:0, scale:0.975}` → visible + micro overshoot
- Title: subtle lift fade
- Rail: reveal last

### B) Premium Swap (thumb click / play tick / back-toggle)
- Outgoing: `to {opacity:0, y:8, scale:0.992}`
- Incoming front: `from {opacity:0, x:-12, y:10, scale:0.99}` → visible
- Incoming back: `from {opacity:0, x:14, y:6, scale:0.99}` → visible (delay 80ms)
- Micro-parallax on wrappers during swap

### C) Hover Micro-Depth (desktop only)
- Front: `y:-10, rotate:-0.6, scale:1.012`
- Back: `y:6, x:10, rotate:0.35, scale:0.995`

### Fallback
Si GSAP no carga → CSS transitions funcionan igual (sin animaciones premium).

## Autoplay Behavior

- **Play click:** Avanza inmediatamente una vez, luego cada 4.2s
- **Single interval:** Siempre `clearInterval` antes de crear nuevo
- **User interaction:** Cualquier click/thumb/key detiene autoplay
- **Visibility change:** Pausa cuando tab está oculto, reanuda al volver (si estaba playing)
- **Reduced motion:** Autoplay desactivado y botón oculto

## Data Contract

```javascript
const MODELS = [
  { id: "01", src: "/assets/models/model-01.jpg", alt: "Look editorial 01" },
  ... // 16 items
];
```

State:
- `frontIndex` (0..15)
- `backIndex` (0..15) — nunca igual a frontIndex
- Regla: si back == front → back = (front+1) % len

## Secciones

1. **Hero** — Carrusel 2-up, thumbnails, play/pause, "Cambiar trasera"
2. **Shop** — Intro editorial con CTAs
3. **About/Manifesto** — Copy editorial + imagen showroom
4. **Archive** — Grid de 12 looks
5. **Search** — UI de búsqueda
6. **Footer**

## Assets

### Requeridos
```
/assets/models/model-01.jpg ... model-16.jpg     (16 thumbnails)
/assets/mockups/shelves-render.jpg               (About section, opcional)
```

### Fallbacks
- Imágenes 404 → SVG placeholder inline
- showroom 404 → gradient block limpio

## A11Y

- Skip link primero en body → `#contenido-principal`
- `<main id="contenido-principal" tabindex="-1">`
- Tap targets ≥ 44px
- Focus visible: blanco sobre rojo, negro sobre claro
- Thumbnails: `aria-pressed` para selección frontal
- Play button: `aria-label` dinámico (Reproducir/Pausar)

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  /* GSAP desactivado */
  /* Autoplay oculto */
  /* Reveal inmediato */
  /* Transiciones instantáneas */
}
```

## QA Checklist

### Assets
- [ ] `/assets/models/model-01.jpg` ... `model-16.jpg` existen
- [ ] Imágenes cargan en normal + incógnito

### GSAP
- [ ] `window.gsap` disponible (ver consola)
- [ ] Intro animación ejecuta al cargar
- [ ] Swap animation en click de thumb

### Autoplay
- [ ] Play avanza inmediatamente
- [ ] Luego avanza cada 4.2s
- [ ] Click thumb detiene autoplay
- [ ] Solo un intervalo activo (verificar con `console.log`)

### Reduced Motion
- [ ] Probar en DevTools: Rendering → Emulate CSS media feature prefers-reduced-motion
- [ ] Autoplay botón debe ocultarse
- [ ] Animaciones GSAP no ejecutan
- [ ] Contenido visible inmediatamente

### Keyboard
- [ ] Tab navega secuencialmente
- [ ] Enter/Space en thumbnail activa
- [ ] Skip link funciona

### Responsive
- [ ] No overflow-x en body
- [ ] Thumbnail rail scrollable horizontal (intencional)
- [ ] Cards se ajustan en móvil

## SEO

```html
<title>RENDER — Moda editorial</title>
<meta name="description" content="...">
<meta property="og:title" content="RENDER — Moda editorial">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
```

## Licencia

MIT
