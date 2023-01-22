import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import CompanyLogo from "../../assets/logos/logo.png";
import "./NavBar.scss";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img alt="company logo" src={CompanyLogo} />
        </a>
      </div>
      <div className="navbar-container">
        <div className="menu-icon">
          <div onClick={() => handleClick()} className="fa-bars">
            {click ? <RxCross2 /> : <FaBars />}
          </div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-links" onClick={closeMobileMenu}>
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="/about-us" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/roadmap" className="nav-links" onClick={closeMobileMenu}>
              Road Map
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
