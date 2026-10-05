import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
