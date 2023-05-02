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
import { SortProvider } from "./context/Sort";
import SavedItemsProvider from "./context/SavedItemsContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";

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

  {
    path: "/login",
    element: <SignIn />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <div className="App">
      <SortProvider>
        <CartProvider>
          <SavedItemsProvider>
            <RouterProvider router={router} />
          </SavedItemsProvider>
        </CartProvider>
      </SortProvider>
    </div>
  );
}

export default App;
