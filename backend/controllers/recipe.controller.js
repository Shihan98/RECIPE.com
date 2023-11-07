const recipeModel = require("../models/recipe.model");
const recipe = require("../models/recipe.model");

exports.addRecipe = async (req, res) => {
  const { name, ingredients, description } = req.body;
  const newrecipe = { name, ingredients, description };
  recipe.create(newrecipe);
  res.status(201).json({ message: "Recipe added successfully" });
};

exports.getRecipe = async (req, res) => {
  let id = req.params.id;
  const result = await recipe.findById(id);
  res.status(200).json(result);
};

exports.getAllRecipe = async (req, res) => {
  const result = await recipe.find({});
  res.status(200).json(result);
};

exports.editRecipe = async (req, res) => {
  let id = req.params.id;
  const { name, ingredients, description } = req.body;
  const updatedRecipe = await recipe.findOneAndUpdate(
    { _id: id },
    { name, ingredients, description },
    { new: true }
  );

  res.status(200).json(updatedRecipe);
};

exports.deleteRecipe = async (req, res) => {
  let id = req.params.id;
  const deletedRecipe = await recipe.findByIdAndDelete(id);
  res.status(200).json({ message: "deleted" });
};
