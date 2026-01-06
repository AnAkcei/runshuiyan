const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const backdrop = document.querySelector('.nav-backdrop');
const bodyEl = document.body;
if (navToggle && siteNav) {
  const closeNav = () => {
    siteNav.classList.remove('open');
    backdrop && backdrop.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
    bodyEl.classList.remove('nav-open');
  };
  const openNav = () => {
    siteNav.classList.add('open');
    backdrop && backdrop.classList.add('show');
    navToggle.setAttribute('aria-expanded', 'true');
    bodyEl.classList.add('nav-open');
  };
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.contains('open');
    isOpen ? closeNav() : openNav();
  });
  backdrop && backdrop.addEventListener('click', closeNav);
  siteNav.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.tagName === 'A') closeNav();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      siteNav.classList.remove('open');
      backdrop && backdrop.classList.remove('show');
      bodyEl.classList.remove('nav-open');
      siteNav.style.display = 'flex';
    } else {
      siteNav.style.display = '';
    }
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm).entries());
    const msg = `已收到您的訊息，感謝聯繫。\n\n姓名：${data.name || ''}\n電話：${data.phone || ''}\nEmail：${data.email || ''}\n主題：${data.subject || ''}\n內容：${data.message || ''}`;
    alert(msg);
    contactForm.reset();
  });
}
