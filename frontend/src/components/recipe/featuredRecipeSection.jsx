import React from "react";
import FeaturedRecipeCard from "./featuredCard";

import { recipeData } from "../../data/data";

export default function FeaturedRecipeSection() {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto py-10 flex gap-10">
        {recipeData.map((item) => (
          <FeaturedRecipeCard key={item.id} recipe={item} />
        ))}
      </div>
    </div>
  );
}
