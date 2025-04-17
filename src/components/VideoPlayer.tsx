
import React from 'react';
import { Video, Clock, Tag, ChevronLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Video data interface
interface VideoData {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
  duration: string;
}

const VideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoId = parseInt(id || '1');
  
  // Videos educativos (estos deberían venir de una fuente de datos centralizada)
  const videos: VideoData[] = [
    {
      id: 1,
      title: "Cálculo Integral: Conceptos Fundamentales",
      description: "En este video, exploramos los conceptos básicos del cálculo integral, desde la definición de integral hasta las técnicas de integración más comunes. Aprenderás cómo aplicar estos conceptos a problemas del mundo real y cómo interpretar los resultados. Ideal para estudiantes de ingeniería, ciencias y matemáticas.",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      duration: "15:42",
      category: "Cálculo",
      videoUrl: "https://www.youtube.com/embed/5mccm4x6vMw"
    },
    {
      id: 2,
      title: "Matemáticas para Machine Learning",
      description: "Descubre los fundamentos matemáticos necesarios para comprender los algoritmos de machine learning, incluyendo álgebra lineal, cálculo multivariable y probabilidad.",
      thumbnail: "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=2072&auto=format&fit=crop",
      duration: "12:23",
      category: "IA",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Álgebra Lineal: Aplicaciones Prácticas",
      description: "Explora las aplicaciones prácticas del álgebra lineal en la ciencia de datos y la ingeniería, incluyendo transformaciones lineales, espacios vectoriales y matrices.",
      thumbnail: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop",
      duration: "18:15",
      category: "Álgebra",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Probabilidad y Estadística en la IA",
      description: "Comprende cómo la probabilidad y la estadística son fundamentales para los modelos de inteligencia artificial, incluyendo distribuciones, inferencia estadística y modelos probabilísticos.",
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
      duration: "21:30",
      category: "IA",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Geometría Analítica: Vectores y Espacios",
      description: "Aprende sobre vectores, espacios vectoriales y su aplicación en la geometría analítica, incluyendo productos escalares, vectoriales y transformaciones geométricas.",
      thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop",
      duration: "16:45",
      category: "Geometría",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Estadística Inferencial y Análisis de Datos",
      description: "Descubre cómo utilizar la estadística inferencial para analizar conjuntos de datos y extraer conclusiones, incluyendo pruebas de hipótesis, intervalos de confianza y regresiones.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      duration: "19:30",
      category: "Estadística",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const video = videos.find(v => v.id === videoId);
  
  if (!video) {
    return <div className="text-center py-20">Video no encontrado</div>;
  }
  
  // Videos relacionados (misma categoría)
  const relatedVideos = videos
    .filter(v => v.category === video.category && v.id !== video.id)
    .slice(0, 3);
  
  return (
    <div className="py-10 bg-background">
      <div className="mathmate-container">
        <button 
          onClick={() => navigate('/videos')}
          className="flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={18} className="mr-1" /> Volver a Videos
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Reproductor de video */}
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-black mb-6">
              <iframe
                src={video.videoUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Información del video */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{video.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Tag size={16} className="mr-1" />
                  <span>{video.category}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{video.duration}</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                {video.description}
              </p>
            </div>
          </div>
          
          {/* Videos relacionados */}
          <div>
            <h3 className="text-xl font-medium mb-4">Videos relacionados</h3>
            <div className="space-y-4">
              {relatedVideos.length > 0 ? (
                relatedVideos.map(relVideo => (
                  <Link 
                    key={relVideo.id} 
                    to={`/videos/${relVideo.id}`} 
                    className="flex gap-3 group"
                  >
                    <div className="relative w-24 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={relVideo.thumbnail} 
                        alt={relVideo.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <Video size={18} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {relVideo.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">{relVideo.duration}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No hay videos relacionados disponibles.</p>
              )}
              
              <Link 
                to="/videos" 
                className="inline-block mt-2 text-primary hover:underline text-sm"
              >
                Ver todos los videos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
