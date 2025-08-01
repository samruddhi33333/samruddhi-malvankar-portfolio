import './HeroSection.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="text">
          <h1>Hello, I’m <span>Samruddhi Malvankar</span></h1>
          <h2>Full Stack Developer</h2>
          <p>Transforming ideas into full-stack solutions</p>
          <div className="buttons">
            <a
  href="https://drive.google.com/file/d/1Kv-wxNqELeEEliNh_s79H8-QJfLhfCTq/view?usp=drive_link"
  className="btn"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Resume
</a>

            <a href="#contact" className="btn secondary">Let’s Connect</a>
          </div>

          {/* Social icons */}
          <div className="social-icons">
            <a href="https://github.com/samruddhi33333" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/samruddhi-malvankar-781823262/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
