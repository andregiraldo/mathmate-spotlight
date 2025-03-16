
import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-12">
        <div className="mathmate-container">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
              Sobre Mí
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Conóceme Mejor</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mi trayectoria, filosofía educativa y pasión por las matemáticas
            </p>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
