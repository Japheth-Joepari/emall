import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { SavedContext } from "../context/SavedItemsContext";
import { SortContext } from "../context/Sort";
import { Link } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";

export default function ProductListngs() {
  const { products } = useContext(SortContext);
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
        {products.map((product) => (
          <div
            className="col-xl-3 col-lg-4 py-3 col-sm-6 col-12 mb--30"
            key={product.id}
          >
            <div
              className="card border-0 text-decoration-none text-black"
              key={product.id}
            >
              <div className="w-100 prodBg">
                <img
                  src={product.image}
                  alt="loading"
                  className="w-100 prodBg"
                />
              </div>
              <div className="card-body py-2 bg-white">
                <div className="product-rating py-2">
                  <span className="icon ratingColor">
                    {Array.from({ length: product.stars }, (_, i) => (
                      <i className="fas fa-star" key={i} />
                    ))}
                  </span>
                  <span className="rating-number">({product.ratings})</span>
                </div>
                <h5 className="title py-2">
                  <small className="greyish">{product.title}</small>
                </h5>
                <div className="product-price-variant gap5">
                  <span className="price current-price smallBoldF">
                    {"$"}
                    {product.price}
                  </span>
                  <span className="price old-price priceLine">
                    {"$"}
                    {product.oldPrice}
                  </span>
                </div>
                <div className="d-flex flex-row justify-content-start align-items-center gap-2 mt-1">
                  <Link
                    to={`/product/${product.id}`}
                    className="cursor-pointer text-decoration-none fa fa-eye eyeicon"
                  ></Link>

                  <button
                    onClick={() => addToCart(product)}
                    className=" fa fa-shopping-basket eyeicon darkBlue"
                  ></button>
                  <button
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
        <a className="btn btn-outline-primary btn-lg">
          {" "}
          <i className="fa fa-shopping-basket" /> more products
        </a>
      </div>
      <hr />
    </div>
  );
}
