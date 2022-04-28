import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div>
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                {/* <!-- Website Logo --> */}
                <NavLink to="/" className="flex items-center py-4 px-2 ">
                  <img
                    src="https://img.innoloft.com/logo.svg"
                    alt="Logo"
                    className="h-12 w-20 mr-6"
                  />
                </NavLink>
              </div>
              <div className=" inline-block mt-6 md:mt-0 lg:mt-0 md:flex items-center space-x-12 max-w-6xl justify-center">
                <NavLink
                  to="/"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  MainPage
                </NavLink>
                <NavLink
                  to="/products"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Products
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
