import React, { createContext, useState, useEffect } from "react";
import Nav from "../components/Header";
import { products } from "../utils/products";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    data: products,
    cart: [],
  });

  const addToCart = (item) => {
    setState((prevState) => {
      const updatedCart = prevState.cart.find(
        (cartItem) => cartItem.id === item.id
      )
        ? prevState.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...prevState.cart, { ...item, count: 1 }];
      console.log(updatedCart);
      return { ...prevState, cart: updatedCart };
    });
    console.log(cartItemCount);
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );

  return (
    <CartContext.Provider
      value={{
        state: state,
        isOpen,
        toggleCart,
        addToCart,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
