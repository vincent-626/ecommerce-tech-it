import React from "react";
import { Link } from "react-router-dom";

function ProductBox(props) {
  const { name, price, image, category } = props.product;

  return (
    <>
      <Link to={`/categories/${category}/${name.split(" ").join("")}`}>
        <div className="p-4 shadow-lg border-2 border-white max-w-[360px] hover:scale-105 duration-300">
          <img
            src={image}
            alt={name}
            className="object-cover mb-8"
          />
          <p className="text-xl mb-2">{name}</p>
          <p className="text-2xl font-bold">${price}</p>
        </div>
      </Link>
    </>
  );
}

export default ProductBox;
