import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__card myCardLayout">
        <div className="projects__cardLeft">
          <h1>Musify</h1>

          <div className="projects__cardDescription">
            <p>
              A music streaming web application built with ReactJS and Spotify
              API.
            </p>
            <p>
              The user can browse songs, artists and albums, and listen to them
              from their own Spotify account.
            </p>
          </div>

          <div className="projects__cardTechnologies">
            <div>
              <img src="my-portfolio-website/technologies/js.png" />
              <img src="my-portfolio-website/technologies/react.png" />
              <img src="my-portfolio-website/technologies/spotify.png" />
            </div>
          </div>
        </div>
        <div className="projects__cardRight">
          <a
            href="https://github.com/RishabBaisakh/musify-mern"
            target="_blank"
          >
            <img src="my-portfolio-website/projects/musify.png" />
          </a>
        </div>
      </div>
      <div className="projects__card myCardLayout">
        <div className="projects__cardLeft">
          <h1>Whatsapp (clone)</h1>
          <div className="projects__cardDescription">
            <p>A chat web application built with ReactJS and NodeJS.</p>
            <p>
              The user can send messages to his/her fam by creating different
              chat rooms consisting of one or more users.
            </p>
          </div>

          <div className="projects__cardTechnologies">
            <div>
              <img src="my-portfolio-website/technologies/js.png" />
              <img src="my-portfolio-website/technologies/react.png" />
              <img src="my-portfolio-website/technologies/node.jfif" />
            </div>
          </div>
        </div>
        <div className="projects__cardRight">
          <a
            href="https://github.com/RishabBaisakh/whatsapp-clone"
            target="_blank"
          >
            <img src="my-portfolio-website/projects/whatsapp.png" />
          </a>
        </div>
      </div>
      <div className="projects__card myCardLayout">
        <div className="projects__cardLeft">
          <h1>Slack (clone)</h1>
          <div className="projects__cardDescription">
            <p>A chat web application built with ReactJS and Firebase.</p>
            <p>
              The user can create workspace and add different users to the
              workspace. The can also create different channels as a segway to
              start chat for specific topics.
            </p>
          </div>

          <div className="projects__cardTechnologies">
            <div>
              <img src="my-portfolio-website/technologies/js.png" />
              <img src="my-portfolio-website/technologies/react.png" />
              <img src="my-portfolio-website/technologies/firebase.png" />
            </div>
          </div>
        </div>
        <div className="projects__cardRight">
          <a href="#">
            <img src="my-portfolio-website/projects/slack.png" />
          </a>
        </div>
      </div>
      <div className="projects__card myCardLayout">
        <div className="projects__cardLeft">
          <h1>Instagram (clone)</h1>
          <div className="projects__cardDescription">
            <p>
              A social networking mobile application built with Android Studio
              and Firebase.
            </p>
            <p>
              The user can follow other users and share posts with text, images
              and videos. The user can also send chat messages to his/her fam.
            </p>
          </div>

          <div className="projects__cardTechnologies">
            <div>
              <img src="my-portfolio-website/technologies/androidStudio.jfif" />
              <img src="my-portfolio-website/technologies/firebase.png" />
            </div>
          </div>
        </div>
        <div className="projects__cardRight">
          <a
            href="https://github.com/RishabBaisakh/slack-clone"
            target="_blank"
          >
            <img src="my-portfolio-website/projects/instagram.png" />
          </a>
        </div>
      </div>
      <div className="projects__card myCardLayout">
        <div className="projects__cardLeft">
          <h1>Hangman</h1>
          <div className="projects__cardDescription">
            <p>A word guessing game built with vanilla JavaScript.</p>
            <p>
              A user have to guess letters and fill in the blanks for the word,
              with seven chances.
            </p>
          </div>

          <div className="projects__cardTechnologies">
            <div>
              <img src="my-portfolio-website/technologies/js.png" />
            </div>
          </div>
        </div>
        <div className="projects__cardRight">
          <a
            href="https://github.com/RishabBaisakh/hangman-for-fun"
            target="_blank"
          >
            <img src="my-portfolio-website/projects/hangman.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
