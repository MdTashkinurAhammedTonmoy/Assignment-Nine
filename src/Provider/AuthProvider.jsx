// import React, { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";
// export const AuthContext = createContext();
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";

// const auth = getAuth(app);
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading,setLoding] = useState(true);

//   console.log(loading,user);

//   const createUser = (email, password) => {
//     setLoding(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoding(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const updateUser = (updatedData) => {
//     return updateProfile(auth.currentUser , updatedData)
//   }

//   const logout = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoding(false);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const authdata = {
//     user,
//     setUser,
//     createUser,
//     logout,
//     signIn,
//     loading,
//     setLoding,
//     updateUser
//   };
//   return<AuthContext value={authdata}>{children}</AuthContext>;
// };

// export default AuthProvider;


import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (userObj, updatedData) => {
    return updateProfile(userObj, updatedData);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logout,
    loading,
    setLoading,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

