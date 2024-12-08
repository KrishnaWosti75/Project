import React from "react";
import "../styles/service-details.css";

const PersonalizedWebDevelopment = () => {
    return (
        <section id="personalized-web-development" className="service-detail">
            <div className="container">
                <h2 className="service-title">Personalized Web Development Service</h2>
                <p className="service-description">
                    Our Personalized Web Development service is designed to help you get a custom-built website that suits your exact needs. Whether you're a business looking for an online presence, an individual with personal projects, or a student who needs help with college assignments, we've got you covered:
                </p>
                <ul>
                    <li><strong>Basic Website:</strong> Landing page with CMS. Rs. 30,000</li>
                    <li><strong>E-Commerce Website:</strong> Includes admin dashboard, CMS, and backend. Rs. 90,000</li>
                    <li><strong>Personal Projects:</strong> Hire a developer to build your projects. Rs. 80,000</li>
                </ul>
                <p>
                    We provide consultation and revisions, ensuring that your project meets all your requirements.
                </p>
            </div>
        </section>
    );
};

export default PersonalizedWebDevelopment;
