const mongoose = require('mongoose');
const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  description: { type: String, required: true },
  timestamps: { createDate: Date, updatedDate: Date },
});

module.exports =
  mongoose.model.Recipe || mongoose.model("recipe", RecipeSchema);
