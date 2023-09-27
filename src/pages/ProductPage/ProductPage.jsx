import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { ShopContext } from "../../contexts/ShopContext";

function ProductPage(props) {
  const setCategory = props.setCategory;
  const { id, name, price, description, image, altImg, category } =
    props.product;
  const [img, setImg] = useState(image);
  const [notify, setNotify] = useState(false);
  const { addToCart } = useContext(ShopContext);

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`alert-added ${notify ? "slide-in" : ""}`}
      >
        <i className="mr-2 fa-solid fa-cart-shopping" /> Item is successfully
        added to cart!
      </div>
      <div className="max-w-[1640px] mx-auto p-4">
        <Link
          to={`/categories/${category}`}
          className="w-full h-full p-2 text-lg font-medium text-gray-800"
          onClick={() =>
            setCategory(category.charAt(0).toUpperCase() + category.slice(1))
          }
        >
          <i className="mr-2 fa-solid fa-angle-left" />{" "}
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
        <div className="grid justify-center grid-cols-1 gap-10 mt-10 md:grid-cols-2">
          <div className="flex flex-col max-w-[480px] gap-4 justify-self-center md:justify-self-end">
            <img
              className="object-cover w-full h-full shadow-md"
              src={img}
              alt={name}
            />
            <div className="flex flex-row items-center justify-center gap-4">
              <div
                className="relative cursor-pointer border max-w-[120px] shadow-md"
                onMouseOver={() => setImg(image)}
              >
                <div className="absolute w-full h-full duration-300 hover:bg-black/20"></div>
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
                <div className="absolute w-full h-full duration-300 hover:bg-black/20"></div>
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
                <div className="absolute w-full h-full duration-300 hover:bg-black/20"></div>
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
              <h1 className="mb-4 text-3xl font-bold">{name}</h1>
              <p className="text-xl font-bold">${price}</p>
            </div>
            <p className="my-4">{description}</p>
            <div className="flex flex-col justify-center gap-4 mb-10 text-lg sm:flex-row">
              <button
                className="px-8 py-2 font-medium duration-200 border-2 rounded-none shadow-md hover:bg-black hover:text-white"
                onClick={() => {
                  addToCart(id);
                  setNotify(true);
                }}
              >
                Add to Cart
              </button>
              <button className="px-8 py-2 font-medium text-white duration-200 bg-orange-600 border-2 border-orange-600 rounded-none shadow-md hover:text-orange-600 hover:bg-transparent">
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
