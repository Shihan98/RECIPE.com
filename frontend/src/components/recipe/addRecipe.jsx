import React from "react";
import AddModal from "../modal/addModal";

export default function AddRecipe() {
  return (
    <div className="bg-cyan-100 flex">
      <div className="grid grid-cols-6 gap-4 container mx-auto p-5 py-8">
        <div className="self-center col-start-1 col-end-2 ... ">
          <AddModal />
        </div>
        <div className="col-end-7 col-span-5 ...">
          <p className="font-medium">Ready to add your own twist?</p>
          <p className="font-thin">
            Click 'Add a Recipe' to share your culinary creations with the
            community!
          </p>
        </div>
      </div>
    </div>
  );
}
