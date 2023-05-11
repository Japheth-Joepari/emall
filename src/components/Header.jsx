import logo from "../assets/images/logos.jpg";
import Cart from "../pages/Cart";
import { CartContext } from "../context/CartContext";
import { SavedContext } from "../context/SavedItemsContext";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import Saved from "../pages/Saved";
import { AuthContext } from "../context/AuthContext";

export default function Nav() {
  const { toggleCart, isOpen, cartItemCount } = useContext(CartContext);
  const { isOpenSaved, savedItems, savedItemsCount, toggleSavedCart } =
    useContext(SavedContext);

  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <nav className="navbar navbar-expand-md bg-body-tetiary sticky-top">
      <div className="container-fluid navb py-2 my-2 nv shadow-sm rounded bg-white">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logoIm" />
          <b>Emall</b>
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
              <NavLink to="/" activeclassname="active" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                activeclassname="active"
                className="nav-link"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeclassname="active"
                className="nav-link"
              >
                Contact us
              </NavLink>
            </li>
            <li className="nav-item d-lg-none d-md-none d-sm-block">
              {isLoggedIn ? (
                <Link className="nav-link" to="/profile">
                  Account setting
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Account setting
                </Link>
              )}
            </li>
            <li className="nav-item d-lg-none d-md-none d-sm-block">
              <a
                className="nav-link"
                href="#"
                onClick={() => toggleSavedCart()}
              >
                Saved Item
              </a>
            </li>
            <li className="nav-item d-lg-none d-md-none d-sm-block">
              <a className="nav-link " href="#" onClick={() => toggleCart()}>
                Cart
              </a>
            </li>
          </ul>
          <div className="navbar-nav m-2 gap-4 d-none d-md-flex">
            <Link to="/products">
              <i className="fa fa-search" />
            </Link>
            <a href="#">
              <i
                className="fa fa-heart position-relative text-danger"
                onClick={() => toggleSavedCart()}
              >
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {savedItems.length > 0 ? savedItems.length : 0}
                  <span className="visually-hidden">items saved</span>
                </span>
              </i>
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
            {isLoggedIn ? (
              <Link to="/profile" className={"text-decoration-none"}>
                <i className="fa-regular fa-user" />
              </Link>
            ) : (
              <Link to="/login" className={"text-decoration-none"}>
                <i className="fa-regular fa-user" />
              </Link>
            )}
          </div>
        </div>
      </div>
      {isOpen ? <Cart /> : ""}
      {isOpenSaved ? <Saved /> : ""}
    </nav>
  );
}
