import React from "react";
import "./Contact.css";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__form">
        <div className="contact__formField">
          <p>Name</p>
          <input />
        </div>

        <div className="contact__formField">
          <p>Email</p>
          <input />
        </div>

        <div className="contact__formField">
          <p>Message</p>
          <input />
        </div>

        <button type="submit">Submit</button>
      </div>

      <div className="contact__footer">
        <EmailIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Contact;
