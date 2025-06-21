// Importer Type Sequelize
const { DataTypes } = require('sequelize');

// Importation de l'instance Sequelize configurée pour la connexion à la BDD
const sequelize = require('../sequelize'); 

// Définition du modèle Blague dans Sequelize
const Blague = sequelize.define(
  'Blague',  // Nom du modèle
  {
    // Définition des colonnes / champs de la table
    question: {
      type: DataTypes.STRING,  // Type String
      allowNull: false,        // Champ non nul
    },
    reponse: {
      type: DataTypes.STRING,  // Type String
      allowNull: false,        // Champ non nul
    },
  },
  {
    // Options du modèle
    tableName: 'blagues',    // Nom de la tablee SQLite
    timestamps: false,      
  }
);

// Exportation du modèle
module.exports = Blague;
