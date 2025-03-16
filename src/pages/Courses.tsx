import React from 'react';
import NavBar from '../components/NavBar';
import CoursePreview from '../components/CoursePreview';
import Footer from '../components/Footer';
import { BookOpen, Clock, Users, BarChart } from 'lucide-react';

const CoursesPage = () => {
  // Modifica este array con tus cursos reales
  const courses = [
    {
      id: "curso1",
      title: "Nombre de tu Curso 1",
      description: "Descripción detallada de tu primer curso. Explica qué aprenderán los estudiantes, qué problemas ayudará a resolver y cuáles son los beneficios de tomarlo.",
      level: "Nivel del curso",
      duration: "Duración del curso",
      students: 0, // Número de estudiantes que han tomado el curso
      topics: ["Tema 1", "Tema 2", "Tema 3", "Tema 4", "Tema 5"],
      image: "/imagen-curso1.jpg" // Ruta a la imagen de tu curso
    },
    {
      id: "curso2",
      title: "Nombre de tu Curso 2",
      description: "Descripción detallada de tu segundo curso. Haz que sea específico y atractivo para tu audiencia objetivo.",
      level: "Nivel del curso",
      duration: "Duración del curso",
      students: 0, // Número de estudiantes que han tomado el curso
      topics: ["Tema 1", "Tema 2", "Tema 3", "Tema 4", "Tema 5"],
      image: "/imagen-curso2.jpg" // Ruta a la imagen de tu curso
    },
    {
      id: "curso3",
      title: "Nombre de tu Curso 3",
      description: "Descripción detallada de tu tercer curso. Menciona los requisitos previos si los hay y los resultados esperados al finalizar.",
      level: "Nivel del curso",
      duration: "Duración del curso",
      students: 0, // Número de estudiantes que han tomado el curso
      topics: ["Tema 1", "Tema 2", "Tema 3", "Tema 4", "Tema 5"],
      image: "/imagen-curso3.jpg" // Ruta a la imagen de tu curso
    },
    // Puedes añadir más cursos según sea necesario
  ];

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
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{course.students} estudiantes</span>
                      </div>
                    </div>
                    
                    <button className="w-full text-center py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
                      Ver detalles
                    </button>
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
