import { useState, useEffect } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
// import { setUser } from "./userSlice";
// import { useDispatch } from "react-redux";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // const dispatch = useDispatch();

  // Handle login with Firebase Authentication
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // const user = result.user;
      // Set user information in the Redux store
      // dispatch(setUser(user.displayName));
      setIsLoggedIn(true);
    } catch (error) {
      setErrorMessage(error.code + " " + error.message);
    }
  };

    const logout = () => {
      auth.signOut();
      setIsLoggedIn(false);
    };

  //After Each Rerendering Check if user.displayName is NULL or not.And as per set the logged in status
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      if (user != null) {
        setUserName(user.displayName);
        setIsLoggedIn(true);
      } else {
        setUserName(null);
        setIsLoggedIn(false);
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);


  return {
    isLoggedIn,
    userName,
    login,
    logout,
  };
};

export default useAuth;














//Persistant Authentication
// import { useState, useEffect } from "react";
// import { auth, provider } from "../utils/firebase";
// import { signInWithPopup, signOut } from "firebase/auth";
// import { setUser } from "./userSlice";
// import { useDispatch } from "react-redux";

// const useAuth = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");
//   const dispatch = useDispatch();

//   // Handle login with Firebase Authentication
//   const login = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       // Set user information in the Redux store
//       dispatch(setUser(user.displayName));
//       setIsLoggedIn(true);
//     } catch (error) {
//       setErrorMessage(error.code + " " + error.message);
//     }
//   };

//   // Handle logout
//   const logout = () => {
//     signOut(auth);
//     setIsLoggedIn(false);
//   };

//   useEffect(() => {
//     // Add an observer to watch for changes in user authentication state
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         // User is signed in
//         setUserName(user.displayName);
//         setIsLoggedIn(true);
//       } else {
//         // User is signed out
//         setUserName(null);
//         setIsLoggedIn(false);
//       }
//     });

//     // Clean up the observer when the component unmounts
//     return () => {
//       unsubscribe();
//     };
//   }, []); // Pass an empty dependency array to run the effect only once

//   return {
//     isLoggedIn,
//     userName,
//     login,
//     logout,
//   };
// };

// export default useAuth;
