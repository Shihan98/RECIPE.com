import React from "react";
import HeroImage from "../../assets/cover.jpg";

export default function Hero() {
  return (
    <div>
      <img
        src={HeroImage}
        alt="Hero Image"
        className="w-screen h-96 object-cover "
      />
      <div className="container mx-auto">
        <h1 className=" text-4xl">
          Welcome to Your <span className="font-bold">RECIPE</span> Book!
        </h1>
        <p className="text-2xl mt-5">
          Explore and manage your favorite recipes with ease. Whether you're a
          seasoned chef or just getting started, this is your culinary
          companion.
        </p>
      </div>
    </div>
  );
}
