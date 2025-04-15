
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
import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: BrainCircuit,
    title: "Matemáticas: El lenguaje de la IA",
    description: "El álgebra lineal, cálculo y estadística son la base para algoritmos de aprendizaje automático",
    image: "/lovable-uploads/foto-mate13.png"
  },
  {
    id: 2,
    icon: Calculator,
    title: "Fundamentos matemáticos para el futuro",
    description: "Las matemáticas son esenciales para entender y desarrollar modelos de IA cada vez más complejos",
    image: "/lovable-uploads/foto-mate20.png"
  },
  {
    id: 3,
    icon: LineChart,
    title: "Análisis de datos y patrones",
    description: "La estadística permite interpretar los datos que alimentan los sistemas de IA modernos",
    image: "/lovable-uploads/foto-mate15.png"
  },
  {
    id: 4,
    icon: Code,
    title: "Programación guiada por matemáticas",
    description: "El desarrollo de software actual requiere sólidas bases matemáticas para optimizar algoritmos",
    image: "/lovable-uploads/foto-mate16.png"
  },
  {
    id: 5,
    icon: Network,
    title: "Redes neuronales y matemática avanzada",
    description: "Las redes que aprenden y se adaptan son posibles gracias al cálculo multivariable",
    image: "/lovable-uploads/foto-mate17.png"
  },
  {
    id: 6,
    icon: Lightbulb,
    title: "Resolución de problemas complejos",
    description: "Las matemáticas nos enseñan a descomponer problemas difíciles en partes manejables",
    image: "/lovable-uploads/foto-mate18.png"
  },
  {
    id: 7,
    icon: Cpu,
    title: "IA en nuestro día a día",
    description: "Desde asistentes virtuales hasta recomendaciones personalizadas, la IA matemática nos rodea",
    image: "/lovable-uploads/foto-mate19.png"
  }
];
