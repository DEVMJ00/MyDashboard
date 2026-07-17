//----------------------------
//          HORLOGE
//----------------------------

// Crée un élément <p>
const p = document.createElement('p');

// Formate la date (sans heure)
const dateOptions = { 
  weekday: 'long', 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
};

// Formate uniquement l'heure
const timeOptions = { 
  hour: '2-digit', 
  minute: '2-digit' 
};

const today = new Date();
const formattedDate = new Intl.DateTimeFormat('fr-FR', dateOptions).format(today);
const formattedTime = new Intl.DateTimeFormat('fr-FR', timeOptions).format(today);

// Assemblage manuel sans "à"
p.textContent = `${formattedDate} | ${formattedTime}`;

// Insère le paragraphe dans le footer
const footer = document.getElementById('site-footer') || document.querySelector('footer');
if (footer) {
  footer.appendChild(p);
} else {
  document.body.appendChild(p);
}



//----------------------------
//          DARK THEME
//----------------------------
const btn = document.getElementById("themeBtn");
btn.addEventListener("click", () => {
	document.body.classList.toggle("dark");

	});
	
