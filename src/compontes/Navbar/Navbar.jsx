import React, {  useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className={`navbar ${isOpen ? 'open' : ''} `}>
      
      <img className="logo" src="logo.png" alt="" />
     
        <img src="menu-icon.png" alt="" className='menu-icon' onClick={toggleMenu} />
      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        
        <li> 
          {/*<Link to="/Home">Home</Link>*/}
          < a href='#Home'>Home</a>
        </li>

        <li>
          {/*<Link to="/Program">Program</Link>*/}
          < a href='#Program'>Program</a>
          </li>

        <li>
          {/*<Link to="/about">About</Link>*/}
          < a href='#About'>About</a>
          </li>

        <li>
          {/*<Link to="Contact">Campus</Link>*/}
          < a href='#Campus'>Campus</a>
          </li>


        <li>
          {/*<Link to="/hostel">Hostel</Link>*/}
          < a href='#Hostel'>Hostel</a>
          </li>
        

        <li>

          {/*<Link to="/contact ">Contact</Link>*/}
          < a href='#Contact'>Contact</a>
          </li>
          
      </ul>
       
    </nav>
  );
};


export default Navbar
