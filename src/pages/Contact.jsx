import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false); // For email popup
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setStatus(""); // Reset status when reopening the modal
    };

    const toggleEmailModal = () => {
        setIsEmailModalOpen(!isEmailModalOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_yzn1v59",
                "template_5odibwr",
                formData,
                "vSFcHm8i4Q3l35FiI"
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setStatus("Failed to send message. Please try again later.");
                    console.error("EmailJS Error: ", error);
                }
            );
    };

    const handleSendUrgentEmail = () => {
        window.open("mailto:info@mahateam.com");
        setIsEmailModalOpen(false);
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>
                For general inquiries, feel free to send us a message or contact us at:
            </p>
            <ul className="contact-info">
                <li>Email: <a href="mailto:info@mahateam.com">info@mahateam.com</a></li>
                <li>Phone: <a href="tel:9748292223">9748292223</a></li>
            </ul>

            <div className="buttons">
                <button onClick={toggleModal} className="contact-button">
                    Send Us a Message
                </button>
                <button onClick={toggleEmailModal} className="urgent-button">
                    Send Urgent Email
                </button>
            </div>

            {/* Modal for sending a general message */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button onClick={toggleModal} className="close-button">
                            &times;
                        </button>
                        <h2>Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit" className="send-button">
                                Send
                            </button>
                        </form>
                        {status && <p className="status-message">{status}</p>}
                    </div>
                </div>
            )}

            {/* Modal for urgent email */}
            {isEmailModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button onClick={toggleEmailModal} className="close-button">
                            &times;
                        </button>
                        <h2>Send Urgent Email</h2>
                        <p>
                            Click below to compose an email using your email client. Ensure to send
                            your query to <strong>info@mahateam.com</strong>.
                        </p>
                        <button onClick={handleSendUrgentEmail} className="send-button">
                            Compose Email
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
