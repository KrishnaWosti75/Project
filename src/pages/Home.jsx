import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import TeamPhoto from "../assets/team-photo.jpg"; // Replace with your team photo
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Only animate once while scrolling
        });
    }, []);

    return (
        <div className="home-container">
            {/* Welcome Section */}
            <div className="welcome-section" data-aos="fade-up">
                <h1 className="welcome-heading">Welcome to MahaTeam</h1>
                <p className="welcome-subtext">
                    Empowering individuals and businesses with knowledge and expertise.
                    Join us to learn, grow, and succeed!
                </p>
            </div>

            {/* Objectives Section */}
            <div className="objectives-section" data-aos="fade-up" data-aos-delay="300">
                <h2 className="objectives-heading">Our Objectives</h2>
                <ul className="objectives-list">
                    <li>Provide expert-led courses in trading, frontend, and backend development.</li>
                    <li>Offer top-tier copywriting and digital marketing services.</li>
                    <li>Build a community that fosters learning and innovation.</li>
                </ul>
            </div>

            {/* Team Photo Section */}
            <div className="team-photo-section" data-aos="zoom-in" data-aos-delay="500">
                <img src={TeamPhoto} alt="MahaTeam Group" className="team-photo" />
                <p className="team-caption">Meet the passionate team behind MahaTeam!</p>
            </div>

            {/* Learn More Button */}
            <div className="learn-more-section" data-aos="fade-up" data-aos-delay="600">
                <Link to="/about" className="learn-more-button">
                    Learn More About Us
                </Link>
            </div>
        </div>
    );
};

export default Home;
