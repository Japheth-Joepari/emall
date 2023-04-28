import fastDelivery from "../assets/images/fastdelivery.png";
import Guranteed from "../assets/images/guranteed.png";
import ret from "../assets/images/return.png";
// import fastDelivery from "../assets/images/fastdelivery.png";
import call from "../assets/images/call.png";

export default function WhyUs() {
  return (
    <div className="container marginTop5Rem">
      <div className="section-title-wrapper text-center gap-2 p-1">
        <span className="title-highlighter highlighter-secondary">
          <i className="fa fa-thumbs-up tag" />
          <b> Why Us</b>
        </span>
        <h2 className="title mt-2">
          <b>Why People Choose Us</b>
        </h2>
      </div>
      <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20 mt-4">
        <div className="col">
          <div className="card border-0 shadow-sm bd justify-content-center align-items-center text-center py-3 my-3">
            <div className="icon">
              <img src={fastDelivery} alt="loading" />
            </div>
            <b className="title">Fast &amp; Secure Delivery</b>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-sm bd justify-content-center align-items-center text-center py-3 my-3">
            <div className="icon">
              <img src={Guranteed} alt="loading" />
            </div>
            <b className="title">100% Guarantee On Product</b>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-sm bd justify-content-center align-items-center text-center py-3 my-3">
            <div className="icon">
              <img src={ret} alt="loading" />
            </div>
            <b className="title">24 Hour Return Policy</b>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-sm bd justify-content-center align-items-center text-center py-3 my-3">
            <div className="icon">
              <img src={fastDelivery} alt="loading" />
            </div>
            <b className="title">24 Hour Return Policy</b>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-sm bd justify-content-center align-items-center text-center py-3 my-3">
            <div className="icon">
              <img src={call} alt="loading" />
            </div>
            <b className="title">Next Level Pro Quality</b>
          </div>
        </div>
      </div>
    </div>
  );
}
