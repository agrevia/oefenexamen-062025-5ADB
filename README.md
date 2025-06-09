<img src="https://www.de-passer.be/themes/depasser/img/logo-passer.svg" alt="img" style="width:25%;" />

```
Naam:
Familienaam:

Klas: 5ADB
Leerkracht: Dhr. R. Hennebel
Vak: Webdevelopment
```

# Oefenexamen Javascript & Node.js – Bibliotheek De Passer

## Situatie

De schoolbibliotheek van De Passer wil haar werking digitaliseren. De leerkrachten willen:

- een overzicht van alle boeken kunnen raadplegen
- nieuwe boeken kunnen toevoegen
- foutieve gegevens aanpassen
- boeken verwijderen wanneer ze niet meer beschikbaar zijn

Je krijgt een **gedeeltelijk opgezet project** waarin:

- Swagger al correct geconfigureerd is
- de nodige **Node.js-modules reeds geïnstalleerd** zijn
- het project al volledig **geïnitialiseerd** is
- de frontend, styling en layout **volledig klaar** staan

Via **Swagger** kun je de API testen en controleren of de routes juist werken.

In je **GitHub-repository** vind je ook een **screencast (video)** waarin je duidelijk kan zien hoe de applicatie er op het einde moet uitzien.  
Gebruik deze als visuele referentie voor:

- de werking van de frontend
- de gebruikerservaring
- de verwachte dataflow tussen frontend en backend

> 📌 **BELANGRIJK**  
> Bekijk en **analyseer de screencast aandachtig**.  
> Bestudeer ook grondig de bestaande HTML- en CSS-code.

---

## Pagina's van de webapplicatie

- **Homepagina**  
  Toont een overzicht van alle boeken in de bibliotheek. Deze gegevens worden automatisch geladen uit de databank.

- **Administratiepagina**  
  Geeft de beheerder toegang tot de collectie: boeken toevoegen, aanpassen, verwijderen of bekijken.  
  Dit gebeurt via een formulier en dynamische knoppen naast elk item.

---

## Start en voorbereiding

Bij aanvang van het oefenexamen ontvang je via **Smartschool**:

- de link naar jouw **persoonlijke GitHub repository**
- een **SQL-bestand** dat je moet uitvoeren in je databank (via DataGrip)

Je opent het bestaande project in WebStorm.  
De databank is reeds zichtbaar via jouw DataGrip-account.  
**Voer het SQL-bestand uit** om de tabel `boeken` aan te vullen.

Indienen gebeurt door te **pushen naar de GitHub repository**. 

---

## Te voltooien bestanden

Je past onderstaande drie bestanden volledig aan:

- `backend/services/db.js`
- `backend/app.js`
- `frontend/assets/js/script.js`

Swagger is voorzien. Gebruik Swagger om je API te testen.

---

## 1. db.js (4 punten)

Maak verbinding met de databank via Knex.

Vul volgende zaken aan:

- host
- gebruikersnaam
- wachtwoord
- databanknaam

Zorg dat je connectie correct geëxporteerd wordt zodat die bruikbaar is in `app.js`.

---

## 2. app.js 

Je schrijft alle routes zelf. Gebruik Express en Knex. Gebruik `try/catch` en `async/await`.

### GET `/boeken` 

- Haalt alle boeken op uit de databank
- Stuur de lijst terug als JSON
- Bij fout: status 500

------

### GET `/boeken/:id` 

- Haalt één boek op o.b.v. het ID
- Als het boek niet bestaat → status 404
- Anders → status 200 + boek in JSON

------

### POST `/boeken` 

- Leest `titel`, `auteur`, `jaar`, `aantal_in_stock` uit `req.body`
- Controleer of alles werd ingevuld (anders 400)
- Voeg toe met `insert`
- Stuur status 201 en nieuw ID terug

------

### PUT `/boeken/:id` 

- Leest ID uit `req.params`
- Controleer alle velden
- Update boek via `where({ id }).update(...)`
- Als ID niet bestaat → status 404
- Bij succes → status 200 + updated record

------

### DELETE `/boeken/:id` 

- Leest ID uit `req.params`
- Verwijder boek via `del()`
- Als ID niet bestaat → 404
- Bij succes → status 200 + bevestiging

---

## 3. script.js 

Je schrijft alle functies om de frontend te laten communiceren met de API.

Zorg voor:

- correcte `fetch()`-calls
- `async/await` + `try/catch`
- foutafhandeling en herladen van DOM

### `fetchBoeken()` 

- Haal alle boeken op van de API
- Parse JSON
- Roep `renderBoeken()` aan

### `renderBoeken(boeken)` 

- Leeg `#boeken`
- Toon info in `div.boek` (titel, auteur, jaar, stock)
- Toon knoppen (Verwijder / Wijzig)

### `handleFormSubmit(e)` 

- Lees waarden uit formulier
- Maak object: `{ titel, auteur, jaar, aantal_in_stock }`
- Verzend naar API via `POST` of `PUT`
- Roep `fetchBoeken()` en `resetForm()` aan

### `editBoek(boek)` 

- Vul formulier met gegevens
- Scroll naar het formulier

### `deleteBoek(id)` 

- Verzend DELETE
- Herlaad lijst

