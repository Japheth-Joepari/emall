import { ToastContainer, toast } from "react-toastify";
export default function NewsLetter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Subcription successful. We'll keep in touch");
  };
  <ToastContainer />;
  return (
    <div className="container">
      <section className="home-newsletter bordered">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form onSubmit={(e) => handleSubmit(e)} className="single">
                <h2>Subscribe to our Newsletter</h2>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-theme" type="submit">
                      <i className="fa fa-paper-plane"></i> Subscribe
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
