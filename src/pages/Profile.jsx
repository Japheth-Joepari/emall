import EditProfile from "../components/EditProfile";
import Footer from "../components/Footer";
import Nav from "../components/Header";

export default function Profile() {
  return (
    <>
      <Nav />

      <EditProfile />
      <div className="fixe2">
        <Footer />
      </div>
    </>
  );
}
