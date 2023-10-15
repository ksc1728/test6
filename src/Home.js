import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop, faBrain } from "@fortawesome/free-solid-svg-icons";
import './style.css';

import javaImage from './images/java.png';
import pythonImage from './images/python.png';
import cssImage from './images/css.png';
import javascriptImage from './images/javascript.png';
import phpImage from './images/php.jpeg';
import htmlImage from './images/html.jpg';

function Home() {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <div className="App">
      <header>
        <h1>K. Srichandana</h1>
        <p>Web Developer</p>
      </header>

      <nav>
        <ul>
          <li onClick={() => scrollToSection(home)} className="link">Home</li>
          <li onClick={() => scrollToSection(about)} className="link">About</li>
          <li onClick={() => scrollToSection(skills)} className="link">Skills</li>
          <li onClick={() => scrollToSection(projects)} className="link">Projects</li>
        </ul>
      </nav>

      <section ref={home} className="home">
        <h2>Hi, I'm K. Srichandana</h2>
        <p>Welcome to my portfolio website. <a href="#" target="_blank" rel="noreferrer">My resume link</a></p>
        <p>Currently engaged in MERN fullstack internship by <a href="https://www.ethnus.com" target="_blank">ethnus</a></p>
      </section>

      <section ref={about} className="about">
        <h2>About Me</h2>
        <p>I'm a web developer looking for new and exciting projects in this field.</p>
      </section>

      <section ref={skills} className="skills">
        <h2>My Skills</h2>
        <div className="skill">
          <div>
            <img src={javaImage} alt="Java" className="icon" />
            <img src={pythonImage} alt="Python" className="icon" />
            <img src={javascriptImage} alt="JavaScript" className="icon" />
          </div>
          <p>Programming languages: Java, Python, JavaScript.</p>
        </div>
        <div className="skill">
          <div>
            <img src={htmlImage} alt="HTML" className="icon" />
            <img src={cssImage} alt="CSS" className="icon" />
            <img src={phpImage} alt="PHP" className="icon" />
          </div>
          <p>Web technologies: HTML, CSS, PHP.</p>
        </div>
        {/* Add similar code for other skills using their respective image imports */}
      </section>

      <section ref={projects} className="projects">
        <h2>Projects</h2>
        <p><a href="#" target="_blank" rel="noreferrer">My GitHub link</a></p>
        <ul>
          <li>Breast cancer prediction using Machine Learning models.</li>
          <li>Stress level detection for fishes.</li>
          <li>Movie genre prediction.</li>
          <li>Reviewed paper on cloud computing and Artificial intelligence in health-related fields.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
