import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';
import profileImage from '../asset/about.jpg';

const AboutMe = () => {
  return (
    <div style={{background: "linear-gradient(-45deg, #4e96d8, #46d060)", color:"white"}}>
      <NavigationBar />
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <h2 style={{paddingTop:"100px"}}>About Me</h2>
            <p>
            Hello! I'm Prasad Sawant, a Master of Mathematics candidate with a strong background in software development and a keen interest in data science. My academic journey has equipped me with deep knowledge in statistical analysis, mathematical modeling, and algorithm development. With several years of experience in software development, I am proficient in Python, R, and C#, and have worked extensively with frameworks like ASP.Net MVCs, StreamLit and TensorFlow. 
            </p>
            <p>
            I have a passion for transforming data into actionable insights and have developed projects such as stock market prediction models, sales data visualization dashboards, and algorithmic trading strategies. I am always eager to tackle complex problems and contribute to innovative data-driven solutions. Feel free to explore my portfolio to see my projects and connect with me on LinkedIn/GitHub for potential collaborations or opportunities.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image src={profileImage} roundedCircle fluid style={{backgroundColor:"white"}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
