import { SortContext } from "../context/Sort";
import { useContext } from "react";

export default function Sort() {
  const {
    searchText,
    updateSearchText,
    sortValue,
    setSortValue,
    categoryValue,
    setCategoryValue,
  } = useContext(SortContext);
  return (
    <div className="container">
      <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column gap-2 justify-content-sm-center align-items-center">
        <div className="flex w-100">
          <input
            type="search"
            name=""
            value={searchText}
            onChange={(e) => updateSearchText(e.target.value)}
            className="select2 border-primary w-100" // added w-100 class
            placeholder="Search for items ..."
          />
        </div>
        <div className="d-flex flex-lg-row flex-md-row flex-xl-row flex-sm-column flex-column gap-2 w-100">
          <select
            name=""
            id=""
            className="select2 w-100"
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
          <select
            name=""
            id=""
            className="select2 w-100"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            <option value="">All</option>
            <option value="phones">Phones</option>
            <option value="laptops">Laptops</option>
            <option value="networking">Networking</option>
            <option value="monitors">Monitors</option>
            <option value="gaming">Gaming</option>
            <option value="">Electronics</option>
          </select>
        </div>
      </div>
    </div>
  );
}
