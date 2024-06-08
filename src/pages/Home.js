import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div>
      <NavigationBar />
      <Hero />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Home;
