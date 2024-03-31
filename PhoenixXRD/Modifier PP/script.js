const input = document.getElementById('imageUpload');
const originalImage = document.getElementById('originalImage');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const modifyButton = document.getElementById('modifyButton');
const downloadLink = document.getElementById('downloadLink');

let maskImage = new Image();
maskImage.src = 'framedetoure.png';

// Étape 1 : Choisir une image
input.addEventListener('change', () => {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const uploadedImage = new Image();
    uploadedImage.onload = () => {
      originalImage.src = reader.result;
      originalImage.style.display = 'block';
      canvas.style.display = 'none';
      downloadLink.style.display = 'none';
      modifyButton.disabled = false;
      modifyButton.textContent = 'Modifier l\'image';
    }
    uploadedImage.src = reader.result;
  }

  reader.readAsDataURL(file);
});

// Étape 2 : Modifier l'image
modifyButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(maskImage, 0, 0, canvas.width, canvas.height);
  originalImage.style.display = 'none';
  canvas.style.display = 'block';
  modifyButton.style.display = 'none'; // Cacher le bouton "Modifier l'image"
  downloadLink.style.display = 'inline'; // Afficher le bouton "Télécharger l'image"
  downloadLink.onclick = function() {
    this.href = canvas.toDataURL(); // Lien de téléchargement de l'image modifiée
    this.download = 'image_modifiee.png'; // Nom de fichier pour le téléchargement
  };
});
