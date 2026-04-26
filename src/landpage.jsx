import "./style.css";

function Landpage() {
  return (
    <div className="layout">
      <div className="panel hero">
        <div className="corner corner-tl"></div>
        <div className="corner corner-br"></div>

        <div className="hero-top">
          <span className="dot"></span>
          <h1 className="hero-name">Marck Justine Guiaz</h1>
          <p className="hero-title">Software Engineer</p>
          <p className="hero-bio">
            Computer Engineering graduate with experience in React.js, C#,
            ASP.NET Core, and Python. Built real products through freelance and
            OJT.
          </p>
          <div className="hero-links">
            <a href="mailto:mjustineguiaz@gmail.com" className="link-item">
              mjustineguiaz@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/marck-justine-guiaz/"
              className="link-item"
            >
              linkedin.com/in/marck-justineguiaz
            </a>

            <a href="https://github.com/marckguiaz" className="link-item">
              github.com/marckguiaz
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="status-badge">
            <span className="status-dot"></span>
            Open to Opportunities
          </div>
        </div>
      </div>

      <div className="panel skill-panel">
        <div className="panel skills-panel">
          <p className="panel-label">Skills</p>
          <div className="skills-grid">
            <div className="skill-tag primary">React.js</div>
            <div className="skill-tag primary">C#</div>
            <div className="skill-tag primary">ASP.NET Core</div>
            <div className="skill-tag primary">Python</div>
            <div className="skill-tag">JavaScript</div>
            <div className="skill-tag">HTML / CSS</div>
            <div className="skill-tag">MySQL</div>
            <div className="skill-tag">Git / GitHub</div>
            <div className="skill-tag">Docker</div>
            <div className="skill-tag">Postman</div>
            <div className="skill-tag">Linux</div>
            <div className="skill-tag">TCP/IP</div>
          </div>
        </div>
      </div>

      <div className="panel proj-panel">
        <div className="panel proj-panel">
          <p className="panel-label">Projects</p>

          <div className="proj-card">
            <div className="proj-header">
              <span className="proj-name">UniAR</span>
              <span className="proj-tag">Capstone</span>
            </div>
            <p className="proj-desc">
              AR-based uniform fitting kiosk using live camera and computer
              vision. Real-time overlay of digital uniforms on user's body.
            </p>
            <div className="proj-stack">
              <span className="stack-chip">Python</span>
              <span className="stack-chip">OpenCV</span>
              <span className="stack-chip">ArUco</span>
              <span className="stack-chip">Pygame</span>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-header">
              <span className="proj-name">Clinical Web App</span>
              <span className="proj-tag">Freelance</span>
            </div>
            <p className="proj-desc">
              Feature development and QA testing on a React.js clinical web
              application. UAT, defect documentation, cross-environment
              validation.
            </p>
            <div className="proj-stack">
              <span className="stack-chip">React.js</span>
              <span className="stack-chip">QA</span>
              <span className="stack-chip">UAT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="panel exp-panel">
        <div className="panel exp-panel">
          <p className="panel-label">Experience</p>

          <div className="exp-item">
            <div className="exp-header">
              <span className="exp-role">Frontend Developer</span>
              <span className="exp-date">Nov 2025 – Apr 2026</span>
            </div>
            <p className="exp-company">Freelance · Project-Based</p>
            <p className="exp-desc">
              Built features for clinical web app in React.js. Performed
              end-to-end QA, UAT, defect documentation, and cross-environment
              validation.
            </p>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <span className="exp-role">Backend Developer</span>
              <span className="exp-date">Mar – Jun 2025</span>
            </div>
            <p className="exp-company">Monad Solutions Corp · OJT</p>
            <p className="exp-desc">
              Built RESTful APIs with ASP.NET Core + C#. MySQL, Postman, Docker,
              Git documentation.
            </p>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <span className="exp-role">BS Computer Engineering</span>
              <span className="exp-date">2025</span>
            </div>
            <p className="exp-company">Lyceum of Alabang</p>
            <p className="exp-desc">
              Graduated with focus on hardware, networking, and software
              systems.
            </p>
          </div>
        </div>
      </div>

      <div className="panel contact-panel">
        <div className="panel contact-panel">
          <p className="panel-label">Contact</p>
          <div className="contact-grid">
            <a href="mailto:mjustineguiaz@gmail.com" className="contact-card">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                width="20"
                height="20"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">mjustineguiaz@gmail.com</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/marck-justineguiaz-a130b0242"
              className="contact-card"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                width="20"
                height="20"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">marck-justineguiaz</p>
              </div>
            </a>
            <a href="https://github.com/marckguiaz" className="contact-card">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                width="20"
                height="20"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <div>
                <p className="contact-label">GitHub</p>
                <p className="contact-value">github.com/marckguiaz</p>
              </div>
            </a>
            <a href="tel:09294793110" className="contact-card">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                width="20"
                height="20"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">0929-479-3110</p>
              </div>
            </a>
          </div>
          <div className="location-tag">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              width="12"
              height="12"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Muntinlupa, Metro Manila, PH
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landpage;
