import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { getUserProfile } from "../services/cooperative-members.js";
import toast from "react-hot-toast";

export const AuthContext = createContext({ setExpiresOnLogIn: () => {}, user: {}, isLoggedIn: () => {}, setUser: () => {}, logOut: () => {} });

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [expiresIn, setExpiresIn] = useState(0);

  useEffect(() => {
    let token = localStorage.getItem("token");
    // console.log("In auth useeffect", token);
    if (token) {
      let exp;
      try {
        var decoded = jwt_decode(token);
        exp = decoded.exp;
      } catch (error) {
        exp = 0;
        // console.log("an error occured in  useeffect");
      }

      //expires in seconds on auth state
      // used to check if logged in
      // convert exp to millisec from sec
      setExpiresIn(exp * 1000);
      localStorage.setItem("exp", exp * 1000);
      // console.log("expires in refresh", exp * 1000);
    } else {
      localStorage.setItem("exp", null);
    }
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const respData = await getUserProfile();
      if (respData?.status) {
        setUser(respData?.data);
      } else {
        // toast.error("Error Loading User Data");
      }
    };
    if (!user) {
      getUser();
    }
  }, []);

  const setExpiresOnLogIn = (token) => {
    let exp;
    try {
      var decoded = jwt_decode(token);
      exp = decoded.exp;
      // console.log("expires in", exp);
    } catch (error) {
      exp = 0;
      // console.log("an error occured in  setexpires onlogind");
    }
    setExpiresIn(exp * 1000);
    localStorage.setItem("exp", exp * 1000);
  };

  const isLoggedIn = () => {
    // console.log("Is logged in ", Date.now(), localStorage.getItem("exp"), expiresIn, Date.now() < localStorage.getItem("exp"));
    return Date.now() < localStorage.getItem("exp");
  };

  const logOut = () => {
    localStorage.setItem("token", null);
    localStorage.setItem("exp", null);
  };

  return <AuthContext.Provider value={{ user, setExpiresOnLogIn, setUser, isLoggedIn, logOut }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
