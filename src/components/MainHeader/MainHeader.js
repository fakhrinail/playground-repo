import { Col, Row } from "antd";
import { Component } from "react";

import "./MainHeader.css";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.props.onSidebarClick.bind(this);
  }

  render() {
    return (
      <Row>
        <Col span={24} className="col-header">
          <Row>
            <Col onClick={this.props.onSidebarClick} span={4}>
              Sidebar
            </Col>
            <Col className="col-header-main-title" span={16}>
              Welcome username
            </Col>
            <Col span={4}>Language picker</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default MainHeader;
