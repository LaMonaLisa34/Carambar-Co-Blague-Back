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

## Repos Frontend

La partie frontend est disponible ici :  

https://github.com/LaMonaLisa34/Carambar-Co-Blague-Front

## URL de déploiement

L’API est déployée sur Render et accessible ici :  

[https://carambar-co-blague-back.onrender.com/api/v1/blagues](https://carambar-co-blague-back.onrender.com/api/v1/blagues)