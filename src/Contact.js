import React from "react";
import "./Contact.css";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__header">
        <EmailIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Contact;
