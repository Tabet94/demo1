import React, { useState } from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../Assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState('');

  React.useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/') {
      setMenu('home');
    } else if (pathname === '/about') {
      setMenu('about');
    } else if (pathname === '/contact') {
      setMenu('contact');
    } else if (pathname === '/form') {
      setMenu('form');
    }
  }, [location]);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li className={menu === 'home' ? 'active' : ''} onClick={() => { setMenu('home'); }}>
          <Link to="/" style={{ textDecoration: 'none' }}>ACCEUIL</Link>
        </li>
        <li className={menu === 'about' ? 'active' : ''} onClick={() => { setMenu('about'); }}>
          <Link to="/about" style={{ textDecoration: 'none' }}>A PROPOS</Link>
        </li>
        <li className={menu === 'contact' ? 'active' : ''} onClick={() => { setMenu('contact'); }}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>CONTACT</Link>
        </li>
        <li className={menu === 'form' ? 'active' : ''} onClick={() => { setMenu('form'); }}>
          <Link to="/form" style={{ textDecoration: 'none' }}>FORM</Link>
        </li>
      </ul>
      <Sidebar />
    </div>
  );
};

export default Navbar;

