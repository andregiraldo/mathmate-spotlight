
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
  thumbnail: string; // Added missing thumbnail property
}

const VideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoId = parseInt(id || '1');
  
  // Videos educativos (estos deberían venir de una fuente de datos centralizada)
  const videos: VideoData[] = [
    {
      id: 1,
      title: "Ecuaciones que cambiaron el mundo",
      description: "Las matemáticas están en todo lo que nos rodea, y algunas ecuaciones han transformado por completo la historia de la ciencia, la tecnología y la humanidad.\n\nEn este video te presentamos 19 ecuaciones clave que marcaron un antes y un después en el mundo:\n- Desde la ley de gravitación universal hasta la ecuación de Schrödinger\n- Desde la fórmula de Euler hasta la teoría de la relatividad\n- ¡Y muchas más!\n\nDescubre cómo estas fórmulas impactaron la física, la ingeniería, la informática, la economía y nuestra vida cotidiana.\n\n¿Estás listo para un viaje por las mentes más brillantes de la historia? ¡Dale play!",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      duration: "00:36",
      category: "Cálculo",
      videoUrl: "https://www.youtube.com/embed/5mccm4x6vMw"
    },
    {
      id: 2,
      title: "Derivadas explicadas fácil desde cero",
      description: "¿Te estás iniciando en el cálculo diferencial?\n\nEn este video te explicamos de forma clara y sencilla qué son las derivadas, cómo se interpretan y por qué son fundamentales en el estudio del cambio y el movimiento.\n\nAprenderás:\n- Qué es una derivada\n- Cómo aplicarla con ejemplos básicos\n- Por qué son esenciales para entender fenómenos como velocidad y crecimiento\n\nEste video es ideal para estudiantes que comienzan cálculo o quienes quieren repasar lo esencial. ¡Dale play y aprende paso a paso!",
      thumbnail: "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=2072&auto=format&fit=crop",
      duration: "00:35",
      category: "Cálculo",
      videoUrl: "https://www.youtube.com/embed/CtSom05icc"
    },
    {
      id: 3,
      title: "Así se calcula el área del pentágono regular en segundos",
      description: "¿Sabes cómo calcular el área de un pentágono regular?\n\nEn este video aprenderás de forma sencilla y clara a hacerlo paso a paso. Ideal para estudiantes de matemáticas o cualquier persona que quiera entender mejor las figuras geométricas.\n\nVerás:\n- Qué es un pentágono regular\n- Cómo se calcula su área usando una fórmula práctica\n\n¡Dale play y aprende con nosotros!",
      thumbnail: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop",
      duration: "00:15",
      category: "Geometría",
      videoUrl: "https://www.youtube.com/embed/bi0bX0xOQvQ"
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
