const express = require('express'); // Importer Express
const app = express(); // Instance Express
const port = process.env.PORT || 3000; // Port d'écoute
const cors = require('cors'); // Middleware CORS => front-end distant
app.use(cors()); // Activer CORS Express

// Importer Swagger pour la documentation API
const swaggerUi = require('swagger-ui-express'); 
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const sequelize = require('./sequelize'); // Importer Sequelize
const Blague = require('./models/blague'); // Importer mode Blague


app.use(express.json()); // Parser corps de requetes http en JSON automatique

// Synchronisation base de données
sequelize.sync()
  .then(() => console.log('Base de données synchronisée')) 
  .catch(err => console.error('Erreur BDD :', err));

// Route racine => afficher une blague aléatoire
app.get('/', async (req, res) => {
  try {
    // Recuperer blague aléatoire
    const blague = await Blague.findOne({
      order: sequelize.random() // Trie aléatoire
    });
    // Si aucune blague trouvée
    if (!blague) return res.send('Aucune blague en base');
    // Sinon HTML avec question et réponse 
    res.send(`<h1>Blague du jour</h1>
      <p><strong>Q :</strong> ${blague.question}</p>
      <p><em>R :</em> ${blague.reponse}</p>`);
  } catch (err) {
    // En cas d'erreur, renvoyer status 500
    res.status(500).send('Erreur serveur');
  }
});

// Routes API blagues
const blagueRoutes = require('./routes/blagueRoutes');
app.use('/api/v1/blagues', blagueRoutes);

// Acces swagger depuis navigateur
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Démarrer serveur
app.listen(port, '0.0.0.0', () => {
  console.log(`Serveur démarré sur http://0.0.0.0:${port}`);
});
