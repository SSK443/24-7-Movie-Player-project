import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="home h-fit w-full">
      <Link to="/">
        <header className="nav h-[10vh] w-full text-white flex items-center justify-start bg-gradient-to-r from-teal-600 via-teal-500 to-teal-700 px-4 shadow-lg">
          <i className="fa-solid fa-film text-white text-4xl p-2 pl-4 animate-fadeInLogo"></i>
          <h1 className="font-display font-semibold text-4xl ml-4 text-gray-200 hover:text-white transition duration-300">
            Movie 24/7
          </h1>
        </header>
      </Link>
    </div>
  );
}

export default Header;
