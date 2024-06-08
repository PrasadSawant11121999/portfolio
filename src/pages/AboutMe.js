import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import profileImage from '../asset/myprofile.png';

const AboutMe = () => {
  return (
    <div>
      <NavigationBar />
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ligula sit amet odio commodo hendrerit.
              Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <p>
              Morbi sagittis tortor et eros elementum, ut venenatis ex lacinia. Nullam non enim nec arcu volutpat
              porttitor eget a eros. Vivamus eget accumsan lectus, ac convallis sapien. Ut viverra elit at luctus
              vestibulum.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image src={profileImage} roundedCircle fluid />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutMe;
