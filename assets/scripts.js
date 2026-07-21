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


//----------------------------
//          MENU BURGER
//----------------------------
const button = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

button.addEventListener("click", () => {
    sidebar.classList.toggle("open");

});




//--------------------------------------
//          AJOUT DE NOUVELLES CARDS
//--------------------------------------
const container = document.querySelector(".mesCards");

cards.forEach(card => {

    const target = card.target ?? "_blank";

    const rel = target === "_blank"
        ? "noopener noreferrer"
        : "";

    const content = card.icon
        ? `<img src="${card.icon}" alt="${card.title}">`
        : `<span>${card.text ?? ""}</span>`;

    const color = card.color
        ? `background-color:${card.color};`
        : "";


    container.insertAdjacentHTML("beforeend", `
        <div class="card-container">

            <a href="${card.url}"
               target="${target}"
               rel="${rel}">

                <div class="card"
                     style="${color}"
                     title="${card.title}">
                    ${content}
                </div>

            </a>

            <label class="card-label">
                ${card.label ?? card.title}
            </label>

        </div>
    `);

});



const modal = document.getElementById("myModal");

document.getElementById("openModal")
    .addEventListener("click", () => {
        modal.showModal();
    });

document.getElementById("closeModal")
    .addEventListener("click", () => {
        modal.close();
    });
