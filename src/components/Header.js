import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <h1>Simple SPA</h1>

      <ul className="nav">
        <li className={activeLink === '/' ? 'active' : ''}>
          <Link to="/"  className='aLink' onClick={() => handleSetActiveLink('/')}>
            Home
          </Link>
        </li>
        <li className={activeLink === '/stuff' ? 'active' : ''}>
          <Link to="/stuff" className='aLink' onClick={() => handleSetActiveLink('/stuff')}>
            Stuff
          </Link>
        </li>
        <li className={activeLink === '/contact' ? 'active' : ''}>
          <Link to="/contact"  className='aLink' onClick={() => handleSetActiveLink('/contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
