// Ville par default
let ville   = 'Bédarrides';

// Sélectionner le bouton pour changer la ville
let btn     = document.getElementById('changer');

// Appeler la fonction pour que la ville par default s'affiche dès le chargement de la page
recevoirTemperature(ville);

// Changer la ville
btn.addEventListener('click', () => {
  ville = prompt('Veuillez renseigner votre ville');
  recevoirTemperature(ville);
});

function recevoirTemperature(ville) {

// API de OpenWeatherMap
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=a343a41bbeda30216d42bbedaef80f1d&units=metric';

// Créer une requete
let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

// Recevoir la requête
requete.onload = function () {
  if(requete.readyState === XMLHttpRequest.DONE) {
    if(requete.status === 200) {
      let reponse = requete.response;
      let temperature = reponse.main.temp;
      let ville = reponse.name;
      // mettre à jour la ville et la temperature
      document.getElementById('ville').textContent = ville;
      document.getElementById('temperature_label').textContent = temperature;
    } else {
      alert('Un problème est intervenu, merci de revenir plus tard.');
    }
  }
}

};
  

