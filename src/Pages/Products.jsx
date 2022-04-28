import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { loadProducts } from "../Redux/Reducers/Products";
import Description from "./Description";
import Attributes from "./Attributes";
import MapContainer from "./MapContainer";

const Products = () => {
  const dispatch = useDispatch();
  const loadProductsAction = bindActionCreators(loadProducts, dispatch);
  const [selectedAttribute, setSelectedAttribute] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [value, setValue] = useState();

  const closeDescription = () => {
    setSelectedProduct(null);
  };
  const closeAttribute = () => {
    setSelectedAttribute(null);
  };

  useEffect(() => {
    loadProductsAction();
  }, []);

  const product = useSelector((state) => state.products);


  return (
    <div className="container info md:space-x-20  ml-6 py-9 px-12 flex lg:justify-items-center lg:justify-around  ">
      {product && (
        <div>
          {selectedProduct && (
            <Description
              products={selectedProduct}
              value={value}
              setValue={setValue}
              closeModalProp={() => closeDescription()}
            />
          )}
          {selectedAttribute && (
            <Attributes
              products={selectedAttribute}
              closeModalProp={() => closeAttribute()}
            />
          )}
          <div>
            <div className="flex flex-col">
              <img
                src={product.picture}
                alt="Product image"
                className="w-11/12 h-11/12"
              />
              <h2 className="text-3xl">Name: {product.name}</h2>
              {/* <h2 className="text-3xl">Tittle: {product.type.name}</h2> */}

              <div className="flex buttons justify-center justify-between mt-4 lg:mr-28 sm:mr-18">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-blue-600 p-4 w-40  mr-4 rounded"
                >
                  Description tab
                </button>
                <button
                  onClick={() => setSelectedAttribute(product)}
                  className="bg-blue-600 p-4 w-40 rounded"
                >
                  Attributes tab
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="">
        {product.user && (
          <div className="ml-34 user">
            <div className="mb-4 shadow-lg  lg:border p-4">
              <img
                className="w-96 h-40"
                src={product.user.profilePicture}
                alt=""
              />
              <div className="mt-4 flex flex-col">
                <h2 className="">FIRST NAME: {product.user.firstName}</h2>
                <h2>LAST NAME: {product.user.lastName}</h2>
                <h2>EMAIL: {product.user.email}</h2>
                <h2>SEX: {product.user.sex}</h2>
                <h2>POSITION: {product.user.position}</h2>
              </div>
            </div>

           
          </div>
          
        )}
         <div className="map">
              <MapContainer />
            </div>
      </div>
    </div>
  );
};

export default Products;
