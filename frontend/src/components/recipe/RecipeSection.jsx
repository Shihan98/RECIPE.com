import { useState, useEffect } from "react";

import { recipeData } from "../../data/data";
import RecipeCard from "./card";
import axios from "axios";
// import Api from "../../api/api";

export default function RecipeSection() {
  const [data, setdata] = useState([]);

  // const api = new Api();

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/recipe")
      .then((result) => {
        setdata(result.data);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="bg-slate-200">
      <div className="container mx-auto py-10 flex gap-10">
        {data && data.map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      </div>
    </div>
  );
}
