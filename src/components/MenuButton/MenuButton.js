import { Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import { Component } from "react";

import "./MenuButton.css";

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col className="col-menu" span={6}>
        <Row>
          <Col span={1}></Col>
          <Col span={22}>
            <Text>{this.props.title}</Text>
          </Col>
          <Col span={1}></Col>
        </Row>
      </Col>
    );
  }
}

export default MenuButton;
