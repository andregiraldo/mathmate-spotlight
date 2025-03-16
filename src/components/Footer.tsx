
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-6">
      <div className="mathmate-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">MathMate</h2>
            <p className="text-primary-foreground/80 mb-6">
              Transformando la forma en que aprendes matemáticas con métodos personalizados y efectivos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Cursos
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Testimonios
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Cursos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses/algebra" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Álgebra
                </Link>
              </li>
              <li>
                <Link to="/courses/calculo" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Cálculo
                </Link>
              </li>
              <li>
                <Link to="/courses/estadistica" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Estadística
                </Link>
              </li>
              <li>
                <Link to="/courses/geometria" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Geometría
                </Link>
              </li>
              <li>
                <Link to="/courses/avanzado" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Matemáticas Avanzadas
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a href="mailto:contact@mathmate.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  contact@mathmate.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <a href="tel:+34600123456" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +34 600 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {currentYear} MathMate. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
