import "./assets/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import Detail from "./pages/Details";
import Orders from "./pages/Orders";
import { CartProvider } from "./context/CartContext";
import { SortProvider } from "./context/Sort";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import SavedItemsProvider from "./context/SavedItemsContext";
import AllRoutes from "./routes/routes";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/Signup";
import PrivateRoute from "./routes/protected";
import { useContext } from "react";

export default function App() {
  return (
    <SortProvider>
      <CartProvider>
        <SavedItemsProvider>
          <AuthProvider>
            <AllRoutes />
          </AuthProvider>
        </SavedItemsProvider>
      </CartProvider>
    </SortProvider>
  );
}
