import { Col, Row } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { Component } from "react";
import HomeCarousel from "../../components/HomeCarousel";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout className="layout-mobile">
        <Header>Welcome username</Header>
        <Content>
          <Row>Main menu</Row>
          <Row>
            <Col span={24}>
              <HomeCarousel />
            </Col>
          </Row>
          <Row>Hotel Event</Row>
          <Row>In Room Dining Offer</Row>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default HomePage;
