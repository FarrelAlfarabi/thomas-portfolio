import React from 'react';

export default function About({ data }) {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-text">{data.about}</p>
      </div>
    </section>
  );
}
