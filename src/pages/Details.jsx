import Footer from "../components/Footer";
import Nav from "../components/Header";
import Review from "../components/Review";
import { CartContext } from "../context/CartContext";
import { SavedContext } from "../context/SavedItemsContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/data/products";

export default function Detail() {
  const { addToCart } = useContext(CartContext);
  const { addSavedItem } = useContext(SavedContext);

  const { id } = useParams();
  console.log(id);
  const productDetails = products.filter((p) => p.id == id);
  console.log(productDetails);

  return (
    <div className="bggg">
      <Nav />
      {productDetails.map((product, index) => (
        <div className="container " key={index}>
          <div className="row py-6   border-0 shadow-none  ">
            <div className="col-lg-6 col-sm-10">
              <img
                src={product.image}
                alt="loading"
                className=" object-fit-contain w-100"
              />
            </div>
            <div className="col-lg-6 gap-6 d-flex flex-column gap-2">
              <h1>
                <b>{product.title}</b>
              </h1>
              <h5 className="col-lg-6">
                <b className="text-dark">${product.price}</b>
              </h5>

              <button
                className="btn btn-primary btn-large"
                onClick={() => addToCart(product)}
              >
                <i className="fa fa-shopping-basket" />
                Add to cart
              </button>
              <h5>
                <b>Category:</b> {product.category}
              </h5>
              <span className="rating-icon ratingColor">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fal fa-star" /> ({product.productReviews.length})
                Rating
              </span>
              <div className="text-success">
                <p>
                  <i className="fa fa-check" /> In stock
                </p>
                <p>
                  <i className="fa fa-check" /> Free Delivery Available
                </p>
                <p>
                  <i className="fa fa-check" /> Sales 30% Off
                </p>
              </div>
              <hr />
              <p className="">{product.detail}</p>
              <div className="d-flex flex-row justify-content-start align-items-center gap-2 mt-1">
                <a
                  href="#"
                  onClick={() => addToCart(product)}
                  className="cursor-pointer bg-white border-0 shadow text-decoration-none fa fa-shopping-basket eyeicon darkBlue"
                />
                <a
                  href="#"
                  onClick={() => addSavedItem(product)}
                  className="cursor-pointer bg-white border-0 shadow text-decoration-none fa fa-heart eyeicon red"
                />
              </div>
              <hr />
            </div>
          </div>
          <Review rating={product.productReviews} />
        </div>
      ))}

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}
