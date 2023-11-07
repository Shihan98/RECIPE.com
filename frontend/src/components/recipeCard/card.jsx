import React from "react";


export default function RecipeCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Savory Spinach and Feta Stuffed Chicken</div>
        <div className="bg-lime-300">
            <h5>Ingredients:</h5>
            <p className="text-gray-700 text-base">
                Chicken breasts, Spinach, Feta cheese, Olive oil
            </p>
        </div>
        
      </div>
      <div className="px-6 py-4">
        <p>
            A delicious and healthy dish that's quick to prepare. Perfect for a cozy dinner or entertaining guests.
        </p>
      </div>
    </div>
  );
}
