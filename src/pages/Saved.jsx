import { SavedContext } from "../context/SavedItemsContext";
import { useContext } from "react";

export default function Saved() {
  const { removeFromSavedItems, toggleSavedCart } = useContext(SavedContext);
  return (
    <div>
      <div className="row cartContainer shadow-lg scrollable bg-white">
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
          <div className="d-flex flex-column justify-content-between gap-2 ">
            {cartItems.map((item) => {
              // console.log();
              return (
                <div className="card border-0" key={item.id}>
                  <div className="row g-1">
                    <div className="col-lg-2 col-md-2 col-3 ">
                      <button
                        className="btn-btn btTop"
                        onClick={() => removeFromSavedItems(item.id)}
                      >
                        x
                      </button>
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-8 d-flex flex-lg-row flex-md-row flex-sm-row flex-column justify-content-lg-around justify-content-start">
                      <div className="col-8">
                        <div className="card-body d-flex flex-column gap-2">
                          <h5 className="card-title smText">
                            <b>{item.title}</b> {/* insert item title here */}
                          </h5>
                          <span className="rating-icon card-text ratingColor d-flex">
                            <button className="btn btn-danger">Remove </button>
                          </span>
                          <p>{item.description}</p>{" "}
                          {/* insert item description here */}
                        </div>
                      </div>

                      <div className="col-1">
                        <div className="card-body">
                          <div className="d-flex flex-row justify-content-start gap-2 mtt">
                            <button
                              className="btn-btn"
                              onClick={() => increaseCount(item.id)}
                            >
                              +
                            </button>
                            <b>{item.quantity}</b>{" "}
                            {/* insert item quantity here */}
                            <button
                              className="btn-btn"
                              onClick={() => decreaseCount(item.id)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <hr />
          <div className="d-flex flex-row">
            <button className="btn btn-primary  text-white bigLargeButton w-100">
              <i className="fa fa-check" />
              Clear Saved Items <i className="fab fa-trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
