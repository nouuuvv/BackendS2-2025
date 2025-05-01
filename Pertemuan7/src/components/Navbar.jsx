import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NovelSpace</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#novels">Novels</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="search-bar">
        <input type="text" placeholder="Search novels..." />
        <button type="submit">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
