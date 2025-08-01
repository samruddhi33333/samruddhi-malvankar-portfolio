import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page" id="projects">
      <h2 className="projects-heading">Projects</h2>

      <ul className="project-list">
        <li className="project-item">
          <strong>Electricity Billing System</strong> <br />
          <em>Java Core/Swing (NetBeans)</em><br />
          <ul>
            <li>Software-based application for computerizing electricity billing.</li>
            <li>Calculates units consumed and bill amount within a time period.</li>
            <li>Makes billing easy, accessible, and effective for consumers.</li>
          </ul>
        </li>

        <li className="project-item">
          <strong>Client Management System</strong> <br />
          <em>PHP, JavaScript</em><br />
          <ul>
            <li>Customer relationship management system to help businesses grow.</li>
            <li>Tracks leads, deals, and customer interactions.</li>
            <li>Automates tasks for sales reps and support teams.</li>
          </ul>
        </li>

        <li className="project-item">
          <strong>Hospital Management System</strong> <br />
          <em>Full Stack Web App | MERN Stack</em><br />
          <ul>
            <li>Used MongoDB, Express.js, React.js, Node.js.</li>
            <li>Interactive frontend with dynamic routing and role-based dashboards.</li>
            <li>RESTful APIs for appointments, billing, records, and CRUD operations.</li>
          </ul>
        </li>

        <li className="project-item">
          <strong>Smart Contact Manager</strong> <br />
          <em>Spring Boot, Thymeleaf, MySQL</em><br />
          <ul>
            <li>CRUD-enabled contact management system.</li>
            <li>Includes authentication, email, themes, and dashboard features.</li>
          </ul>
        </li>

        <li className="project-item">
          <strong>Real-Time Chat App</strong> <br />
          <em>React, Node.js, Socket.IO</em><br />
          <ul>
            <li>WhatsApp-style chat UI with real-time messaging.</li>
            <li>Built using WebSockets and REST API integration.</li>
          </ul>
        </li>

        <li className="project-item">
          <strong>Travel Booking System</strong> <br />
          <em>MERN Stack + GraphQL</em><br />
          <ul>
            <li>Allows users to search and book trips with authentication.</li>
            <li>Uses Apollo Client and GraphQL for seamless data fetching.</li>
          </ul>
        </li>

        
      </ul>
    </div>
  );
}

export default Projects;
