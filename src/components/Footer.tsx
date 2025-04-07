
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-background/90 to-background"></div>
        <div className="absolute h-full w-full opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="footergrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 204, 255, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footergrid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-8 border-b border-muted">
          {/* Logo y descripción */}
          <div className="md:max-w-xs">
            <div className="flex items-center mb-4">
              <div className="h-12">
                <img 
                  src="/lovable-uploads/81d43a4b-b256-4b5b-b2f6-434e8586b17e.png" 
                  alt="Math+IA Logo" 
                  className="h-full object-contain"
                />
              </div>
            </div>
            <p className="text-muted-foreground mt-2 mb-6">
              <em className="text-primary/90">La inteligencia artificial empieza con una ecuación</em>
            </p>
            <p className="text-muted-foreground mb-6">
              Potenciando el futuro a través de la educación matemática 
              especializada para carreras en tecnología, inteligencia artificial 
              y ciencia de datos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary">Inicio</Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary">Nosotros</Link>
                </li>
                <li>
                  <Link to="/courses" className="text-muted-foreground hover:text-primary">Cursos</Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-muted-foreground hover:text-primary">Testimonios</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary">Contacto</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Cursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/courses/algebra" className="text-muted-foreground hover:text-primary">Álgebra para IA</Link>
                </li>
                <li>
                  <Link to="/courses/calculus" className="text-muted-foreground hover:text-primary">Cálculo Avanzado</Link>
                </li>
                <li>
                  <Link to="/courses/statistics" className="text-muted-foreground hover:text-primary">Estadística y Probabilidad</Link>
                </li>
                <li>
                  <Link to="/courses/data-science" className="text-muted-foreground hover:text-primary">Matemáticas para Ciencia de Datos</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <PhoneCall size={18} className="text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">+123 456 7890</span>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">contacto@matematica-ai.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Ciudad de México, México</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground border-t border-muted pt-8">
          <p>&copy; {currentYear} Math+IA. Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-primary">Política de Privacidad</Link>
            <Link to="/terms" className="hover:text-primary">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
