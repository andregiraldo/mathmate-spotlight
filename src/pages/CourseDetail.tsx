import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Check,
  MessageCircle, // Replacing WhatsApp with MessageCircle
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

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-12">
        <div className="mathmate-container">
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
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User size={16} />
                    {course.instructor}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    {course.schedule}
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
            {course.modules.map((module, index) => (
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
            <h2 className="section-title">Requisitos del curso</h2>
            <p className="section-subtitle">
              Asegúrate de cumplir con estos requisitos antes de inscribirte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-4 animate-fade-up">
                Conocimientos previos
              </h3>
              <ul className="list-disc pl-4 text-muted-foreground animate-fade-up">
                {course.requirements.knowledge.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-4 animate-fade-up">
                Materiales necesarios
              </h3>
              <ul className="list-disc pl-4 text-muted-foreground animate-fade-up">
                {course.requirements.materials.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
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
            {course.testimonials.map((testimonial, index) => (
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
              <Button variant="outline">
                <MessageCircle className="mr-2" size={20} /> Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CourseDetail;
