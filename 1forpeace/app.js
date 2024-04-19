// Animations GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation du hero
gsap.from('.hero h1', {
  duration: 1,
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top 80%',
  },
});

gsap.from('.hero p', {
  duration: 1,
  y: 50,
  opacity: 0,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top 80%',
  },
});

gsap.from('.hero .btn', {
  duration: 1,
  y: 50,
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top 80%',
  },
});

// Animations des sections
gsap.from('.section-heading', {
  duration: 1,
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: '.section-heading',
    start: 'top 80%',
  },
});

gsap.from('.section-content', {
  duration: 1,
  y: 50,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section-content',
    start: 'top 80%',
  },
});

// Smooth scrolling
const scroll// Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const offsetTop = targetElement.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

// Reveal on scroll
const revealElements = document.querySelectorAll('.animate__animated');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeIn');
    } else {
      entry.target.classList.remove('animate__fadeIn');
    }
  });
}, {
  root: null,
  threshold: 0.1,
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});
