import React, { useContext } from "react";
import { AuthContexts } from "../contexts/AuthContexts";

const UseAuth = () => {
  const authInfo = useContext(AuthContexts);

  return authInfo;
};

export default UseAuth;
