import Footer from "../components/Footer";
import Nav from "../components/Header";
import NewsLetter from "../components/Newsletter";
import Product from "../components/Product";
import Sort from "../components/Sort";

export default function Products() {
  return (
    <div>
      <div className="">
        <Nav />
        <div className="container  p-5 my-2  border-3 pBanner d-lg-flex mb-5 d-md-column d-sm-column shadow-sm justify-content-center text-center">
          <div className="container h-25">
            <span>
              Home{" "}
              <a href className="text-decoration-none text-success">
                {" "}
                | Products
              </a>
            </span>
            <h3>
              <b>Explore All Products</b>
            </h3>
          </div>
          <div>
            <i className="fa fa-shopping-basket text-primary ft" />
          </div>
        </div>
        <Sort />
        <Product />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}
