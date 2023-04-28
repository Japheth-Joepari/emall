import React, { createContext, useState } from "react";

export const SavedContext = createContext();

export const SavedItemsProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [savedItems, setSavedItems] = useState([]);

  //add to cart functionality
  const addSavedItem = (item) => {
    if (!savedItems.includes(item)) {
      setSavedItems([...savedItems, item]);
    }
  };

  // remove from cart
  const removeFromSavedItems = (id) => {
    const updatedSavedItems = savedItems.filter((item) => item.id !== id);
    setSavedItems(updatedSavedItems);
  };

  // toggle cart functionality
  const toggleSavedCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  // cart Items count functionality
  const savedItemCount = savedItems.length;

  const cartContextValue = {
    isCartOpen,
    savedItems,
    addSavedItem,
    removeFromSavedItems,
    savedItemCount,
    toggleSavedCart,
  };

  return (
    <SavedItemsContext.Provider value={cartContextValue}>
      {children}
    </SavedItemsContext.Provider>
  );
};

export default SavedItemsProvider;
