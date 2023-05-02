import { categories } from "../utils/data/categories";

export default function Categories() {
  return (
    <div className="container py-5 categories container-xm marginTopRem">
      <div className="d-flex ">
        <div className="rounded">
          <i className="fa fa-tags tag"> </i>
        </div>
        <p>Categories</p>
      </div>
      <h4>
        <b>Browse by category</b>
      </h4>
      <div className="row justify-content-evenly">
        {categories.map((category) => (
          <a
            key={category.id}
            href="/"
            className="text-center cursor-pointer text-decoration-none custom-col col-6 col-sm-6 col-xm-6 col-md-4 col-lg-2 py-2 my-2"
          >
            <div className="card d-flex flex-column border-0 shadow-sm">
              <div className="p-2 mt-4">
                <img src={category.image} alt="loading" />
                <p className="text-dark text-center">{category.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
