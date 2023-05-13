import logo from "../../assets/images/logos.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function ForgotPassword() {
  const { email, setEmail, sendResetEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const resetPassword = (e) => {
    e.preventDefault();
    toast.success("password reset sent succesfully ... Check Email");
    sendResetEmail();
    // SignUp();
    // navigate("/");
  };

  return (
    <section className="vh-100 bbg">
      <ToastContainer />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div
              className="card shadow border-0  col-md-12 col-sm-12 col-lg-6 col-xl-6"
              style={{ borderRadius: "1rem" }}
            >
              <div className=" ">
                <div className="card-body text-black">
                  <form onSubmit={(e) => resetPassword(e)}>
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
                      Provide your Email Below
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

                    <div className="pt-1 mb-3">
                      <button className="btn btn-dark  btn-block" type="submit">
                        Reset password
                      </button>
                    </div>

                    <div className="d-flex p-2 ">
                      <Link to="/" className="text-decoration-none text-muted">
                        Back to Home ?
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
