// script.js
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs du formulaire
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Envoi des données du formulaire (vous devez mettre en place un système de réception des données côté serveur)
  console.log('Nom :', name);
  console.log('Email :', email);
  console.log('Message :', message);

  // Réinitialisation du formulaire
  form.reset();
});
