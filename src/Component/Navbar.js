import './Component.css';
import React, { useState } from 'react';

const Navbar=()=> {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const activateMenuItem = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    "Home",
    "About",
    "Resume",
    "Skills",
    "Projects",
    "My Blogs",
    "Contact"
  ];

  return (
    <nav className='row pt-2'>   
      <div className='col-md-3'>
        <h1 className='brand-name'>Prasad<span style={{color:"#fcb643"}}>Sawant</span></h1>
      </div>
      <div className='col-md-9 menu d-flex justify-content-end'>
        <ul className='menu-list'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${activeIndex === index ? 'active-menu-item' : ''}`}
              onClick={() => activateMenuItem(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
