import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Check,
  MessageCircle,
  ChevronLeft,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      console.log(`Course with id ${courseId} not found`);
    }
  }, [courseId]);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );
  }

  // Mock data since it's not in the course object
  const mockModules = [
    {
      title: "Fundamentos: Construyendo la base",
      description: "Ideal para comenzar desde cero o reforzar lo aprendido en clases",
      topics: ["Conceptos básicos explicados paso a paso", "Lecturas Interactivas", "Ejercicios guiados"]
    },
    {
      title: "Aplicaciones prácticas: Matemáticas para la vida real",
      description: "Para que los estudiantes entiendan “¿para qué me sirve esto?”",
      topics: ["Problemas del mundo real", "Estudios de caso", "Mini proyectos"]
    },
    {
      title: "Nivel avanzado: Para ir más allá",
      description: "Desarrolla pensamiento crítico, ideal para estudiantes que quieren destacarse.",
      topics: ["Técnicas avanzadas explicadas con claridad", "Desafíos y problemas complejos con apoyo visual", "Exploración con Inteligencia Artificial"]
    }
  ];

  // Mock testimonials
  const mockTestimonials = [
    {
      name: "María González",
      title: "Estudiante",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      comment: "Este curso transformó mi manera de entender las matemáticas."
    },
    {
      name: "Juan Pérez",
      title: "Profesional",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      comment: "Contenido práctico y explicado de manera clara y concisa."
    },
    {
      name: "Ana Rodríguez",
      title: "Docente",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      comment: "Recomiendo este curso a todos mis estudiantes."
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-12">
        <div className="mathmate-container">
          <Link to="/courses" className="inline-flex items-center mb-6 text-accent hover:text-primary">
            <ChevronLeft className="mr-1" size={20} /> Volver a cursos
          </Link>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-right">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
                  {course.level}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                  {course.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {course.longDescription || course.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User size={16} />
                    Profesor especializado
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    Horario flexible
                  </div>
                </div>

                <Link to={`/courses/${courseId}/booking`}>
                  <Button size="lg">
                    Inscribirme <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="animate-fade-left">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-xl shadow-lg aspect-video w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-secondary/50">
        <div className="mathmate-container">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="section-title">¿Qué aprenderás?</h2>
            <p className="section-subtitle">
              Este curso está diseñado para brindarte una comprensión completa
              de los temas clave.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockModules.map((module, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-medium mb-2">{module.title}</h3>
                <p className="text-muted-foreground">{module.description}</p>
                <ul className="list-disc pl-4 mt-4 text-muted-foreground">
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mathmate-container">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="section-title">Contenido del curso</h2>
            <p className="section-subtitle">
              Los temas que abordarás en este curso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-4 animate-fade-up">
                Temas principales
              </h3>
              <ul className="list-disc pl-4 text-muted-foreground animate-fade-up">
                {course.topics ? course.topics.map((topic, index) => (
                  <li key={index} className="mb-2">{topic}</li>
                )) : (
                  <li>Contenido en desarrollo</li>
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-4 animate-fade-up">
                Requerimientos
              </h3>
              <ul className="list-disc pl-4 text-muted-foreground animate-fade-up">
                <li>Cuaderno para tomar notas</li>
                <li>Calculadora científica (opcional)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="mathmate-container">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="section-title">Testimonios</h2>
            <p className="section-subtitle">
              Mira lo que dicen nuestros estudiantes sobre este curso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mathmate-container">
          <div className="text-center animate-fade-up">
            <h2 className="section-title">¿Tienes preguntas?</h2>
            <p className="section-subtitle">
              Contáctanos para resolver tus dudas.
            </p>
            <div className="mt-8">
              <a href="https://wa.me/573106574475" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <MessageCircle className="mr-2" size={20} /> Contáctanos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CourseDetail;
