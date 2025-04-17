
export type Course = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: string;
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
    level: "Todos los niveles",
    duration: "60 minutos",
    students: 1,
    price: "$35.000",
    image: "/lovable-uploads/foto-mate9.png",
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
    level: "Principiante o Intermedio",
    duration: "8 horas mensuales: 2 horas semanales ajustados a tu preferencia",
    students: "Entre 3 y 5",
    price: "$150.000",
    image: "/lovable-uploads/foto-mate2.png",
    topics: [
      "Números y Operaciones Básicas",
      "Ecuaciones de primer grado",
      "Plano Cartesiano",
      "Ecuaciones de Segundo Grado",
      "Factorización",
      "Producto Notable",
      "Polinomios",
      "Sistemas de Ecuaciones",
      "Exponentes y logaritmos",
      "Desigualdades",
      "Funciones Líneales y Cuadráticas",
      "Radicales",
      "Simplificación de Fracciones Algebraicas",
      "Multiplicación y División de Fracciones con Polinomios"
    ]
  },
  {
    id: "algebra lineal",
    title: "Álgebra Líneal",
    description: "Comprende los elementos esenciales del álgebra lineal que sirven como base para la resolución de sistemas y el análisis vectorial",
    longDescription: "En esta sección introductoria del curso de Álgebra Lineal, explorarás conceptos como vectores, matrices, operaciones básicas y sistemas de ecuaciones lineales. Ideal para estudiantes que están comenzando en el mundo del álgebra lineal o que desean reforzar su comprensión antes de avanzar.",
    level: "Principiante o Intermedio",
    duration: "8 horas mensuales: 2 horas semanales ajustados a tu preferencia",
    students: "Entre 3 y 5",
    price: "$200.000",
    image: "/lovable-uploads/foto-mate2.png",
    topics: [
      "Sistemas de Ecuaciones Líneales - Método Gauss",
      "Vectores",
      "Matrices",
      "Determinantes",
      "Regla de Cramer",
      "Vectores en R2 y R3",
      "Producto Escalar"
    ]
  },
  {
    id: "calculo integral",
    title: "Cálculo Integral",
    description: "Aprende a calcular áreas, volúmenes y resolver problemas con funciones continuas usando integrales.",
    longDescription: "El curso de Cálculo Integral te introduce en el análisis de funciones continuas a través del concepto de la integral. Estudiarás técnicas de integración, aplicaciones geométricas y físicas, y la conexión entre derivadas e integrales mediante el teorema fundamental del cálculo. Este curso te proporcionará una base sólida para resolver problemas en matemáticas, física, economía e ingeniería.",
    level: "Principiante o Intermedio",
    duration: "8 horas mensuales: 2 horas semanales ajustados a tu preferencia",
    students: "Entre 3 y 5",
    price: "$200.000",
    image: "/lovable-uploads/foto-mate3.png",
    topics: [
      "Integrales Indefinidas",
      "Reglas de Integración",
      "Integrales Definidas",
      "Integración por Partes",
      "Función Primitiva",
      "Ecuaciones Diferenciales",
      "Teorema fundamental del calculo", 
      "Aplicación de la Derivada"
    ]
  },
  {
    id: "calculo",
    title: "Cálculo Diferencial",
    description: "Domina las técnicas de diferenciación y sus aplicaciones en problemas del mundo real.",
    longDescription: "El curso de Cálculo Diferencial explora los conceptos fundamentales del cálculo, centrándose en límites de una función, continuidad, derivadas, resolver problemas de optimización e identificar máximos y mínimos. Aprenderás a calcular derivadas usando diferentes reglas y técnicas, y cómo aplicarlas para resolver problemas de optimización, tasas relacionadas y análisis de funciones. Este curso es esencial para estudiantes de ciencias, ingeniería y economía.",
    level: "Principiante o Intermedio",
    duration: "8 horas mensuales: 2 horas semanales ajustados a tu preferencia",
    students: "Entre 3 y 5",
    price: "$200.000",
    image: "/lovable-uploads/foto-mate4.png",
    topics: [
      "Inecuaciones",
      "Funciones y Límites",
      "Derivadas",
      "Derivadas de Orden Superior",
      "Máximos y Mínimos",
      "Derivadas de Funciones Exponenciales y Logarítmicas",
      "Derivadas de Funciones Trigonométricas"
    ]
  },
  {
    id: "trigonometria",
    title: "Trigonometría",
    description: "Explora las funciones trigonométricas y su aplicación en la resolución de triángulos y fenómenos periódicos.",
    longDescription: "El curso de Trigonometría te permite comprender y aplicar las razones trigonométricas, las funciones seno, coseno y tangente, así como sus gráficas y transformaciones. Aprenderás a resolver triángulos, modelar movimientos periódicos y aplicar conceptos en contextos reales como la física, la arquitectura y la ingeniería. Este curso es esencial para avanzar en matemáticas y ciencias aplicadas.",
    level: "Principiante o Intermedio",
    duration: "8 horas mensuales: 2 horas semanales ajustados a tu preferencia",
    students: "Entre 3 y 5",
    price: "$150.000",
    image: "/lovable-uploads/foto-mate5.png",
    topics: [
      "Funciones Trigonometricas",
      "Graficas",
      "Razones Trigonometricas",
      "Identidades Trigonometricas",
      "Estadistica Descriptiva",
      "Estadistica Diferencial",
      "Ecuaciones Trigonométricas",
      "Teorema del seno y el coseno",
      "Aplicaciones de la Trigonometría"
    ]
  },
  {
    id: "estadistica",
    title: "Estadística y Probabilidad",
    description: "Aprende a analizar datos, hacer predicciones y tomar decisiones basadas en evidencia.",
    longDescription: "El curso de Estadística y Probabilidad te introduce en el mundo del análisis de datos y la inferencia estadística. Desde la estadística descriptiva hasta los conceptos de probabilidad, distribuciones y pruebas de hipótesis, este curso te dará las herramientas para interpretar datos, hacer predicciones fundamentadas y tomar decisiones basadas en evidencia en diversos campos profesionales.",
    level: "Intermedio",
    duration: "8 horas mensuales: 2 horas semanales ajustados a tu preferencia",
    students: "Entre 3 y 5",
    price: "$170.000",
    image: "/lovable-uploads/foto-mate6.png",
    topics: [
      "Estadística descriptiva",
      "Probabilidad y distribuciones",
      "Variables aleatorias",
      "Inferencia estadística",
      "Pruebas de hipótesis",
      "Regresión y correlación",
      "Análisis estadistico de datos muestrales",
      "Tablas de Análisis",
      "Media, Mediana y Moda",
      "Varianza y Desviación Estandar"
    ]
  }
];
