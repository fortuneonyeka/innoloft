import React from "react";

const Attributes = ({ products, closeModalProp }) => {
  return (
    <div>
      <div className="w-screen h-screen fixed mt-64 flex justify-center items-center  bg-gray-400 bg-opacity-5">
        <div className="bg-white card p-8 w-4/5 bg-white border mr-9">
          <button
            onClick={closeModalProp}
            className="p-2 bg-indigo-600 text-white font-bold"
          >
            Close
          </button>
          <div className="flex flex-col  items-center ">
            <h2 className="lg:text-4xl">Product Attributes</h2>
            <p className=" lg:text-2xl mr-12">
              Category: {products.categories[0].name}
            </p>
            <p className=" lg:text-2xl ml-9">
              Business Model: {products.businessModels[0].name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
