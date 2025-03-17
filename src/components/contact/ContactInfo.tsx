
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="glass-card rounded-xl p-8 h-full">
      <h3 className="text-2xl font-serif mb-6">Información de Contacto</h3>
      
      <div className="space-y-6">
        <ContactInfoItem 
          icon={<Mail size={24} />} 
          title="Email" 
          content={
            <a href="mailto:andrea.girald29@gmail.com" className="text-muted-foreground hover:text-accent">
              andrea.girald29@gmail.com
            </a>
          } 
        />
        
        <ContactInfoItem 
          icon={<Phone size={24} />} 
          title="Teléfono" 
          content={
            <a href="tel:+57 310 657 4475" className="text-muted-foreground hover:text-accent">
              +57 310 657 4475
            </a>
          } 
        />
        
        <ContactInfoItem 
          icon={<MapPin size={24} />} 
          title="Ubicación" 
          content={
            <p className="text-muted-foreground">
              Bogotá, Colombia<br />
              Clases presenciales y online
            </p>
          } 
        />
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
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-accent/10 p-3 rounded-full text-accent">
        {icon}
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        {content}
      </div>
    </div>
  );
};

export default ContactInfo;
