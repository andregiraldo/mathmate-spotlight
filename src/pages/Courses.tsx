
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { BookOpen, Clock, Users, ArrowUpRight } from 'lucide-react';
import { courses } from '../data/courses';

const CoursesPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-12">
        <div className="mathmate-container">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
              Cursos
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Nuestros Cursos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Programas educativos diseñados para adaptarse a tus necesidades y objetivos
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
                  </div>
                  <h3 className="text-xl font-medium mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{course.id === "clase" ? course.duration : "8h mensuales"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{course.id === "clase" ? "1 estudiante" : "3-5 estudiantes"}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/courses/${course.id}`} 
                      className="w-full text-center py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors inline-block"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
