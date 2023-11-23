import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="footer_section mt-5 p-5 w-100 bg-body-tertiary">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Support</h5>
            <ul>
              <li>Help Center</li>
              <li>Our Covid-19 Response</li>
              <li>Cancellation Options</li>
              <li>Safety information</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Company</h5>
            <ul>
              <li>About us</li>
              <li>Community Blog</li>
              <li>Careers</li>
              <li>Privacy policy</li>
              <li>Terms of service</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <ul>
              <li>Partnerships</li>
              <li>FAQ</li>
              <li>Get in touch.</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Social</h5>
            <i className="bi bi-twitter-x fs-4 px-2 "></i>
            <i className="bi bi-instagram fs-4 px-2 text-danger-emphasis"></i>
            <i className="bi bi-facebook fs-4 px-2 text-primary"></i>
            <i className="bi bi-youtube fs-4 px-2 text-danger"></i>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
