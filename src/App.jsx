import "./assets/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { CartProvider } from "./context/CartContext";
import { SortProvider } from "./context/Sort";
import { AuthProvider } from "./context/AuthContext";
import SavedItemsProvider from "./context/SavedItemsContext";
import AllRoutes from "./routes/routes";

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
