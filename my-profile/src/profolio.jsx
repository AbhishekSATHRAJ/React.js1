import React from "react";
import './profolio.css'
function Profolio(){
    return(
     <>
       {/* <!-- Navbar --> */}
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="skk">Abhishek Sathraj</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  {/* <!-- Hero Section --> */}
  <div class="hero">
    <div class="hero-content">
      <h1>Hi, I'm Abhishek Sathraj</h1>
      <p>Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
      <button>Contact Me</button>
    </div>
  </div>

  {/* <!-- About Section --> */}
  <div id="about">
    <h2>About Me</h2>
    <p>
      I'm a passionate developer with experience in creating dynamic, scalable web applications. I love learning new technologies and solving complex problems.
    </p>
  </div>

  {/* <!-- Skills Section --> */}
  <div id="skills">
    <h2>Skills</h2>
    <div class="skills-list">
      <div class="skill-item">
        <h3>JavaScript</h3>
        <p>Building interactive web apps with advanced logic and functionality.</p>
        <div class="progress-bar">
          <div class="progress" style={{width: "90%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>React</h3>
        <p>Creating modern, dynamic, and responsive front-end interfaces.</p>
        <div class="progress-bar">
          <div class="progress" style={{width: "85%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>Node.js</h3>
        <p>Building efficient, scalable, and fast server-side applications.</p>
        <div class="progress-bar">
          <div class="progress" style={{width: "80%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>MongoDB</h3>
        <p>Developing scalable and flexible database solutions.</p>
        <div class="progress-bar">
          <div class="progress" style={{width: "75%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>Python</h3>
        <p>Versatile programming language for data analysis, AI, and web development.</p>
        <div class="progress-bar">
          <div class="progress"  style={{width: "70%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>HTML & CSS</h3>
        <p>Creating structured, semantic web pages with modern styling.</p>
        <div class="progress-bar">
          <div class="progress"  style={{width: "95%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>Git & GitHub</h3>
        <p>Version control and collaboration on open-source and private projects.</p>
        <div class="progress-bar">
          <div class="progress" style={{width: "85%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>UI/UX Design</h3>
        <p>Designing user-friendly interfaces with a focus on user experience.</p>
        <div class="progress-bar">
          <div class="progress" style={{width: "80%"}}></div>
        </div>
      </div>
      {/* <!-- Additional Skill Entries --> */}
      <div class="skill-item">
        <h3>SQL</h3>
        <p>Efficiently querying and managing relational databases.</p>
        <div class="progress-bar">
          <div class="progress"  style={{width: "75%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>TypeScript</h3>
        <p>Enhancing JavaScript with type safety and improved tooling.</p>
        <div class="progress-bar">
          <div class="progress"style={{width: "70%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>Docker</h3>
        <p>Containerizing applications for consistency across development and production.</p>
        <div class="progress-bar">
          <div class="progress"style={{width: "65%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>AWS</h3>
        <p>Deploying and managing applications on Amazon Web Services.</p>
        <div class="progress-bar">
          <div class="progress"  style={{width: "60%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>RESTful APIs</h3>
        <p>Designing and implementing robust APIs for web applications.</p>
        <div class="progress-bar">
          <div class="progress"  style={{width: "80%"}}></div>
        </div>
      </div>
      <div class="skill-item">
        <h3>GraphQL</h3>
        <p>Building flexible and efficient data queries for modern web applications.</p>
        <div class="progress-bar">
          <div class="progress"  style={{width: "70%"}}></div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Projects Section --> */}
  <div id="projects">
    <h2>Projects</h2>
    <div class="project-item">
      <h3>Project One</h3>
      <p>A full-stack web application with React and Node.js</p>
      <a href="ss">View Project</a>
    </div>
    <div class="project-item">
      <h3>Project Two</h3>
      <p>Interactive front-end dashboard with React</p>
      <a href="ss">View Project</a>
    </div>
    <div class="project-item">
      <h3>Project Three</h3>
      <p>Backend API built with Express and MongoDB</p>
      <a href="ss">View Project</a>
    </div>
  </div>

  {/* <!-- Contact Section --> */}
  <div id="contact">
    <h2>Get in Touch</h2>
    <button>Email Me</button>
  </div>
     </>
    )
}
export default Profolio;