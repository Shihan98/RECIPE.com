import React from "react";
import RecipeCard from "./card";

import { recipeData } from "../../data/data";

export default function RecipeSection() {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto py-10 flex gap-10">
        {recipeData.map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      </div>
    </div>
  );
}
