const Blague = require('../models/blague');
const sequelize = require('../sequelize');

// BLAGUE ALÉATOIRE
exports.getRandomBlague = async (req, res) => {
  try {
    const count = await Blague.count();
    if (count === 0) return res.status(404).json({ error: "Blague non trouvée" });
    const randomIndex = Math.floor(Math.random() * count);
    const blague = await Blague.findOne({
      offset: randomIndex,
      order: [['id', 'ASC']], 
    });
    res.json(blague);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer toutes les blagues
exports.getAllBlagues = async (req, res) => {
  try {
    const blagues = await Blague.findAll();
    res.json(blagues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer une blague par ID
exports.getBlagueById = async (req, res) => {
  try {
    const blague = await Blague.findByPk(req.params.id);
    if (!blague) return res.status(404).json({ error: "Blague non trouvée" });
    res.json(blague);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Ajouter une nouvelle blague
exports.addBlague = async (req, res) => {
  try {
    const { question, reponse } = req.body;
    if (!question || !reponse) {
      return res.status(400).json({ error: "question et reponse sont requis" });
    }
    const nouvelleBlague = await Blague.create({ question, reponse });
    res.status(201).json(nouvelleBlague);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
