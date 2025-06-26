// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scroll and active link highlight
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60, // offset for sticky header
      behavior: 'smooth'
    });

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Close mobile menu on link click
    navMenu.classList.remove('active');
  });
});

// Simple contact form validation and message
const form = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Simple validation (already required by HTML)
  formResponse.textContent = 'Thank you! Your message has been sent.';
  formResponse.style.color = 'green';

  form.reset();
});
