import { Carousel, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import { Component } from "react";

import "./HomeCarousel.css";

const dummyContents = [
  { titleText: "Dummy title 1", descText: "Dummy desc 1" },
  { titleText: "Dummy title 2", descText: "Dummy desc 2" },
  { titleText: "Dummy title 3", descText: "Dummy desc 3" },
];

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="row-carousel">
        <Col span={24}>
          <Carousel dotPosition={"bottom"}>
            {dummyContents.map((content) => (
              <div key={content.descText}>
                <Row className="row-home-carousel">
                  <Col className="col-home-carousel" span={16}>
                    <Text className="text-home-carousel-title">
                      {content.titleText}
                    </Text>
                    <br />
                    <Text className="text-home-carousel-desc">
                      {content.descText}
                    </Text>
                  </Col>
                </Row>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    );
  }
}

export default HomeCarousel;
