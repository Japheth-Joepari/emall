import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function Cart() {
  const { email, isLoggedIn, authenticatedUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    toggleCart,
    cartItems,
    removeFromCart,
    decreaseCount,
    increaseCount,
    total,
    wipeCart,
  } = useContext(CartContext);

  const setCart = () => {
    wipeCart();
  };

  const componentProps = {
    email: email,
    amount: total * 100,
    metadata: {
      name: isLoggedIn ? authenticatedUser.currentUser.name : "",
      phone: isLoggedIn ? authenticatedUser.currentUser.phone : "",
    },
    publicKey: "pk_test_b5c06a4f47f6f5f7c8ab27d4e24549778d817fc7",
    text: "Pay now 💵",
    onSuccess: () => {
      toast.success("Thanks for doing business with us! Come back soon!!");
      setCart(); // Corrected: Added parentheses to invoke the function
    },
    reference: new Date().getTime(),
    embed: false,
    disabled: cartItems.length !== 0,
  };

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
            {cartItems != "" ? (
              cartItems.map((item) => {
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
                            className="crtImg rounded-start"
                            alt="..."
                          />
                        </Link>
                      </div>
                      <div className="col-9 d-flex flex-lg-row flex-md-row flex-sm-row  justify-content-lg-around justify-content-start">
                        <div className="col-8">
                          <div className="card-body d-flex flex-column gap-2 mx-3">
                            <Link
                              to={`/product/${item.id}`}
                              className="card-title smText text-dark text-decoration-none h5"
                            >
                              <b>{item.title}</b> {/* insert item title here */}
                            </Link>
                            <Link
                              to={`/product/${item.id}`}
                              className="rating-icon card-text ratingColor d-flex text-decoration-none"
                            >
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fal fa-star" />

                              {}
                              {/* insert item rating here */}
                            </Link>
                            <Link
                              to={`/product/${item.id}`}
                              className="d-flex text-decoration-none flex-sm-column flex-md-row flex-lg-row flex-column gap-3"
                            >
                              <b className="text-muted">
                                {item.count > 1 && `${item.count} copies`}
                              </b>
                              <p>
                                <b className="text-dark">
                                  {"₦"}
                                  {Number(item.price).toLocaleString(
                                    "en-NG"
                                  )}{" "}
                                </b>
                              </p>{" "}
                            </Link>
                            {/* insert item description here */}
                          </div>
                        </div>

                        <div className="col-1">
                          <div className="card-body mtt">
                            <div className="d-flex flex-row justify-content-around gap-2 ">
                              <button
                                className="btn-btn "
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
              })
            ) : (
              <h6>
                <b className="text-muted text-center">No Items Here ...</b>
              </h6>
            )}
          </div>

          <hr />
          {total > 0 && (
            <div>
              {cartItems !== "" && (
                <div className="d-flex">
                  <h4>
                    <b className="text-muted">
                      Total: &#8358;
                      {/* {Number(total).toFixed(2).toLocaleString("en-NG")} */}
                      {Number(total).toLocaleString("en-NG")}{" "}
                    </b>
                  </h4>
                </div>
              )}

              <div className="d-flex flex-row">
                {isLoggedIn ? (
                  <PaystackButton
                    {...componentProps}
                    className="btn btn-primary bigLargeButton w-100"
                  />
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="btn btn-primary bigLargeButton w-100"
                  >
                    Login to make payment 💵
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
