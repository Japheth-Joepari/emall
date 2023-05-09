import { SavedContext } from "../context/SavedItemsContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Saved() {
  const { removeFromSavedItems, savedItems, clearSavedItems, toggleSavedCart } =
    useContext(SavedContext);
  console.log(savedItems);

  return (
    <div>
      <div className="row col-md-7 col-lg-6 col-sm-12 cartContainer shadow-lg scrollable bg-white">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="d-flex justify-content-between gap-5 ">
            <h3>
              <b>Your Saved Items</b> <i className="fa fa-heart text-danger" />
            </h3>
            <button className="btn-btn mt-2" onClick={toggleSavedCart}>
              x
            </button>
          </div>
          <hr />
          <div className="d-flex flex-column justify-content-between gap-2 w-100 ">
            {savedItems != "" ? (
              savedItems.map((item) => {
                // console.log();
                return (
                  <div className="card border-0 w-100 crtItem" key={item.id}>
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-3 ">
                        <button
                          className="btn-btn btTop"
                          onClick={() => removeFromCart(item.id)}
                        >
                          x
                        </button>
                        <Link
                          to={`/product/${item.id}`}
                          className="text-decoration-none"
                        >
                          <img
                            src={item.image}
                            className=" rounded-start crtImg"
                            alt="..."
                          />
                        </Link>
                      </div>
                      <div className="col-7 d-flex flex-lg-row flex-md-row flex-sm-row flex-row justify-content-lg-around justify-content-around">
                        <div className="col-6">
                          <Link
                            to={`/product/${item.id}`}
                            className="card-body d-flex flex-column gap-2 text-decoration-none"
                          >
                            <h5 className="card-title smText">
                              <b>{item.title}</b> {/* insert item title here */}
                            </h5>
                            <span className="rating-icon card-text ratingColor d-flex">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fal fa-star" />
                            </span>
                          </Link>
                        </div>

                        <div className="col-1">
                          <div className="card-body">
                            <div className="d-flex flex-row justify-content-start gap-2 mtt1">
                              <button
                                className="btn btn-danger"
                                onClick={() => removeFromSavedItems(item)}
                              >
                                <i className="fa fa-trash"></i>{" "}
                                <span className="d-sm-none d-md-block d-lg-block d-none">
                                  Unsave
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h6>
                <b className="text-muted text-center">No Saved Items ...</b>
              </h6>
            )}
          </div>

          <hr />
          <div className="d-flex flex-row">
            {savedItems != "" ? (
              <button
                className="btn btn-primary  text-white bigLargeButton w-100"
                onClick={() => clearSavedItems()}
              >
                <i className="fa fa-check" />
                Clear Saved Items <i className="fa fa-trash" />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
