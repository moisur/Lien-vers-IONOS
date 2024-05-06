// script.js

window.addEventListener('load', function() {
    const trailer = document.getElementById('trailer');
    trailer.play();

    const degenFighters = document.querySelectorAll('.degen-fighters img');
    degenFighters.forEach(fighter => {
        fighter.style.animationDuration = `${Math.floor(Math.random() * 2) + 1}s`;
    });

    // Particle.js config
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 200,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#30ff30"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#30ff30",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {"grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

const canvas = document.querySelector("#particles-js > canvas");

canvas.addEventListener("mousemove", function(e) {
    canvas.style.cursor = "none";
    let posX = e.clientX;
    let posY = e.clientY;
    let cursor = document.createElement("div");
    cursor.style.position = "absolute";
    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";
    cursor.style.border = "1px solid #30ff30";
    cursor.style.borderRadius = "50%";
    cursor.style.height = "20px";
    cursor.style.width = "20px";
    cursor.style.pointerEvents = "none";
    document.body.appendChild(cursor);

    setTimeout(function() {
        document.body.removeChild(cursor);
    }, 60);
});
}); 

  // Dans votre script.js
const fortunes = [
    "Your gains will be as volatile as your mood after a night of heavy drinking.",
    "FOMO will consume you, but the gains will be worth it... or not.",
    "Your portfolio will experience highs and lows worthy of an emotional rollercoaster.",
    "The stars align for you to make a x1000... or lose it all, your choice.",
    "A bright future awaits you, if you survive this speculative madness, that is.",
    "The fate of your investments is as random as a drunken monkey's dice roll.",
    "Prepare for financial rollercoasters that even the biggest amusement parks wouldn't dare dream of.",
    "«To the moon !» - Tout degen qui se respecte",
    "«Wen Lambo ?» - Tout investisseur crypto débutant",
    "«J'ai acheté le sommet» - Vous, probablement",
    "«HODL» - Tout investisseur après un crash",
  ];
  
  const fortuneButton = document.getElementById('fortuneButton');
  const fortuneContainer = document.getElementById('fortuneContainer');
  
  fortuneButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    fortuneContainer.textContent = randomFortune;
  });