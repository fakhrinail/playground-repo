import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { Component } from "react";

class HotelEventCard extends Component {
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
        bordered="true"
      >
        <Meta title="Hotel event title" description="Hotel event description" />
        <Button type="default">Detail</Button>
      </Card>
    );
  }
}

export default HotelEventCard;
