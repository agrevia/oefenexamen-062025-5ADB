'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {
    fetchBoeken();

    const form = document.getElementById('boekForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

// Haalt alle boeken op van de backend


// Toont alle boeken in het DOM


// Verwerkt het formulier bij verzenden

// Vult het formulier met de gegevens van een bestaand boek


// Verwijdert een boek op basis van ID


// Zet het formulier terug leeg
function resetForm() {
    document.getElementById('id').value = '';
    document.getElementById('boekForm').reset();
}
