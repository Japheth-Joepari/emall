import Banner from "../components/Banner";
import Categories from "../components/categories";
import Footer from "../components/Footer";
import Nav from "../components/Header";
import NewsLetter from "../components/Newsletter";
import Poster from "../components/Poster";
import Product from "../components/Product";
import WhyUs from "../components/WhyUs";
import { CartProvider } from "../context/CartContext";
export default function HomePage() {
  return (
    <div className="banerbg">
      <CartProvider>
        <Nav />
      </CartProvider>
      <Banner />
      <div className="container-fluid bg-white">
        <Categories />
        <Poster />
        <Product />
        <WhyUs />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
