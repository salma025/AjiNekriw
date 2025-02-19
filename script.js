function filterResults() {
    // Récupérer la valeur de la recherche
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    
    // Récupérer la zone des résultats et le tableau
    let resultsContainer = document.getElementById("searchResults");
    let resultsTable = document.getElementById("searchResultsTable");
    
    // Réinitialiser les résultats si la barre de recherche est vide
    if (searchInput === '') {
        resultsContainer.innerHTML = ''; // Effacer les résultats
        resultsTable.style.display = 'none'; // Cacher le tableau
        return; // Quitter la fonction si la recherche est vide
    }

    // Réinitialiser les résultats précédents
    resultsContainer.innerHTML = '';
    
    // Sélectionner toutes les cartes
    let cards = document.querySelectorAll(".card");

    // Une variable pour savoir si des résultats ont été trouvés
    let foundResults = false;

    // Pour chaque carte, vérifier si elle contient le terme de recherche
    cards.forEach(function(card) {
        // Récupérer le texte de la carte (titre, ville, etc.)
        let cardTitle = card.querySelector("h3").textContent.toLowerCase();
        let cardCity = card.querySelector("p").textContent.toLowerCase();
        let cardPrice = card.querySelector(".price").textContent.toLowerCase();

        // Si le terme de recherche est trouvé dans le titre, la ville ou le prix
        if (cardTitle.includes(searchInput) || cardCity.includes(searchInput) || cardPrice.includes(searchInput)) {
            foundResults = true;

            // Créer une ligne du tableau pour ce résultat
            let row = document.createElement('tr');

            // Ajouter les cellules (colonnes) pour chaque information
            row.innerHTML = `
                <td>${card.querySelector('h3').textContent}</td>
                <td>${card.querySelector('p').textContent}</td>
                <td class="price">${card.querySelector('.price').textContent}</td>
                <td><a href="#" class="view-link" onclick="viewDetails('${card.querySelector('h3').textContent}', '${card.querySelector('p').textContent}', '${card.querySelector('.price').textContent}')">Voir plus</a></td>
            `;

            // Ajouter la ligne au tableau des résultats
            resultsContainer.appendChild(row);
        }
    });

    // Afficher ou cacher le tableau en fonction des résultats
    if (foundResults) {
        resultsTable.style.display = 'table'; // Afficher le tableau
    } else {
        resultsTable.style.display = 'none'; // Cacher le tableau si aucun résultat
    }
}

// Fonction pour afficher les détails de l'annonce
function viewDetails(title, city, price) {
    // Remplir les détails de l'annonce
    document.getElementById('propertyTitle').textContent = title;
    document.getElementById('propertyCity').textContent = city;
    document.getElementById('propertyPrice').textContent = price;
    
    // Afficher la section des détails
    document.getElementById('propertyDetails').style.display = 'block';
}

// Fonction pour fermer les détails
function closeDetails() {
    // Cacher la section des détails
    document.getElementById('propertyDetails').style.display = 'none';
}


//scroler
const container = document.getElementById("cardContainer");
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});
container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("active");
});
container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("active");
});
container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste la vitesse du scroll
    container.scrollLeft = scrollLeft - walk;
});
