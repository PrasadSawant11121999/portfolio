import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Portfolio = () => {
  const projects = [
    { title: 'Power BI', description: 'Description for project one' },
    { title: 'EDA -E Commerce Data', description: 'Description for project two' },
    { title: 'Project Three', description: 'Description for project three' },
  ];

  return (
    <Container id="portfolio">
      <h2 className="text-center my-5">My Portfolio</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
