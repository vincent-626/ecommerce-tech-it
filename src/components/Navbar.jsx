import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="bg-gray-800 p-5 shadow-md md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center h-10">
        <span className="text-white font-bold text-2xl">
          <Link
            to="/"
            onClick={() => setClick(false)}
          >
            <i className="fa-solid fa-truck-fast" /> Tech It
          </Link>
        </span>

        <span className="text-3xl cursor-pointer text-white mx-2 md:hidden block">
          <i
            className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}
            onClick={handleClick}
          />
        </span>
      </div>

      <ul
        className={`md:flex md:items-center md:z-auto z-[-1] md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-4 md:bg-gray-800 ${
          click
            ? "opacity-100 top-[70px] bg-gray-600"
            : "opacity-0 top-[-400px] bg-gray-800"
        } md:opacity-100 transition-all md:transition-none ease-in-out duration-500`}
      >
        <li className="mx-4 md:mx-0 my-6 md:my-0">
          <Link
            to="/"
            className="text-white hover:text-gray-200"
          >
            <button
              className="px-3 py-2"
              onClick={handleClick}
            >
              HOME
            </button>
          </Link>
        </li>
        <li className="mx-4 md:mx-0 my-6 md:my-0">
          <Link
            to="/categories"
            className="text-white hover:text-gray-200"
          >
            <button
              className="px-3 py-2"
              onClick={handleClick}
            >
              CATEGORIES
            </button>
          </Link>
        </li>
        <li className="mx-4 md:mx-0 my-6 md:my-0">
          <Link
            to="/cart"
            className="text-white hover:text-gray-200"
          >
            <button
              className="bg-blue-300 text-black ml-3 px-6 py-2 hover:bg-gray-500 rounded duration-300"
              onClick={handleClick}
            >
              <i className="fa-solid fa-cart-shopping" /> Cart
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
