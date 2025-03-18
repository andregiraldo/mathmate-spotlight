
export type Course = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: number;
  image: string;
  longDescription?: string;
  topics?: string[];
  price?: string;
};

export const courses: Course[] = [
  {
    id: "clase",
    title: "Clase Personalizada",
    description: "Aprende a tu ritmo con explicaciones claras y ejercicios adaptados a ti. Juntos haremos que las matemáticas sean más fáciles y comprensibles.",
    longDescription: "Cada estudiante aprende de forma diferente, y en esta clase personalizada nos enfocamos en tu ritmo y necesidades. Con explicaciones claras, ejercicios adaptados y un enfoque práctico, harás que las matemáticas sean más comprensibles y hasta divertidas. ¡Atrévete a aprender sin miedo y a dominar los números con confianza!.",
    level: "Principiante",
    duration: "60 minutos",
    students: 1,
    price: "$40.000",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    topics: [
      "Ecuaciones lineales y sistemas",
      "Polinomios y factorización",
      "Funciones cuadráticas",
      "Expresiones racionales",
      "Exponentes y logaritmos"
    ]
  },
  {
    id: "algebra",
    title: "Álgebra Fundamental",
    description: "Aprende los conceptos básicos del álgebra que forman la base de las matemáticas avanzadas.",
    longDescription: "El curso de Álgebra Fundamental está diseñado para estudiantes que desean fortalecer sus bases matemáticas. Desde ecuaciones lineales hasta funciones cuadráticas, este curso te proporcionará las herramientas necesarias para resolver problemas algebraicos y te preparará para estudios más avanzados en matemáticas, ciencias e ingeniería.",
    level: "Principiante",
    duration: "8 semanas",
    students: 120,
    price: "$250.000",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    topics: [
      "Ecuaciones lineales y sistemas",
      "Polinomios y factorización",
      "Funciones cuadráticas",
      "Expresiones racionales",
      "Exponentes y logaritmos"
    ]
  },
  {
    id: "calculo",
    title: "Cálculo Diferencial",
    description: "Domina las técnicas de diferenciación y sus aplicaciones en problemas del mundo real.",
    longDescription: "El curso de Cálculo Diferencial explora los conceptos fundamentales del cálculo, centrándose en límites, continuidad y derivadas. Aprenderás a calcular derivadas usando diferentes reglas y técnicas, y cómo aplicarlas para resolver problemas de optimización, tasas relacionadas y análisis de funciones. Este curso es esencial para estudiantes de ciencias, ingeniería y economía.",
    level: "Intermedio",
    duration: "10 semanas",
    students: 85,
    price: "$300.000",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    topics: [
      "Límites y continuidad",
      "Definición de derivada",
      "Reglas de derivación",
      "Aplicaciones: máximos y mínimos",
      "Derivación implícita y tasas relacionadas"
    ]
  },
  {
    id: "estadistica",
    title: "Estadística y Probabilidad",
    description: "Aprende a analizar datos, hacer predicciones y tomar decisiones basadas en evidencia.",
    longDescription: "El curso de Estadística y Probabilidad te introduce en el mundo del análisis de datos y la inferencia estadística. Desde la estadística descriptiva hasta los conceptos de probabilidad, distribuciones y pruebas de hipótesis, este curso te dará las herramientas para interpretar datos, hacer predicciones fundamentadas y tomar decisiones basadas en evidencia en diversos campos profesionales.",
    level: "Intermedio",
    duration: "12 semanas",
    students: 95,
    price: "$320.000",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    topics: [
      "Estadística descriptiva",
      "Probabilidad y distribuciones",
      "Variables aleatorias",
      "Inferencia estadística",
      "Pruebas de hipótesis",
      "Regresión y correlación"
    ]
  }
];
