import logo from "../assets/images/logos.jpg";

export default function Nav() {
  return (
    <nav className="navbar navb navbar-expand-md  sticky-top">
      <div className="container py-2 my-2 nv shadow-lg rounded bg-white">
        <div className="navbar-brand h-25">
          <img src={logo} alt={true} className="logoIm" />
        </div>
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
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item d-lg-none d-md-none d-sm-block">
              <a className="nav-link" href="#">
                Account setting
              </a>
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
            <a href="#">
              <i className="fa fa-search" />
            </a>
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
            <a href="#">
              <i className="fa-regular fa-user" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
