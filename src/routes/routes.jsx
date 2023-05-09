import "../assets/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import ContactUs from "../pages/ContactUs";
import Detail from "../pages/Details";
import Orders from "../pages/Orders";
import { CartProvider } from "../context/CartContext";
import { SortProvider } from "../context/Sort";
import { AuthProvider } from "../context/AuthContext";
import SavedItemsProvider from "../context/SavedItemsContext";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/Signup";
import { useEffect, useState } from "react";
import loadImage from "../assets/images/ecom.gif";

export default function AllRoutes() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="d-flex flex-row justify-content-center align-items-center align-content-center loadImg">
      <img src={loadImage} alt="" className=" img-fluid " />
    </div>
  ) : (
    <BrowserRouter>
      <SortProvider>
        <CartProvider>
          <SavedItemsProvider>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/details" element={<Detail />} props={true} />
                <Route path="/product/:id" element={<Detail />} props={true} />

                <Route path="/orders" element={<Orders />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
              </Routes>
            </AuthProvider>
          </SavedItemsProvider>
        </CartProvider>
      </SortProvider>
    </BrowserRouter>
  );
}
