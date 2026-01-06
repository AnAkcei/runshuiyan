const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.style.display === 'flex';
    siteNav.style.display = open ? 'none' : 'flex';
    navToggle.setAttribute('aria-expanded', (!open).toString());
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) siteNav.style.display = 'flex';
    else siteNav.style.display = 'none';
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
