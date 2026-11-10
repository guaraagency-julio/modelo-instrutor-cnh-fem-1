'use strict';
/**
 * Personalização antes de publicar para uma instrutora real:
 * WhatsApp no formato DDI + DDD + número (apenas dígitos), ex.: 5551999999999.
 * Vazio = modo demonstração: nenhuma mensagem é enviada; abre um modal para copiar.
 */
const WHATSAPP_NUMBER = '';
const DEFAULT_MESSAGE = 'Olá! Tenho CNH e gostaria de voltar a dirigir com o acompanhamento de uma instrutora. Como funcionam as aulas?';
const dialog = document.getElementById('message-dialog');
const field = document.getElementById('message-text');
const status = document.getElementById('copy-status');
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-menu');

function contact(message) {
  const content = (message || DEFAULT_MESSAGE).trim();
  if (/^\d{12,15}$/.test(WHATSAPP_NUMBER)) {
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(content), '_blank', 'noopener,noreferrer');
    return;
  }
  field.value = content;
  status.textContent = '';
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else { dialog.setAttribute('open', ''); field.focus(); }
}

document.querySelectorAll('[data-contact]').forEach((button) => {
  button.addEventListener('click', () => contact(button.getAttribute('data-contact')));
});
document.getElementById('lead-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = form.elements.name.value.trim();
  const obstacle = form.elements.obstacle.value.trim();
  const city = form.elements.city.value.trim();
  const message = 'Olá! Me chamo ' + name + '. Tenho CNH e quero voltar a dirigir com uma instrutora. Minha principal dificuldade é: ' + obstacle + '.' + (city ? ' Procuro aulas na região de ' + city + '.' : '') + ' Gostaria de saber como funcionam as aulas e os valores.';
  contact(message);
});
document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.getElementById('copy-message').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(field.value);
    status.textContent = 'Mensagem copiada. Você pode colar em uma conversa.';
  } catch {
    field.focus();
    field.select();
    status.textContent = 'Selecione e copie a mensagem acima manualmente.';
  }
});
if (navToggle && mobileNav) {
  function setMenu(isOpen) {
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    mobileNav.hidden = !isOpen;
  }
  navToggle.addEventListener('click', () => setMenu(mobileNav.hidden));
  mobileNav.querySelectorAll('a,button').forEach((element) => element.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 801px)').addEventListener('change', (event) => { if (event.matches) setMenu(false); });
}
document.getElementById('year').textContent = new Date().getFullYear();