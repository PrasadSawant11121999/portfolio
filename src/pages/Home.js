import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './pages.css';
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
