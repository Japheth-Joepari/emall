import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  //add to cart functionality
  const addToCart = (item) => {
    const itemExistsInCart = cartItems.some(
      (cartItem) => cartItem.id === item.id
    );

    let updatedCartItems;
    if (itemExistsInCart) {
      updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
    } else {
      updatedCartItems = [...cartItems, { ...item, count: 1 }];
    }

    setCartItems(updatedCartItems);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // wipe cart
  const wipeCart = () => {
    setCartItems([]);
    const updatedCartItems = []; // Create an empty array
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // remove from cart
  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
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
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
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
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // toggle cart functionality
  const toggleCart = () => {
    setIsOpen((prevState) => !prevState);
  };

  // get the total Item
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  // cart Items count functionality
  const cartItemCount = cartItems.reduce((acc, { count }) => acc + count, 0);

  const cartContextValue = {
    cartItems,
    isOpen,
    toggleCart,
    addToCart,
    setCartItems,
    removeFromCart,
    decreaseCount,
    increaseCount,
    cartItemCount,
    total,
    wipeCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
