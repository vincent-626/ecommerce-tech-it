import React, { useState } from "react";
import { Link } from "react-router-dom";

// TODO: Fix position of dropdown

function Navbar(props) {
  const { setCategory } = props;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="bg-gray-800 max-w-[1640px] mx-auto flex justify-between items-center p-4 h-20">
      {/* Left side */}
      <div className="flex justify-center items-center">
        <div className="text-white font-bold text-2xl cursor-pointer">
          <Link
            to="/"
            onClick={() => setClick(false)}
          >
            <i className="fa-solid fa-truck-fast" /> Tech It
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <span className="text-3xl cursor-pointer text-white mx-2 md:hidden block">
        <i
          className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}
          onClick={handleClick}
        />
      </span>

      {/* Right side */}
      <ul
        className={`flex flex-col md:flex-row md:items-center md:z-auto z-[-1] md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-4 md:bg-gray-800 ${
          click
            ? "opacity-100 top-[70px] bg-gray-700"
            : "opacity-0 top-[-400px] bg-gray-800"
        } md:opacity-100 transition-all md:transition-none ease-in-out duration-500`}
      >
        <li className="mx-4 md:mx-0 my-4 md:my-0">
          <Link
            to="/"
            className="text-white hover:text-gray-200"
          >
            <button
              className="border-0 px-3 py-2"
              onClick={handleClick}
            >
              HOME
            </button>
          </Link>
        </li>
        <li className="mx-4 md:mx-0 my-4 md:my-0">
          <Link
            to="/categories/all"
            className="text-white hover:text-gray-200"
          >
            <button
              className="border-0 px-3 py-2"
              onClick={() => {
                handleClick();
                setCategory("All");
              }}
            >
              CATEGORIES
            </button>
          </Link>
        </li>
        <li className="mx-4 md:mx-0 my-4 md:my-0">
          <Link
            to="/cart"
            className="text-white hover:text-gray-200"
          >
            <button
              className="bg-white text-black ml-3 px-6 py-2 hover:bg-gray-500 rounded-3xl duration-300"
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
