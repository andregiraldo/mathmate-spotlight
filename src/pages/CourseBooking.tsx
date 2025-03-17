
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { 
  ChevronRight, 
  Mail, 
  User, 
  Phone, 
  CreditCard, 
  WhatsApp,
  Calendar,
  Check
} from 'lucide-react';
import { courses } from '../data/courses';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '@/hooks/use-toast';

const CourseBooking = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find(c => c.id === courseId);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
    paymentMethod: 'online' as 'online' | 'whatsapp'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePaymentMethodChange = (method: 'online' | 'whatsapp') => {
    setFormData(prev => ({ ...prev, paymentMethod: method }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Booking submitted:', formData);
      setIsSubmitting(false);
      
      if (formData.paymentMethod === 'whatsapp') {
        // Open WhatsApp with course booking details
        const message = `Hola, me interesa reservar una clase para el curso de ${course?.title}. Mi nombre es ${formData.name}, mi correo es ${formData.email} y mi teléfono es ${formData.phone}. Fecha preferida: ${formData.date}. Mensaje adicional: ${formData.message}`;
        window.open(`https://wa.me/573106574475?text=${encodeURIComponent(message)}`, '_blank');
      } else {
        // Show success notification and redirect to a thank you page or course page
        toast({
          title: "Reserva enviada",
          description: "Pronto te contactaremos con los detalles de pago.",
        });
        
        // Redirect to course detail page after submission
        setTimeout(() => {
          navigate(`/courses/${courseId}`);
        }, 2000);
      }
    }, 1500);
  };
  
  if (!course) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="mathmate-container py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Curso no encontrado</h1>
          <p className="mb-8 text-muted-foreground">El curso que buscas no existe o ha sido removido.</p>
          <Link 
            to="/courses" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Ver todos los cursos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-24 pb-16">
        <div className="mathmate-container">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Inicio</Link>
            <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
            <Link to="/courses" className="text-muted-foreground hover:text-foreground">Cursos</Link>
            <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
            <Link to={`/courses/${courseId}`} className="text-muted-foreground hover:text-foreground">{course.title}</Link>
            <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
            <span>Reservar</span>
          </nav>
          
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Reservar Clase</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Completa el formulario para reservar una clase de {course.title}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 animate-fade-right">
              <div className="glass-card rounded-xl p-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base">
                        Nombre completo
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-base">
                        Correo electrónico
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tucorreo@ejemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-base">
                        Teléfono
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Tu número de teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="date" className="text-base">
                        Fecha preferida
                      </Label>
                      <Input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-base">
                        Mensaje (opcional)
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuéntanos cualquier otro detalle relevante..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <p className="text-base font-medium mb-3">Método de reserva</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            formData.paymentMethod === 'online'
                              ? 'border-accent bg-accent/5'
                              : 'border-border hover:border-input'
                          }`}
                          onClick={() => handlePaymentMethodChange('online')}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                              formData.paymentMethod === 'online' ? 'border-accent' : 'border-muted-foreground'
                            }`}>
                              {formData.paymentMethod === 'online' && (
                                <div className="w-3 h-3 rounded-full bg-accent" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium flex items-center mb-1">
                                <CreditCard className="w-4 h-4 mr-2" />
                                Pago en línea
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Reserva ahora y recibe instrucciones para el pago en línea
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            formData.paymentMethod === 'whatsapp'
                              ? 'border-accent bg-accent/5'
                              : 'border-border hover:border-input'
                          }`}
                          onClick={() => handlePaymentMethodChange('whatsapp')}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                              formData.paymentMethod === 'whatsapp' ? 'border-accent' : 'border-muted-foreground'
                            }`}>
                              {formData.paymentMethod === 'whatsapp' && (
                                <div className="w-3 h-3 rounded-full bg-accent" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium flex items-center mb-1">
                                <WhatsApp className="w-4 h-4 mr-2" />
                                Contacto por WhatsApp
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Coordina los detalles del pago y la clase por WhatsApp
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>Procesando...</>
                      ) : formData.paymentMethod === 'whatsapp' ? (
                        <>Contactar por WhatsApp <WhatsApp className="ml-2 h-4 w-4" /></>
                      ) : (
                        <>Confirmar reserva <Check className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="animate-fade-left">
              <div className="glass-card rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Resumen del curso</h3>
                
                <div className="mb-6">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-medium mb-1">{course.title}</h4>
                  <p className="text-muted-foreground text-sm">{course.description}</p>
                </div>
                
                <div className="space-y-4 border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nivel:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duración:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  
                  {course.price && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Precio:</span>
                      <span className="font-medium">{course.price}</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t border-border mt-6 pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Al reservar una clase, confirmas que has leído y aceptado nuestros términos y condiciones.
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Las clases están sujetas a disponibilidad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseBooking;
