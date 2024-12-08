import React from "react";
import "../styles/Footer.css"; // Link to updated Footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">MahaTeam</div>

            <div className="footer-links">
                <a href="/about">About Us</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>

            <div className="social-icons">
                <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>

            <p className="copyright">© 2025 MahaTeam. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
