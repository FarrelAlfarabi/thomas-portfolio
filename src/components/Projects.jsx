import React from 'react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Professional Experience & Case Studies</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="star-method">
                <p><strong>Situation:</strong> {project.situation}</p>
                <p><strong>Task:</strong> {project.task}</p>
                <p><strong>Action:</strong> {project.action}</p>
                <p><strong>Result:</strong> {project.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
