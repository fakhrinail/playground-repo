import { Col, Divider, Row } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import { Component } from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HotelEventCard from "../../components/HotelEventCard/HotelEventCard";
import MainHeader from "../../components/MainHeader/MainHeader";
import MenuButtonGrid from "../../components/MenuButtonGrid/MenuButtonGrid";
import OfferCard from "../../components/OfferCard/OfferCard";

import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout className="layout-mobile">
        <Content>
          <MainHeader />
          <Row className="row-home-content">
            <MenuButtonGrid />
          </Row>
          <Row>
            <Col span={24}>
              <HomeCarousel />
            </Col>
          </Row>
          <Divider>Hotel Event</Divider>
          <Row>
            <Col span={24}>
              <HotelEventCard />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <HotelEventCard />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <HotelEventCard />
            </Col>
          </Row>
          <Divider>In Room Dining Offer</Divider>
          <Row>
            <Col span={24}>
              <OfferCard />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <OfferCard />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <OfferCard />
            </Col>
          </Row>
          <Row>
            <HomeFooter />
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default HomePage;
