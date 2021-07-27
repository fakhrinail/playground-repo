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
          <Row>
            <Col span={1} />
            <Col span={22}>
              <Row className="row-home-info">
                <Col span={12}>Room number</Col>
                <Col className="col-right-info" span={12}>
                  City name
                </Col>
              </Row>
              <Row className="row-home-info">
                <Col span={12}>Check in</Col>
                <Col className="col-right-info" span={12}>
                  Weather
                </Col>
              </Row>
              <Row className="row-home-info">
                <Col span={12}>Check out</Col>
                <Col className="col-right-info" span={12}>
                  Date
                </Col>
              </Row>
            </Col>
            <Col span={1} />
          </Row>
          <Row>
            <Col span={24}>
              <Row className="row-home-menu">
                <MenuButtonGrid />
              </Row>
            </Col>
          </Row>

          <HomeCarousel />

          <Divider>Hotel Event</Divider>
          <HotelEventCard />
          <HotelEventCard />
          <HotelEventCard />

          <Divider>In Room Dining Offer</Divider>
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <Row>
            <HomeFooter />
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default HomePage;
