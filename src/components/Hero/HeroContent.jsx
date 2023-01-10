import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

import { Row, Col, Container, Button, Image } from "react-bootstrap";
import airbnbLogo from "../../assets/airbnb-white.svg";
import googleLogo from "../../assets/google-white.svg";
import spotifyLogo from "../../assets/spotify-white.svg";
import paypalLogo from "../../assets/paypal-white.svg";
import masterCardLogo from "../../assets/mastercard.svg";

const HeroContent = () => {
  return (
    <Container className="py-5">
      <Row className="d-flex align-items-center">
        <Col>
          <div className="mb-5" style={{ width: "60%" }}>
            <h1 className="text-white" style={{ fontSize: "3rem" }}>
              Development done right
            </h1>
            <h3
              className="h6 my-5"
              style={{ color: "#e6e6e6", lineHeight: "1.7rem" }}
            >
              Build a beautiful, modern website with flexible components built
              from scratch.
            </h3>
            <Button
              className="py-3 px-5"
              style={{
                backgroundColor: "#fff",
                border: "none",
                color: "black",
                gap: "0.8rem",
              }}
            >
              <span>Get started</span>
              <HiOutlinePlusSm size={18} />
            </Button>
          </div>
          <div className="d-flex" style={{ gap: "1rem", color: "white" }}>
            <span className="">Trusted by:</span>
            <Image src={googleLogo} height="25px" />
            <Image src={spotifyLogo} height="25px" />
            <Image src={airbnbLogo} height="25px" />
            <Image src={paypalLogo} height="25px" />
          </div>
        </Col>
        <Col
          className="d-flex flex-column bg-white hero-creditCard-container"
          style={{ padding: "3rem" }}
        >
          <div className="d-flex justify-content-between">
            <Button
              className="bg-transparent text-dark border-0"
              style={{ fontSize: "1.3rem" }}
            >
              Manage Cards
            </Button>
            <Button
              className="bg-transparent px-4"
              style={{
                color: "black",
                border: "2px solid #0000003c",
                borderRadius: "0.45rem",
              }}
            >
              Add new
            </Button>
          </div>
          {/* Creadit card */}
          <div
            className="my-4"
            style={{
              backgroundColor: "#1C1247",
              borderRadius: "1rem",
              padding: "2.3rem",
            }}
          >
            <div className="d-flex justify-content-between">
              <Image src={masterCardLogo} height="35px" />
              <Button
                style={{ backgroundColor: "#5BCAA7", borderRadius: "0.45rem" }}
              >
                Active
              </Button>
            </div>
            <div className="d-flex flex-column text-white py-4">
              <span className="h6">CARD NUMBER</span>
              <span className="h2">4358 - 7421 - 9256 - 6682</span>
            </div>

            <div className="d-flex mb-4" style={{ gap: "7rem" }}>
              <div className="d-flex flex-column text-white">
                <span>NAME</span>
                <span className="font-weight-bolder">John Snow</span>
              </div>
              <div className="d-flex flex-column text-white">
                <span>EXPIRY DATE</span>
                <span className="font-weight-bolder">11/23</span>
              </div>
            </div>
          </div>
          {/* Expense Items */}
          <div
            className="d-flex flex-column py-4"
            style={{ borderBottom: "1px solid rgba(38, 38, 38, 0.2)" }}
          >
            <div className="d-flex justify-content-between">
              <span className="h5 font-weight-normal">Starbucks</span>
              <span className="h5 font-weight-normal">$5,50 USD</span>
            </div>
            <div>
              <span className="text-muted">
                Pending-San Francisco, United States
              </span>
            </div>
          </div>
          <div
            className="d-flex flex-column py-4 mb-4"
            style={{ borderBottom: "1px solid rgba(38, 38, 38, 0.2)" }}
          >
            <div className="d-flex justify-content-between">
              <span className="h5 font-weight-normal">Nike Sports</span>
              <span className="h5 font-weight-normal">$129,00 USD</span>
            </div>
            <div>
              <span className="text-muted">
                Pending-San Francisco, United States
              </span>
            </div>
          </div>
          <a href="/" className="view-all-btn">
            <span>View all</span>
            <IoIosArrowForward size={10} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroContent;
