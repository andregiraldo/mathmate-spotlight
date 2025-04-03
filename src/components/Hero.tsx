
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-accent/10 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 rounded-full bg-primary/10 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="mathmate-container relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            Profesora de Matemáticas
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Aprende Matemáticas de <span className="text-accent">Manera Efectiva</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transformando la manera en que los estudiantes entienden y disfrutan de las matemáticas, con métodos de enseñanza personalizados y efectivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Ver Cursos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm transition-colors hover:bg-accent/10"
            >
              Contactarme
            </Link>
          </div>
        </div>
      </div>
      
      {/* WhatsApp button */}
      <a 
        href="https://api.whatsapp.com/send/?phone=573106574475&text&type=phone_number&app_absent=0" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55" className="w-10 h-10">
          <path d="M34.949 43.718L34.919 43.718C20.783 43.703 9.333 32.76 9.333 19.266C9.348 13.758 14.03 9.301 19.8 9.301C21.35 9.305 22.78 10.099 23.549 11.384L26.954 17.072C27.791 18.46 27.769 20.173 26.896 21.54L24.833 24.844C25.871 26.529 27.341 27.934 29.106 28.925L32.565 26.953C33.998 26.12 35.793 26.099 37.247 26.898L43.209 30.144C44.554 30.879 45.386 32.245 45.388 33.726C45.388 39.233 40.72 43.702 34.951 43.718Z" fill="white"></path>
          <path d="M27.005 0.34C17.593 0.34 8.879 5.305 4.083 13.403C-0.713 21.5 -0.879 31.527 3.646 39.779L1.47 47.462C1.058 48.887 1.454 50.424 2.503 51.473C3.552 52.522 5.089 52.918 6.515 52.506L14.199 50.33C23.954 55.672 36.002 54.391 44.416 47.116C52.829 39.842 55.835 28.106 51.956 17.683C48.076 7.26 38.128 0.345 27.005 0.34ZM33.352 43.555L33.326 43.555C20.874 43.542 10.787 33.445 10.787 20.994C10.8 15.912 14.924 11.799 20.007 11.799C21.373 11.803 22.632 12.536 23.31 13.721L26.31 18.97C27.047 20.25 27.027 21.831 26.259 23.092L24.441 26.141C25.355 27.696 26.651 28.992 28.205 29.906L31.252 28.087C32.515 27.318 34.096 27.298 35.377 28.036L40.628 31.031C41.814 31.71 42.546 32.97 42.548 34.336C42.548 39.417 38.436 43.54 33.354 43.555Z" fill="#25D366"></path>
          <path d="M29.449 33.497C28.871 33.843 28.165 33.882 27.555 33.602C24.34 32.143 21.771 29.514 20.345 26.226C20.072 25.601 20.11 24.88 20.448 24.289L22.851 20.208L19.961 15C17.2 15.07 14.998 17.382 15 20.208C14.994 25.208 16.93 30.006 20.384 33.545C23.837 37.083 28.524 39.071 33.411 39.071L33.436 39.071C36.197 39.072 38.456 36.82 38.526 33.995L33.436 31.04L29.447 33.497Z" fill="#25D366"></path>
        </svg>
      </a>
      
      {/* Decorative math symbols */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="flex justify-around w-full">
          <span className="text-5xl floating-symbol" style={{ animationDelay: '0s' }}>π</span>
          <span className="text-5xl floating-symbol" style={{ animationDelay: '1s' }}>∑</span>
          <span className="text-5xl floating-symbol" style={{ animationDelay: '2s' }}>∫</span>
          <span className="text-5xl floating-symbol" style={{ animationDelay: '3s' }}>√</span>
          <span className="text-5xl floating-symbol" style={{ animationDelay: '4s' }}>±</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
