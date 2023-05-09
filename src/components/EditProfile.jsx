import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function EditProfile() {
  const { userSignOut, isLoggedIn } = useContext(AuthContext);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleSignOut = () => {
    userSignOut();
    navigate("/login");
  };
  return (
    <div className="container">
      <div className="row gutters py-1">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100 border-0 shadow">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Maxwell Admin"
                    />
                  </div>
                  <a
                    href="#"
                    className="btn btn-primary "
                    onClick={handleSignOut}
                  >
                    <i className="fa fa-power-off"> </i> Signout
                  </a>
                  <h5 className="user-name">Yuki Hayashi</h5>
                  <h6 className="user-email">yuki@Maxwell.com</h6>
                </div>
                <div className="about">
                  <h5>About</h5>

                  <p>
                    My name is Yuki, and I am a business-oriented buyer with a
                    strong focus on purchasing only the highest quality products
                    available.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <div className="row gutters py-1">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter full name"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
                  <div className="form-group">
                    <label htmlFor="eMail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter email ID"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
                  <div className="form-group">
                    <label htmlFor="website">Website URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="website"
                      placeholder="Website url"
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters py-1">
                <div className="form-group">
                  <label htmlFor="website">About Me</label>
                  <textarea
                    className="form-control"
                    id="website"
                    placeholder="About Me"
                  ></textarea>
                </div>
              </div>
              <div className="row gutters py-1">
                <div className="form-group">
                  <label htmlFor="website">Upload Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="website"
                    placeholder="Website url"
                  />
                </div>
              </div>
              <div className="row gutters py-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right d-flex flex-row gap-2">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-danger "
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
