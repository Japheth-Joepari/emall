import { useState, useEffect, createContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/storage/firebase";

export const checkAuthContext = createContext();

export const CheckAuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log("User is logged in");
        navRoute("/");
      } else {
        console.log("Logged Out");
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);

  return (
    <CheckAuthContext.Provider value={authUser}>
      {children}
    </CheckAuthContext.Provider>
  );
};
export default CheckAuthProvider;
