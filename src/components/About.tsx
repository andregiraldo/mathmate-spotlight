
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
                {/* Cambia esta URL por la URL de tu foto */}
                <img 
                  src="/Foto Math.jpg" 
                  alt="Tu nombre - Profesora de matemáticas" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="animate-fade-left">
            <div className="flex items-center mb-6">
              <h3 className="text-3xl font-serif font-medium">Luz Marina Vergara</h3>
              <div className="ml-4 h-14 w-14 rounded-full overflow-hidden border-2 border-accent">
                <img 
                  src="/lovable-uploads/b4c509f7-5697-4c82-9cb8-06a05f2e68aa.png" 
                  alt="Luz Marina Vergara" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              {/* Personaliza esta biografía con tu información */}
              Profesora de matemáticas con una pasión por hacer que los conceptos complejos sean accesibles para todos. Mi enfoque de enseñanza combina rigor académico con métodos innovadores que inspiran a los estudiantes a desarrollar un amor por las matemáticas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  {/* Actualiza tu formación académica */}
                  <h4 className="font-medium mb-1">Tu Grado Académico</h4>
                  <p className="text-sm text-muted-foreground">Universidad Tecnologica de Pereira</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Award size={24} />
                </div>
                <div>
                  {/* Actualiza tus reconocimientos */}
                  <h4 className="font-medium mb-1">Reconocimiento a la Excelencia</h4>
                  <p className="text-sm text-muted-foreground">Institución, Año</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <BookOpen size={24} />
                </div>
                <div>
                  {/* Actualiza tus publicaciones o materiales */}
                  <h4 className="font-medium mb-1">Tus Publicaciones</h4>
                  <p className="text-sm text-muted-foreground">Detalles sobre tus materiales</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Users size={24} />
                </div>
                <div>
                  {/* Actualiza el número de estudiantes */}
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
