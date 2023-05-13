import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Review({ rating }) {
  const { isLoggedIn } = useContext(AuthContext);
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      review.length >= 5
        ? (toast.success("Your rating is in review ..."), setReview(""))
        : toast.warn("Ratings must be more than 5 characters");
    } else {
      toast.error("Login to leave a review");
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="row ">
        <form onSubmit={(e) => handleSubmit(e)} className="col-md-6 my-2">
          <h2>
            <b>Leave a Rating</b>
          </h2>
          <p>How would you rate this product?</p>
          <div id="full-stars-example">
            <div className="rating-group">
              <input
                className="rating__input rating__input--none"
                name="rating"
                id="rating-none"
                defaultValue={0}
                type="radio"
              />
              <label
                aria-label="No rating"
                className="rating__label"
                htmlFor="rating-none"
              >
                <i className="rating__icon rating__icon--none fa fa-ban" />
              </label>
              <label
                aria-label="1 star"
                className="rating__label"
                htmlFor="rating-1"
              >
                <i className="rating__icon rating__icon--star fa fa-star" />
              </label>
              <input
                className="rating__input"
                name="rating"
                id="rating-1"
                defaultValue={1}
                type="radio"
              />
              <label
                aria-label="2 stars"
                className="rating__label"
                htmlFor="rating-2"
              >
                <i className="rating__icon rating__icon--star fa fa-star" />
              </label>
              <input
                className="rating__input"
                name="rating"
                id="rating-2"
                defaultValue={2}
                type="radio"
              />
              <label
                aria-label="3 stars"
                className="rating__label"
                htmlFor="rating-3"
              >
                <i className="rating__icon rating__icon--star fa fa-star" />
              </label>
              <input
                className="rating__input"
                name="rating"
                id="rating-3"
                defaultValue={3}
                type="radio"
                defaultChecked
              />
              <label
                aria-label="4 stars"
                className="rating__label"
                htmlFor="rating-4"
              >
                <i className="rating__icon rating__icon--star fa fa-star" />
              </label>
              <input
                className="rating__input"
                name="rating"
                id="rating-4"
                defaultValue={4}
                type="radio"
              />
              <label
                aria-label="5 stars"
                className="rating__label"
                htmlFor="rating-5"
              >
                <i className="rating__icon rating__icon--star fa fa-star" />
              </label>
              <input
                className="rating__input"
                name="rating"
                id="rating-5"
                defaultValue={5}
                type="radio"
              />
            </div>
            <p
              className="desc"
              style={{
                marginBottom: "2rem",
                fontFamily: "sans-serif",
                fontSize: "0.9rem",
              }}
            ></p>
          </div>

          <div className=" py-2 my-2">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="form-control"
              cols={30}
              rows={4}
              placeholder="Type a review"
            />
            <br />
            <button className="btn btn-primary ">
              <i className="fa fa-check" /> Submit Rating
            </button>
          </div>
        </form>
        <div className="col-md-6 my-2">
          <h2>
            <b> Ratings</b>
          </h2>
          <ul className="list-group">
            {rating.map((rate, index) => (
              <li className="list-group-item" key={index}>
                <i className="fas fa-star ratingColor" />
                <i className="fas fa-star ratingColor" />
                <i className="fas fa-star ratingColor" />
                <i className="fas fa-star ratingColor" />
                <i className="fas fa-star ratingColor" />
                {rate}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
