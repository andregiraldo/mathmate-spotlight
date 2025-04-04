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
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
    image: "https://images.unsplash.com/photo-1515378960618-05ce2c7243d0?q=80&w=1000&auto=format&fit=crop"
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
          <div className="space-y-2">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="relative"
                /*onMouseEnter={() => setActiveFeature(feature)}*/
              >
                <button
                  className={`group w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-4 hover:bg-gray-900 ${
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
                </button>
                
                {/* We'll only render the HoverCard content for desktop */}
                <div className="hidden lg:block">
                  <HoverCard openDelay={200} closeDelay={200}>
  <HoverCardTrigger asChild>
    <button
      className={`group w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-4 hover:bg-gray-900 ${
        activeFeature.id === feature.id ? 'bg-gray-900 border-l-4 border-accent' : ''
      }`}
      onMouseEnter={() => setActiveFeature(feature)}
    >
      <div className="p-3 rounded-full bg-gray-800 text-accent group-hover:bg-accent/20">
        <feature.icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-medium text-lg">{feature.title}</h3>
        <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
      </div>
    </button>
  </HoverCardTrigger>
  <HoverCardContent 
    side="right" 
    align="start" 
    className="w-80 p-0 bg-gray-900 border-gray-800"
  >
    <img 
      src={feature.image} 
      alt={feature.title} 
      className="rounded-md w-full h-auto object-cover"
    />
  </HoverCardContent>
</HoverCard>
                </div>
              </div>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <div className="bg-gray-900 p-4 rounded-xl shadow-xl">
              <img 
                src={activeFeature.image} 
                alt={activeFeature.title}
                className="w-full h-auto rounded-lg object-cover"
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
