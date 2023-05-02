import React, { createContext, useState } from "react";

export const SavedContext = createContext();

export const SavedItemsProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);
  const [isOpenSaved, setIsOpenSaved] = useState(false);

  //add to cart functionality
  const addSavedItem = (item) => {
    if (!savedItems.includes(item)) {
      setSavedItems([...savedItems, item]);
    }
    console.log(savedItems);
  };

  // remove from cart
  const removeFromSavedItems = (itemToRemove) => {
    const updatedItems = savedItems.filter((item) => item !== itemToRemove);
    setSavedItems(updatedItems);
    console.log(savedItems);
  };

  // toggle cart functionality
  const toggleSavedCart = () => {
    console.log("open");
    setIsOpenSaved((prevState) => !prevState);
  };

  // cart Items count functionality
  const savedItemsCount = savedItems.reduce((acc, { count }) => acc + count, 0);

  const cartContextValue = {
    savedItems,
    addSavedItem,
    toggleSavedCart,
    removeFromSavedItems,
    isOpenSaved,
    savedItemsCount,
  };

  return (
    <SavedContext.Provider value={cartContextValue}>
      {children}
    </SavedContext.Provider>
  );
};

export default SavedItemsProvider;
