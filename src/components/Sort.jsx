export default function Sort() {
  return (
    <div className="container">
      <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column gap-2 justify-content-sm-center align-items-center">
        <div className="flex w-100">
          <input
            type="search"
            name
            id
            className="select2 border-primary w-100" // added w-100 class
            placeholder="Search for items ..."
          />
        </div>
        <div className="d-flex flex-lg-row flex-md-row flex-xl-row flex-sm-column flex-column gap-2 w-100">
          <select name id className="select2 w-100">
            <option value>Sort By</option>
            <option value>Select</option>
            <option value>Select</option>
            <option value>Select</option>
            <option value>Select</option>
          </select>
          <select name id className="select2 w-100 ">
            <option value>Category</option>
            <option value>Electronics</option>
            <option value>Phones</option>
            <option value>Laptops</option>
            <option value>Networking</option>
            <option value>Monitors</option>
            <option value>Gamming</option>
          </select>
          <select name id className="select2 w-100">
            <option value>Type</option>
            <option value>Select</option>
            <option value>Select</option>
            <option value>Select</option>
            <option value>Select</option>
          </select>
          <select name id className="select2 w-100">
            <option value>Price Range</option>
            <option value>Select</option>
            <option value>Select</option>
            <option value>Select</option>
            <option value>Select</option>
          </select>
        </div>
      </div>
    </div>
  );
}
