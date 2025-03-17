
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) { // Solo afecta a pantallas móviles
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        scrolled ? "glass-card" : "bg-transparent"
      )}
    >
      <div className="mathmate-container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-semibold text-primary">MathMate</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/about" className="nav-link">Sobre Mí</Link>
          <Link to="/courses" className="nav-link">Cursos</Link>
          <Link to="/testimonials" className="nav-link">Testimonios</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-50 w-full h-full transform transition-transform duration-300 ease-in-out md:hidden pt-20",
        isOpen ? "translate-x-0" : "translate-x-full",
        "bg-white dark:bg-gray-900/95 shadow-lg" // Fondo sólido con una leve transparencia en modo oscuro
      )}>
        <div className="flex flex-col items-center space-y-6 p-8 text-center">
          <Link to="/" className="text-xl nav-link" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/about" className="text-xl nav-link" onClick={() => setIsOpen(false)}>Sobre Mí</Link>
          <Link to="/courses" className="text-xl nav-link" onClick={() => setIsOpen(false)}>Cursos</Link>
          <Link to="/testimonials" className="text-xl nav-link" onClick={() => setIsOpen(false)}>Testimonios</Link>
          <Link to="/contact" className="text-xl nav-link" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
