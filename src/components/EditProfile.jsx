import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logoImg from "../assets/images/ecom.gif";

export default function EditProfile() {
  const {
    userSignOut,
    isLoggedIn,
    email,
    name,
    setPassword,
    setConfirmPassword,
    profileImg,
    updateDetails,
    password,
    confirmPassword,
    setEmail,
    setName,
    setProfileImg,
  } = useContext(AuthContext);
  const [loading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleSignOut = () => {
    userSignOut();
    navigate("/login");
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();
    if (password.length >= 8 && password === confirmPassword) {
      console.log("updated");
      updateDetails();
    } else {
      console.log("Passwords do not match");
    }
  };

  return loading ? (
    <div className="d-flex flex-row justify-content-center align-items-center align-content-center loadImg">
      <img src={logoImg} alt="" className=" img-fluid " />
    </div>
  ) : (
    <div className="container">
      <div className="row  py-1">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card  border-0 shadow m-3">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src={profileImg} alt="Maxwell Admin" />
                  </div>
                  <a
                    href="#"
                    className="btn btn-primary "
                    onClick={handleSignOut}
                  >
                    <i className="fa fa-power-off"> </i> Signout
                  </a>
                  <h5 className="user-name">{name}</h5>
                  <h6 className="user-email">{email}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleUpdateForm}
          className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"
        >
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <div className="row gutters py-1">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Edit Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
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
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter email ID"
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
                  <div className="form-group">
                    <label htmlFor="fullName">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
                  <div className="form-group">
                    <label htmlFor="pass">Confirm Password</label>
                    <input
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                      id="confirm-password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>

              <div className="row gutters py-1">
                <div className="form-group">
                  <label htmlFor="website">Upload Image</label>
                  <input
                    type="file"
                    onChange={(e) =>
                      setProfileImg(e.target.files[0] && e.target.files[0])
                    }
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
                      id="submit"
                      type="submit"
                      name="submit"
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      id="del"
                      name="del"
                      className="btn btn-danger "
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
