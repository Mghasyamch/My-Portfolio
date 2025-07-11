// Vite + React Portfolio Starter
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app dark-theme">
      <nav className="navbar">
        <div className="logo">Welcome to my-<span className="highlight">Portfolio</span></div>
      <ul className="nav-links">
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href ="#experience">Work Experience</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#resume">Resume</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1> Siva Naga Megha <span className="highlight">Syam Chavali</span></h1>
          <p>Entry-level Developer. Creative Learner. Problem Solver.</p>
        </div>
        <div className="hero-image">
          <img src="/megha.jpg" alt="Megha Syam Chavali" />
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>I am a passionate software professional with 1+ years of experience in software development. My expertise includes Java, SQL, Javascript, React JS, HTML and CSS. Currently exploring Opportunities in both frontend and backend development.</p>
      </section>
      
      <section id="skills"className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        <p>Java</p> 
        <p>SQL</p>
        <p>React Js</p>
        <p>Java Script</p>
        <p>HTML</p>
        <p>CSS</p>
      </ul>
      </section>
  

      <section id="experience" className="experience">
  <h2>Professional Experience</h2>

  <div className="experience-item">
    <h3>Trainee Associate Software Engineer – Mphasis, Pune</h3>
    <p className="duration">Nov 2023 – Apr 2024</p>
    <ul>
      <li>Assisted in Backend and gained proficiency in Java.</li>
      <li>Designed and developed a dynamic car rental demo project with intuitive UI and seamless interactions.</li>
      <li>Knowledge of SDLC and familiar with working in Agile methodology.</li>
      <li>Implemented advanced features to enhance user experience and optimize functionality.</li>
      <li>Applied frontend development frameworks in real-world scenarios.</li>
    </ul>
    <p><strong>Tools & Technologies Used:</strong> Java, SQL, React JS, Javascript, HTML, CSS, SDLC</p>
  </div>

  <div className="experience-item">
    <h3>Associate Engineer – Tech Mahindra Cerium Systems, Visakhapatnam</h3>
    <p className="duration">Aug 2022 – Mar 2023</p>
    <ul>
      <li>Possess decent knowledge of backend development using Java.</li>
      <li>Worked in the semiconductor industry, focusing on digital electronics and hardware description languages.</li>
      <li>Developed expertise in Verilog and System Verilog for digital circuit design and verification.</li>
    </ul>
    <p><strong>Tools & Technologies Used:</strong> Java, Verilog, System Verilog, Digital Electronics</p>
  </div>

  </section>

      <section id= "projects"className="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Portfolio Website:</strong> This site, built using React and CSS</li>
          <li><strong>Java + SQL CRUD App:</strong> A basic employee management system</li>
          <li><strong>Manual Test Scenarios:</strong> Documented use-case testing scenarios for a sample app</li>
        </ul>

      </section>

      <section id="resume"className="resume">
        <h2>Resume</h2>
       <a href="/Megha-Syam-Resume.pdf" download className="download-btn">
       📄 Download Resume
      </a>

      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: meghasyamchavali@gmail.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/yourgithub">github.com/yourgithub</a></p>
      </section>
    </div>
  );
}

export default App;
