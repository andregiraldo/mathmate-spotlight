
import React from 'react';
import NavBar from '../components/NavBar';
import CoursePreview from '../components/CoursePreview';
import Footer from '../components/Footer';
import { BookOpen, Clock, Users, BarChart } from 'lucide-react';

const CoursesPage = () => {
  const courses = [
    {
      id: "algebra",
      title: "Álgebra Fundamental",
      description: "Aprende los conceptos básicos del álgebra que forman la base de las matemáticas avanzadas. Este curso cubre ecuaciones lineales y cuadráticas, sistemas de ecuaciones, polinomios, funciones y aplicaciones en problemas cotidianos.",
      level: "Principiante",
      duration: "8 semanas",
      students: 120,
      topics: ["Ecuaciones lineales", "Ecuaciones cuadráticas", "Sistemas de ecuaciones", "Polinomios", "Funciones"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: "calculo",
      title: "Cálculo Diferencial",
      description: "Domina las técnicas de diferenciación y sus aplicaciones en problemas del mundo real. Estudiarás límites, continuidad, derivadas, reglas de diferenciación, optimización y aplicaciones científicas del cálculo.",
      level: "Intermedio",
      duration: "10 semanas",
      students: 85,
      topics: ["Límites y continuidad", "Derivadas", "Reglas de diferenciación", "Optimización", "Aplicaciones científicas"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: "estadistica",
      title: "Estadística y Probabilidad",
      description: "Aprende a analizar datos, hacer predicciones y tomar decisiones basadas en evidencia. El curso incluye estadística descriptiva e inferencial, probabilidad, distribuciones, pruebas de hipótesis y regresión.",
      level: "Intermedio",
      duration: "12 semanas",
      students: 95,
      topics: ["Estadística descriptiva", "Probabilidad", "Distribuciones", "Pruebas de hipótesis", "Regresión"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: "geometria",
      title: "Geometría Analítica",
      description: "Explora la relación entre álgebra y geometría, aprendiendo a resolver problemas geométricos utilizando métodos algebraicos. Estudiarás coordenadas cartesianas, rectas, cónicas, vectores y transformaciones.",
      level: "Intermedio",
      duration: "8 semanas",
      students: 70,
      topics: ["Coordenadas cartesianas", "Rectas y planos", "Cónicas", "Vectores", "Transformaciones"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: "avanzado",
      title: "Matemáticas Avanzadas",
      description: "Un curso de nivel superior que abarca temas como cálculo multivariable, ecuaciones diferenciales, análisis complejo y álgebra lineal. Diseñado para estudiantes que buscan profundizar en conceptos matemáticos complejos.",
      level: "Avanzado",
      duration: "14 semanas",
      students: 45,
      topics: ["Cálculo multivariable", "Ecuaciones diferenciales", "Análisis complejo", "Álgebra lineal", "Métodos numéricos"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: "preparacion",
      title: "Preparación para Exámenes",
      description: "Curso intensivo diseñado para ayudarte a prepararte para exámenes de ingreso a la universidad, oposiciones o evaluaciones importantes. Incluye estrategias de estudio, práctica intensiva y simulacros de examen.",
      level: "Varios",
      duration: "6 semanas",
      students: 110,
      topics: ["Estrategias de estudio", "Técnicas de resolución de problemas", "Gestión del tiempo", "Simulacros de examen", "Reducción de ansiedad"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
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
