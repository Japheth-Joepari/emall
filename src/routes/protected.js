import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/storage/firebase";

const PrivateRoute = ({ element: Element, isAuth, ...rest }) => {
  const { isLoggedIn, setIsLoggedIn } = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log("User is logged in");
        navigate("/login", { replace: true });
      } else {
        console.log("Logged Out");
      }
    });
    return () => listen();
  }, [navigate]);
};
export default PrivateRoute;
