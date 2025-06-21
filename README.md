# Carambar & co - API Blagues

API REST versionnée pour gérer des blagues rigolotes. 

---

## Fonctionnalités

- Ajouter une blague (POST)  
- Consulter toutes les blagues (GET)  
- Consulter une blague par ID (GET)  
- Consulter une blague aléatoire (GET)  
---

## Tech stack

- Node.js (v20+)  
- Express.js  
- Sequelize ORM  
- SQLite (base locale légère)  
- CORS activé pour accès cross-origin
- Swagger

---
## Design Pattern
models/ : définition des modèles Sequelize
controllers/ : logique métier (CRUD)
routes/ : définition des routes API
app.js : point d’entrée, serveur Express

## EndPoint API
GET	/	Accueil - blague aléatoire (HTML)	—	curl http://localhost:3000/
GET	/blagues	Récupère toutes les blagues	—	curl http://localhost:3000/api/v1/blagues
GET	/blagues/random	Récupère une blague aléatoire	—	curl http://localhost:3000/api/v1/blagues/random
GET	/blagues/:id	Récupère une blague par ID	id : ID de la blague (param URL)	curl http://localhost:3000/api/v1/blagues/5
POST	/blagues	Ajoute une nouvelle blague	JSON : { "question": "texte", "reponse": "texte" }	bash curl -X POST http://localhost:3000/api/v1/blagues -H "Content-Type: application/json" -d '{"question":"Pourquoi...?","reponse":"Parce que..."}'

## Installation & démarrage

1. Cloner le repo
git clone https://github.com/LaMonaLisa34/Carambar-Co-Blague-Back.git
cd carambar-co-blague-back

2. Installer les dépendances
npm install 

3. Lancer serveur
node app.js 

4. Documentation Swagger
http://localhost:3000/api-docs

