import { Link } from "react-router-dom";
import { products } from "../utils/data/products";
import { CartContext } from "../context/CartContext";
import { SavedContext } from "../context/SavedItemsContext";
import { useContext } from "react";

export default function Product() {
  const sortedProducts = products.sort((a, b) => (b.title > a.title ? -1 : 1));
  const filteredProducts = sortedProducts.slice(0, 8);
  const { addToCart } = useContext(CartContext);
  const { addSavedItem } = useContext(SavedContext);

  return (
    <div className="container productContainer container-xm marginTop2Rem">
      <div className="d-flex gap-2">
        <div className="rounded">
          <i className="fa fa-shopping-basket product"> </i>
        </div>
        <b>Products</b>
      </div>
      <h4 className="mt-2">
        <b>Explore Our products</b>
      </h4>
      <div className="row justify-content-start d-flex">
        {filteredProducts.map((product) => (
          <div
            className="col-xl-3 col-lg-4 py-3 col-sm-6 col-12 mb--30 text-decoration-none"
            key={product.id}
          >
            <div className="card border-0 text-decoration-none text-black">
              <Link to={`/product/${product.id}`} className="w-100 prodBg">
                <img
                  src={product.image}
                  alt="loading"
                  className="w-100 prodBg"
                />
              </Link>
              <div className="card-body py-2 bg-white">
                <div className="product-rating py-2">
                  <span className="icon ratingColor">
                    {Array.from({ length: product.stars }, (_, i) => (
                      <i className="fas fa-star" key={i} />
                    ))}
                  </span>
                  <span className="rating-number">
                    ({product.productReviews.length})
                  </span>
                </div>
                <h5 className="title py-2">
                  <small className="greyish">{product.title}</small>
                </h5>
                <div className="product-price-variant gap5">
                  <span className="price current-price smallBoldF">
                    ${product.price}
                  </span>
                  <span className="price old-price priceLine">
                    ${product.oldPrice}
                  </span>
                </div>
                <div className="d-flex flex-row justify-content-start align-items-center gap-2 mt-1">
                  <Link
                    to={`/product/${product.id}`}
                    className="cursor-pointer text-decoration-none fa fa-eye eyeicon"
                  ></Link>
                  <a
                    href="#"
                    onClick={() => addToCart(product)}
                    className="cursor-pointer text-decoration-none fa fa-shopping-basket eyeicon darkBlue"
                  />
                  <a
                    href="#"
                    onClick={() => addSavedItem(product)}
                    className="cursor-pointer text-decoration-none fa fa-heart eyeicon red"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center py-5">
        <Link to="/products" className="btn btn-outline-primary btn-lg">
          {" "}
          <i className="fa fa-shopping-basket" /> View all Products
        </Link>
      </div>
      <hr />
    </div>
  );
}
