import { createContext, useState } from "react";
import { products } from "../utils/data/products";

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  // search Item
  // update search text
  const updateSearchText = (text) => {
    setSearchText(text);
  };

  // filter products based on search text
  // filter products based on search text and sort value
  const filteredProducts = () => {
    let sortedProducts = [...products];

    if (searchText) {
      sortedProducts = sortedProducts.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (sortValue) {
      sortedProducts = sortedProducts.sort((a, b) => {
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

    if (categoryValue) {
      sortedProducts = sortedProducts.filter(
        (item) => item.category.toLowerCase() === categoryValue.toLowerCase()
      );
    }

    return sortedProducts;
  };

  //   filter based on SortValue

  const SortContextValue = {
    products: filteredProducts(),
    searchText,
    updateSearchText,
    setSortValue,
    categoryValue,
    setCategoryValue,
  };

  return (
    <SortContext.Provider value={SortContextValue}>
      {children}
    </SortContext.Provider>
  );
};

export default SortProvider;
