import React, { useState } from "react";
import './Contact.css'; // Import the CSS file for the contact form

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We’ll connect with you shortly.");
    setFormData({ name: "", email: "", inquiry: "" });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry" className="form-label">Inquiry Details</label>
          <textarea
            name="inquiry"
            rows="5"
            value={formData.inquiry}
            onChange={handleChange}
            required
            className="form-input"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default Contact;
