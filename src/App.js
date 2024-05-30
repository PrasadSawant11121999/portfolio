import './App.css';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';


function App() {
  return (
    <div className='Layout-index'>  
      <Navbar />  
      <div className=''>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
