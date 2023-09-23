import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav>
      {/* Navigation bar */}
      <div className="mx-auto bg-gray-800 p-5 sticky shadow-md w-full">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link
              to="/"
              onClick={handleClick}
            >
              <i className="fa-solid fa-truck-fast" /> Tech It
            </Link>
          </div>
          <div className="hidden sm:flex space-x-4">
            <Link
              to="/"
              className="text-white hover:text-gray-200"
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-white hover:text-gray-200"
            >
              Categories
            </Link>
            <Link
              to="/cart"
              className="text-white hover:text-gray-200"
            >
              <i className="fa-solid fa-cart-shopping" /> Cart
            </Link>
          </div>
          <div className="sm:hidden">
            <button className="text-white">
              <i
                className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}
                onClick={handleClick}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {/* TODO: Add transition */}
      <ul
        className={`bg-gray-500 flex flex-col items-center pt-10 pb-10 gap-6 ${
          click ? "block" : "hidden"
        } sm:hidden`}
      >
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-200"
            onClick={handleClick}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/categories"
            className="text-white hover:text-gray-200"
            onClick={handleClick}
          >
            Categories
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            className="text-white hover:text-gray-200"
            onClick={handleClick}
          >
            <i className="fa-solid fa-cart-shopping" /> Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
