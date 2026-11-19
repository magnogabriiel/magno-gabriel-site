/** Links centrais de contato e agendamento. */
const SITE_CONFIG = Object.freeze({
  WHATSAPP_NUMBER: '5531986854774',
  WHATSAPP_MESSAGE: 'Olá, Magno! Conheci seu trabalho pelo site e gostaria de saber mais sobre os atendimentos.',
  INSTAGRAM_URL: 'https://www.instagram.com/magnogabriiel/',
  AGENDA_URL: 'https://aionis.com.br/agendar/magno-gabriel'
});

(() => {
  'use strict';
  const whatsapp = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(SITE_CONFIG.WHATSAPP_MESSAGE)}`;
  // URL não configurada: o visitante conversa no WhatsApp, nunca cai em uma agenda fictícia.
  const appointment = /^https:\/\/[^\s]+$/i.test(SITE_CONFIG.AGENDA_URL.trim()) ? SITE_CONFIG.AGENDA_URL.trim() : whatsapp;
  document.querySelectorAll('.whatsapp-link').forEach(link => { link.href = whatsapp; });
  document.querySelectorAll('.appointment-link').forEach(link => { link.href = appointment; });
  document.querySelectorAll('.instagram-link').forEach(link => { link.href = SITE_CONFIG.INSTAGRAM_URL; });
  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    mobileNav.hidden = true;
    document.body.classList.remove('menu-open');
  };
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const isOpening = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(isOpening));
      menuButton.setAttribute('aria-label', isOpening ? 'Fechar menu' : 'Abrir menu');
      mobileNav.hidden = !isOpening;
      document.body.classList.toggle('menu-open', isOpening);
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (!mobileNav.hidden && !mobileNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => { if (window.innerWidth >= 980) closeMenu(); });
  }

  const stickyActions = document.getElementById('mobile-sticky-actions');
  const hero = document.querySelector('.hero');
  // Barra só aparece quando o visitante ultrapassa o banner inicial.
  let heroVisible = true;
  const updateScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
    if (stickyActions && hero) {
      const heroBottom = hero.getBoundingClientRect().bottom;
      heroVisible = heroBottom > 100;
      stickyActions.classList.toggle('is-active', !heroVisible);
      stickyActions.setAttribute('aria-hidden', String(heroVisible));
      stickyActions.querySelectorAll('a').forEach(a => { a.tabIndex = heroVisible ? -1 : 0; });
    }
  };
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('[data-reveal]');
  if (!reducedMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-animations');
    document.documentElement.classList.add('js-animations');
    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerRef.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 45px 0px' });
    targets.forEach(target => observer.observe(target));
  } else targets.forEach(target => target.classList.add('is-visible'));
})();

