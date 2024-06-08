import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
const Resume = () => {

  return (
    <div>
      <NavigationBar />
      <Container className="py-5">
        <Row>
            <Col>
            <h2>Resume</h2>
            <hr />
            <h3>Education</h3>
            <p>Bachelor of Science in Computer Science - University XYZ (Year)</p>
            <hr />
            <h3>Experience</h3>
            <p>Software Engineer - Company ABC (Year - Year)</p>
            <p>Responsibilities: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <hr />
            <h3>Skills</h3>
            <ul>
                <li>Programming Languages: JavaScript, HTML, CSS</li>
                <li>Frameworks/Libraries: React.js, Bootstrap</li>
                <li>Databases: MySQL, MongoDB</li>
                <li>Version Control: Git</li>
            </ul>
            </Col>
        </Row>
       </Container>
      <Footer />
    </div>
  );
};

export default Resume;