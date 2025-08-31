// Smooth scroll for sidebar nav links
document.querySelectorAll('.side-navbar .nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active sidebar nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.side-navbar .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// Animate certifications on scroll
const certItems = document.querySelectorAll('.certification-item');
const certSection = document.getElementById('certifications');

window.addEventListener('scroll', () => {
  const certTop = certSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (certTop < windowHeight - 100) {
    certItems.forEach(item => item.classList.add('active'));
  }
});
