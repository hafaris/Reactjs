import React, { useEffect } from "react";
import './About.css';


const Contact = () => {
    useEffect(() => {
        setTimeout(() => {
            console.log("Contact page is loaded");
        }, 2000);
      }, []);
      
  return (
    <div>
      <h2>Contact Page</h2>
      <p>This is the contact page.</p>
    </div>
  );
};

export default Contact;