import React, { createContext, useState } from "react";
import { products } from "../utils/products";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  //add to cart functionality
  const addToCart = (item) => {
    const itemExistsInCart = cartItems.some(
      (cartItem) => cartItem.id === item.id
    );

    if (itemExistsInCart) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  // increase count
  const increaseCount = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // decrease count
  const decreaseCount = (id) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
      .filter((item) => item.count > 0);
    setCartItems(updatedCartItems);
  };

  // toggle cart functionality
  const toggleCart = () => {
    setIsOpen((prevState) => !prevState);
  };

  // cart Items count functionality
  const cartItemCount = cartItems.reduce((acc, { count }) => acc + count, 0);

  const cartContextValue = {
    cartItems,
    isOpen,
    toggleCart,
    addToCart,
    removeFromCart,
    decreaseCount,
    increaseCount,
    cartItemCount,
    products,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
