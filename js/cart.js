let cart = [];
const CART_KEY = 'azuCart';

function loadCartFromStorage(){
  const stored = localStorage.getItem(CART_KEY);
  cart = stored ? JSON.parse(stored) : [];
}

function saveCart(){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId){
  const product = getProductById(productId);
  if(!product) return;
  const existing = cart.find(item => item.id === product.id);
  if(existing){
    existing.cantidad += 1;
  } else {
    cart.push({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: 1 });
  }
  saveCart();
  renderCartBadge();
  renderCartModal();
  renderCheckoutSummary();
}

function removeFromCart(productId){
  cart = cart.filter(item => item.id !== Number(productId));
  saveCart();
  renderCartBadge();
  renderCartModal();
  renderCheckoutSummary();
}

function clearCart(){
  cart = [];
  saveCart();
  renderCartBadge();
  renderCartModal();
  renderCheckoutSummary();
}

function getCartTotal(){
  return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

function getCartCount(){
  return cart.reduce((acc, item) => acc + item.cantidad, 0);
}

function renderCartBadge(){
  const badge = document.querySelector('#cartCount');
  if(!badge) return;
  const count = getCartCount();
  badge.textContent = count > 0 ? `(${count})` : '';
}

function renderCartModal(){
  const tbody = document.querySelector('#cartItems');
  const totalEl = document.querySelector('#cartTotal');
  if(!tbody || !totalEl) return;

  if(cart.length === 0){
    tbody.innerHTML = '<tr><td colspan="4" class="text-center py-4">Tu carrito está vacío.</td></tr>';
    totalEl.textContent = formatCurrency(0);
    return;
  }

  tbody.innerHTML = cart.map(item => {
    const subtotal = item.precio * item.cantidad;
    return `<tr>
      <td>${item.nombre}</td>
      <td>${item.cantidad}</td>
      <td>${formatCurrency(item.precio)}</td>
      <td>
        <div class="d-flex justify-content-between align-items-center">
          <span>${formatCurrency(subtotal)}</span>
          <button class="btn btn-sm btn-outline-danger border-0" onclick="removeFromCart(${item.id})">✕</button>
        </div>
      </td>
    </tr>`;
  }).join('');

  totalEl.textContent = formatCurrency(getCartTotal());
}

function goToCheckout(){
  if(cart.length === 0){
    alert('Tu carrito está vacío. Agrega productos antes de continuar.');
    return;
  }
  window.location.href = 'checkout.html';
}

function renderCheckoutSummary(){
  const tbody = document.querySelector('#checkoutItems');
  const totalEl = document.querySelector('#checkoutTotal');
  const emptyAlert = document.querySelector('#checkoutEmpty');
  if(!tbody || !totalEl) return;

  if(cart.length === 0){
    tbody.innerHTML = '';
    totalEl.textContent = formatCurrency(0);
    if(emptyAlert){
      emptyAlert.classList.remove('d-none');
    }
    return;
  }

  if(emptyAlert){
    emptyAlert.classList.add('d-none');
  }

  tbody.innerHTML = cart.map(item => {
    const subtotal = item.precio * item.cantidad;
    return `<tr>
      <td>${item.nombre}</td>
      <td>${item.cantidad}</td>
      <td>${formatCurrency(item.precio)}</td>
      <td>${formatCurrency(subtotal)}</td>
    </tr>`;
  }).join('');

  totalEl.textContent = formatCurrency(getCartTotal());
}

function handleCheckoutSubmit(event){
  event.preventDefault();
  const form = event.target;

  if(cart.length === 0){
    alert('Tu carrito está vacío. Agrega productos antes de finalizar la compra.');
    return;
  }

  if(!form.checkValidity()){
    form.reportValidity();
    return;
  }

  clearCart();
  window.location.href = 'success.html';
}

function initCart(){
  loadCartFromStorage();
  renderCartBadge();
  renderCartModal();
  renderCheckoutSummary();

  const cartModalEl = document.getElementById('cartModal');
  if(cartModalEl){
    cartModalEl.addEventListener('shown.bs.modal', renderCartModal);
  }

  const checkoutForm = document.getElementById('checkoutForm');
  if(checkoutForm){
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }
}

document.addEventListener('DOMContentLoaded', initCart);
