import productImage from "../assets/images/product-39.png";
import p1 from "../assets/images/amapiano2.png";
import p2 from "../assets/images/product-38.png";
import p3 from "../assets/images/product-39.png";
import Footer from "../components/Footer";
import Nav from "../components/Header";
import Review from "../components/Review";
import { CartProvider } from "../context/CartContext";
export default function Detail() {
  return (
    <div className="bggg">
      <CartProvider>
        <Nav />
      </CartProvider>
      <div className="container ">
        <div className="row py-6   border-0 shadow-none  ">
          <div className="col-lg-6 col-sm-10">
            <img
              src={productImage}
              alt
              className="img-fluid object-fit-contain "
            />
          </div>
          <div className="col-lg-6 gap-6 d-flex flex-column gap-2">
            <h1>
              <b>Apple Rena X Smart watch</b>
            </h1>
            <h5 className="col-lg-6">
              <b className="text-dark">$ 5000.00</b>
            </h5>
            <div className="d-flex flex-row justify-content-start align-items-center gap-2 mt-1">
              <div className="border-0 shadow-sm p-6 col-lg-2 igg col-md-2 col-sm-2">
                {" "}
                <img src={p1} alt={true} className=" img-fluid h-75" />
              </div>
              <div className="border-0 shadow-sm p-6 col-lg-2 igg col-md-2 col-sm-2">
                {" "}
                <img src={p2} alt={true} className=" img-fluid h-75" />
              </div>
              <div className="border-0 shadow-sm p-6 col-lg-2 igg col-md-2 col-sm-2">
                {" "}
                <img src={p3} alt={true} className=" img-fluid h-75" />
              </div>
            </div>
            <button className="btn btn-primary btn-large">
              <i className="fa fa-shopping-basket" />
              Add to cart
            </button>
            <h5>
              <b>Category:</b> Electronics
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
              In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer
              ante est, hendrerit in rutrum quis, elementum eget magna.
              Pellentesque sagittis dictum libero, eu dignissim tellus.
            </p>
            <div className="d-flex flex-row justify-content-start align-items-center gap-2 mt-1">
              <a
                href="/"
                className="cursor-pointer bg-white border-0 shadow text-decoration-none fa fa-shopping-basket eyeicon darkBlue"
              />
              <a
                href="/"
                className="cursor-pointer bg-white border-0 shadow text-decoration-none fa fa-heart eyeicon red"
              />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Review />
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}
