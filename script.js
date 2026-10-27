// Barra de anuncios: rotar mensajes y cerrar
const msgs = [
  'Hasta un 40% OFF para miembros Lola&You',
  'Envío gratis en pedidos superiores a 60€',
  'Black Wild Friday: 30% OFF en productos seleccionados',
];
let msg = 0;
const announceText = document.getElementById('announce-text');
document.querySelectorAll('[data-msg]').forEach((btn) => {
  btn.addEventListener('click', () => {
    msg = (msg + Number(btn.dataset.msg) + msgs.length) % msgs.length;
    announceText.textContent = msgs[msg];
  });
});
document.getElementById('announce-close').addEventListener('click', () => {
  document.getElementById('announce').hidden = true;
});

// Menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
  menu.hidden = !menu.hidden;
  menuToggle.setAttribute('aria-expanded', String(!menu.hidden));
});
menu.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    menu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Bolsa
let bag = 0;
const bagCount = document.getElementById('bag-count');
document.getElementById('bag').addEventListener('click', () => {
  bag += 1;
  bagCount.textContent = bag;
  bagCount.hidden = false;
});

// Categorías
const selected = document.getElementById('selected');
const selectedLabel = document.getElementById('selected-label');
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    selectedLabel.textContent = card.dataset.label;
    selected.hidden = false;
  });
});

// Newsletter
const form = document.getElementById('newsletter');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.querySelector('input').value;
  if (email.includes('@')) {
    form.hidden = true;
    document.getElementById('newsletter-thanks').hidden = false;
  }
});
