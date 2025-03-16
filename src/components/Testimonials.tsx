
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Méndez",
    role: "Estudiante de Ingeniería",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    rating: 5,
    comment: "La profesora María transformó completamente mi relación con las matemáticas. Sus métodos de enseñanza claros y su paciencia infinita me ayudaron a superar mis dificultades y ahora disfruto resolviendo problemas complejos."
  },
  {
    id: 2,
    name: "Laura Gómez",
    role: "Estudiante de Bachillerato",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    rating: 5,
    comment: "Gracias a las clases de la profesora María, pude mejorar significativamente mis calificaciones en matemáticas. Su enfoque personalizado y su capacidad para explicar conceptos difíciles de forma sencilla son incomparables."
  },
  {
    id: 3,
    name: "Miguel Torres",
    role: "Estudiante de Física",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    rating: 4,
    comment: "La profesora tiene una habilidad única para hacer que las matemáticas sean interesantes y relevantes. Sus ejemplos prácticos y su entusiasmo por la materia son contagiosos. Altamente recomendada."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="mathmate-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            Testimonios
          </span>
          <h2 className="section-title">Lo Que Dicen Mis Estudiantes</h2>
          <p className="section-subtitle">
            Experiencias reales de estudiantes que han transformado su relación con las matemáticas
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonial Carousel */}
          <div className="hidden md:block relative">
            <div className="glass-card rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="absolute -top-6 -left-6 text-4xl text-accent opacity-30">
                <Quote size={48} />
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-md transform -translate-x-2 translate-y-2"></div>
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover rounded-full relative z-10"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-medium text-lg">{testimonials[currentIndex].name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonials[currentIndex].rating ? "fill-accent text-accent" : "text-muted"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-lg italic mb-6">"{testimonials[currentIndex].comment}"</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white shadow-md hover:bg-accent/10 transition-colors"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-md hover:bg-accent/10 transition-colors"
                aria-label="Testimonio siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Mobile Testimonials Stack */}
          <div className="md:hidden space-y-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card rounded-xl p-6 animate-fade-up">
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
                <p className="text-sm italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center text-accent hover:underline"
          >
            Ver todos los testimonios <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
