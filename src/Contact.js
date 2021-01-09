import React from "react";
import "./Contact.css";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__body">
        <div className="contact__bodyLeft">
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Message</label>
            <textarea placeholder="Leave a message..." />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact__bodyRight">
          <div className="contact__networks">
            <HomeIcon />
            <p>Montreal, QC</p>
          </div>

          <div className="contact__networks">
            <EmailIcon />
            <p>rishab.baisakh@gmail.com</p>
          </div>
          <div className="contact__networks">
            <GitHubIcon />
            <p>https://github.com/RishabBaisakh</p>
          </div>
          <div className="contact__networks">
            <LinkedInIcon />
            <p>linkedin.com/in/rishab-baisakh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
