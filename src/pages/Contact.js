import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
  };

  return (
    <>
        <NavigationBar />
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={6}>
                <h2 className="text-center">Contact Me</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>    
  );
};

export default Contact;
