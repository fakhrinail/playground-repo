import { Carousel } from "antd";
import { Component } from "react";

const contentStyle = {
  height: "150px",
  lineHeight: "150px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel dotPosition={"bottom"}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    );
  }
}

export default HomeCarousel;
