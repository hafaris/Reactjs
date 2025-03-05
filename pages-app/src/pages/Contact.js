import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="page contact">
      <h1>Contact Us 📞</h1>
      <p>If you have any questions, feel free to reach out!</p>

      <div className="contact-details">
        <p><strong>Email:</strong> contact@yourwebsite.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Address:</strong> 123 React Street, JavaScript City</p>
      </div>
    </div>
  );
};

export default Contact;
