import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { Component } from "react";
import DetailButton from "../DetailButton/DetailButton";

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
        <Meta description="Offer description $price" title="Offer title" />
        <DetailButton />
      </Card>
    );
  }
}

export default OfferCard;
