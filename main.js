// North Lakes Plumbing — shared JS

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // Scroll-reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Contact form (no backend — just shows thank-you message)
  const form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.innerHTML = `
        <div class="form-success">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a4a8a" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
          <h3>Thanks for reaching out!</h3>
          <p>We'll be in touch soon.</p>
        </div>`;
    });
  }
});
