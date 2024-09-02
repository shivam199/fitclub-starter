import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navItems = [
    { name: 'Create Plan', path: '/' },
    { name: 'Past Plans', path: '/past-plans' },
    { name: 'Start Workout', path: '/start-workout' },
    { name: 'Progress', path: '/progress' },
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.webp" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
