import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  CreditCard,
  MessageCircle, // Replacing WhatsApp with MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const CourseBooking = () => {
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
        Course not found
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="container pt-20 pb-12">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/courses">Cursos</Link>
            </li>
            <li>{course.title}</li>
            <li>Reserva</li>
          </ul>
        </div>
      </div>

      <section className="py-6 bg-secondary/50">
        <div className="mathmate-container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Course Details */}
            <div className="glass-card rounded-xl p-8 animate-fade-right">
              <Link
                to={`/courses/${courseId}`}
                className="inline-flex items-center mb-6 text-accent hover:underline"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al curso
              </Link>
              <h2 className="text-3xl font-semibold mb-4">{course.title}</h2>
              <p className="text-muted-foreground mb-6">{course.description}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span>Precio: {course.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://wa.me/573106574475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="glass-card rounded-xl p-8 animate-fade-left">
              <h3 className="text-2xl font-semibold mb-4">
                Información de Reserva
              </h3>
              <Form>
                {/* Form fields will go here */}
                <p>Formulario de reserva en construcción...</p>
              </Form>
              <Button className="w-full mt-4">Confirmar Reserva</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseBooking;
