import React from "react";
import laptop from "../../assets/images/laptop-1.jpeg";
import phone from "../../assets/images/phone-1.jpeg";
import watch from "../../assets/images/watch-1.jpeg";
import { Link } from "react-router-dom";

function Cards(props) {
  const { setCategory } = props;

  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6">
        {/* Laptops */}
        <Link
          to="/categories/laptops"
          onClick={() => setCategory("Laptops")}
        >
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/40 rounded-xl text-gray-100 flex flex-col justify-end hover:bg-black/50 transition-all duration-300">
              <p className="font-bold text-2xl px-4 py-4">Laptops</p>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={laptop}
              alt="Laptops"
            />
          </div>
        </Link>
        {/* Phones */}
        <Link
          to="/categories/phones"
          onClick={() => setCategory("Phones")}
        >
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/40 rounded-xl text-gray-100 flex flex-col justify-end hover:bg-black/50 transition-all duration-300">
              <p className="font-bold text-2xl px-4 py-4">Phones</p>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={phone}
              alt="Phones"
            />
          </div>
        </Link>
        {/* Watches */}
        <Link
          to="/categories/watches"
          onClick={() => setCategory("Watches")}
        >
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/40 rounded-xl text-gray-100 flex flex-col justify-end hover:bg-black/50 transition-all duration-300">
              <p className="font-bold text-2xl px-4 py-4">Watches</p>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={watch}
              alt="Watches"
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Cards;
