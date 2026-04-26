import { useEffect, useState } from "react";

const fallbackData = {
  profile: {
    name: "Pratik",
    role: "React.js and Node.js Developer",
    intro:
      "I build modern web experiences with clean interfaces, practical backend systems, and a strong focus on user experience.",
    location: "India",
    email: "your-email@example.com",
    tagline: "Building useful products with thoughtful design and reliable code."
  },
  stats: [
    { label: "Projects", value: "06+" },
    { label: "Tech Stack", value: "MERN" },
    { label: "Focus", value: "Frontend + API" }
  ],
  about: {
    title: "About Me",
    description:
      "I am a developer who enjoys creating websites that are visually strong, responsive, and easy to use. I work with React.js for the frontend and Node.js for backend services, and I like turning ideas into polished web products."
  },
  skills: [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "REST APIs",
    "GitHub"
  ],
  projects: [
    {
      title: "Portfolio Website",
      summary:
        "A personal website to present my projects, technical skills, and contact information in one place.",
      stack: ["React", "CSS", "Node.js"],
      link: "#"
    },
    {
      title: "E-Commerce UI",
      summary:
        "A modern shopping interface with product cards, filters, and a responsive layout.",
      stack: ["React", "JavaScript", "CSS"],
      link: "#"
    },
    {
      title: "Task Manager API",
      summary:
        "A backend API for managing personal tasks with CRUD operations and organized routes.",
      stack: ["Node.js", "Express", "REST API"],
      link: "#"
    }
  ],
  contact: {
    title: "Let's Work Together",
    text:
      "If you want a portfolio, business website, or web app built with React and Node.js, feel free to reach out.",
    email: "your-email@example.com"
  }
};

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

function App() {
  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    let isMounted = true;

    async function loadPortfolio() {
      try {
        const response = await fetch(`${apiUrl}/api/portfolio`);

        if (!response.ok) {
          throw new Error("Unable to load portfolio data");
        }

        const payload = await response.json();

        if (isMounted) {
          setData(payload);
        }
      } catch (error) {
        console.warn("Using fallback portfolio data.", error);
      }
    }

    loadPortfolio();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Pratik.dev</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{data.profile.role}</p>
            <h1>{data.profile.name}</h1>
            <p className="hero-tagline">{data.profile.tagline}</p>
            <p className="hero-intro">{data.profile.intro}</p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View My Work
              </a>
              <a className="button secondary" href={`mailto:${data.profile.email}`}>
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <p className="card-title">Quick Snapshot</p>
            <ul className="stat-grid">
              {data.stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
            <p className="mini-note">Based in {data.profile.location}</p>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>{data.about.title}</h2>
          </div>
          <p className="section-text">{data.about.description}</p>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Technologies I Use</h2>
          </div>
          <div className="skill-list">
            {data.skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected Work</h2>
          </div>

          <div className="project-grid">
            {data.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Explore project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-panel" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>{data.contact.title}</h2>
            <p className="section-text">{data.contact.text}</p>
          </div>

          <a className="button primary" href={`mailto:${data.contact.email}`}>
            {data.contact.email}
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;

