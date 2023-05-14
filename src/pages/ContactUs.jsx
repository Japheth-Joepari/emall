import Footer from "../components/Footer";
import Nav from "../components/Header";
import { toast, ToastContainer } from "react-toastify";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message received successfully, Thanks for reaching out");
  };
  return (
    <div className="">
      <ToastContainer />
      <Nav />

      <section className="container py-3 my-2">
        {/*Contact heading*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-sm-12 mb-4 col-md-5">
            {/*Form with header*/}
            <div className="card border-0 shadow rounded-0">
              <div className="card-header p-0">
                <div className="bg-dark text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope" /> Write to us:
                  </h3>
                  <p className="m-0">We’ll reply as soon as posible</p>
                </div>
              </div>
              <form
                className="card-body p-3 d-flex flex-column gap-2"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="form-group">
                  <label> Full name </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Your email</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="email"
                      required
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      required
                      name="subject"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      className="form-control"
                      name="mesg"
                      placeholder="Message"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <button className="btn btn-primary" type="submit">
                    <i className="fa fa-paper-plane"></i> send
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-sm-12 col-md-7">
            {/*Google map*/}
            <div className="mb-4 shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.865231794577!2d7.3592311!3d5.125406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429966f24c317f%3A0xca084cdf8a33f168!2s10%20Calabar%20Street%2C%20Aba%20450211%2C%20Aba%2C%20Abia!5e0!3m2!1sen!2sng!4v1682015912664!5m2!1sen!2sng"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/*Buttons*/}
          </div>
          {/*Grid column*/}
        </div>
      </section>
      <div className="fixe2">
        <Footer />
      </div>
    </div>
  );
}
