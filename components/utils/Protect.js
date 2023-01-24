import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const Protect = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    // console.log("inprotect");
    if (!isLoggedIn()) {
      router.push("/signin");
    }
  }, []);
  return <>{children}</>;
};

export default Protect;
