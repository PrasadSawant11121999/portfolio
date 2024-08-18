import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';
import './pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://portfolioserver-40h9.onrender.com/send-email/', {
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <>
      <NavigationBar />
      <Container className='justify-content-center align-items-center p-5' id='contactus'>
        <Row className="justify-content-center m-5 mt-5 shadow" style={{ boxShadow: '15px 11px 15px 11px #8080804a' }}>
          <Col md={2} className={`${isMobile ? 'd-flex justify-content-center flex-wrap' : ''} p-0`} style={{ backgroundColor: 'var(--theme-color-shade2)' }}>
            <a href="#contactus" rel="noopener noreferrer" className='link-no-color'>
              <i className={`${isMobile ? '' : 'mt-4'} fa-brands fa-google d-block text-white contact-options`}></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='link-no-color'>
              <i className="fa-brands fa-facebook d-block text-white contact-options"></i>
            </a>
            <a href="https://www.linkedin.com/in/prasadsawant11" target="_blank" rel="noopener noreferrer" className='link-no-color'>
              <i className="fa-brands fa-linkedin d-block text-white contact-options"></i>
            </a>
            <a href="https://www.instagram.com/prasad_s1999?igsh=N3N0b2lpdXNxZGln" target="_blank" rel="noopener noreferrer" className='link-no-color'>
              <i className="fa-brands fa-instagram d-block text-white contact-options"></i>
            </a>
          </Col>
          <Col md={10} style={{ padding: '10px 15px 20px' }}>
            <h2 className="text-center pt-5" style={{ fontSize: '40px' }}>Contact Me</h2>
            <Form onSubmit={handleSubmit} className='pe-4 ps-4 pb-3'>
              <Form.Group controlId="name" className='pe-4 ps-4 pb-3 pt-4'>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className='pe-4 ps-4 pb-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                <Button 
                  variant="primary" 
                  type="submit" 
                  className='mt-3' 
                  style={{ width: '100%', backgroundColor: 'var(--theme-color-shade2)', border: 'none', fontSize: '22px' }} 
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
