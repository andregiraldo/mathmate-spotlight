
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { SubmissionSuccess } from './SubmissionSuccess';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openWhatsApp = () => {
    // Crear el mensaje con todos los datos del formulario
    const message = `*Nuevo mensaje de contacto*\n
*Nombre:* ${formData.name}\n
*Email:* ${formData.email}\n
*Teléfono:* ${formData.phone || 'No proporcionado'}\n
*Asunto:* ${formData.subject}\n
*Mensaje:* ${formData.message}`;
    
    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp (sin espacios ni caracteres especiales)
    const phoneNumber = '573217529132';
    
    // Crear la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir la URL en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  // Función para enviar datos a Google Sheets
  const sendToGoogleSheets = async () => {
    try {
      // Esta es una solución básica usando webhooks, en producción usaríamos un edge function
      // Utilizar un webhook o servicio de integración (como Zapier o Make)
      // El URL del webhook debería ser reemplazado por uno real
      const response = await fetch('https://hook.eu1.make.com/YOUR_WEBHOOK_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
        mode: 'no-cors', // Necesario para evitar problemas de CORS con webhooks
      });
      
      console.log('Datos enviados a Google Sheets');
    } catch (error) {
      console.error('Error al enviar datos a Google Sheets:', error);
    }
  };

  // Función para guardar en Supabase
  const saveToSupabase = async () => {
    try {
      const { error } = await supabase
        .from('contact_form')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            subject: formData.subject,
            message: formData.message
          }
        ]);
      
      if (error) throw error;
      console.log('Datos guardados en Supabase');
    } catch (error) {
      console.error('Error al guardar en Supabase:', error);
      toast({
        title: "Error",
        description: "No se pudieron guardar los datos. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Guardar en Supabase
      await saveToSupabase();
      
      // 2. Intentar enviar a Google Sheets (debe configurarse el webhook)
      await sendToGoogleSheets();
      
      // 3. Abrir WhatsApp
      openWhatsApp();
      
      // Actualizar el estado del formulario
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Mostrar notificación de éxito
      toast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado correctamente.",
      });
      
      // Reset submission message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error al procesar el formulario:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return <SubmissionSuccess />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nombre completo
          </label>
          <Input
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
          <Input
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
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Número de teléfono
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ej. +57 310 657 4475"
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
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
          />
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
  );
};

export default ContactForm;
