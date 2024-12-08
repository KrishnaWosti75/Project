import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
// import Contact from "../pages/Contact";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">MahaTeam</NavLink>
            </div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                <span className="hamburger-icon">&#9776;</span>
            </button>
            <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                <li>
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
                </li>
                <li>
                    {/* <Contact /> */}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

