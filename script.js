const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');

menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

// TROQUE PELO SEU NÚMERO NO FORMATO: 5511999999999
const whatsappNumber = '5511999999999';
const whatsappMessage = encodeURIComponent(
  'Olá! Vi o portfólio da Nexora Digital e gostaria de solicitar um orçamento para meu site.'
);

document.querySelectorAll('.whatsapp-link').forEach(link => {
  link.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
});
