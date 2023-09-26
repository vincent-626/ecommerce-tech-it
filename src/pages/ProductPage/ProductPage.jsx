import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function ProductPage(props) {
  const setCategory = props.setCategory;
  const { name, price, description, image, altImg, category } = props.product;
  const [img, setImg] = useState(image);

  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4">
        <Link
          to={`/categories/${category}`}
          className="p-2 w-full h-full font-medium text-gray-800 text-lg"
          onClick={() =>
            setCategory(category.charAt(0).toUpperCase() + category.slice(1))
          }
        >
          <i className="fa-solid fa-angle-left mr-2" />{" "}
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-10 gap-10">
          <div className="flex flex-col max-w-[480px] gap-4 justify-self-center md:justify-self-end">
            <img
              className="object-cover w-full h-full shadow-md"
              src={img}
              alt={name}
            />
            <div className="flex flex-row justify-center items-center gap-4">
              <div
                className="relative cursor-pointer border max-w-[120px] shadow-md"
                onMouseOver={() => setImg(image)}
              >
                <div className="absolute hover:bg-black/20 w-full h-full duration-300"></div>
                <img
                  className="object-cover"
                  src={image}
                  alt={name}
                />
              </div>
              <div
                className="relative cursor-pointer border max-w-[120px] shadow-md"
                onMouseOver={() => setImg(altImg[0])}
              >
                <div className="absolute hover:bg-black/20 w-full h-full duration-300"></div>
                <img
                  className="object-cover"
                  src={altImg[0]}
                  alt={name}
                />
              </div>
              <div
                className="relative cursor-pointer border max-w-[120px] shadow-md"
                onMouseOver={() => setImg(altImg[1])}
              >
                <div className="absolute hover:bg-black/20 w-full h-full duration-300"></div>
                <img
                  className="object-cover"
                  src={altImg[1]}
                  alt={name}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-[480px] gap-4 bg-gray-200 shadow-md p-8 justify-between justify-self-center md:justify-self-start">
            <div className="mt-10">
              <h1 className="font-bold text-3xl mb-4">{name}</h1>
              <p className="font-bold text-xl">${price}</p>
            </div>
            <p className="my-4">{description}</p>
            <div className="flex sm:flex-row flex-col justify-center gap-4 mb-10 text-lg">
              <button className="rounded-none py-2 px-8 shadow-md font-medium border-2 hover:bg-black hover:text-white duration-200">
                Add to Cart
              </button>
              <button className="rounded-none py-2 px-8 shadow-md font-medium border-2 bg-orange-600 border-orange-600 text-white hover:text-orange-600 hover:bg-transparent duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
