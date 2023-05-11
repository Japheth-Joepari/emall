import EditProfile from "../components/EditProfile";
import Footer from "../components/Footer";
import Nav from "../components/Header";
import logoImg from "../assets/images/ecom.gif";
import { useLoader } from "../components/loader";

export default function Profile() {
  const loading = useLoader();

  return loading ? (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center align-content-center loadImg">
        <img src={logoImg} alt="" className=" img-fluid " />
      </div>
    </>
  ) : (
    <>
      <Nav />

      <EditProfile />
      <div className="fixe2">
        <Footer />
      </div>
    </>
  );
}
