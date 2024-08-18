import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import EcommerceProject1 from './projects/Ecomerceexcelproject';
import Footer from './components/Footer'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/ECommerceReport_Project1" element={<EcommerceProject1 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
