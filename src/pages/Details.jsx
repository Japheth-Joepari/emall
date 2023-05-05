import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Header";
import Review from "../components/Review";
import { CartContext } from "../context/CartContext";
import { SavedContext } from "../context/SavedItemsContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/data/products";

export default function Detail(props) {
  const { addToCart } = useContext(CartContext);
  const { addSavedItem } = useContext(SavedContext);

  const { id } = useParams();
  console.log(id);
  const productDetails = products.filter((p) => p.id == id);
  console.log(productDetails);

  return (
    <div className="bggg">
      <Nav />
      {productDetails.map((product) => (
        <div className="container ">
          <div className="row py-6   border-0 shadow-none  ">
            <div className="col-lg-6 col-sm-10">
              <img
                src={product.image}
                alt
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
                <i className="fal fa-star" /> (0) Rating
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
              <p className="">
                In ornare lorem ut est dapibus, ut tincidunt nisi pretium.
                Integer ante est, hendrerit in rutrum quis, elementum eget
                magna. Pellentesque sagittis dictum libero, eu dignissim tellus.
              </p>
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
        </div>
      ))}

      {/* <Review rating={product.productReviews} /> */}
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}
