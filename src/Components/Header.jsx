import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/" class="flex items-center py-4 px-2">
        <img
          src="https://img.innoloft.com/logo.svg"
          alt="Logo"
          class="h-8 w-8 mr-2"
        />
      </NavLink>
    </div>
  );
};

export default Header;
