
import React from 'react';
import { Play, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoSection = () => {
  // Videos educativos destacados// esta es la parte que aparece en la pagina principal
  const featuredVideos = [
    {
      id: 1,
      title: "Ecuaciones que cambiaron el mundo",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      duration: "00:36",
      category: "Cálculo",
      videoUrl: "https://www.youtube.com/embed/5mccm4x6vMw" // Video URL actualizado al formato embed correcto
    },
    {
      id: 2,
      title: "Derivadas explicadas fácil desde cero",
      thumbnail: "/lovable-uploads/foto-mate29.png",
      duration: "00:35",
      category: "Cálculo",
      videoUrl: "https://www.youtube.com/embed/CtSom05icc"
    },
    {
      id: 3,
      title: "sí se calcula el área del pentágono regular en segundos",
      thumbnail: "/lovable-uploads/foto-mate30.png",
      duration: "00:15",
      category: "Geometría",
      videoUrl: "https://www.youtube.com/embed/bi0bX0xOQvQ"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="mathmate-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            Recursos
          </span>
          <h2 className="section-title">Videos Educativos</h2>
          <p className="section-subtitle">
            Explora conceptos matemáticos clave a través de nuestros videos explicativos
          </p>
        </div>
        
        {/* Categorías de navegación */}
        <div className="section-nav mb-12">
          <button className="section-nav-item active">Todos</button>
          <button className="section-nav-item">Cálculo</button>
          <button className="section-nav-item">Álgebra</button>
          <button className="section-nav-item">Geometría</button>
          <button className="section-nav-item">IA y Machine Learning</button>
          <button className="section-nav-item">Estadística</button>
        </div>
        
        {/* Grid de videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVideos.map(video => (
            <div key={video.id} className="video-card group">
              <div className="aspect-video relative overflow-hidden rounded-t-xl">
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
                <h3 className="font-medium text-lg mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex justify-between items-center mt-2">
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
        
        <div className="mt-12 text-center">
          <Link to="/videos" className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-full text-white hover:opacity-90 transition-opacity">
            Ver todos los videos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
