import { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.loginFormHandler = this.loginFormHandler.bind(this);
  }

  loginFormHandler() {
    console.log("pass login");
    this.props.onLogin();
  }

  render() {
    return (
      <div className="login-background">
        <LoginForm onSubmit={this.loginFormHandler} />
      </div>
    );
  }
}

export default LoginPage;
