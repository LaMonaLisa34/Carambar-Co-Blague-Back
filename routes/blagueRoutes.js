const express = require('express');
const router = express.Router();
const blagueController = require('../controllers/blagueController');

router.get('/random', blagueController.getRandomBlague);
router.get('/', blagueController.getAllBlagues);
router.get('/:id', blagueController.getBlagueById);
router.post('/', blagueController.addBlague);

module.exports = router;