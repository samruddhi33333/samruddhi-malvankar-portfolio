// About.jsx
import React from 'react';
import './About.css';
import ProfilePic from '../assets/Profile.png';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I'm a Full Stack Developer with a strong foundation in HTML, CSS,
          JavaScript, Bootstrap, Tailwind CSS, SQL, MongoDB, Node.js,
          Express.js, ReactJS and PHP. I enjoy solving
          real-world problems and developing user-friendly applications that
          create a seamless experience.
        </p>
        <p>
          <span>
            Passionate about learning new technologies and always ready to take
            on exciting challenges.
          </span>
        </p>
      </div>
      <div className="about-image">
        <img src={ProfilePic} alt="Samruddhi Malvankar" />
      </div>
    </div>
  );
};

export default About;
