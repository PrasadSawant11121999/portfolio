import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './PortfolioSection.css';
import image1 from '../asset/ProjectPhotos/Project1/shared image.png';
import image2 from '../asset/ProjectPhotos/Project1/Dashboard.png';
import image3 from '../asset/ProjectPhotos/Project1/Dashboard2.png';

const PortfolioSection = () => {
  const projects = [
    { title: 'Sale Analysis using Power BI', description: ' The "Sale Analysis" project leverages the robust capabilities of Power BI to deliver insightful and actionable business intelligence on sales performance. This project is a comprehensive analysis tool designed to help businesses understand their sales data, identify trends, and make data-driven decisions.', image: image1, projectLink:"https://storesales-analysis-dashboard.onrender.com" },
    { title: 'Dashboard Design using Streamlit', description: 'The "Dashboard Design for Stock Data" project utilizes Streamlit, a Python library, to develop an interactive and user-friendly dashboard for analyzing stock market data. This project aims to provide a powerful tool for investors, traders, and financial analysts to monitor and analyze stock performance.', image: image3, projectLink:"https://storesales-analysis-dashboard.onrender.com" },
    { title: 'Research on Share Market Analysis', description: 'The "Mathematical Research on Share Market Analysis" project focuses on applying advanced mathematical techniques and models to analyze and predict stock market behavior. This project aims to uncover patterns, trends, and correlations within the stock market data to provide deeper insights and more accurate forecasts.', image: image2, projectLink:"https://storesales-analysis-dashboard.onrender.com" },
  ];

  return (
    <Container id="portfolio">
      <p className="text-center my-5 portfolio-title">SOME OF MY LAST WORKS</p>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="portfolio-card mb-4">
              <Card.Body>
                <div className="card-icon">
                  <img src={project.image} alt={project.title} className='projectimage'/>
                </div>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className='ps-3 pe-3 pt-2'>{project.description}</Card.Text>
                <div className="arrow-icon">
                  <span>&rarr;</span>
                </div>
                <a href={project.projectLink} className='primary-btn-theme' style={{marginTop:"3px"}}>Read More</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PortfolioSection;
