import React from "react";
import { PrimaryButton } from "./PrimaryButton";
import "./SocialMedia.css"; // Import the CSS file

const SocialIcons = () => {
  return (
    <div>
      <div className="rounded-social-buttons">
        <a className="social-button facebook" href="https://github.com/tusharrr-31" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a className="social-button twitter" href="https://x.com/tusharrr_31" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="social-button linkedin" href="https://www.linkedin.com/in/tushar-singh-329082225/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="social-button instagram" href="https://www.instagram.com/tusharrr.31/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <div className="mx-4 py-6 md:mx-0 pb-8 text-left">
          
          <PrimaryButton ButtonText="View Resume" />
        </div>
        
      </div>
    </div>
  );
};

export default SocialIcons;
