
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { SubmissionSuccess } from "@/components/contact/SubmissionSuccess";
import { toast } from "@/components/ui/use-toast";

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  phone: z.string().min(10, "Ingresa un número de teléfono válido"),
  paymentMethod: z.enum(["online", "whatsapp"]),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CourseBooking = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      paymentMethod: "online",
      comments: "",
    },
  });

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

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // Preparar mensaje para WhatsApp con todos los datos
    const courseTitle = course?.title || "Curso no especificado";
    const message = `
🔔 *NUEVA RESERVA DE CURSO* 🔔
--------------------------------
*Curso:* ${courseTitle}
*Nombre:* ${data.name}
*Email:* ${data.email}
*Teléfono:* ${data.phone}
*Método de pago:* ${data.paymentMethod === "online" ? "Pago en línea" : "WhatsApp"}
${data.comments ? `*Comentarios:* ${data.comments}` : ""}
--------------------------------
`;
    
    // Enviar notificación a tu WhatsApp personal siempre
    const adminWhatsAppNumber = "573217529132"; // Tu número de WhatsApp
    window.open(`https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`, "_blank");
    
    // Si el usuario seleccionó WhatsApp como método de pago, redirigir también al usuario
    if (data.paymentMethod === "whatsapp") {
      const userMessage = `Hola, estoy interesado en el curso ${courseTitle}. Mi nombre es ${data.name}.`;
      // Usar setTimeout para evitar que el navegador bloquee la apertura de múltiples ventanas
      setTimeout(() => {
        window.open(`https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(userMessage)}`, "_blank");
      }, 500);
    }
    
    // Mostrar toast de confirmación
    toast({
      title: "Reserva enviada",
      description: "Hemos recibido tu reserva. Te contactaremos pronto.",
    });
    
    setIsSubmitted(true);
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
                  <span>Precio: {course.price || "Consultar precio"}</span>
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu número de teléfono" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Método de contacto</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un método" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="online">Pago en línea</SelectItem>
                            <SelectItem value="whatsapp">Contactar por WhatsApp</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comentarios adicionales</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="¿Tienes alguna pregunta o necesidad específica?" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full mt-6">
                    Confirmar Reserva
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseBooking;
