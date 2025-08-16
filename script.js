const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const header = document.querySelector('.site-header');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  navToggle.setAttribute(
    'aria-expanded',
    mainNav.classList.contains('active')
  );
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// Mobile menu toggle
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  navToggle.setAttribute(
    'aria-expanded',
    mainNav.classList.contains('active')
  );
});

// Navbar background & link color change on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    header.classList.remove('transparent');
  } else {
    header.classList.remove('scrolled');
    header.classList.add('transparent');
  }
});

// Set initial state on page load
if (window.scrollY <= 50) {
  header.classList.add('transparent');
}

// Arrow scroll function
const scrollDownBtn = document.querySelector('.scroll-down');

scrollDownBtn.addEventListener('click', () => {
  document.querySelector('.cards-section').scrollIntoView({ behavior: 'smooth' });
});

