import { Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import { Component } from "react";

import "./HomeFooter.css";

class HomeFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col className="col-home-footer" span={24}>
          <Row>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Text>Home</Text>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Text>Order</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default HomeFooter;
