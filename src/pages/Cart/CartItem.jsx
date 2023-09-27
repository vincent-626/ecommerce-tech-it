import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";

// TODO: Responsiveness

function CartItem(props) {
  const { id, name, price, image } = props.product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1200px] grid justify-center grid-cols-5 border border-gray-300 m-1">
        <img
          className="object-cover max-w-[240px] justify-self-center p-2"
          src={image}
          alt={name}
        />
        <div className="flex flex-col justify-center col-span-2 pl-6 bg-gray-100">
          <p className="text-2xl font-medium">{name}</p>
          <p className="text-xl">${price}</p>
        </div>
        <div className="flex flex-col justify-center w-full bg-gray-100 justify-self-center">
          <div className="flex flex-row">
            <button
              className="text-white bg-black rounded-none"
              onClick={() => removeFromCart(id)}
            >
              -
            </button>
            <input
              className="text-center max-w-[50px] border border-black"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button
              className="text-white bg-black rounded-none"
              onClick={() => addToCart(id)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full bg-gray-100 justify-self-center">
          <p className="text-xl text-center">
            Total: <span className="font-medium">${price * cartItems[id]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
