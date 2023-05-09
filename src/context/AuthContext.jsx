import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/storage/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Email and password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   Navigation

  //   check if user is authenticated
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsLoggedIn(true);
        console.log("Logged In");
      } else {
        console.log("Logged Out");
        setAuthUser(null);
        setIsLoggedIn(false);
      }
    });
    return () => listen();
  }, []);

  //   SignIn
  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setIsLoggedIn(false);
        console.log(error);
      });
  };

  //   SignUp
  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   signout
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout successfull");
      })
      .catch((error) => console.log(error));
  };

  const cartContextValue = {
    SignIn,
    isLoggedIn,
    authUser,
    email,
    setEmail,
    SignUp,
    password,
    setPassword,
    userSignOut,
  };

  return (
    <AuthContext.Provider
      value={{
        SignIn,
        isLoggedIn,
        authUser,
        email,
        setEmail,
        SignUp,
        password,
        setPassword,
        userSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
