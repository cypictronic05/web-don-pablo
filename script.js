'use strict';
// Datos editables: el teléfono se concentra aquí y también en los enlaces HTML/SEO.
const PHONE = '56981841300';
const waUrl = message => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('.js-wa').forEach(link => {
  const msg = link.dataset.message;
  if (msg) link.href = waUrl(msg);
});
document.querySelectorAll('.service-link').forEach(button => {
  button.addEventListener('click', () => {
    const service = button.dataset.service || 'gasfitería';
    window.open(waUrl(`Hola Don Pablo, vi su página web y quisiera consultar por: ${service}. Estoy en la comuna de: `), '_blank', 'noopener,noreferrer');
  });
});
document.getElementById('quote-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = document.getElementById('client-name').value.trim();
  const area = document.getElementById('client-area').value.trim();
  const service = document.getElementById('client-service').value;
  const details = document.getElementById('client-details').value.trim();
  const message = `Hola Don Pablo, encontré su página web y quisiera solicitar un servicio de gasfitería.\n\n👤 Nombre: ${name}\n📍 Comuna: ${area}\n🔧 Servicio: ${service}${details ? `\n📝 Detalles: ${details}` : ''}\n\n¿Podemos coordinar?`;
  window.open(waUrl(message), '_blank', 'noopener,noreferrer');
});
document.getElementById('year').textContent = new Date().getFullYear();
