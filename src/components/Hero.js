import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const hero_tagline_text = "I am a Data Scientist and Analyst specializing in Machine Learning and Deep Learning. Explore my projects and experience in transforming data into actionable insights.".split(" ");
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col md={7} className="">
            <div className='text-left'>
                <motion.p 
                  className='hero-greeting'
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >Hello</motion.p>            
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 , delay:0.3}}
                ><span className='hero-initials'>I'm</span><span className='hero-Name'> Prasad Sawant</span></motion.p>                
            </div>
            <motion.div 
              className='typewrite-custom'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 , delay:0.4}}
            >
              <Typewriter
                options={{
                  strings: ['Data Analyst', 'Data Scientist', 'Mathematician'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>            
            <h2 className='hero-subtitle'>
                "Embark on a Data Discovery Journey"  Welcome to My Data Science Portfolio
            </h2>
            <p className='hero-tagline'>
              {hero_tagline_text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}              
            </p>
          </Col>
          <Col md={5}>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
