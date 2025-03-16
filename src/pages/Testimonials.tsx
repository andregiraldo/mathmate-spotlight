
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Star, User, Calendar, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Méndez",
      role: "Estudiante de Ingeniería",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      rating: 5,
      date: "Marzo 2023",
      comment: "La profesora María transformó completamente mi relación con las matemáticas. Sus métodos de enseñanza claros y su paciencia infinita me ayudaron a superar mis dificultades y ahora disfruto resolviendo problemas complejos."
    },
    {
      id: 2,
      name: "Laura Gómez",
      role: "Estudiante de Bachillerato",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      rating: 5,
      date: "Febrero 2023",
      comment: "Gracias a las clases de la profesora María, pude mejorar significativamente mis calificaciones en matemáticas. Su enfoque personalizado y su capacidad para explicar conceptos difíciles de forma sencilla son incomparables."
    },
    {
      id: 3,
      name: "Miguel Torres",
      role: "Estudiante de Física",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      rating: 4,
      date: "Enero 2023",
      comment: "La profesora tiene una habilidad única para hacer que las matemáticas sean interesantes y relevantes. Sus ejemplos prácticos y su entusiasmo por la materia son contagiosos. Altamente recomendada."
    },
    {
      id: 4,
      name: "Ana Martínez",
      role: "Estudiante Universitaria",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      rating: 5,
      date: "Diciembre 2022",
      comment: "Las clases con María han sido fundamentales para mi éxito académico. Su manera de explicar conceptos complejos de forma clara y su disponibilidad para resolver dudas hacen que aprender matemáticas sea mucho más fácil y agradable."
    },
    {
      id: 5,
      name: "Javier López",
      role: "Preparación para Oposiciones",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      rating: 5,
      date: "Noviembre 2022",
      comment: "Busqué ayuda para preparar un examen de oposición que incluía matemáticas avanzadas. María diseñó un plan de estudio personalizado que se adaptaba perfectamente a mis necesidades. Gracias a ella, pude superar la prueba con una excelente puntuación."
    },
    {
      id: 6,
      name: "Elena Sánchez",
      role: "Profesora de Primaria",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      rating: 4,
      date: "Octubre 2022",
      comment: "Como profesora de primaria, necesitaba reforzar mis conocimientos matemáticos para poder enseñar mejor a mis alumnos. Las clases con María no solo mejoraron mi comprensión de las matemáticas, sino que también me proporcionaron herramientas pedagógicas valiosas."
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-12">
        <div className="mathmate-container">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
              Testimonios
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Lo Que Dicen Mis Estudiantes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiencias reales de personas que han mejorado sus habilidades matemáticas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="glass-card rounded-xl p-6 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 -left-4 text-4xl text-accent opacity-10">
                  <Quote size={48} />
                </div>
                
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={12} 
                            className={i < testimonial.rating ? "fill-accent text-accent" : "text-muted"} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm italic mb-4">"{testimonial.comment}"</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{testimonial.date}</span>
                    </div>
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

export default TestimonialsPage;
