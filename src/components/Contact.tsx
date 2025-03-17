
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submission message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="mathmate-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            Contacto
          </span>
          <h2 className="section-title">¿Listo para Comenzar?</h2>
          <p className="section-subtitle">
            Ponte en contacto para programar una clase de prueba o resolver cualquier duda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-right">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-serif mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:andrea.girald29@gmail.com" className="text-muted-foreground hover:text-accent">
                      andrea.girald29@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Teléfono</h4>
                    <a href="tel:+57 310 657 4475" className="text-muted-foreground hover:text-accent">
                      +57 310 657 4475
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Bogotá, Colombia<br />
                      Clases presenciales y online
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Horario de atención</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Lunes a Viernes: 9:00 - 19:00</p>
                  <p>Sábados: 08:00 - 12:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-left">
            <div className="glass-card rounded-xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarme. Te responderé a la brevedad posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Asunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="info">Información general</option>
                        <option value="class">Programar clase</option>
                        <option value="pricing">Consulta de precios</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>Enviando<span className="loading ml-2">...</span></>
                      ) : (
                        <>Enviar mensaje <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
