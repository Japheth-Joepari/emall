import BannerImage from "../assets/images/product-38.png";
import author1 from "../assets/images/author1.png";
import author2 from "../assets/images/author2.png";
import author3 from "../assets/images/author3.png";
import author4 from "../assets/images/author4.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="container-fluid banner-container mb-5 my-5 inc">
      <div className="container my-5" id="baner">
        <div className="row">
          <div className="col-md-6 mt-5 text-center text-md-start">
            <p className="bannerp pnkColor">
              <i className="fas fa-fire"></i> Hot deals this week
            </p>
            <h1 className="bannerh1">Roco Wireless</h1>
            <h1 className="bannerh1">Headphones</h1>
            <div id="cont1">
              <div className="bannerBtn">
                <Link
                  className="btn btn-primary shadow-lg btn-lg"
                  id="shoppingBtn"
                  to={"/detail"}
                >
                  <i className="fa fa-shopping-basket"></i> Shop now
                </Link>
              </div>
              <div className="item-rating ms-3 my-3">
                <div className="thumb">
                  <ul id="images">
                    <li>
                      <img src={author1} alt={true} />
                    </li>
                    <li>
                      <img src={author2} alt={true} />
                    </li>
                    <li>
                      <img src={author3} alt={true} />
                    </li>
                    <li>
                      <img src={author4} alt={true} />
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <span className="rating-icon ratingColor">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fal fa-star"></i>
                  </span>
                  <span className="review-text">
                    {" "}
                    <span>100+</span> Reviews{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-4 my-md-0 text-center">
            <img src={BannerImage} className="img-fluid" alt={true} />

            <div className="price-tag">
              <span className="">
                <b>From</b>
              </span>
              <span className="">
                <b>$70</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
