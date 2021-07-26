import { Button } from "antd";
import { Component } from "react";

import "./DetailButton.css";

class DetailButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button type="default">Detail</Button>;
  }
}

export default DetailButton;
