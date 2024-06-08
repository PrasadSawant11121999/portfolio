import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {

  return (
    <div>
      <NavigationBar />
      <Hero />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
