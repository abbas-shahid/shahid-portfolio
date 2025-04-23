import React from 'react';
import { Box, Button, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  return (
    <div id="contact" style={{ padding: '2rem', textAlign: 'center' }}>
      <div
        className="items-container"
        style={{ margin: '0 auto', maxWidth: '800px' }}
      >
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Got a project waiting to be realized? Let's collaborate and make it
            happen! You can reach me through email or WhatsApp.
          </p>

          <Box
            className="contact-methods"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            {/* Email Contact Button */}
            <Tooltip title="Send an Email" arrow>
              <Button
                variant="contained"
                color="primary"
                startIcon={<EmailIcon />}
                href="mailto:sa.official37@gmail.com" // Replace with your email
                target="_blank"
                rel="noreferrer"
                sx={{
                  fontSize: '1rem',
                  padding: '10px 20px',
                  textTransform: 'none',
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#1565c0',
                  },
                }}
              >
                Email Me
              </Button>
            </Tooltip>

            {/* WhatsApp Contact Button */}
            <Tooltip title="Message on WhatsApp" arrow>
              <Button
                variant="contained"
                color="success"
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/+923159753252" // Replace with your WhatsApp number
                target="_blank"
                rel="noreferrer"
                sx={{
                  fontSize: '1rem',
                  padding: '10px 20px',
                  textTransform: 'none',
                  backgroundColor: '#25d366',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#128c7e',
                  },
                }}
              >
                WhatsApp Me
              </Button>
            </Tooltip>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
