import { Row } from "antd";
import { Component } from "react";
import MenuButton from "../MenuButton/MenuButton";

import "./MenuButtonGrid.css";

// temporary dummy data
const dummyMenuContents = [
  { text: "Menu1" },
  { text: "Menu2" },
  { text: "Menu3" },
  { text: "Menu4" },
  { text: "Menu5" },
  { text: "Menu6" },
  { text: "Menu7" },
  { text: "Menu8" },
];

class MenuButtonGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="row-menu">
        {dummyMenuContents.map((content) => (
          <MenuButton title={content.text} />
        ))}
      </Row>
    );
  }
}

export default MenuButtonGrid;
