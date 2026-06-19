import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioData } from './data';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Projects projects={portfolioData.projects} />
        <Contact data={portfolioData} />
      </main>
    </div>
  );
}
