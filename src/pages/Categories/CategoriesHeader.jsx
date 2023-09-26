import React, { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader(props) {
  const { category, setCategory } = props;

  return (
    <div>
      <h1 className="max-w-[1640px] mx-auto font-bold text-5xl text-center pt-20">
        {category}
      </h1>

      <div className="max-w-[1640px] mx-2 flex flex-row flex-wrap gap-4 justify-center items-center my-10">
        <Link to="/categories/all">
          <button
            className={`hover:bg-black hover:text-white duration-300 ${
              category === "All" ? "bg-black text-white" : ""
            }`}
            onClick={() => setCategory("All")}
          >
            All
          </button>
        </Link>
        <Link to="/categories/laptops">
          <button
            className={`hover:bg-black hover:text-white duration-300 ${
              category === "Laptops" ? "bg-black text-white" : ""
            }`}
            onClick={() => setCategory("Laptops")}
          >
            Laptops
          </button>
        </Link>
        <Link to="/categories/phones">
          <button
            className={`hover:bg-black hover:text-white duration-300 ${
              category === "Phones" ? "bg-black text-white" : ""
            }`}
            onClick={() => setCategory("Phones")}
          >
            Phones
          </button>
        </Link>
        <Link to="/categories/watches">
          <button
            className={`hover:bg-black hover:text-white duration-300 ${
              category === "Watches" ? "bg-black text-white" : ""
            }`}
            onClick={() => setCategory("Watches")}
          >
            Watches
          </button>
        </Link>
        <Link to="/categories/keyboards">
          <button
            className={`hover:bg-black hover:text-white duration-300 ${
              category === "Keyboards" ? "bg-black text-white" : ""
            }`}
            onClick={() => setCategory("Keyboards")}
          >
            Keyboards
          </button>
        </Link>
        <Link to="/categories/mice">
          <button
            className={`hover:bg-black hover:text-white duration-300 ${
              category === "Mice" ? "bg-black text-white" : ""
            }`}
            onClick={() => setCategory("Mice")}
          >
            Mice
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CategoriesHeader;
