import { Button, Col, Divider, Row } from "antd";
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
    this.state = { showSidebar: false };
    this.sidebarClickHandler = this.sidebarClickHandler.bind(this);
  }

  sidebarClickHandler() {
    console.log("toggle sidebar");
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  render() {
    return (
      <Layout className="layout-mobile">
        <Content>
          <MainHeader onSidebarClick={this.sidebarClickHandler} />

          <Row className="row-sidebar" hidden={!this.state.showSidebar}>
            <Col>Sidebar content</Col>
          </Row>

          <Row>
            <Col span={1} />
            <Col span={22}>
              {/* temporary, should use list of infos and map to rows */}
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

              <Row className="row-home-menu">
                <MenuButtonGrid />
              </Row>
            </Col>
            <Col span={1} />
          </Row>

          <HomeCarousel />

          <Divider>Hotel Event</Divider>
          {/* temporary, title and desc should be passed using props */}
          {/* should use list of events and map to cards */}
          <HotelEventCard />
          <HotelEventCard />
          <HotelEventCard />

          <Divider>In Room Dining Offer</Divider>
          {/* temporary, title and desc should be passed using props */}
          {/* should use list of offers and map to cards */}
          <OfferCard />
          <OfferCard />
          <OfferCard />

          <HomeFooter />
        </Content>
      </Layout>
    );
  }
}

export default HomePage;
