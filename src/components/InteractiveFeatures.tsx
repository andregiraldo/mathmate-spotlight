
import React, { useState } from 'react';
import { 
  Play, 
  MapPin, 
  LineChart, 
  Sparkles, 
  Download, 
  BarChart3, 
  Calendar 
} from 'lucide-react';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: 1,
    icon: Play,
    title: "Aprende algo nuevo cada 5 minutos",
    description: "Lecciones cortas y efectivas para aprender matemáticas rápidamente",
    image: "/lovable-uploads/cartoonmath1.png"
  },
  {
    id: 2,
    icon: MapPin,
    title: "Rutas personalizadas de aprendizaje",
    description: "Desde principiante hasta niveles avanzados con planes adaptados a tus necesidades",
    image: "/lovable-uploads/75e6df88-7d5d-44d5-861b-5ce0b13f43b4.png"
  },
  {
    id: 3,
    icon: LineChart,
    title: "Pon a prueba tu progreso de forma interactiva",
    description: "Ejercicios y evaluaciones para medir tu avance de manera efectiva",
    image: "/lovable-uploads/cartoon-math-4.png"
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Métodos didácticos innovadores",
    description: "Técnicas de enseñanza que facilitan la comprensión de conceptos complejos",
    image: "/lovable-uploads/cartoon-math-5.png"
  },
  {
    id: 5,
    icon: Download,
    title: "Material descargable para estudio offline",
    description: "Accede a recursos educativos sin necesidad de internet",
    image: "/lovable-uploads/cartoon-math-6.png"
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Seguimiento detallado de tu progreso",
    description: "Estadísticas personalizadas para identificar fortalezas y áreas de mejora",
    image: "/lovable-uploads/cartoon-math-7.png"
  },
  {
    id: 7,
    icon: Calendar,
    title: "Organiza tu plan de estudio personalizado",
    description: "Crea un calendario de aprendizaje adaptado a tu ritmo y disponibilidad",
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
            <span className="text-accent">Somos la autoridad</span> en 
            <br className="md:hidden" /> enseñanza de matemáticas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Métodos efectivos y personalizados para todos los niveles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lista de características */}
          <div className="space-y-2">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="feature-item"
                onMouseEnter={() => setActiveFeature(feature)}
              >
                <Button
                  variant="ghost"
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-4 hover:bg-gray-900 ${
                    activeFeature.id === feature.id ? 'bg-gray-900 border-l-4 border-accent' : ''
                  }`}
                >
                  <div className="p-3 rounded-full bg-gray-800 text-accent group-hover:bg-accent/20">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{feature.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                  </div>
                </Button>
              </div>
            ))}
          </div>

          {/* Imagen destacada de la característica activa */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div 
              className="bg-gray-900 p-4 rounded-xl shadow-xl w-full max-w-md overflow-hidden transition-all duration-500" 
              style={{height: "400px"}}
            >
              <img 
                src={activeFeature.image} 
                alt={activeFeature.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
