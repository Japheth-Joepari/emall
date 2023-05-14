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
        <ul className="d-flex gap-3 list-unstyled ">
          <li>
            <a
              className="text-decoration-none text-dark fa-brands fa-facebook-f"
              href="https://web.facebook.com/japhethjoepari"
            >
              {" "}
            </a>
          </li>
          {/* <li>
            <a className="text-decoration-none text-dark fa-brands fa-instagram">
              {" "}
            </a>
          </li> */}
          <li>
            <a
              className="text-decoration-none text-dark fa-brands fa-twitter"
              href="https://twitter.com/Joepari_Codes"
            >
              {" "}
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fa-brands fa-linkedin"
              href="https://www.linkedin.com/in/japheth-joepari/"
            >
              {" "}
            </a>
          </li>
          <li>
            <a
              className="fa fa-link text-decoration-none text-dark"
              href="https://japheth-joepari.github.io/"
            >
              {" "}
            </a>
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
