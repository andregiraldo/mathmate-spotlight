import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Calculator, 
  LineChart, 
  Code, 
  Network, 
  Lightbulb,
  Cpu,
  Cloud,
  ShieldCheck
} from 'lucide-react';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    id: 1,
    icon: BrainCircuit,
    title: "Matemáticas: El lenguaje de la IA",
    description: "El álgebra lineal, cálculo y estadística son la base para algoritmos de aprendizaje automático",
    image: "/lovable-uploads/cartoon-math-4.png"
  },
  {
    id: 2,
    icon: Calculator,
    title: "Fundamentos matemáticos para el futuro",
    description: "Las matemáticas son esenciales para entender y desarrollar modelos de IA cada vez más complejos",
    image: "/lovable-uploads/75e6df88-7d5d-44d5-861b-5ce0b13f43b4.png"
  },
  {
    id: 3,
    icon: LineChart,
    title: "Análisis de datos y patrones",
    description: "La estadística permite interpretar los datos que alimentan los sistemas de IA modernos",
    image: "/lovable-uploads/cartoon-math-6.png"
  },
  {
    id: 4,
    icon: Code,
    title: "Programación guiada por matemáticas",
    description: "El desarrollo de software actual requiere sólidas bases matemáticas para optimizar algoritmos",
    image: "/lovable-uploads/cartoon-math-7.png"
  },
  {
    id: 5,
    icon: Network,
    title: "Redes neuronales y matemática avanzada",
    description: "Las redes que aprenden y se adaptan son posibles gracias al cálculo multivariable",
    image: "/lovable-uploads/cartoon-math-5.png"
  },
  {
    id: 6,
    icon: Lightbulb,
    title: "Resolución de problemas complejos",
    description: "Las matemáticas nos enseñan a descomponer problemas difíciles en partes manejables",
    image: "/lovable-uploads/cartoonmath1.png"
  },
  {
    id: 7,
    icon: Cpu,
    title: "IA en nuestro día a día",
    description: "Desde asistentes virtuales hasta recomendaciones personalizadas, la IA matemática nos rodea",
    image: "/lovable-uploads/cartoonmath2.jpg"
  }
];

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  
  return (
    <div className="py-20 bg-background text-foreground relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-background/80 to-background"></div>
        <div className="absolute h-full w-full opacity-30">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 204, 255, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
            Matemáticas y la IA: <span className="text-primary">Una Convergencia Necesaria</span>
          </h2>
          <div className="h-1 w-40 mx-auto my-6 bg-primary"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Las matemáticas son el fundamento esencial para las carreras del futuro, especialmente en el desarrollo de la Inteligencia Artificial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Lista de características */}
          <div className="space-y-3">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="feature-item"
                onMouseEnter={() => setActiveFeature(feature)}
              >
                <div
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-150 flex items-center gap-3 
                    ${activeFeature.id === feature.id ? 
                      'bg-card border-l-4 border-primary' : 
                      'border-l-4 border-transparent hover:bg-card/50'}`}
                >
                  <div className={`p-2 rounded-full ${activeFeature.id === feature.id ? 'bg-primary/20' : 'bg-muted'} text-primary flex-shrink-0`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <p className="font-medium">{feature.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Área de detalles para la característica activa */}
          <div className="lg:sticky lg:top-24">
            <Card className="glass-card border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                {/* Imagen destacada */}
                <div className="relative h-[250px] overflow-hidden">
                  <img 
                    src={activeFeature.image} 
                    alt={activeFeature.title}
                    className="w-full h-full object-cover transition-opacity duration-150"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                  <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-primary"></div>
                </div>
                
                {/* Descripción */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{activeFeature.title}</h3>
                  <p className="text-muted-foreground mb-4">{activeFeature.description}</p>
                  
                  <div className="mt-4 flex justify-end">
                    <Button className="bg-primary hover:bg-primary/80 text-foreground">
                      Aprender más
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Nueva sección AI + Matemáticas */}
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
              
              <Button className="mt-6 bg-primary hover:bg-primary/80 text-foreground">
                Descubre nuestros cursos
              </Button>
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
      </div>
    </div>
  );
};

export default InteractiveFeatures;
