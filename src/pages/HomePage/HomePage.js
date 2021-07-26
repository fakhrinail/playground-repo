import { Col, Row } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { Component } from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HotelEventCard from "../../components/HotelEventCard/HotelEventCard";
import OfferCard from "../../components/OfferCard/OfferCard";

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
          <Row>Carousel</Row>
          <Row>
            <Col span={24}>
              <HomeCarousel />
            </Col>
          </Row>
          <Row>Hotel Event</Row>
          <Row>
            <Col span={24}>
              <HotelEventCard />
            </Col>
          </Row>
          <Row>In Room Dining Offer</Row>
          <Row>
            <Col span={24}>
              <OfferCard />
            </Col>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default HomePage;
