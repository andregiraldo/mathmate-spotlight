
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-accent/10 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 rounded-full bg-primary/10 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="mathmate-container relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            Profesora de Matemáticas
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Aprende Matemáticas de <span className="text-accent">Manera Efectiva</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transformando la manera en que los estudiantes entienden y disfrutan de las matemáticas, con métodos de enseñanza personalizados y efectivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Ver Cursos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm transition-colors hover:bg-accent/10"
            >
              Contactarme
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative math symbols */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="flex justify-around w-full">
          <span className="text-5xl floating-symbol" style={{ animationDelay: '0s' }}>π</span>
          <span className="text-5xl floating-symbol" style={{ animationDelay: '1s' }}>∑</span>
          <span className="text-5xl floating-symbol" style={{ animationDelay: '2s' }}>∫</span>
          <span className="text-5xl floating-symbol" style={{ animationDelay: '3s' }}>√</span>
          <span className="text-5xl floating-symbol" style={{ animationDelay: '4s' }}>±</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
