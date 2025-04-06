
import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Calculator, 
  LineChart, 
  Code, 
  Network, 
  Lightbulb,
  Cpu
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
    <div className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Matemáticas y la IA:</span> una 
            <br className="md:hidden" /> convergencia necesaria
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Las matemáticas son el fundamento esencial para las carreras del futuro, especialmente en el desarrollo de la Inteligencia Artificial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Lista de características */}
          <div className="space-y-3">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="feature-item"
                onMouseEnter={() => setActiveFeature(feature)}
              >
                <div
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-150 flex items-center gap-3 hover:bg-gray-900 ${
                    activeFeature.id === feature.id ? 'bg-gray-900 border-l-4 border-accent' : 'border-l-4 border-transparent'
                  }`}
                >
                  <div className="p-2 rounded-full bg-gray-800 text-accent flex-shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <p className="font-medium">{feature.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Área de detalles para la característica activa */}
          <div className="lg:sticky lg:top-24">
            <Card className="bg-gray-900 border-none overflow-hidden">
              <CardContent className="p-0">
                {/* Imagen destacada */}
                <div className="relative h-[250px] overflow-hidden">
                  <img 
                    src={activeFeature.image} 
                    alt={activeFeature.title}
                    className="w-full h-full object-cover transition-opacity duration-150"
                  />
                  <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-accent"></div>
                </div>
                
                {/* Descripción */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{activeFeature.title}</h3>
                  <p className="text-gray-300 mb-4">{activeFeature.description}</p>
                  
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                      Aprender más
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Nueva sección AI + Matemáticas */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                La IA está transformando el mundo, <span className="text-accent">las matemáticas son tu ventaja</span>
              </h3>
              
              <p className="text-gray-300">
                En un mundo donde la Inteligencia Artificial se integra cada vez más en nuestra vida cotidiana,
                comprender las matemáticas que hay detrás de estos sistemas te da una ventaja competitiva en carreras
                como desarrollo de software, ciencia de datos e ingeniería de sistemas.
              </p>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="rounded-full bg-accent/20 p-1 mr-3 mt-1">
                    <Cpu className="w-4 h-4 text-accent" />
                  </div>
                  <span>Los algoritmos de IA que usas diariamente están construidos sobre conceptos matemáticos</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-accent/20 p-1 mr-3 mt-1">
                    <Code className="w-4 h-4 text-accent" />
                  </div>
                  <span>El desarrollo de software moderno requiere sólidas habilidades matemáticas para optimización</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-accent/20 p-1 mr-3 mt-1">
                    <Calculator className="w-4 h-4 text-accent" />
                  </div>
                  <span>Las matemáticas te enseñan a pensar de forma lógica y estructurada, esencial para la programación</span>
                </li>
              </ul>
              
              <Button className="mt-4 bg-accent hover:bg-accent/90 text-white">
                Descubre nuestros cursos
              </Button>
            </div>
            
            <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="IA y Matemáticas" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-xl font-bold text-white">
                    "La matemática es el alfabeto con el que Dios ha escrito el universo, y ahora también la inteligencia artificial."
                  </p>
                  <p className="text-accent mt-2">— Inspirado en Galileo Galilei</p>
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
