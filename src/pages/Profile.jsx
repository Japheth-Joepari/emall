import EditProfile from "../components/EditProfile";
import Footer from "../components/Footer";
import Nav from "../components/Header";
import { CartProvider } from "../context/CartContext";
export default function Profile() {
  return (
    <>
      <CartProvider>
        <Nav />
      </CartProvider>
      <EditProfile />
      <div className="fixe">
        <Footer />
      </div>
    </>
  );
}
