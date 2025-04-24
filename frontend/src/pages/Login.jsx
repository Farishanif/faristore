import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="d-flex w-100 h-100 justify-center item-center">
      <SignIn />
    </div>
  )
}

export default Login