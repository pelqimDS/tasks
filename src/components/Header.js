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
          <Link to="/" onClick={() => handleSetActiveLink('/')}>
            Home
          </Link>
        </li>
        <li className={activeLink === '/about' ? 'active' : ''}>
          <Link to="/about" onClick={() => handleSetActiveLink('/about')}>
            About
          </Link>
        </li>
        <li className={activeLink === '/profile' ? 'active' : ''}>
          <Link to="/profile" onClick={() => handleSetActiveLink('/profile')}>
            Profile
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
