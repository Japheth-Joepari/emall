import logo from "../assets/images/logos.jpg";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <section className="vh-100 bg-light">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div
              className="card shadow border-0"
              style={{ borderRadius: "1rem" }}
            >
              <div className="row ">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid h-100"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <Link
                        to={"/"}
                        className="text-decoration-none text-black d-flex align-items-center mb-3 pb-1"
                      >
                        <img src={logo} alt="" style={{ height: "6rem" }} />
                        <b>
                          <span className="h4 fw-bold mb-0">Emall</span>
                        </b>
                      </Link>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Register to become a member
                      </h5>

                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-3">
                        <button
                          className="btn btn-dark  btn-block"
                          type="button"
                        >
                          Signin
                        </button>
                      </div>
                      <button
                        className="btn btn-outline-primary btn-lg w-100 btn-block"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                        {"  Sign in using Google"}
                      </button>
                      <div className="d-flex p-2 justify-content-between">
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <Link
                          to="/signup"
                          className=""
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
