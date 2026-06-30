# Informe Técnico Web — TrebleShop
**Materia:** Desarrollo de Sitios Web — UTN  
**Trabajo Práctico:** N.° 2  
**Fecha de entrega:** 30/06/2026
**Integrantes:** Sebastián Martín Coppola | DNI: 35.345.968

# Componentes JavaScript de Bootstrap utilizados

1. Collapse — Navbar hamburger
- **Dónde:** HOME y CATÁLOGO.
- **Qué hace:** Show/hide del menú de navegación en mobile.
- **Por qué:** Solución de Bootstrap para navegación responsiva sin escribir JS.

2. Collapse — Filtros mobile
- **Dónde:** CATÁLOGO
- **Qué hace:** Expande/colapsa la lista de categorías en mobile. En desktop el sidebar siempre es visible.
- **Por qué:** Evita que los filtros consuman espacio vertical en pantallas chicas.

3. Modal — Detalle de producto
- **Dónde:** CATÁLOGO.
- **Qué hace:** Abre un modal con el detalle del producto al hacer click.
- **Por qué:** El usuario puede ver el detalle sin abandonar el catálogo.


# Uso de JavaScript para captura de eventos

Todos los eventos se registran en `js/main.js` dentro del `DOMContentLoaded`. Los datos del catálogo se cargan desde `db/db.js` como variable global.

1. Click en `.cat-item` — filtro de categoría
Llama a `filterByCategory(category)`, que filtra el array `PRODUCTS` y re-renderiza el grid con `renderProducts()`. También actualiza el estado visual del ítem activo y, en mobile, cierra el acordeón.

2. Click en `.product-card` — abrir modal
Llama a `openProductModal(productId)`, que busca el producto en `PRODUCTS`, rellena los campos del modal y lo muestra con `bootstrap.Modal.getOrCreateInstance()`. Si el click fue sobre el botón "Agregar", el evento se ignora con `e.target.closest()`.

3. Click en `.add-to-cart-btn` — agregar desde card
Llama a `addToCart()`, que incrementa `cartCount` y actualiza el badge en el navbar. El botón cambia visualmente a "Agregado" por 1,5 segundos como feedback, luego se restaura.

4. Click en `.modal-add-to-cart` — agregar desde modal
Igual que 4.3, pero desde el modal de detalle. Al confirmar, cierra el modal automáticamente.

# Personalización de Bootstrap mediante Sass

1. Orden de importación en `scss/main.scss`:
`_variables.scss` — overrides de variables de Bootstrap
`bootstrap/scss/bootstrap` — framework compilado con nuestras variables
`_custom.scss` — estilos propios del sitio

2. Variables personalizadas (`_variables.scss`)

Se modificó la paleta de colores de bootstrap por default para adecuar las clases a la elección del design-system elegido. Además se establecieron variables y tipografías para homogeneizar el sitio y facilitar su edición. 

3. Estilos propios (`_custom.scss`)

Se desarrollaron completamente a medida para cumplimentar con el diseño.

Todos los colores están referenciados desde variables — no hay valores hexadecimales hardcodeados en `_custom.scss`.

# URL del proyecto publicado

> **URL:** `https://sebastiancoppola.github.io/trebleshop/`

Se eligió **GitHub Pages** porque es gratuito, no requiere servidor backend (el sitio es 100% estático), tiene HTTPS automático y cualquier `git push` actualiza el sitio sin pasos adicionales. Además, nunca lo había usado. 
