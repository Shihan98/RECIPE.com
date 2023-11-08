import React, { useState } from "react";
import EditModal from "../modal/editModal";
import DeleteModal from "../modal/deleteModal";

export default function RecipeCard({ recipe }) {
  const { name, ingredients, description } = recipe;


  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="">
        <div className="font-bold text-xl px-6 py-4">{name}</div>
        <div className="bg-slate-200 px-6 py-4">
          <p>Ingredients:</p>
          <p className="text-gray-700 text-base">{ingredients}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <p>{description}</p>
      </div>
      <div>
        <EditModal recipe={recipe} />
        <DeleteModal />
      </div>
    </div>
  );
}
