import { createContext, useEffect, useState } from "react";
import { products } from "../utils/data/products";

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // retrieve the URL parameter named "category"
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    console.log(category);

    // filter products based on the URL parameter
    let sortedProducts = [...products];
    if (category) {
      sortedProducts = sortedProducts.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // apply other filters if they exist
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

    // set the filtered products
    setFilteredProducts(sortedProducts);
  }, [searchText, sortValue, categoryValue]);

  // update search text
  const updateSearchText = (text) => {
    setSearchText(text);
  };

  //   filter based on SortValue
  const SortContextValue = {
    products: filteredProducts,
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
