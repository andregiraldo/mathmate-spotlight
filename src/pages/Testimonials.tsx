import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Star, User, Calendar, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  // Modifica este array con más testimonios de tus estudiantes
  const testimonials = [
    {
      id: 1,
      name: "Nombre del Estudiante 1",
      role: "Curso o Nivel",
      image: "/foto-estudiante1.jpg", // Ruta a la foto del estudiante
      rating: 5,
      date: "Mes Año",
      comment: "Testimonio completo del estudiante 1. Puedes incluir más detalles aquí que en la versión resumida de la página principal."
    },
    {
      id: 2,
      name: "Nombre del Estudiante 2",
      role: "Curso o Nivel",
      image: "/foto-estudiante2.jpg", // Ruta a la foto del estudiante
      rating: 5,
      date: "Mes Año",
      comment: "Testimonio completo del estudiante 2."
    },
    {
      id: 3,
      name: "Nombre del Estudiante 3",
      role: "Curso o Nivel",
      image: "/foto-estudiante3.jpg", // Ruta a la foto del estudiante
      rating: 4,
      date: "Mes Año",
      comment: "Testimonio completo del estudiante 3."
    },
    {
      id: 4,
      name: "Nombre del Estudiante 4",
      role: "Curso o Nivel",
      image: "/foto-estudiante4.jpg", // Ruta a la foto del estudiante
      rating: 5,
      date: "Mes Año",
      comment: "Testimonio completo del estudiante 4."
    },
    {
      id: 5,
      name: "Nombre del Estudiante 5",
      role: "Curso o Nivel",
      image: "/foto-estudiante5.jpg", // Ruta a la foto del estudiante
      rating: 5,
      date: "Mes Año",
      comment: "Testimonio completo del estudiante 5."
    },
    {
      id: 6,
      name: "Nombre del Estudiante 6",
      role: "Curso o Nivel",
      image: "/foto-estudiante6.jpg", // Ruta a la foto del estudiante
      rating: 4,
      date: "Mes Año",
      comment: "Testimonio completo del estudiante 6."
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
