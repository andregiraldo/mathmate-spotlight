import React from 'react';
import { ArrowRight, Cloud, ShieldCheck, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-background to-background/90"></div>
        
        {/* Animated lines */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,0 C300,30 600,60 1200,0 L1200,120 L0,120 Z" 
              className="fill-primary/10"
            ></path>
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-0 w-full h-32 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 C600,90 900,30 1200,60 L1200,120 L0,120 Z" 
              className="fill-primary/10"
            ></path>
          </svg>
        </div>
      </div>
      
      <div className="mathmate-container relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-up">
          <div className="flex items-center justify-center mb-16">
            <div className="relative">
              <div className="flex items-center justify-center gap-8">
                <div className="tech-circle glow-effect w-48 h-48 md:w-64 md:h-64 border-4 border-primary/30">
                  <img src="/lovable-uploads/cartoon-math-4.png" alt="AI Code" className="w-full h-full object-cover" />
                </div>
                <div className="tech-circle glow-effect w-60 h-60 md:w-80 md:h-80 border-4 border-primary/30 z-10">
                  <img src="/lovable-uploads/75e6df88-7d5d-44d5-861b-5ce0b13f43b4.png" alt="AI Technology" className="w-full h-full object-cover" />
                </div>
                <div className="tech-circle glow-effect w-48 h-48 md:w-64 md:h-64 border-4 border-primary/30">
                  <img src="/lovable-uploads/cartoon-math-5.png" alt="AI Development" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <span className="text-xl text-primary/80">Profesora de Matemáticas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Aprende<br/>
            Matemáticas de<br/>
            <span className="text-primary">Manera Efectiva</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Desarrolla las habilidades matemáticas esenciales para las carreras tecnológicas del futuro en inteligencia artificial, ciencia de datos y desarrollo de software.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="tech-button flex items-center justify-center gap-3">
              <Code size={20} className="text-primary" />
              Desarrollo de Software
            </button>
            <button className="tech-button flex items-center justify-center gap-3">
              <ShieldCheck size={20} className="text-primary" />
              Ciencia de Datos
            </button>
            <button className="tech-button flex items-center justify-center gap-3">
              <Cloud size={20} className="text-primary" />
              Inteligencia Artificial
            </button>
          </div>
          
          <div className="mt-24 flex items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              <span className="ml-2">contacto@matematica-ai.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.384,17.752a2.108,2.108,0,0,1-1.94,1.932c-1.73.253-3.464.38-5.2.38a34.257,34.257,0,0,1-5.2-.38,2.108,2.108,0,0,1-1.94-1.932A22.934,22.934,0,0,1,7.0,15.5a22.934,22.934,0,0,1,.1-2.248,2.108,2.108,0,0,1,1.94-1.932c1.73-.253,3.464-.38,5.2-.38a34.257,34.257,0,0,1,5.2.38,2.108,2.108,0,0,1,1.94,1.932A22.934,22.934,0,0,1,21.5,15.5,22.934,22.934,0,0,1,21.384,17.752ZM9.6,13.8l4.02,1.7L9.6,17.192Z"/>
              </svg>
              <span className="ml-2">www.matematica-ai.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
