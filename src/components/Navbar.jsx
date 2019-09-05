import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className='navbar'>
      <h1>Crypto Tracker</h1>
      <NavLink to='/'>
        <h2>Home</h2>
      </NavLink>
      <NavLink to='/charts'>
        <h2>Charts</h2>
      </NavLink>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
