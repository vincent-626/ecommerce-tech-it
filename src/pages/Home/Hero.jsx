import React from "react";
import { Link } from "react-router-dom";
import general from "../../assets/images/general-1.jpg";

function Hero(props) {
  const { setCategory } = props;

  return (
    <Link
      to="/categories/all"
      onClick={() => setCategory("All")}
    >
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
          {/* Overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center hover:bg-black/50 transition-all duration-300">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Get <span className="text-orange-500">All</span>
            </h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-orange-500">You</span> Need
            </h1>
          </div>

          <img
            className="w-full max-h-[500px] object-cover"
            src={general}
            alt="Laptops"
          />
        </div>
      </div>
    </Link>
  );
}

export default Hero;
