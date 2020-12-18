import React from "react";
import "./Work.css";

function Work() {
  return (
    <div className="work">
      <div className="work__projectCard">
        <div className="work__projectCardLeft">
          <h5>Slack clone</h5>
          <p>A Chat application built with ReactJS and firebase.</p>
        </div>
        <div className="work__projectCardRight">
          <a href="https://github.com/RishabBaisakh/slack-clone">Visit</a>
        </div>
      </div>
      <div className="work__projectCard">
        <div className="work__projectCardLeft">
          <h5>Musify</h5>
          <p>A music streaming application built with MERN stack.</p>
        </div>
        <div className="work__projectCardRight">
          <a href="https://github.com/RishabBaisakh/musify-mern">Visit</a>
        </div>
      </div>
      <div className="work__projectCard">
        <div className="work__projectCardLeft">
          <h5>Whatsapp clone</h5>
          <p>A chat application built with MERN stack.</p>
        </div>

        <div className="work__projectCardRight">
          <a href="https://github.com/RishabBaisakh/whatsapp-clone">Visit</a>
        </div>
      </div>
    </div>
  );
}

export default Work;
