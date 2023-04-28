import "./assets/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import Detail from "./pages/Details";
import Orders from "./pages/Orders";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/products",
    element: <Products />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/contact",
    element: <ContactUs />,
  },

  {
    path: "/detail",
    element: <Detail />,
  },

  {
    path: "/orders",
    element: <Orders />,
  },
]);

function App() {
  return (
    <div className="App">
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
}

export default App;
