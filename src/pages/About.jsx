import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";
import KrishnaPhoto from "../assets/krishna.jpeg"; // Add Krishna's photo
import BishalPhoto from "../assets/bishal.jpeg"; // Add Bishal's photo

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Only animate once while scrolling
        });
    }, []);

    return (
        <div className="about-container">
            {/* Introduction Section */}
            <section className="intro-section" data-aos="fade-up">
                <h1>About MahaTeam</h1>
                <p>
                    MahaTeam was founded to empower individuals and businesses across Nepal to thrive in the digital age.
                    Our mission is to optimize digital experiences, help businesses grow online, and provide training
                    in skills that lead to financial independence.
                </p>
            </section>

            {/* YouTube Video Section */}
            <section className="video-section" data-aos="fade-up">
                <h2>Learn More About Us</h2>
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/5uRpsP1lSSk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Founders Section */}
            <section className="founders-section" data-aos="fade-up" data-aos-delay="300">
                <h2>Meet Our Team</h2>
                <div className="founders-cards">
                    {/* Krishna's Card */}
                    <div className="founder-card" data-aos="zoom-in">
                        <img src={KrishnaPhoto} alt="Krishna Wosti" className="founder-photo" />
                        <h3>Krishna Wosti</h3>
                        <p className="founder-title">CEO of MahaTeam</p>
                        <p className="founder-message">
                            "Our goal at MahaTeam is to inspire and enable individuals and businesses to reach their full potential in the digital world."
                        </p>
                    </div>

                    {/* Bishal's Card */}
                    <div className="founder-card" data-aos="zoom-in" data-aos-delay="200">
                        <img src={BishalPhoto} alt="Bishal" className="founder-photo" />
                        <h3>Bishal Tim</h3>
                        <p className="founder-title">CTO of MahaTeam</p>
                        <p className="founder-message">
                            "Technology and innovation are at the heart of everything we do. Together, we can build a brighter future."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
