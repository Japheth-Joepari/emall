import logo from "../../assets/images/logos.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../assets/images/ecom.gif";

export default function Signin() {
  const navigate = useNavigate();

  const { isLoggedIn, signInWithGoogle, SignIn, setEmail, setPassword } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      // console.log(isLoggedIn);
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault();
    SignIn();
  };

  return isLoading ? (
    <div className="d-flex flex-row justify-content-center align-items-center align-content-center loadImg">
      <img src={Loading} alt="" className=" img-fluid " />
    </div>
  ) : (
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
                    <form onSubmit={handleSignIn}>
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
                        Login to your Account
                      </h5>

                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          id="email"
                          name="email"
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
                          name="password"
                          required
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="pt-1 mb-3">
                        <button
                          className="btn btn-dark  btn-block"
                          type="submit"
                        >
                          Signin
                        </button>
                      </div>
                      <button
                        onClick={signInWithGoogle}
                        className="btn btn-outline-primary btn-lg w-100 btn-block"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                        {"  Sign in using Google"}
                      </button>
                      <div className="d-flex p-2 justify-content-between">
                        <Link to="/reset" className="small text-muted">
                          Forgot password?
                        </Link>

                        <Link
                          to="/register"
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
