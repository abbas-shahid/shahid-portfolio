import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f9fafb', // Matches Projects background
        color: '#1f2937', // Matches Projects text color
        padding: '40px 20px',
        textAlign: 'center',
        borderTop: '1px solid #e5e7eb',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Social Icons */}
        <div
          style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
          }}
        >
          <a
            href="https://github.com/abbas-shahid"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#1f2937',
              fontSize: '2rem',
              transition: 'color 0.3s ease',
              textDecoration: 'none',
            }}
            aria-label="GitHub Profile"
          >
            <GitHubIcon fontSize="inherit" />
          </a>
          <a
            href="https://pk.linkedin.com/in/shahid-abbas-676191173"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#1f2937',
              fontSize: '2rem',
              transition: 'color 0.3s ease',
              textDecoration: 'none',
            }}
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon fontSize="inherit" />
          </a>
          <a
            href="mailto:shahidabbas0315@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#1f2937',
              fontSize: '2rem',
              transition: 'color 0.3s ease',
              textDecoration: 'none',
            }}
            aria-label="Email Shahid Abbas"
          >
            <EmailIcon fontSize="inherit" />
          </a>
        </div>

        {/* Description */}
        <div>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#4b5563',
              margin: '0 0 10px',
              lineHeight: '1.5',
            }}
          >
            A portfolio showcasing my expertise in{' '}
            <strong>Backend Development</strong> with Node.js, Express.js, and
            serverless architectures by{' '}
            <a
              href="https://github.com/abbas-shahid"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#2563eb',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              Shahid Abbas
            </a>
            .
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#6b7280',
              fontStyle: 'italic',
              margin: '0 0 20px',
            }}
          >
            Passionate about building scalable APIs, optimizing databases, and
            ensuring robust system performance.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1ZZIyTghPJmFGYyXdeDrg6Jo1o4CjC03V"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'background-color 0.3s ease',
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
