import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const navbarLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      {/* Logo */}
      <div className="app__navbar-logo">
        <img src={images.logo1} alt="app logo" />
      </div>

      {/* Navbar Links */}
      <ul className="app__navbar-links">
        {navbarLinks.map((link) => (
          <li key={link.id} className="p__opensans">
            <a href={`#${link.id}`}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Login / Booking Section */}
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <span className="separator" />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          aria-label="Open menu"
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              aria-label="Close menu"
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <ul className="app__navbar-smallscreen_links">
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={() => setToggleMenu(!toggleMenu)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
