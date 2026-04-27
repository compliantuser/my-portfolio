import ContactForm from "./components/ContactForm";
import portfolio from "../lib/portfolio";

export default function HomePage() {
  const data = portfolio;

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Pratik.dev</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#resume">Resume</a>
          <a href="#contact">Contact Me</a>
          <a href="#about">About Me</a>
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
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Quick portfolio snapshot">
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
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>{data.about.title}</h2>
          </div>
          <p className="section-text">{data.about.description}</p>
        </section>

        <section className="section resume-section" id="resume">
          <div className="section-heading">
            <p className="eyebrow">Resume</p>
            <h2>{data.resume.title}</h2>
          </div>
          <p className="section-text">{data.resume.summary}</p>
          <ul className="resume-list">
            {data.resume.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
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
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>{data.contact.title}</h2>
            <p className="section-text">{data.contact.text}</p>
            <a className="email-link" href={`mailto:${data.contact.email}`}>
              {data.contact.email}
            </a>
          </div>

          <ContactForm />
        </section>
      </main>
    </div>
  );
}
