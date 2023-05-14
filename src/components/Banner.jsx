import BannerImage from "../assets/images/product-38.png";
import author1 from "../assets/images/author1.png";
import author2 from "../assets/images/author2.png";
import author3 from "../assets/images/author3.png";
import author4 from "../assets/images/author4.png";
import { Link } from "react-router-dom";
import { products } from "../utils/data/products";

const feature = products.filter((product) => {
  return product.id == 0;
});
export default function Banner() {
  return (
    <div className="container-fluid banner-container mb-5 my-5 inc">
      {feature.map((item, index) => (
        <div className="container my-5" id="baner" key={index}>
          <div className="row">
            <div className="col-md-6 mt-5 text-center text-md-start">
              <p className="bannerp pnkColor">
                <i className="fas fa-fire"></i> Hot deals this week
              </p>
              <Link
                className="text-decoration-none text-dark"
                to={`/product/${item.id}`}
              >
                <h1 className="bannerh1">{item.title}</h1>
              </Link>
              <div id="cont1">
                <div className="bannerBtn">
                  <Link
                    className="btn btn-primary shadow-lg btn-lg"
                    id="shoppingBtn"
                    to={`/product/${item.id}`}
                  >
                    <i className="fa fa-shopping-basket"></i> Shop now
                  </Link>
                </div>
                <Link
                  to={`/product/${item.id}`}
                  className="item-rating ms-3 my-3 text-decoration-none"
                >
                  <div className="thumb">
                    <ul id="images">
                      <li>
                        <img src={author1} alt="loading" />
                      </li>
                      <li>
                        <img src={author2} alt="loading" />
                      </li>
                      <li>
                        <img src={author3} alt="loading" />
                      </li>
                      <li>
                        <img src={author4} alt="loading" />
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
                    <span className="review-text text-muted">
                      {" "}
                      <span>{item.stars}</span>+ Reviews{" "}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <Link
              to={`/product/${item.id}`}
              className="col-md-6 my-4 my-md-0 text-center text-decoration-none"
            >
              <img src={BannerImage} className="img-fluid" alt="loading" />

              <div className="price-tag">
                <span className="">
                  <b>From</b>
                </span>
                <span className="">
                  <b>₦{Number(item.price).toLocaleString()}</b>
                </span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
