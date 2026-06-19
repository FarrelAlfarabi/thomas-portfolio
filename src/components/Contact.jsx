import React from 'react';

export default function Contact({ data }) {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p><strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${data.phone}`}>{data.phone}</a></p>
          <p><strong>LinkedIn:</strong> <a href={data.linkedin} target="_blank" rel="noopener noreferrer">Connect with me</a></p>
        </div>
      </div>
    </section>
  );
}
