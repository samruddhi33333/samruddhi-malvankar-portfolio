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



        
      </ul>
    </div>
  );
}

export default Projects;
