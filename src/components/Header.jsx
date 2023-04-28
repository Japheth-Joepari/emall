import logo from "../assets/images/logos.jpg";
import Cart from "../pages/Cart";
import { CartContext } from "../context/CartContext";
import { SavedContext } from "../context/SavedItemsContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Saved from "../pages/Saved";

export default function Nav() {
  const { toggleCart, isOpen, cartItemCount } = useContext(CartContext);
  const { isCartOpen } = useContext(SavedContext);

  console.log(cartItemCount);
  return (
    <nav className="navbar  navbar-expand-md  sticky-top">
      <div className="container-fluid navb py-2 my-2 nv shadow-sm rounded bg-white">
        <Link to="/" className="navbar-brand h-25 d-flex logoBrand">
          <img src={logo} alt="logo" className="logoIm" />
          <h4>
            <b>emall</b>
          </h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 mx-auto gap-4">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item d-lg-none d-md-none d-sm-block">
              <Link className="nav-link" to="/profile">
                Account setting
              </Link>
            </li>
            <li className="nav-item d-lg-none d-md-none d-sm-block">
              <a className="nav-link" href="#">
                Saved Item
              </a>
            </li>
            <li className="nav-item d-lg-none d-md-none d-sm-block">
              <button className="nav-link " href="#">
                Cart
              </button>
            </li>
          </ul>
          <div className="navbar-nav m-2 gap-4 d-none d-md-flex">
            <Link to="/products">
              <i className="fa fa-search" />
            </Link>
            <a href="#">
              <i className="fa-regular fa-heart red" />
            </a>
            <a href="#">
              <i
                className="fa fa-shopping-cart position-relative"
                onClick={toggleCart}
              >
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItemCount > 0 ? cartItemCount : 0}
                  <span className="visually-hidden">items in cart</span>
                </span>
              </i>
            </a>
            <Link to="/profile">
              <i className="fa-regular fa-user" />
            </Link>
          </div>
        </div>
      </div>
      {isOpen ? <Cart /> : ""}
      {isCartOpen ? <Saved /> : ""}
    </nav>
  );
}
