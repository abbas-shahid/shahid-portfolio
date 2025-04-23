import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Softoo, Islamabad
            </h4>
            <p>
              Backend Development · Microservices · Serverless Architecture ·
              Express.js · TypeScript · MySQL · DynamoDB · Scalable APIs ·
              System Design · Security Implementation
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2023 – Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Backend Specialist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              WeatherWalay, Islamabad
            </h4>
            <p>
              Node.js · Express.js · PostgreSQL · PM2 · GeoServer · Real-Time
              Data Processing · Payment Integration · Mobile API Support ·
              System Optimization
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2021 – Apr 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Node.js Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Orcalo Holdings, Rawalpindi
            </h4>
            <p>
              Backend Engineering · AWS (Lambda, DynamoDB) · Microservices ·
              TypeScript · NoSQL Systems · Agile Collaboration · Scalable
              Systems Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Freelance"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              MERN Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Upwork (Remote)
            </h4>
            <p>
              Full Stack Development · React · Node.js · Express · MongoDB ·
              REST APIs · UI/UX Integration · Third-Party API Integration ·
              Client Collaboration · Agile Delivery
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
