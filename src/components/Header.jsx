import logo from "../assets/images/logos.jpg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar  navbar-expand-md  sticky-top">
      <div className="container-fluid navb py-2 my-2 nv shadow-sm rounded bg-white">
        <Link to="/" className="navbar-brand h-25 d-flex logoBrand">
          <img src={logo} alt={true} className="logoIm" />
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
              <a className="nav-link " href="#">
                Cart
              </a>
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
              <i className="fa fa-shopping-cart position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  5{/* Replace this with the number of items in the cart */}
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
    </nav>
  );
}
