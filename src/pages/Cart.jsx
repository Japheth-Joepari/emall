import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Cart() {
  const {
    toggleCart,
    cartItems,
    removeFromCart,
    decreaseCount,
    increaseCount,
  } = useContext(CartContext);
  return (
    <div>
      <div className="row cartContainer shadow-lg scrollable bg-white">
        <div className="col-lg-12 col-md-12 col-sm-6 w-100">
          <div className="d-flex justify-content-between gap-5 ">
            <h3>
              <b>Cart review</b>{" "}
              <i className="fa fa-shopping-basket text-primary" />
            </h3>
            <button className="btn-btn mt-2" onClick={toggleCart}>
              x
            </button>
          </div>
          <hr />
          <div className="d-flex flex-column justify-content-between gap-2 w-100 ">
            {cartItems.map((item) => {
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
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-9 d-flex flex-lg-row flex-md-row flex-sm-row flex-column justify-content-lg-around justify-content-start">
                      <div className="col-8">
                        <div className="card-body d-flex flex-column gap-2">
                          <h5 className="card-title smText">
                            <b>{item.title}</b> {/* insert item title here */}
                          </h5>
                          <span className="rating-icon card-text ratingColor d-flex">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fal fa-star" />

                            {}
                            {/* insert item rating here */}
                          </span>
                          <div className="d-flex flex-sm-column flex-md-row flex-lg-row flex-column gap-3">
                            <b className="text-muted">
                              (
                              {item.count > 1
                                ? `${item.count} copies`
                                : `${item.count} copy`}
                              )
                            </b>
                            <p>
                              <b>
                                {"$"}
                                {item.price * item.count}
                              </b>
                            </p>{" "}
                          </div>
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
              checkout <i className="fab fa-amazon-pay" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
