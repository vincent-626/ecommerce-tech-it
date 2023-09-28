import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { setCategory } = props;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="max-w-[1640px] mx-auto fixed z-[9999] top-0 w-full">
      {/* Mobile screen */}
      <div className="max-w-[1640px] md:hidden mx-auto">
        {/* Top bar */}
        <div className="bg-gray-800 flex justify-between items-center p-4 h-[6rem]">
          <div className="flex items-center justify-center h-full mx-4">
            <div className="text-3xl font-bold text-center text-white cursor-pointer ">
              <Link
                to="/"
                onClick={() => setClick(false)}
              >
                <i className="fa-solid fa-truck-fast" /> Tech It
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center h-full text-lg">
            <span className="block ml-2 mr-4 text-3xl text-white cursor-pointer">
              <i
                className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}
                onClick={handleClick}
              />
            </span>
            <Link
              to="/cart"
              className="text-white hover:text-gray-200"
            >
              <button className="px-6 py-2 ml-3 text-black duration-300 bg-white hover:bg-gray-500 rounded-3xl">
                <i className="fa-solid fa-cart-shopping" />
              </button>
            </Link>
          </div>
        </div>

        {/* Drop down */}
        <div
          className={`h-full ${
            click
              ? "opacity-100 top-0 bg-gray-700"
              : "opacity-0 top-[-120%] bg-gray-800"
          } fixed z-[999] w-full text-2xl font-medium transition-all duration-500`}
        >
          <div className="px-6 pt-4 text-3xl font-bold text-white cursor-pointer text-end">
            <i
              className="fa-solid fa-times"
              onClick={handleClick}
            />
          </div>
          <ul className={`flex flex-col h-full justify-center items-center`}>
            <li className="mx-4 mb-4">
              <Link
                to="/"
                className="text-white hover:text-gray-200"
              >
                <button
                  className="px-3 py-2 border-0"
                  onClick={handleClick}
                >
                  HOME
                </button>
              </Link>
            </li>
            <li className="m-4 mb-10">
              <Link
                to="/categories/all"
                className="text-white hover:text-gray-200"
              >
                <button
                  className="px-3 py-2 border-0"
                  onClick={() => {
                    handleClick();
                    setCategory("All");
                  }}
                >
                  CATEGORIES
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Computer screen */}
      <div className="bg-gray-800 max-w-[1640px] mx-auto hidden md:flex justify-between items-center p-4 h-[6rem]">
        {/* Left side */}
        <div className="flex items-center justify-center h-full mx-4">
          <div className="text-3xl font-bold text-center text-white cursor-pointer ">
            <Link
              to="/"
              onClick={() => setClick(false)}
            >
              <i className="fa-solid fa-truck-fast" /> Tech It
            </Link>
          </div>
        </div>

        {/* Right side */}
        <ul
          className={`hidden md:flex flex-row items-center z-auto static w-auto bg-gray-800 text-lg`}
        >
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-200"
            >
              <button
                className="px-3 py-2 border-0"
                onClick={handleClick}
              >
                HOME
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/categories/all"
              className="text-white hover:text-gray-200"
            >
              <button
                className="px-3 py-2 border-0"
                onClick={() => {
                  handleClick();
                  setCategory("All");
                }}
              >
                CATEGORIES
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-white hover:text-gray-200"
            >
              <button
                className="px-6 py-2 ml-3 text-black duration-300 bg-white hover:bg-gray-500 rounded-3xl"
                onClick={handleClick}
              >
                <i className="fa-solid fa-cart-shopping" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
