import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faAws, faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const backendStack = [
  'Node.js',
  'Express.js',
  'NestJS',
  'TypeScript',
  'JavaScript',
  'REST API',
  'System Design',
  'OAuth',
  'JWT',
  'PostgreSQL',
  'MongoDB',
  'DynamoDB',
  'Redis',
  'MySQL',
];

const devOpsStack = [
  'Docker',
  'AWS (Lambda, API Gateway, S3, Cognito)',
  'Azure',
  'Nginx',
  'PM2',
  'CI/CD',
  'Postman',
  'Swagger',
  'Git',
  'Jira',
];

const frontendStack = ['React', 'HTML5', 'CSS3', 'Bootstrap'];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <h3>Backend Engineering</h3>
            <p>
              I design and build scalable, high-performance backend systems
              using Node.js, Express.js, and NestJS. My expertise lies in
              serverless architectures, microservices, API development, and
              secure data handling using modern database systems like
              PostgreSQL, MongoDB, and DynamoDB.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>DevOps & Cloud</h3>
            <p>
              I specialize in deploying and managing scalable applications with
              a strong focus on automation and system reliability. My experience
              includes setting up robust CI/CD pipelines, managing Linux-based
              servers, and configuring Nginx as a reverse proxy for Node.js
              applications. I use Docker for containerization and AWS services
              for cloud-native deployments, ensuring high availability and
              security. I also leverage tools like PM2 for process management
              and virtual machines for flexible infrastructure provisioning and
              testing environments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {devOpsStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              While backend is my core focus, I have experience with frontend
              technologies to build functional and responsive user interfaces
              using React and modern web standards.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
