import React from "react";
import "../styles/service-details.css";

const WebDevelopment = () => {
    return (
        <section id="web-development" className="service-detail">
            <div className="container">
                <h2 className="service-title">Web Development Courses</h2>
                <p className="service-description">
                    Our Web Development service is perfect for those looking to learn or upgrade their skills in modern web development. We offer training in two powerful tech stacks:
                </p>
                <h3>.NET (with Umbraco CMS for Frontend)</h3>
                <ul>
                    <li><strong>1 Month Plan:</strong> Learn 3 days a week. Rs. 7000</li>
                    <li><strong>2 Month Plan:</strong> Learn 4 days a week. Rs. 14000</li>
                </ul>
                <h3>MERN Stack (Full-Stack Development)</h3>
                <ul>
                    <li><strong>1 Month Plan:</strong> Learn 3 days a week. Rs. 8000</li>
                    <li><strong>2 Month Plan:</strong> Learn 4 days a week. Rs. 16000</li>
                </ul>
                <p>
                    These plans offer comprehensive training, mentorship, and practical assignments to ensure you gain real-world web development skills.
                </p>
            </div>
        </section>
    );
};

export default WebDevelopment;
