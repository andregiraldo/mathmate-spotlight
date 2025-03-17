
import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
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
            <ContactInfo />
          </div>
          
          <div className="animate-fade-left">
            <div className="glass-card rounded-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
