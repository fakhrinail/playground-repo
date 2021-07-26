import { Col, Row } from "antd";
import { Component } from "react";

class MainHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col span={24} className="col-header">
          <Row>
            <Col>Sidebar</Col>
            <Col>Welcome username</Col>
            <Col>Language picker</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default MainHeader;
