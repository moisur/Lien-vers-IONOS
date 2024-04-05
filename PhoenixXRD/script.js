

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



// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});

// Données pour les boîtes de la timeline
const timelineData = [
  {
    title: "4 Millions tokens burned",
    image: "image1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "10 % airdrop already done",
    image: "image2.jpg",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "NFT Collection comming",
    image: "image3.jpg",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Phoenix Games",
    image: "image4.jpg",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];


// Sélectionnez les éléments HTML correspondants
const timelineColElements = document.querySelectorAll(".timeline-col");
const descriptionElements = document.querySelectorAll(".description");

// Fonction pour animer le texte
function animateText(element, text, delay = 50) {
  let currentText = "";
  element.textContent = "";

  const interval = setInterval(() => {
    currentText += text.charAt(currentText.length);
    let color = currentText.length % 3 === 0 ? "--jc" : currentText.length % 3 === 1 ? "--jf" : "--jc";
    element.style.color = `var(${color})`;
    element.innerHTML = `${currentText.slice(0, -1)}<span class="glow-shadow">${currentText.slice(-1)}</span>`;

    if (currentText === text) {
      clearInterval(interval);
    }
  }, delay);
}

// Fonction pour animer les colonnes
function animateColumns() {
  timelineColElements.forEach((col, index) => {
    setTimeout(() => {
      const descriptionElement = col.querySelector(".description");
      const description = timelineData[index].description;
      animateText(descriptionElement, description);
    }, index * 500); // Délai de 500ms entre chaque colonne
  });
}

// Appliquez les données à chaque boîte de la timeline
timelineData.forEach((data, index) => {
  const colElement = timelineColElements[index];
  const titleElement = colElement.querySelector(".title");
  const descriptionElement = colElement.querySelector(".description");
  const imageElement = colElement.querySelector("img");

  titleElement.textContent = data.title;
  descriptionElement.textContent = "";
  imageElement.src = data.image;
});

// Lancez l'animation des colonnes
animateColumns();