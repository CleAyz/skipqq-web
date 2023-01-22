import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './NavBar.scss'
interface Props {}

const NavBar: React.FC<Props> = () => {
  // State to keep track of whether the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <ul className={`${menuOpen ? 'show' : 'hide'}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-us">About Us</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/roadmap">Roadmap</a>
        </li>
      </ul>
      <div className="hamburger-menu">
        <div className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={20} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
