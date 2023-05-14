import logo from "../../assets/images/logos.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function SignUp() {
  const {
    email,
    password,
    signInWithGoogle,
    SignUp,
    setEmail,
    setPassword,
    isLoggedIn,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      // console.log(isLoggedIn);
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const registerUser = (e) => {
    e.preventDefault();
    SignUp();
    navigate("/");
  };

  const googleSignIn = () => {
    signInWithGoogle();
    if (isLoggedIn) {
      navigate("/");
    }
  };

  return (
    <section className="vh-100 bbg">
      <ToastContainer />
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
                    <form onSubmit={(e) => registerUser(e)}>
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
                        className="fw-normal mb-3 pb-3 text-muted"
                        style={{ letterSpacing: 1 }}
                      >
                        Register to become a member
                      </h5>
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          required
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          id="password"
                          required
                          value={password}
                          name="password"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="pt-1 mb-3">
                        <button
                          className="btn btn-dark  btn-block"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                      <button
                        className="btn btn-outline-primary btn-lg w-100 btn-block"
                        onClick={googleSignIn}
                      >
                        <i className="fab fa-google"></i>
                        {"  Sign Up using Google"}
                      </button>
                      <div className="d-flex p-2 justify-content-between">
                        <Link to="/reset" className="small text-muted">
                          Forgot password?
                        </Link>
                        <Link
                          to="/login"
                          className="text-decoration-none text-muted"
                        >
                          Already have an account?
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
