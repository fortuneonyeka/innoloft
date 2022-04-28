import React from "react";

const Description = ({ products, closeModalProp, value, setValue }) => {
  return (
    <div>
      <div className="w-screen h-screen fixed mt-56 flex justify-center items-center">
        <div className="bg-white p-8 card border">
          <button
            onClick={closeModalProp}
            className="p-2 bg-indigo-600 text-white font-bold"
          >
            Close
          </button>

          <div className="">
            <h2 className="text-3xl">Description: </h2>
            <p className="flex justify-center w-5/6">{products.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
