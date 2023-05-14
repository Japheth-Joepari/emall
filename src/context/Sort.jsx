import React, { createContext, useEffect, useState } from "react";
import { products } from "../utils/data/products";

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // setFilteredProducts([]);
    let sortedProducts = [...products];

    if (categoryValue) {
      sortedProducts = sortedProducts.filter(
        (item) => item.category.toLowerCase() === categoryValue.toLowerCase()
      );
    }

    if (searchText) {
      sortedProducts = sortedProducts.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (sortValue) {
      sortedProducts.sort((a, b) => {
        switch (sortValue) {
          case "name":
            return a.title.localeCompare(b.title);
          case "price":
            return a.price - b.price;
          default:
            return 0;
        }
      });
    }

    setFilteredProducts(sortedProducts);
  }, [searchText, sortValue, categoryValue]);

  const updateSearchText = (text) => {
    setSearchText(text);
  };

  const SortContextValue = {
    products: filteredProducts,
    searchText,
    updateSearchText,
    setSortValue,
    categoryValue,
    setFilteredProducts,
    setCategoryValue,
  };

  return (
    <SortContext.Provider value={SortContextValue}>
      {children}
    </SortContext.Provider>
  );
};

export default SortProvider;
