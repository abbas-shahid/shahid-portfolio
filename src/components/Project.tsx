import React from 'react';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import nursery from '../assets/images/nursery.png';
import ww_mobile from '../assets/images/ww-mobile.png';
import data_portal from '../assets/images/data-portal.png';
import pmd from '../assets/images/pmd.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    // <div className="projects-container" id="projects">
    //     <h1>Personal Projects</h1>
    //     <div className="projects-grid">
    //         <div className="project">
    //             <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
    //             <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
    //         </div>
    //         <div className="project">
    //             <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
    //             <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
    //         </div>
    //         <div className="project">
    //             <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
    //             <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
    //         </div>
    //         <div className="project">
    //             <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
    //             <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
    //         </div>
    //         <div className="project">
    //             <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
    //             <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
    //         </div>
    //         <div className="project">
    //             <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
    //             <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
    //         </div>
    //         <div className="project">
    //             <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
    //             <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
    //         </div>
    //         <div className="project">
    //             <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
    //             <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
    //         </div>
    //         <div className="project">
    //             <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
    //             <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
    //         </div>
    //         <div className="project">
    //             <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
    //             <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
    //             <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
    //         </div>
    //     </div>
    // </div>

    <div
      id="projects"
      style={{
        padding: '60px 20px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '40px',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Projects
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px',
          padding: '0 10px',
        }}
      >
        {[
          {
            title: 'The Nursery App',
            description:
              'Developed a SaaS-based nursery management system using Node.js, Express, MySQL, and DynamoDB. Includes role-based access and integrates with Xero and QuickBooks.',
            image: nursery,
          },
          {
            title: 'WeatherWalay Data Portal',
            description:
              'Built a B2B weather data platform using Node.js, PostgreSQL, PostGIS, MongoDB, and PM2. Enables subscription payments and real-time analytics across Pakistan.',
            image: data_portal,
          },
          {
            title: 'WeatherWalay Mobile App',
            description:
              'Engineered backend for real-time weather forecast app using Express, Redis, MongoDB, and weather APIs. Integrated SIM-based subscriptions & notification system.',
            image: ww_mobile,
          },
          {
            title: 'PMD GIS Weather Module',
            description:
              'Developed an interactive GIS weather dashboard for Pakistan Meteorological Department using Node.js, PostgreSQL, PostGIS, and GeoServer.',
            image: pmd,
          },
          {
            title: 'Freelance MERN Projects (Upwork)',
            description:
              'Delivered full-stack MERN apps on Upwork. Specialized in scalable APIs, MongoDB schemas, and responsive React UIs for e-commerce and CRM clients.',
            image: mock05,
          },
        ].map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              textAlign: 'left',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'translateY(-8px)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = 'translateY(0)')
            }
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <h2
              style={{
                marginTop: '15px',
                fontSize: '1.3rem',
                color: '#222',
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#555',
                marginTop: '10px',
              }}
            >
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
