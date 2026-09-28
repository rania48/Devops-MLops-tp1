/* ============================================================
   MAIN.JS — interactions, animations, data-driven content
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initTypedText();
  initRevealOnScroll();
  initTiltEffects();
  initCursorGlow();
  initStatsCounter();
  initLangBars();
  initCertifications();
  initCertModal();
  I18N.onChange(() => { renderCertifications(false); });
  I18N.init();
  initSmoothNav();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------------- Loader ---------------- */
function initLoader() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 400);
  });
  // fallback in case 'load' already fired
  setTimeout(() => loader.classList.add('hidden'), 2500);
}

/* ---------------- Navbar scroll state + active link ---------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('[data-nav]');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));
}

function initSmoothNav() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---------------- Typed role text ---------------- */
function initTypedText() {
  const el = document.getElementById('typed');
  if (!el) return;
  let phraseIdx = 0, charIdx = 0, deleting = false;
  I18N.onChange(() => { phraseIdx = 0; charIdx = 0; deleting = false; });

  function tick() {
    const phrases = I18N.typed();
    const current = phrases[phraseIdx % phrases.length];
    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  tick();
}

/* ---------------- Scroll reveal ---------------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* ---------------- 3D tilt on hero photo + cards ---------------- */
function initTiltEffects() {
  const frame = document.getElementById('tilt-frame');
  if (frame) {
    const heroSection = document.getElementById('home');
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      frame.style.transform = `rotateY(${px * 18}deg) rotateX(${-py * 18}deg)`;
    });
    heroSection.addEventListener('mouseleave', () => {
      frame.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  }

  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
    });
  });
}

/* ---------------- Cursor glow follower ---------------- */
function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;
  window.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
  }, { passive: true });
}

/* ---------------- Animated stat counters ---------------- */
function initStatsCounter() {
  const nums = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(n => observer.observe(n));

  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1400;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }
}

/* ---------------- Language bars ---------------- */
function initLangBars() {
  const bars = document.querySelectorAll('.bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('data-width') + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => observer.observe(b));
}

/* ---------------- Certifications data + render ---------------- */
const CERTIFICATIONS = [
  { title: 'Software Engineering: Software Design and Project Management', issuer: 'The Hong Kong University of Science and Technology (Coursera)', date: 'Mars 2025', logo: 'assets/logos/hkust.svg', image: 'assets/certificates/cert-uml.png' },
  { title: 'Cybersecurity Job Simulation', issuer: 'Mastercard / Forage', date: 'Mai 2025', logo: 'assets/logos/mastercard.svg', image: 'assets/certificates/cert-cybersecurity.png' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte (Forage)', date: 'Mai 2025', logo: 'assets/logos/deloitte.svg', image: 'assets/certificates/cert-deloitte.png' },
  { title: 'EF SET English Certificate — 74/100, C2 Proficient', issuer: 'EF SET', date: 'Février 2025', logo: 'assets/logos/efset.svg', image: 'assets/certificates/cert-efset.png' },
  { title: 'Customer Service Job Simulation', issuer: 'Forage', date: 'Février 2026', logo: 'assets/logos/forage.png', image: 'assets/certificates/cert-customer-service.png' },
  { title: 'Étudier en France : French Intermediate B1-B2', issuer: 'École Polytechnique (Coursera)', date: 'Mars 2025', logo: 'assets/logos/ecole-polytechnique.svg', image: 'assets/certificates/cert-french.png' },
  { title: 'HTML, CSS, and JavaScript for Web Developers', issuer: 'Johns Hopkins University (Coursera)', date: 'Novembre 2024', logo: 'assets/logos/jhu.svg', image: 'assets/certificates/cert-htmlcss.png' },
  { title: 'Interactivity with JavaScript', issuer: 'University of Michigan (Coursera)', date: 'Novembre 2024', logo: 'assets/logos/michigan.svg', image: 'assets/certificates/cert-js.png' },
  { title: 'Using Python to Access Web Data', issuer: 'University of Michigan (Coursera)', date: 'Mars 2025', logo: 'assets/logos/michigan.svg', image: 'assets/certificates/cert-python.png' },
  { title: 'Introduction à la programmation orientée objet (C++)', title_en: 'Introduction to Object-Oriented Programming (in C++)', issuer: 'EPFL (Coursera)', date: 'Janvier 2025', logo: 'assets/logos/epfl.svg', image: 'assets/certificates/cert-cpp.png' },
  { title: 'AI for You', issuer: 'Oracle University', date: '', logo: 'assets/logos/oracle.svg', image: null },
  { title: 'Introduction to Machine Learning', issuer: 'Duke University', date: '', logo: 'assets/logos/duke.svg', image: null },
  { title: 'Introduction to Big Data', issuer: 'UC San Diego', date: '', logo: 'assets/logos/ucsd.svg', image: null },
  { title: 'Introduction to NoSQL Databases', issuer: 'IBM', date: '', logo: 'assets/logos/ibm.svg', image: null }
];

const MONTHS_EN = { 'Janvier': 'January', 'Février': 'February', 'Mars': 'March', 'Avril': 'April', 'Mai': 'May', 'Juin': 'June',
  'Juillet': 'July', 'Août': 'August', 'Septembre': 'September', 'Octobre': 'October', 'Novembre': 'November', 'Décembre': 'December' };

function certTitle(c) { return I18N.lang === 'en' && c.title_en ? c.title_en : c.title; }
function certDate(c) {
  if (!c.date) return '';
  if (I18N.lang !== 'en') return c.date;
  const [m, y] = c.date.split(' ');
  return `${MONTHS_EN[m] || m} ${y}`;
}

function renderCertifications(animate) {
  const grid = document.getElementById('cert-grid');
  if (!grid) return;
  grid.innerHTML = CERTIFICATIONS.map((c, i) => `
    <div class="cert-card ${c.image ? 'clickable' : ''} ${animate ? '' : 'in-view'}" data-reveal-cert ${c.image ? `data-cert-index="${i}"` : ''}>
      <div class="cert-icon"><img src="${c.logo}" alt="" /></div>
      <h4>${certTitle(c)}</h4>
      <p class="cert-issuer">${c.issuer}</p>
      ${c.date ? `<p class="cert-date">${certDate(c)}</p>` : ''}
      ${c.image ? `<p class="cert-view-hint">${I18N.ui().viewCert}</p>` : ''}
    </div>
  `).join('');
  if (!animate) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 40);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.cert-card').forEach(c => observer.observe(c));
}

function initCertifications() { renderCertifications(true); }

/* ---------------- Certificate modal (lightbox) ---------------- */
function initCertModal() {
  const modal = document.getElementById('cert-modal');
  const backdrop = document.getElementById('cert-modal-backdrop');
  const closeBtn = document.getElementById('cert-modal-close');
  const img = document.getElementById('cert-modal-img');
  const title = document.getElementById('cert-modal-title');
  const issuer = document.getElementById('cert-modal-issuer');
  if (!modal) return;

  document.getElementById('cert-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.cert-card.clickable');
    if (!card) return;
    const cert = CERTIFICATIONS[parseInt(card.getAttribute('data-cert-index'), 10)];
    if (!cert || !cert.image) return;
    img.src = cert.image;
    img.alt = certTitle(cert);
    title.textContent = certTitle(cert);
    issuer.textContent = cert.date ? `${cert.issuer} — ${certDate(cert)}` : cert.issuer;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
