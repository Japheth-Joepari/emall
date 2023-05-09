import React, { createContext, useState, useEffect } from "react";

export const SavedContext = createContext();

export const SavedItemsProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);
  const [isOpenSaved, setIsOpenSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("savedItems");
    if (saved) {
      setSavedItems(JSON.parse(saved));
    }
  }, []);

  //add to saved items functionality
  const addSavedItem = (item) => {
    if (!savedItems.includes(item)) {
      const updatedItems = [...savedItems, item];
      setSavedItems(updatedItems);
      localStorage.setItem("savedItems", JSON.stringify(updatedItems));
    }
  };

  // remove from saved items functionality
  const removeFromSavedItems = (itemToRemove) => {
    const updatedItems = savedItems.filter((item) => item !== itemToRemove);
    setSavedItems(updatedItems);
    localStorage.setItem("savedItems", JSON.stringify(updatedItems));
  };

  // toggle saved items functionality
  const toggleSavedCart = () => {
    setIsOpenSaved((prevState) => !prevState);
  };

  // saved items count functionality
  const savedItemsCount = savedItems.reduce((acc, { count }) => acc + count, 0);

  // clear saved items functionality
  const clearSavedItems = () => {
    setSavedItems([]);
    localStorage.removeItem("savedItems");
  };

  const savedContextValue = {
    savedItems,
    addSavedItem,
    toggleSavedCart,
    removeFromSavedItems,
    isOpenSaved,
    savedItemsCount,
    clearSavedItems,
  };

  return (
    <SavedContext.Provider value={savedContextValue}>
      {children}
    </SavedContext.Provider>
  );
};

export default SavedItemsProvider;
