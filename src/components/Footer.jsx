import paypal from "../assets/images/paypal.png";
import master from "../assets/images/master_card.png";
import visa from "../assets/images/visa_card.png";

export default function Footer() {
  return (
    <footer className="container">
      <hr />
      <div
        className="d-flex py-4 flex-lg-row flex-md-column justify-content-lg-evenly 
justify-content-md-center justify-content-sm-center flex-sm-column flex-column text-center align-items-center"
      >
        <ul className="d-flex gap-3 list-unstyled">
          <li>
            <i className="fa-brands fa-facebook-f" />
          </li>
          <li>
            <i className="fa-brands fa-instagram" />
          </li>
          <li>
            <i className="fa-brands fa-twitter" />
          </li>
          <li>
            <i className="fa-brands fa-linkedin" />
          </li>
          <li>
            <i className="fa fa-link" />
          </li>
        </ul>
        <div>
          <p>© 2022. All rights reserved by Japheth_Joepari.</p>
        </div>
        <ul className="d-flex list-unstyled gap-1">
          <li>
            <img src={paypal} alt="" />
          </li>
          <li>
            <img src={visa} alt="" />
          </li>
          <li>
            <img src={master} alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
