import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import { PRODUCTS } from "../../assets/data/products";
import CartItem from "./CartItem";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4">
        <h1 className="my-8 text-3xl font-bold text-center">
          <i className="fa-solid fa-bag-shopping" /> Your Cart
        </h1>
        <div className="flex flex-col">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <CartItem
                  key={product.id}
                  product={product}
                />
              );
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="p-4 font-bold text-center">
            <p className="mt-8 text-3xl"> Subtotal: ${totalAmount}</p>
            <button className="px-8 py-3 mt-8 text-xl text-white duration-300 bg-black border-2 hover:bg-white hover:text-black">
              Checkout
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="p-4 mt-8 text-3xl font-bold text-center">
              Your Cart is Empty
            </h1>
            <Link to="/categories/all">
              <button className="px-6 py-2 font-medium text-center text-white duration-300 bg-black hover:text-black hover:bg-white">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
