
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-background/80 shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/59aea7a8-43d9-41be-a0cc-63c054d2a101.png" 
              alt="Math+IA Logo" 
              className="h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/" className="nav-link text-foreground hover:text-primary">Inicio</Link>
              <Link to="/about" className="nav-link text-foreground hover:text-primary">Nosotros</Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground hover:text-primary">Cursos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/50 to-accent p-6 no-underline outline-none focus:shadow-md"
                              href="/courses"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-accent-foreground">
                                Ver todos los cursos
                              </div>
                              <p className="text-sm leading-tight text-accent-foreground/90">
                                Explora nuestra oferta completa de cursos de matemáticas para tecnología
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <Link
                            to="/courses/ai-math"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">IA + Matemáticas</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fundamentos matemáticos para Inteligencia Artificial
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/courses/data-math"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Ciencia de Datos</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Estadísticas y análisis matemático para datos
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link to="/testimonials" className="nav-link text-foreground hover:text-primary">Testimonios</Link>
              <Link to="/blog" className="nav-link text-foreground hover:text-primary">Blog</Link>
              <Link to="/contact" className="nav-link text-foreground hover:text-primary">Contacto</Link>
            </nav>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <button onClick={toggleMenu} className="md:hidden text-foreground hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}

          {/* Contact button (desktop) */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 border border-primary rounded-full text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                Contactar
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg">
          <div className="container px-4 py-3 space-y-1">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="block py-2 px-3 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className="block py-2 px-3 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
            >
              Nosotros
            </Link>
            <div className="block py-2 px-3">
              <div className="flex justify-between items-center">
                <Link 
                  to="/courses" 
                  onClick={closeMenu}
                  className="text-foreground hover:text-primary"
                >
                  Cursos
                </Link>
                <ChevronDown size={16} className="text-muted-foreground" />
              </div>
            </div>
            <Link 
              to="/testimonials" 
              onClick={closeMenu}
              className="block py-2 px-3 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
            >
              Testimonios
            </Link>
            <Link 
              to="/blog" 
              onClick={closeMenu}
              className="block py-2 px-3 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="block py-2 px-3 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
            >
              Contacto
            </Link>
            <div className="pt-2 pb-3">
              <Link 
                to="/contact"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-primary rounded-full text-sm font-medium text-primary hover:bg-primary/10"
              >
                Contactar ahora
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
