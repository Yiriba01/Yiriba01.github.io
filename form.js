


    function afficherMessage() {
        alert("Bouton cliqué !");
    }


    // Sélectionner le formulaire et le message d'erreur
const form = document.getElementById('contactForm');
const errorMessage = document.getElementById('errorMessage');

// Ajouter un écouteur d'événements pour la soumission du formulaire
form.addEventListener('submit', function(event) {
  // Récupérer les valeurs des champs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Réinitialiser le message d'erreur
  errorMessage.textContent = '';

  // Validation simple : vérifier si les champs sont vides
  if (name === '' || email === '' || message === '') {
    errorMessage.textContent = 'Tous les champs sont obligatoires.';
    event.preventDefault();  // Empêcher l'envoi du formulaire
  }
});



// Fonction pour survoler un projet
function highlightProject(element) {
    element.style.backgroundColor = '#e0f7fa';  // Changer la couleur de fond
  }
  
  // Fonction pour remettre à zéro le style
  function resetProject(element) {
    element.style.backgroundColor = '';  // Réinitialiser la couleur de fond
  }




  
