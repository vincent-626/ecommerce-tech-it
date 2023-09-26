import React from "react";
import ProductBox from "../../components/ProductBox";
import { PRODUCTS } from "../../assets/data/products";

function Laptops() {
  return (
    <div>
      <div className="p-4 flex flex-wrap justify-center items-center gap-6 mb-20">
        {PRODUCTS.map((product) => {
          if (product.category === "laptops") {
            return (
              <ProductBox
                key={product.id}
                product={product}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Laptops;
