
export const blogCategories = [
  {
    id: 'algebra',
    name: 'Álgebra',
  },
  {
    id: 'calculus',
    name: 'Cálculo',
  },
  {
    id: 'geometry',
    name: 'Geometría',
  },
  {
    id: 'statistics',
    name: 'Estadística',
  },
  {
    id: 'tips',
    name: 'Consejos de estudio',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Cómo dominar las ecuaciones de segundo grado',
    slug: 'como-dominar-ecuaciones-segundo-grado',
    excerpt: 'Aprende técnicas para resolver fácilmente ecuaciones cuadráticas con ejemplos prácticos.',
    content: `
      <p>Las ecuaciones de segundo grado son fundamentales en el álgebra y aparecen en muchos problemas prácticos. En este artículo, vamos a explorar diferentes métodos para resolverlas de manera eficiente.</p>
      
      <h2>¿Qué es una ecuación de segundo grado?</h2>
      
      <p>Una ecuación de segundo grado tiene la forma general:</p>
      
      <p class="text-center font-bold">ax² + bx + c = 0</p>
      
      <p>Donde a, b, y c son coeficientes constantes, y a ≠ 0.</p>
      
      <h2>Método 1: La fórmula general</h2>
      
      <p>La solución viene dada por la fórmula:</p>
      
      <p class="text-center font-bold">x = (-b ± √(b² - 4ac)) / 2a</p>
      
      <p>Esta fórmula nos da dos posibles valores para x, que son las raíces de la ecuación.</p>
      
      <h2>Método 2: Factorización</h2>
      
      <p>Si la ecuación puede factorizarse, podemos escribirla como:</p>
      
      <p class="text-center font-bold">(x - r)(x - s) = 0</p>
      
      <p>Donde r y s son las raíces de la ecuación. Entonces, las soluciones son x = r y x = s.</p>
      
      <h2>Ejemplo práctico</h2>
      
      <p>Resolvamos la ecuación: x² - 5x + 6 = 0</p>
      
      <p>Usando factorización:</p>
      
      <p>x² - 5x + 6 = 0</p>
      <p>(x - 2)(x - 3) = 0</p>
      
      <p>Por lo tanto, x = 2 o x = 3</p>
      
      <h2>Conclusión</h2>
      
      <p>Dominar la resolución de ecuaciones de segundo grado te permitirá resolver una amplia variedad de problemas matemáticos. Practica estos métodos y pronto te resultarán naturales.</p>
    `,
    category: 'algebra',
    tags: ['ecuaciones', 'álgebra', 'matemáticas básicas'],
    date: '1 abril, 2024',
    author: 'Prof. Luz Marina Vergara',
    coverImage: '/lovable-uploads/foto-mate22.png',
  },
  {
    id: 2,
    title: 'Introducción a las derivadas: conceptos básicos',
    slug: 'introduccion-derivadas-conceptos-basicos',
    excerpt: 'Un primer acercamiento al cálculo diferencial y su aplicación en problemas cotidianos.',
    content: `
      <p>Las derivadas son uno de los conceptos fundamentales del cálculo. En este artículo introductorio, exploraremos qué son y cómo se utilizan.</p>
      
      <h2>¿Qué es una derivada?</h2>
      
      <p>La derivada de una función en un punto específico mide la tasa de cambio instantánea de la función en ese punto. Geométricamente, representa la pendiente de la recta tangente a la gráfica de la función en ese punto.</p>
      
      <h2>Notación de la derivada</h2>
      
      <p>Si tenemos una función f(x), su derivada se puede denotar de varias formas:</p>
      
      <ul>
        <li>f'(x) - Notación de Lagrange</li>
        <li>df/dx - Notación de Leibniz</li>
        <li>Df - Notación de operador</li>
      </ul>
      
      <h2>Reglas básicas de derivación</h2>
      
      <p>Algunas reglas fundamentales son:</p>
      
      <ol>
        <li>La derivada de una constante es cero: Si f(x) = c, entonces f'(x) = 0</li>
        <li>La derivada de x^n es nx^(n-1): Si f(x) = x^n, entonces f'(x) = nx^(n-1)</li>
        <li>Regla de la suma: (f + g)' = f' + g'</li>
        <li>Regla del producto: (f · g)' = f' · g + f · g'</li>
      </ol>
      
      <h2>Aplicaciones prácticas</h2>
      
      <p>Las derivadas tienen numerosas aplicaciones:</p>
      
      <ul>
        <li>Cálculo de velocidad y aceleración en física</li>
        <li>Optimización de funciones (máximos y mínimos)</li>
        <li>Análisis de crecimiento y decrecimiento</li>
        <li>Aplicaciones en economía, ingeniería y ciencias</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>Comprender las derivadas es fundamental para avanzar en el estudio del cálculo. Con práctica, estos conceptos se volverán más intuitivos y podrás aplicarlos a una variedad de problemas.</p>
    `,
    category: 'calculus',
    tags: ['cálculo', 'derivadas', 'matemáticas avanzadas'],
    date: '3 abril, 2025',
    author: 'Prof. Luz Marina Vergara',
    coverImage: '/lovable-uploads/foto-mate23.png',
  },
  {
    id: 3,
    title: 'Los teoremas de Pitágoras y Tales: pilares de la geometría',
    slug: 'teoremas-pitagoras-tales-pilares-geometria',
    excerpt: 'Explora dos de los teoremas más importantes de la geometría y sus aplicaciones prácticas.',
    content: `
      <p>Los teoremas de Pitágoras y Tales son fundamentales en la geometría. Veamos en qué consisten y cómo aplicarlos.</p>
      
      <h2>El teorema de Pitágoras</h2>
      
      <p>El teorema de Pitágoras establece que en un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.</p>
      
      <p class="text-center font-bold">c² = a² + b²</p>
      
      <p>donde c es la hipotenusa y a y b son los catetos.</p>
      
      <h3>Aplicaciones prácticas</h3>
      
      <ul>
        <li>Cálculo de distancias</li>
        <li>Construcción y arquitectura</li>
        <li>Navegación</li>
      </ul>
      
      <h2>El teorema de Tales</h2>
      
      <p>El teorema de Tales afirma que si tres o más rectas paralelas son cortadas por dos rectas transversales, entonces los segmentos determinados sobre las transversales son proporcionales.</p>
      
      <h3>Aplicaciones prácticas</h3>
      
      <ul>
        <li>Cálculo de alturas inaccesibles</li>
        <li>Semejanza de triángulos</li>
        <li>Cartografía</li>
      </ul>
      
      <h2>Ejemplo de aplicación</h2>
      
      <p>Imagina que quieres medir la altura de un árbol. Puedes utilizar el teorema de Tales colocando un palo de altura conocida y midiendo las sombras proyectadas por el palo y el árbol.</p>
      
      <p>Si el palo mide 1 metro y su sombra mide 2 metros, mientras que la sombra del árbol mide 10 metros, entonces la altura del árbol será:</p>
      
      <p class="text-center">altura del árbol = (1 metro × 10 metros) ÷ 2 metros = 5 metros</p>
      
      <h2>Conclusión</h2>
      
      <p>Estos dos teoremas son herramientas poderosas que permiten resolver numerosos problemas geométricos. Su comprensión es esencial para el estudio de la geometría y sus aplicaciones.</p>
    `,
    category: 'geometry',
    tags: ['geometría', 'teoremas', 'Pitágoras', 'Tales'],
    date: '8 abril, 2025',
    author: 'Prof. Luz Marina Vergara',
    coverImage: '/lovable-uploads/foto-mate24.png',
  },
  {
    id: 4,
    title: 'Probabilidad básica: conceptos fundamentales',
    slug: 'probabilidad-basica-conceptos-fundamentales',
    excerpt: 'Aprende los conceptos básicos de probabilidad que todo estudiante debe conocer.',
    content: `
      <p>La probabilidad es una rama de las matemáticas que estudia los fenómenos aleatorios. Vamos a explorar sus conceptos fundamentales.</p>
      
      <h2>¿Qué es la probabilidad?</h2>
      
      <p>La probabilidad mide la posibilidad de que ocurra un evento. Se expresa como un número entre 0 y 1, donde 0 indica imposibilidad y 1 indica certeza.</p>
      
      <h2>Conceptos básicos</h2>
      
      <h3>Espacio muestral</h3>
      
      <p>El espacio muestral (Ω) es el conjunto de todos los posibles resultados de un experimento aleatorio.</p>
      
      <p>Ejemplo: Al lanzar un dado, el espacio muestral es Ω = {1, 2, 3, 4, 5, 6}</p>
      
      <h3>Eventos</h3>
      
      <p>Un evento es un subconjunto del espacio muestral.</p>
      
      <p>Ejemplo: El evento "obtener un número par" al lanzar un dado es E = {2, 4, 6}</p>
      
      <h2>Cálculo de probabilidades</h2>
      
      <p>La probabilidad de un evento E se calcula como:</p>
      
      <p class="text-center font-bold">P(E) = Número de resultados favorables / Número total de resultados posibles</p>
      
      <p>Ejemplo: La probabilidad de obtener un número par al lanzar un dado es:</p>
      
      <p class="text-center">P(E) = 3/6 = 1/2 = 0.5 = 50%</p>
      
      <h2>Reglas básicas</h2>
      
      <h3>Regla de la suma</h3>
      
      <p>Para eventos mutuamente excluyentes A y B (no pueden ocurrir simultáneamente):</p>
      
      <p class="text-center font-bold">P(A o B) = P(A) + P(B)</p>
      
      <h3>Regla del producto</h3>
      
      <p>Para eventos independientes A y B:</p>
      
      <p class="text-center font-bold">P(A y B) = P(A) × P(B)</p>
      
      <h2>Conclusión</h2>
      
      <p>Comprender estos conceptos básicos de probabilidad es fundamental para abordar problemas más complejos en estadística y análisis de datos.</p>
    `,
    category: 'statistics',
    tags: ['probabilidad', 'estadística', 'matemáticas aplicadas'],
    date: '1o abril, 2025',
    author: 'Prof. Luz Marina Vergara',
    coverImage: '/lovable-uploads/foto-mate25.png',
  },
  {
    id: 5,
    title: '5 técnicas efectivas para memorizar fórmulas matemáticas',
    slug: '5-tecnicas-efectivas-memorizar-formulas-matematicas',
    excerpt: 'Estrategias prácticas para recordar fórmulas matemáticas de manera efectiva y duradera.',
    content: `
      <p>Memorizar fórmulas matemáticas puede ser un desafío. Aquí te presentamos 5 técnicas efectivas que te ayudarán a retenerlas mejor.</p>
      
      <h2>1. Comprensión antes que memorización</h2>
      
      <p>Antes de intentar memorizar una fórmula, asegúrate de entender su significado y de dónde proviene. La comprensión profunda facilita enormemente la memorización.</p>
      
      <p>Por ejemplo, para la fórmula del área de un círculo (A = πr²), comprende que representa la suma de infinitos triángulos pequeños cuya base es la circunferencia y su altura es el radio.</p>
      
      <h2>2. Visualización y asociación</h2>
      
      <p>Crea imágenes mentales o asociaciones que te ayuden a recordar las fórmulas.</p>
      
      <p>Por ejemplo, para la fórmula de la energía (E = mc²), puedes imaginar que la energía (E) es un cohete muy rápido porque está multiplicada por la velocidad de la luz al cuadrado (c²).</p>
      
      <h2>3. Repetición espaciada</h2>
      
      <p>En lugar de estudiar intensamente en una sola sesión, distribuye tu práctica a lo largo del tiempo. Repasa las fórmulas en intervalos crecientes.</p>
      
      <p>Por ejemplo: repasa una fórmula después de 1 día, luego después de 3 días, luego después de una semana, etc.</p>
      
      <h2>4. Tarjetas de estudio (flashcards)</h2>
      
      <p>Crea tarjetas con la fórmula en un lado y su explicación o aplicación en el otro. Revísalas regularmente.</p>
      
      <p>Puedes usar aplicaciones como Anki o Quizlet que implementan sistemas de repetición espaciada automáticamente.</p>
      
      <h2>5. Enseña a otros</h2>
      
      <p>Explicar una fórmula a otra persona (o incluso a ti mismo en voz alta) es una de las mejores formas de consolidar tu comprensión y memoria.</p>
      
      <p>Si puedes explicar claramente una fórmula sin consultar tus notas, probablemente la has aprendido bien.</p>
      
      <h2>Conclusión</h2>
      
      <p>Recuerda que la memorización efectiva de fórmulas matemáticas no consiste en aprenderlas de memoria sin entenderlas, sino en construir una comprensión sólida que permita recordarlas y aplicarlas correctamente.</p>
    `,
    category: 'tips',
    tags: ['técnicas de estudio', 'memorización', 'consejos'],
    date: '15 abril, 2025',
    author: 'Prof. Luz Marina Vergara',
    coverImage: '/lovable-uploads/foto-mate26.png',
  },
  {
    id: 6,
    title: 'Matrices y determinantes: fundamentos básicos',
    slug: 'matrices-determinantes-fundamentos-basicos',
    excerpt: 'Una introducción clara a las matrices y determinantes para estudiantes de álgebra lineal.',
    content: `
      <p>Las matrices y determinantes son conceptos fundamentales en álgebra lineal. Veamos sus aspectos básicos.</p>
      
      <h2>¿Qué es una matriz?</h2>
      
      <p>Una matriz es un arreglo rectangular de números organizados en filas y columnas. Se denota generalmente con letras mayúsculas.</p>
      
      <p>Ejemplo de una matriz 2×3 (2 filas, 3 columnas):</p>
      
      <pre>
A = [1 2 3]
    [4 5 6]
      </pre>
      
      <h2>Operaciones con matrices</h2>
      
      <h3>Suma de matrices</h3>
      
      <p>Para sumar dos matrices, se suman los elementos correspondientes. Las matrices deben tener las mismas dimensiones.</p>
      
      <h3>Multiplicación por un escalar</h3>
      
      <p>Para multiplicar una matriz por un número (escalar), se multiplica cada elemento de la matriz por ese número.</p>
      
      <h3>Multiplicación de matrices</h3>
      
      <p>La multiplicación de matrices A × B requiere que el número de columnas de A sea igual al número de filas de B.</p>
      
      <h2>¿Qué es un determinante?</h2>
      
      <p>El determinante es un número asociado a una matriz cuadrada (mismo número de filas que de columnas). Se denota como det(A) o |A|.</p>
      
      <h3>Determinante de una matriz 2×2</h3>
      
      <p>Para una matriz 2×2:</p>
      
      <pre>
A = [a b]
    [c d]
      </pre>
      
      <p>El determinante se calcula como:</p>
      
      <p class="text-center font-bold">det(A) = ad - bc</p>
      
      <h2>Aplicaciones</h2>
      
      <ul>
        <li>Resolución de sistemas de ecuaciones lineales</li>
        <li>Transformaciones geométricas</li>
        <li>Cálculo de áreas y volúmenes</li>
        <li>Codificación y criptografía</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>Las matrices y determinantes son herramientas poderosas en matemáticas con numerosas aplicaciones prácticas. Dominar estos conceptos es fundamental para avanzar en álgebra lineal.</p>
    `,
    category: 'algebra',
    tags: ['álgebra lineal', 'matrices', 'determinantes'],
    date: '17 abril, 2025',
    author: 'Prof. Luz Marina Vergara',
    coverImage: '/lovable-uploads/foto-mate27.png',
  },
];
