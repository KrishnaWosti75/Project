import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  // Import Footer
import "./App.css"; // Link to your global styles
import WebDevelopment from "./subpages/web-development";
import ForexTrading from "./subpages/forex-trading";
import PersonalizedWebDevelopment from "./subpages/personalized-web-development";

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Background is applied to this container */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="forex-trading" element={<ForexTrading />} />
          <Route path="personalized-web-development" element={<PersonalizedWebDevelopment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Footer placed here so it appears on every page */}
      </div>
    </Router>
  );
};

export default App;
