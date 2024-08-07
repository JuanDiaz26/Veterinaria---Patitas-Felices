import React from 'react';
import { Telephone, Envelope, Facebook, Whatsapp, Instagram } from 'react-bootstrap-icons';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="contact-info">
        <span><Telephone /> +54 381-4955080</span>
        <span><Envelope /> info@patitasfelices.com</span>
      </div>
      <div className="social-links">
  < a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook-icon"><Facebook /></a>
  <a href="https://wa.me/543814955080" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp-icon"><Whatsapp/></a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon"><Instagram /></a>
</div>
    </div>
  );
};

export default TopBar;