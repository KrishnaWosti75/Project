import React, { useState, useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import the AOS CSS
import "../styles/service-details.css";

const ForexTrading = () => {
    const [userDetails, setUserDetails] = useState({ email: "", phone: "" });
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    const handleKhaltiPayment = () => {
        const config = {
            publicKey: "YOUR_PUBLIC_KEY",
            productIdentity: "forex-trading-plan",
            productName: selectedPlan,
            productUrl: "http://yourwebsite.com",
            paymentPreference: ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
            eventHandler: {
                onSuccess: (payload) => {
                    alert(`Payment successful! Payment ID: ${payload.idx}`);
                    setPaymentCompleted(true);
                    document.body.classList.remove("no-scroll"); // Re-enable scrolling
                },
                onError: (error) => {
                    alert("Payment failed!");
                    console.error(error);
                    document.body.classList.remove("no-scroll"); // Re-enable scrolling
                },
                onClose: () => {
                    console.log("Payment widget closed.");
                    document.body.classList.remove("no-scroll"); // Re-enable scrolling
                },
            },
        };

        const checkout = new KhaltiCheckout(config);

        // Disable scrolling when Khalti opens
        document.body.classList.add("no-scroll");

        checkout.show({ amount: 1500 * 100 }); // Replace with your amount
    };


    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setModalOpen(true); // Open modal on plan selection
    };

    const handleSubmitDetails = (e) => {
        e.preventDefault();
        if (!userDetails.email || !userDetails.phone) {
            alert("Please fill in all the details.");
        } else {
            setModalOpen(false); // Close the modal
            handleKhaltiPayment(); // Proceed to payment
        }
    };

    return (
        <section id="forex-trading" className="service-detail" data-aos="fade-up">
            <div className="container">
                <h2 className="service-title">Forex Trading Service</h2>
                <p className="service-description">
                    Our Forex Trading service offers tailored plans to enhance your trading skills and profitability.
                </p>

                <div className="service-cards">
                    {["Basic", "Standard", "Premium"].map((plan, idx) => (
                        <div className="service-card" key={idx} data-aos="fade-up">
                            <h3>{plan} Plan</h3>
                            <p>
                                {plan === "Basic" && "Rs. 499.99/mo - Community access"}
                                {plan === "Standard" && "Rs. 999.99/mo - Community + Private channels"}
                                {plan === "Premium" && "Rs. 1499.99/mo - All benefits + 1-on-1 with CEO"}
                            </p>
                            <button
                                className="payment-button"
                                onClick={() => handlePlanSelect(plan)}
                            >
                                Pay Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3>Enter Your Details</h3>
                            <form onSubmit={handleSubmitDetails}>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={userDetails.email}
                                    onChange={(e) =>
                                        setUserDetails({ ...userDetails, email: e.target.value })
                                    }
                                    required
                                />
                                <input
                                    type="phone"
                                    placeholder="Your Phone Number"
                                    value={userDetails.phone}
                                    onChange={(e) =>
                                        setUserDetails({ ...userDetails, phone: e.target.value })
                                    }
                                    required
                                />
                                <button type="submit">Submit</button>
                                <button
                                    type="button"
                                    className="close-button"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ForexTrading;
