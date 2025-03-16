
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, BookOpen, Users } from 'lucide-react';

type Course = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: number;
  image: string;
};

const courses: Course[] = [
  {
    id: "algebra",
    title: "Álgebra Fundamental",
    description: "Aprende los conceptos básicos del álgebra que forman la base de las matemáticas avanzadas.",
    level: "Principiante",
    duration: "8 semanas",
    students: 120,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "calculo",
    title: "Cálculo Diferencial",
    description: "Domina las técnicas de diferenciación y sus aplicaciones en problemas del mundo real.",
    level: "Intermedio",
    duration: "10 semanas",
    students: 85,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "estadistica",
    title: "Estadística y Probabilidad",
    description: "Aprende a analizar datos, hacer predicciones y tomar decisiones basadas en evidencia.",
    level: "Intermedio",
    duration: "12 semanas",
    students: 95,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

const CoursePreview = () => {
  return (
    <section id="courses" className="py-20">
      <div className="mathmate-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            Cursos
          </span>
          <h2 className="section-title">Cursos Especializados</h2>
          <p className="section-subtitle">
            Diseñados para adaptarse a diferentes niveles y necesidades de aprendizaje
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="glass-card rounded-xl overflow-hidden card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                    {course.level}
                  </span>
                  <Link to={`/courses/${course.id}`} className="text-accent hover:underline">
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
                <h3 className="text-xl font-medium mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students} estudiantes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/courses" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Ver todos los cursos <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
