import React from "react";
import "./sign-in-and-sign-out.style.scss";
import SignIn from "../../components/sign-In/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignOutPage = () => (
  <div className="sign-in-and-sign-out">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignOutPage;
