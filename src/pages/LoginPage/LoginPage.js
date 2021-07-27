import { Col, Row } from "antd";
import { Picker, List } from "antd-mobile";
import Layout, { Content } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
import { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.loginFormHandler = this.loginFormHandler.bind(this);
    this.state = { language: "English" };
  }

  loginFormHandler() {
    this.props.onLogin();
  }

  render() {
    return (
      <Layout>
        <Content>
          <Row>
            <Col span={24}></Col>
          </Row>
          <Row className="login-background">
            <Col span={24}>
              <LoginForm onSubmit={this.loginFormHandler} />
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default LoginPage;
