import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/storage/firebase";
import { createUserWithEmailAndPassword, updatePassword } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  getAuth,
  updateEmail,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Email and password states
  const authenticatedUser = getAuth();
  const [name, setName] = useState("New User");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState(
    "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?b=1&s=170667a&w=0&k=20&c=X-ZNF80_ASKvWpbOICHC8Pf27CFCRyh7Ce9SDVopjZg="
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storage = getStorage();

  //   check if user is authenticated
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsLoggedIn(true);
        console.log(authUser);
        user.providerData.forEach((profile) => {
          if (profile.displayName != null) {
            setName(profile.displayName);
          }
          if (profile.email != null) {
            setEmail(profile.email);
          }
          if (profile.photoURL != null) {
            setProfileImg(profile.photoURL);
            console.log(profile.photoURL);
          }
        });
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
        setEmail("");
        setPassword("");
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
        setEmail("");
        setPassword("");
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
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  };

  // delete a user
  const deleteAccount = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        console.log("Account successfully deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //update profile
  const updateDetails = async () => {
    const storageRef = ref(
      storage,
      `images/${authenticatedUser.currentUser.uid}/profile.jpg`
    );

    // Create file metadata including the content type
    const metadata = {
      contentType: "image/jpeg",
    };

    try {
      // Upload the file and metadata
      await uploadBytes(storageRef, profileImg, metadata);
      const profilePhotoURL = await getDownloadURL(storageRef);
      console.log(profilePhotoURL);

      await updateProfile(authenticatedUser.currentUser, {
        displayName: name,
        photoURL: profilePhotoURL,
      });

      await updatePassword(authenticatedUser.currentUser, password);
      console.log("password updated successfully");

      await updateEmail(auth.currentUser, email);
      console.log("Profile and email updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setName,
        name,
        setEmail,
        setProfileImg,
        deleteAccount,
        SignIn,
        isLoggedIn,
        profileImg,
        authUser,
        updateDetails,
        email,
        setEmail,
        SignUp,
        password,
        confirmPassword,
        setConfirmPassword,
        setPassword,
        userSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
