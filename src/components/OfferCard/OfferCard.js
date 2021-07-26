import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import Text from "antd/lib/typography/Text";
import { Component } from "react";
import DetailButton from "../DetailButton/DetailButton";

import "./OfferCard.css";

class OfferCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        bordered
      >
        <Row className="row-offer-desc">
          <Col>
            <Text>Description</Text>
            <br />
            <Text>Price</Text>
          </Col>
        </Row>
        <Row className="row-offer-btn">
          <Col span={12} />
          <Col span={12}>
            <DetailButton />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default OfferCard;
