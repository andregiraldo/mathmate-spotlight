
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SubmissionSuccess } from "@/components/contact/SubmissionSuccess";
import { toast } from "@/components/ui/use-toast";
import { BookingForm, BookingFormValues } from "@/components/booking/BookingForm";
import { CourseDetailsCard } from "@/components/booking/CourseDetailsCard";
import { submitBooking } from "@/utils/booking-utils";

const CourseBooking = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      console.log(`Course with id ${courseId} not found`);
      toast({
        title: "Error al cargar el curso",
        description: "No se pudo encontrar el curso solicitado.",
        variant: "destructive",
      });
    }
  }, [courseId]);

  const onSubmit = async (data: BookingFormValues) => {
    try {
      setIsSubmitting(true);
      console.log("Form submitted:", data);
      
      const courseTitle = course?.title || "Curso no especificado";
      
      // Para asegurar compatibilidad con el backend, añadimos paymentMethod con un valor por defecto
      const dataWithPaymentMethod = {
        ...data,
        paymentMethod: "online" // Valor por defecto ya que eliminamos el campo
      };
      
      const result = await submitBooking({
        data: dataWithPaymentMethod,
        courseId,
        courseTitle
      });

      if (result.success) {
        // Mostrar mensaje de reserva enviada
        toast({
          title: "Reserva enviada con éxito",
          description: "Hemos recibido tu reserva. Te contactaremos pronto.",
        });
        
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error en el proceso de reserva:", error);
      toast({
        title: "Error en la reserva",
        description: "Hubo un problema al procesar tu reserva. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Curso no encontrado</h2>
            <p className="text-muted-foreground mb-6">Lo sentimos, no pudimos encontrar el curso que estás buscando.</p>
            <Link to="/courses">
              <Button>Ver todos los cursos</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="container pt-20 pb-12">
          <SubmissionSuccess />
          <div className="text-center mt-8">
            <Link to={`/courses/${courseId}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al curso
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <section className="py-20 bg-secondary/50">
        <div className="mathmate-container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Course Details */}
            <CourseDetailsCard 
              courseId={courseId}
              title={course.title}
              description={course.description}
              price={course.price}
            />

            {/* Booking Form */}
            <BookingForm 
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CourseBooking;
