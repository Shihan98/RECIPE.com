import React from "react";
import Hero from "../components/heroSection/hero";
import RecipeSection from "../components/recipe/recipeSection";
import AddRecipe from "../components/recipe/addRecipe";

export default function Homepage() {
  return (
    <>
      <Hero />
      <RecipeSection />
      <AddRecipe/>
    </>
  );
}
