import { Picker, List } from "antd-mobile";
import { Component } from "react";

const dummyLangs = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Japanese",
    value: "jp",
  },
  {
    label: "Korean",
    value: "kr",
  },
  {
    label: "Chinese",
    value: "ch",
  },
];

class LanguagePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "en" };
  }

  render() {
    return (
      <Picker
        data={dummyLangs}
        title="Select Language"
        cascade={false}
        value={this.state.language}
        okText="Select"
        dismissText="Cancel"
        onOk={(language) => this.setState({ language: language })}
        onChange={(language) => this.setState({ language: language })}
      >
        <List.Item>Language</List.Item>
      </Picker>
    );
  }
}

export default LanguagePicker;
