const express = require('express');
const { addRecipe, getRecipe, deleteRecipe, editRecipe, getAllRecipe } = require('../controllers/recipe.controller');
const router = express.Router();

router.post('/', addRecipe);
router.get('/', getAllRecipe);
router.get('/:id', getRecipe);
router.delete('/:id',deleteRecipe);
router.put('/:id', editRecipe);

module.exports = router;