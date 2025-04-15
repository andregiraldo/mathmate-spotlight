
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cpu, Code, Calculator } from 'lucide-react';

const AIMathSection = () => {
  return (
    <div className="mt-24 glass-card rounded-2xl p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-foreground">
            La IA está transformando el mundo, <span className="text-primary">las matemáticas son tu ventaja</span>
          </h3>
          
          <p className="text-muted-foreground">
            En un mundo donde la Inteligencia Artificial se integra cada vez más en nuestra vida cotidiana,
            comprender las matemáticas que hay detrás de estos sistemas te da una ventaja competitiva en carreras
            como desarrollo de software, ciencia de datos e ingeniería de sistemas.
          </p>
          
          <ul className="space-y-5 text-foreground">
            <li className="flex items-start">
              <div className="rounded-full bg-primary/20 p-2 mr-3">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <span>Los algoritmos de IA que usas diariamente están construidos sobre conceptos matemáticos</span>
            </li>
            <li className="flex items-start">
              <div className="rounded-full bg-primary/20 p-2 mr-3">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <span>El desarrollo de software moderno requiere sólidas habilidades matemáticas para optimización</span>
            </li>
            <li className="flex items-start">
              <div className="rounded-full bg-primary/20 p-2 mr-3">
                <Calculator className="w-5 h-5 text-primary" />
              </div>
              <span>Las matemáticas te enseñan a pensar de forma lógica y estructurada, esencial para la programación</span>
            </li>
          </ul>
          
          <Link to="/courses">
            <Button className="mt-6 bg-primary hover:bg-primary/80 text-foreground">
              Descubre nuestros cursos
            </Button>
          </Link>
        </div>
        
        <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden border-2 border-primary/20">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
            alt="Algoritmos y matemáticas en IA"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
            <div className="p-6">
              <p className="text-xl font-bold text-foreground">
                "La matemática es el alfabeto con el que Dios ha escrito el universo, y ahora también la inteligencia artificial."
              </p>
              <p className="text-primary mt-2">— Inspirado en Galileo Galilei</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMathSection;
