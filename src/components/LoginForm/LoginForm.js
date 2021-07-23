import { Button, Card, Input, Row } from 'antd';
import { Component } from 'react';
import 'antd/dist/antd.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.loginButtonClickHandler = this.loginButtonClickHandler.bind(this);
  }

  loginButtonClickHandler() {
    console.log('logged in');
    this.props.onSubmit();
  }

  render(props) {
    return (
      <Card title='Stayplease'>
        <Row>
          <Input size='large' placeholder='Room No. (Example 0101)'></Input>
        </Row>
        <Row>
          <Input size='large' placeholder='Last Name'></Input>
        </Row>
        <Row>
          <Button
            type='primary'
            style={{ background: '#C3A56B', width: '100%' }}
            onClick={this.loginButtonClickHandler}
          >
            Login
          </Button>
        </Row>
      </Card>
    );
  }
}

export default LoginForm;
