import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbwOLr3lbPcMTsTjPCXJfZuA43sZT8_D6bQ&s"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/shahidabbas37"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://pk.linkedin.com/in/shahid-abbas-676191173"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Shahid Abbas</h1>
          <p>Backend Engineer | Node.js Specialist | MERN STACK</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/shahidabbas37"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://pk.linkedin.com/in/shahid-abbas-676191173"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
