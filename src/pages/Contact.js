import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import './pages.css'
import ContactImage from '../asset/contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://portfolioserver-40h9.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();
      alert(result.message);
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <>
      <NavigationBar />
      <Container className='mb-5'>
        <Row className="justify-content-center mt-5 shadow" style={{boxShadow: '0px 0px 15px 11px #8080804a'}}>
          <Col md={6} className='p-0'>
            <Image src={ContactImage} style={{backgroundColor:"white", width:'100%'}}/>
          </Col>
          <Col md={6} style={{padding:'10px 15px 20px',}}>
            <h2 className="text-center pt-5 mt-5" style={{fontSize:'40px'}}>Contact Me</h2>
            <Form onSubmit={handleSubmit} className='pe-4 ps-4 pb-3'>
              <Form.Group controlId="name" className='pe-4 ps-4 pb-3 pt-4'>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="email" className='pe-4 ps-4 pb-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="message" className='pe-4 ps-4 pb-3'>
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Enter your message" 
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button variant="primary" type="submit" className='mt-3' style={{width: '100%'}}>
                  Submit
                </Button>
              </Form.Group>
              
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Contact;
