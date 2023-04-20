import computers from "../assets/images/computers.png";
import Accessories from "../assets/images/accessories.png";
import phones from "../assets/images/phones.png";
import laptops from "../assets/images/laptops.png";
import networking from "../assets/images/networking.png";
import monitors from "../assets/images/monitors.png";
import gamming from "../assets/images/pcgamming.png";

export default function Categories() {
  return (
    <div className="container py-5 categories container-xm marginTopRem">
      <div className="d-flex ">
        <div className="rounded">
          <i className="fa fa-tags tag"> </i>
        </div>
        <p>Categories</p>
      </div>
      <h4>
        <b>Browse by category</b>
      </h4>
      <div className="row justify-content-evenly">
        <div className="text-center custom-col col-6 col-sm-6 col-xm-6 col-md-4 col-lg-2 py-2 my-2">
          <div className="card d-flex flex-column">
            <div className="p-2 mt-4">
              <img src={Accessories} alt={true} />
              <p className="text-dark text-center">Accessories</p>
            </div>
          </div>
        </div>

        <div className="text-center custom-col col-6 col-sm-6 col-xm-6 col-md-4 col-lg-2 py-2 my-2">
          <div className="card d-flex flex-column">
            <div className="p-2 mt-4">
              <img src={phones} alt={true} />
              <p className="text-dark text-center">Phones</p>
            </div>
          </div>
        </div>

        <div className="text-center custom-col col-6 col-sm-6 col-xm-6 col-md-4 col-lg-2 py-2 my-2">
          <div className="card d-flex flex-column">
            <div className="p-2 mt-4">
              <img src={laptops} alt={true} />
              <p className="text-dark text-center">Laptops</p>
            </div>
          </div>
        </div>

        <div className="text-center custom-col col-6 col-sm-6 col-xm-6 col-md-4 col-lg-2 py-2 my-2">
          <div className="card d-flex flex-column">
            <div className="p-2 mt-4">
              <img src={networking} alt={true} />
              <p className="text-dark text-center">Networking</p>
            </div>
          </div>
        </div>

        <div className="text-center custom-col col-6 col-sm-6 col-xm-6 col-md-4 col-lg-2 py-2 my-2">
          <div className="card d-flex flex-column">
            <div className="p-2 mt-4">
              <img src={monitors} alt={true} />
              <p className="text-dark text-center">Monitors</p>
            </div>
          </div>
        </div>

        <div className="text-center custom-col col-6 col-sm-6 col-xm-6 col-md-4 col-lg-2 py-2 my-2">
          <div className="card d-flex flex-column">
            <div className="p-2 mt-4">
              <img src={gamming} alt={true} />
              <p className="text-dark text-center">Gamming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
