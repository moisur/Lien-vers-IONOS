const images = ["crystal-1.png", "crystal-2.png", "logo.png"];
let index = 0;
let counter = 0;
const imageElement = document.getElementById('image');

function changeImage() {
    imageElement.src = images[index];
    index = (index + 1) % images.length;
    counter++;

    if (counter === 9) {
        clearInterval(intervalID); // Arrête l'intervalle après 3 itérations
    }
}

const intervalID = setInterval(changeImage, 1000); // Change l'image toutes les 2 secondes (2000 millisecondes)

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