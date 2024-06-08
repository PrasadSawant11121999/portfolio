import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
