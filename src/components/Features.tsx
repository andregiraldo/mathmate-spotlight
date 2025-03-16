
import React from 'react';
import { BookOpen, Users, Clock, PenTool, Video, Award } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-accent" />,
    title: "Material Didáctico Personalizado",
    description: "Materiales creados específicamente para adaptarse a las necesidades individuales de cada estudiante."
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Clases Individuales y Grupales",
    description: "Flexibilidad para elegir entre clases privadas o en grupos pequeños según tus preferencias."
  },
  {
    icon: <Clock className="h-8 w-8 text-accent" />,
    title: "Horarios Flexibles",
    description: "Programación adaptable para ajustarse a tu rutina y responsabilidades diarias."
  },
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: "Ejercicios Prácticos",
    description: "Enfoque en aplicaciones reales para consolidar el aprendizaje teórico."
  },
  {
    icon: <Video className="h-8 w-8 text-accent" />,
    title: "Recursos Digitales",
    description: "Acceso a videos, presentaciones y material interactivo para reforzar lo aprendido."
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Preparación para Exámenes",
    description: "Estrategias específicas para rendir al máximo en pruebas académicas y competiciones."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="mathmate-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            Metodología
          </span>
          <h2 className="section-title">Mi Enfoque de Enseñanza</h2>
          <p className="section-subtitle">
            Características que distinguen mi método para lograr resultados efectivos
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
