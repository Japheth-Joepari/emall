import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";

export default function Cart() {
  const [paymentStatus, setPaymentStatus] = useState(false);
  const {
    toggleCart,
    cartItems,
    removeFromCart,
    decreaseCount,
    increaseCount,
    total,
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
                            <h5 className="card-title smText">
                              <b>{item.title}</b> {/* insert item title here */}
                            </h5>
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
                                  {Number(item.price) *
                                    item.count.toLocaleString()}
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
          {cartItems != "" && (
            <div className="d-flex">
              <h4>
                <b className="text-muted">
                  Total: ₦{total.toFixed(2).toLocaleString()}
                </b>
              </h4>
            </div>
          )}
          <div className="d-flex flex-row">
            {/* {cartItems != "" ? (
              <button className="btn btn-primary  text-white bigLargeButton w-100">
                <i className="fa fa-check" />
                checkout <i className="fab fa-amazon-pay" />
              </button>
            ) : (
              ""
            )} */}
            {!paymentStatus && (
              <PaystackButton
                text="💰 Pay now"
                className="btn btn-primary bigLargeButton w-100"
                callback={(response) => {
                  console.log(response); // handle response here
                  setPaymentStatus(true); // set payment status to true after successful payment
                }}
                close={() => console.log("Payment closed")}
                disabled={cartItems.length !== 0}
                embed={false}
                reference={new Date().getTime()} // replace with a unique reference number
                email="jeffevurulobi@gmail.com"
                amount={total * 100} // Paystack accepts amount in kobo (1 naira = 100 kobo)
                publicKey="pk_test_b5c06a4f47f6f5f7c8ab27d4e24549778d817fc7" // replace with your Paystack public key
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
