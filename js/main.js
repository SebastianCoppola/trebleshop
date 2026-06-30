// ============================================================
// Manejo de carrito, filtros de catálogo y eventos de UI
// Datos: db/db.js (PRODUCTS, CAT_LABELS)
// ============================================================

// Carrito
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = cartCount;
    el.style.display = 'flex';
  });
}

// Abre/cierra modal de producto
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalEl = document.getElementById('productModal');
  if (!modalEl) return;

  modalEl.querySelector('.modal-img').src = product.img;
  modalEl.querySelector('.modal-img').alt = product.alt;
  modalEl.querySelector('.modal-product-cat').textContent = CAT_LABELS[product.category] || product.category;
  modalEl.querySelector('.modal-product-name').textContent = product.name;
  modalEl.querySelector('.modal-product-price').textContent = product.price;
  modalEl.querySelector('.modal-product-desc').textContent = product.description;
  modalEl.querySelector('.modal-product-brand').textContent = `Marca: ${product.brand}`;

  const addBtn = modalEl.querySelector('.modal-add-to-cart');
  if (addBtn) addBtn.dataset.productId = product.id;

  bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

// Renderiza el listado de productos recibidos
function renderProducts(filteredList) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  if (filteredList.length === 0) return;

  grid.innerHTML = filteredList.map(p => {
    return `
      <div class="col-12 col-md-6 col-xl-4" data-category="${p.category}">
        <article class="product-card" data-product-id="${p.id}">
          <div class="product-img-wrap">
            <img src="${p.img}" alt="${p.alt}" loading="lazy">
          </div>
          <div class="product-body">
            <p class="product-cat">${CAT_LABELS[p.category] || p.category}</p>
            <h3 class="product-name">${p.name}</h3>
            <p class="product-desc">${p.description}</p>
            <div class="product-footer">
              <span class="product-price">${p.price}</span>
              <button
                class="btn btn-primary btn-sm add-to-cart-btn"
                data-product-id="${p.id}"
                aria-label="Agregar ${p.name} al carrito">
                <i class="bi bi-cart-plus me-1" aria-hidden="true"></i>Agregar
              </button>
            </div>
          </div>
        </article>
      </div>`;
  }).join('');

  bindProductEvents();
}

// Filtra los productos a según categoría seleccionada
function filterByCategory(category) {
  document.querySelectorAll('.cat-item').forEach(el => {
    el.classList.toggle('active', el.dataset.category === category);
  });

  const mobileFilterLabel = document.querySelector('[data-bs-target="#mobileFilters"] span');
  if (mobileFilterLabel) {
    const label = category === 'todos' ? 'Filtrar por categoría' : CAT_LABELS[category] || category;
    mobileFilterLabel.innerHTML = `<i class="bi bi-funnel me-2" aria-hidden="true"></i>${label}`;
  }

  const filtered = category === 'todos' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  renderProducts(filtered);
}

// Setea eventos en las cards de producto (openProductModal && addToCart)
function bindProductEvents() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.add-to-cart-btn')) return;
      const id = parseInt(card.dataset.productId, 10);
      if (id) openProductModal(id);
    });
  });

  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.productId, 10);
      if (!id) return;
      addToCart();

      btn.disabled = true;
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check2 me-1"></i>Agregado';
      btn.classList.replace('btn-primary', 'btn-success');
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.replace('btn-success', 'btn-primary');
        btn.disabled = false;
      }, 1500);
    });
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('productGrid');
  if (productGrid) {
    document.querySelectorAll('.cat-item').forEach(item => {
      item.addEventListener('click', () => {
        filterByCategory(item.dataset.category);
        const mobileFiltersEl = document.getElementById('mobileFilters');
        if (mobileFiltersEl) {
          const col = bootstrap.Collapse.getInstance(mobileFiltersEl);
          if (col) col.hide();
        }
      });
    });

    filterByCategory('todos');
  }

  const modalAddBtn = document.querySelector('.modal-add-to-cart');
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      const id = parseInt(modalAddBtn.dataset.productId, 10);
      if (!id) return;
      addToCart();
      const modalEl = document.getElementById('productModal');
      if (modalEl) bootstrap.Modal.getInstance(modalEl)?.hide();
    });
  }
});