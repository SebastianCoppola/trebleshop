# Informe Técnico SEO — TrebleShop
**Materia:** Desarrollo de Sitios Web — UTN FRSF  
**Trabajo Práctico:** N.° 2  
**Fecha de entrega:** 30/06/2026
**Integrantes:** Sebastián Martín Coppola | DNI: 35.345.968

# Título del sitio y dominio

**Título:** TrebleShop — Guitarras Eléctricas de Alta Calidad
**Dominio elegido:** `trebleshop.com` (sin cambios respecto al TP1)
**URL publicada:** `https://sebastiancoppola.github.io/trebleshop/`

# Palabras clave objetivo

**Sitio general:** `guitarra eléctrica`, `comprar guitarra`, `tienda guitarras Argentina`, `TrebleShop`
**`index.html`:** `guitarras eléctricas alta calidad`, `Fender Stratocaster Argentina`, `Gibson Les Paul precio`, `tienda online guitarras`
**`catalogo.html`:** `catálogo guitarras eléctricas`, `Stratocaster precio Argentina`, `Telecaster comprar online`, `Les Paul Gibson Argentina`, `amplificadores guitarra`, `accesorios guitarra eléctrica`


# Estrategias de optimización aplicadas

1. Etiquetas semánticas HTML5

<header>   → navbar de navegación principal
<main>     → contenido principal de cada página
<section>  → bloque hero en index.html
<article>  → cada card de producto generada por JS
<aside>    → sidebar de categorías en catalogo.html
<footer>   → pie de página
<nav>      → barra de navegación
<ul>       → listas de navegación y categorías

2. Jerarquía de títulos

**index.html:** h1 → "Tocá con pasión. Comprá con confianza."
**catalogo.html:** h3 → nombre de cada producto (renderizado por JS)


3. Atributos `alt` en imágenes

Todas las imágenes tienen `alt` descriptivo definido en los datos del producto (`db/db.js`):
El `alt` describe el contenido real de la imagen.

4. URLs amigables

Home: `index.html`
Catálogo: `catalogo.html`

URLs cortas, en minúsculas y sin caracteres especiales.

5. Optimización de metadatos

Cada página tiene `<title>` y `<meta description>` propios.
Ambas páginas incluyen también `<meta name="keywords">`, `<meta name="robots" content="index, follow">` y tags Open Graph para redes sociales.

6. Minimización de código redundante

- CSS generado compilado y comprimido por Sass (`--style compressed`).
- Sin CSS inline en HTML; toda la presentación en `css/main.css`.
- Scripts cargados al final del `<body>` para no bloquear el renderizado.
- Google Fonts cargado con `rel="preconnect"` para anticipar la conexión.

4. Accesibilidad (ARIA)

- `aria-label` en botones sin texto visible (carrito, hamburger)
- `aria-current="page"` en el link activo del nav
- `aria-live="polite"` en el badge del carrito
- `aria-hidden="true"` en todos los íconos decorativos
- `aria-expanded` en el botón del acordeón de filtros mobile
- `lang="es"` en `<html>`


# Herramientas utilizadas

- **Google Lighthouse** (DevTools): Performance, Accessibility, SEO
- **WAVE** (WebAIM): accesibilidad