import React, { useEffect } from "react";
import "../styles/Services.css";

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Our Services</h2>

                {/* Company Promise */}
                <div className="company-promise">
                    <p>
                        At MahaTeam, we are committed to providing the best possible services to our clients. Our mission is to help individuals and businesses learn, grow, and succeed by offering top-tier educational resources, hands-on experiences, and professional services in various digital domains. Whether you are new to trading, web development, or looking to take your personal projects to the next level, we offer the tools and expertise to make it happen. Join our community, and let's grow together!
                    </p>
                </div>

                {/* Service Options */}
                <div className="services-grid">
                    {/* Forex Trading Section */}
                    <div className="service-card">
                        <h3>Forex Trading Course</h3>
                        <p>
                            Learn how to trade in the world of forex with our expert-led guidance and community-driven approach. We offer three distinct plans tailored to your needs, whether you're just getting started or looking for advanced strategies. Join our community of passionate traders from Nepal and abroad, and gain the skills and confidence you need to succeed in the competitive forex market.
                        </p>
                        <p><strong>Rs. 499.99/mo to Rs. 1499.99/mo</strong></p>
                        <button className="learn-more-button" onClick={() => window.location.href = "/forex-trading"}>Learn More</button>
                    </div>

                    {/* Web Development Section */}
                    <div className="service-card">
                        <h3>Web Development Courses</h3>
                        <p>
                            We offer specialized web development training in both .NET (with Umbraco CMS) and MERN stack (Full-Stack). Whether you're looking to develop backend solutions or build full-scale web applications, we provide comprehensive training with hands-on sessions and expert mentorship. Choose a plan that suits your schedule and start building the web apps of the future today.
                        </p>
                        <p><strong>Rs. 7000 to Rs. 16000</strong></p>
                        <button className="learn-more-button" onClick={() => window.location.href = "/web-development"}>Learn More</button>
                    </div>

                    {/* Personalized Web Development Section */}
                    <div className="service-card">
                        <h3>Personalized Web Development</h3>
                        <p>
                            Get a custom website built by professionals! Whether it's a simple landing page, a fully-functional e-commerce site, or a personalized project for your college assignment, we’ve got you covered. Our team provides consultation, design, development, and revisions to ensure you get exactly what you need, all while staying on budget.
                        </p>
                        <p><strong>Rs. 30000 to Rs. 90000</strong></p>
                        <button className="learn-more-button" onClick={() => window.location.href = "/personalized-web-development"}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
