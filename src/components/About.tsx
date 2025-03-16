
import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="mathmate-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            Sobre Mí
          </span>
          <h2 className="section-title">Profesora Dedicada a la Excelencia</h2>
          <p className="section-subtitle">
            Con más de 10 años de experiencia enseñando matemáticas a estudiantes de todos los niveles
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full"></div>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Profesora de matemáticas" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="animate-fade-left">
            <h3 className="text-3xl font-serif font-medium mb-6">María Santiago</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Profesora de matemáticas con una pasión por hacer que los conceptos complejos sean accesibles para todos. Mi enfoque de enseñanza combina rigor académico con métodos innovadores que inspiran a los estudiantes a desarrollar un amor por las matemáticas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Doctorado en Matemáticas</h4>
                  <p className="text-sm text-muted-foreground">Universidad Complutense</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Reconocimiento a la Excelencia</h4>
                  <p className="text-sm text-muted-foreground">Academia Nacional, 2022</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Publicaciones Académicas</h4>
                  <p className="text-sm text-muted-foreground">15+ artículos en revistas especializadas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Estudiantes Guiados</h4>
                  <p className="text-sm text-muted-foreground">500+ a lo largo de mi carrera</p>
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
