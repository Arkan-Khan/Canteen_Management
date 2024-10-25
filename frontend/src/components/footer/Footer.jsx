import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about">
        <h2>About Policy</h2>
        <p>
        A canteen policy outlines the guidelines and regulations for the operation of the canteen,
        including hygiene standards, food quality, pricing, and service hours. 
        It aims to ensure a safe, clean, and healthy environment for all users while providing a variety of nutritious and affordable meal options.
        </p>
      </div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          <b>Address:</b> Z-302, Some Random Street, Some Random City, Some
          Random Country, 0000000{" "}
        </p>
        <p>
          <b>Phone No:</b> 101010101
        </p>
      </div>
    </div>
  );
};

export default Footer;
