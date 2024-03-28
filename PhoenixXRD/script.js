const projectBubbles = document.querySelectorAll('.project-bubble');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
});

projectBubbles.forEach((bubble) => {
  observer.observe(bubble);
});


/*PETITS BONHOMMES QUI BOUGENT*/
const element1 = document.querySelector('.element1');
const element2 = document.querySelector('.element2');
const element3 = document.querySelector('.element3');

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// Élément 1 : de gauche à droite à 25% de l'écran
let element1Left = 0;
let element1Right = screenWidth * 0.25;

// Élément 2 : de droite à gauche à 50% de l'écran
let element2Left = screenWidth;
let element2Right = screenWidth * 0.5;

// Élément 3 : de gauche à droite à 75% de l'écran
let element3Left = 0;
let element3Right = screenWidth * 0.75;

let animationStarted = false;

window.addEventListener('scroll', function() {
  const maxWidthSection = document.querySelector('.max-width-section');
  const maxWidthSectionTop = maxWidthSection.getBoundingClientRect().top;

  if (maxWidthSectionTop <= screenHeight && !animationStarted) {
    animationStarted = true;
    moveElements();
  }
});

function moveElements() {
  // Élément 1
  if (element1.offsetLeft < element1Right) {
    element1.style.left = element1Left + 'px';
    element1Left += 2;
  } else {
    element1Left = 0;
  }

  // Élément 2
  if (element2.offsetLeft > element2Right) {
    element2.style.left = element2Left + 'px';
    element2Left -= 2;
  } else {
    element2Left = screenWidth;
  }

  // Élément 3
  if (element3.offsetLeft < element3Right) {
    element3.style.left = element3Left + 'px';
    element3Left += 2;
  } else {
    element3Left = 0;
  }

  if (animationStarted) {
    requestAnimationFrame(moveElements);
  }
}
