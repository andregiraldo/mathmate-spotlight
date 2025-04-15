
import React from 'react';
import { BookOpen, Users, Clock, PenTool, Video, Award } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Material Didáctico Personalizado",
    description: "Materiales creados específicamente para adaptarse a las necesidades individuales de cada estudiante."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Clases Individuales y Grupales",
    description: "Flexibilidad para elegir entre clases privadas o en grupos pequeños según tus preferencias."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Horarios Flexibles",
    description: "Programación adaptable para ajustarse a tu rutina y responsabilidades diarias."
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: "Ejercicios Prácticos",
    description: "Enfoque en aplicaciones reales para consolidar el aprendizaje teórico."
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Recursos Digitales",
    description: "Acceso a videos, presentaciones y material interactivo para reforzar lo aprendido."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Preparación para Exámenes",
    description: "Estrategias específicas para rendir al máximo en pruebas académicas y competiciones."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-background/80 to-background"></div>
        <div className="absolute h-full w-full opacity-30">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="features-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 204, 255, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#features-grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Metodología
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
            Nuestro Enfoque de <span className="text-primary">Enseñanza</span>
          </h2>
          <div className="h-1 w-40 mx-auto my-6 bg-primary"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Características que distinguen nuestro método para lograr resultados efectivos
            en las matemáticas aplicadas a la tecnología
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 card-hover border border-primary/20 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
