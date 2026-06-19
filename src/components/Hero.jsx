import React from 'react';

export default function Hero({ data }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{data.name}</h1>
        <h2 className="hero-headline">{data.headline}</h2>
        <p className="hero-tagline">{data.tagline}</p>
        <a href="#projects" className="btn-primary">View My Work</a>
      </div>
      <div className="hero-image-container">
        {/* Replace with actual profile image */}
        <img 
          src="https://placehold.co/400x400/1a1a1a/ffffff?text=Thomas+Putra" 
          alt={data.name} 
          className="hero-image" 
        />
      </div>
    </section>
  );
}
