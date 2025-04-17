
import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Modern background with gradients and shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-accent/40 to-primary/30"></div>
        
        {/* Animated circle decorations */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/20 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <div className="mathmate-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent mb-6 backdrop-blur-sm border border-accent/20">
            Sobre Mí
          </span>
          <h2 className="section-title text-gradient">Profesora Dedicada a la Excelencia</h2>
          <p className="section-subtitle">
            Con más de 10 años de experiencia enseñando matemáticas a estudiantes de todos los niveles
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-md"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-md"></div>
              
              {/* Main image with modern frame */}
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <img 
                  src="/lovable-uploads/b4c509f7-5697-4c82-9cb8-06a05f2e68aa.png" 
                  alt="Tu nombre - Profesora de matemáticas" 
                  className="w-full h-full object-cover"
                />
                
                {/* Highlight accent on image */}
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/40 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-left">
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <h3 className="text-3xl font-serif font-medium">Luz Marina Vergara</h3>
                <div className="ml-4 h-14 w-14 rounded-full overflow-hidden border-2 border-accent shadow-lg">
                  <img 
                    src="/lovable-uploads/b4c509f7-5697-4c82-9cb8-06a05f2e68aa.png" 
                    alt="Luz Marina Vergara" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                Profesora de matemáticas con una pasión por hacer que los conceptos complejos sean accesibles para todos. Mi enfoque de enseñanza combina rigor académico con métodos innovadores que inspiran a los estudiantes a desarrollar un amor por las matemáticas.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-accent to-primary/70 p-3 rounded-xl text-foreground shadow-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Tu Grado Académico</h4>
                    <p className="text-sm text-muted-foreground">Universidad Tecnologica de Pereira</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-accent to-primary/70 p-3 rounded-xl text-foreground shadow-lg">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Estudiantes Guiados</h4>
                    <p className="text-sm text-muted-foreground">900+ a lo largo de mi carrera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
