
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Play, Video, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  // Lista de videos educativos completa
  const allVideos = [
    {
      id: 1,
      title: "Cálculo Integral: Conceptos Fundamentales",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      duration: "15:42",
      category: "Cálculo",
      description: "Aprende los conceptos básicos del cálculo integral y cómo aplicarlos en problemas prácticos.",
      videoUrl: "https://www.youtube.com/embed/5mccm4x6vMw"
    },
    {
      id: 2,
      title: "Matemáticas para Machine Learning",
      thumbnail: "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=2072&auto=format&fit=crop",
      duration: "12:23",
      category: "IA",
      description: "Descubre los fundamentos matemáticos necesarios para comprender los algoritmos de machine learning.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Álgebra Lineal: Aplicaciones Prácticas",
      thumbnail: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop",
      duration: "18:15",
      category: "Álgebra",
      description: "Explora las aplicaciones prácticas del álgebra lineal en la ciencia de datos y la ingeniería.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Probabilidad y Estadística en la IA",
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
      duration: "21:30",
      category: "IA",
      description: "Comprende cómo la probabilidad y la estadística son fundamentales para los modelos de inteligencia artificial.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Geometría Analítica: Vectores y Espacios",
      thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop",
      duration: "16:45",
      category: "Geometría",
      description: "Aprende sobre vectores, espacios vectoriales y su aplicación en la geometría analítica.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Estadística Inferencial y Análisis de Datos",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      duration: "19:30",
      category: "Estadística",
      description: "Descubre cómo utilizar la estadística inferencial para analizar conjuntos de datos y extraer conclusiones.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  // Filtrar videos por categoría
  const filteredVideos = activeCategory === 'Todos' 
    ? allVideos 
    : allVideos.filter(video => video.category === activeCategory);

  // Lista de categorías únicas
  const categories = ['Todos', ...Array.from(new Set(allVideos.map(video => video.category)))];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="pt-24 pb-20">
        <div className="mathmate-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Videos Educativos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora nuestra colección de videos educativos sobre matemáticas, inteligencia artificial y ciencia de datos.
            </p>
          </div>
          
          {/* Filtro de categorías */}
          <div className="mb-12">
            <div className="flex items-center justify-center flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Grid de videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map(video => (
              <div key={video.id} className="video-card group bg-card rounded-xl overflow-hidden shadow-md border border-border/50">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="video-overlay">
                    <Link 
                      to={`/videos/${video.id}`} 
                      className="bg-primary/80 hover:bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm transition-all"
                    >
                      <Play size={24} fill="white" />
                    </Link>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-primary/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                    {video.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Video size={16} className="text-primary mr-2" />
                      <span className="text-xs text-muted-foreground">Tutorial</span>
                    </div>
                    <Link to={`/videos/${video.id}`} className="text-primary text-sm flex items-center hover:underline">
                      Ver <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hay videos disponibles para esta categoría.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;
