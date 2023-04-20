export default function NewsLetter() {
  return (
    <div className="container">
      <section className="home-newsletter bordered">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
