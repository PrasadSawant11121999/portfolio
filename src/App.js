import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Footer from './components/Footer'; // Import your Footer component

const App = () => {

  return (
    <Router>
      <div className="app">
        <div className="content">
          {/* Header or Navbar can go here if needed */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
