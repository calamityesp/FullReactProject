import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already Have an account</h1>
        <span>Sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.email}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
