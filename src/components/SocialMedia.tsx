
import React from 'react';
import { Users, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialStats = {
  facebook: 12000, // Número de seguidores en Facebook
  instagram: 8500,  // Número de seguidores en Instagram
};

const SocialMediaSection = () => {
  return (
    <section id="social-media" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="socialGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#socialGrid)" />
          </svg>
        </div>
      </div>

      <div className="mathmate-container text-center animate-fade-up">
        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary text-white mb-6 rotate-1 transform hover:rotate-0 transition-transform">
          Nuestra Comunidad
        </span>
        
        <h2 className="section-title mb-4">Únete a Nuestra Comunidad</h2>
        
        <p className="section-subtitle mb-12 max-w-2xl mx-auto">
          Conéctate con miles de estudiantes y entusiastas de las matemáticas en nuestras redes sociales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Facebook Card */}
          <SocialCard 
            platform="Facebook" 
            followers={socialStats.facebook} 
            icon={Facebook} 
            url="https://www.facebook.com/tu-pagina"
            color="blue"
          />

          {/* Instagram Card */}
          <SocialCard 
            platform="Instagram" 
            followers={socialStats.instagram} 
            icon={Instagram} 
            url="https://www.instagram.com/tu-pagina"
            color="pink"
          />
        </div>
      </div>
    </section>
  );
};

interface SocialCardProps {
  platform: string;
  followers: number;
  icon: React.ElementType;
  url: string;
  color: 'blue' | 'pink';
}

const SocialCard = ({ platform, followers, icon: Icon, url, color }: SocialCardProps) => {
  const colorVariants = {
    blue: {
      background: "from-blue-500/80 to-blue-600/80",
      hover: "group-hover:from-blue-600/80 group-hover:to-blue-700/80",
      light: "bg-blue-400",
      border: "border-blue-400/30"
    },
    pink: {
      background: "from-pink-500/80 to-pink-600/80",
      hover: "group-hover:from-pink-600/80 group-hover:to-pink-700/80",
      light: "bg-pink-400",
      border: "border-pink-400/30"
    }
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block"
    >
      <div className={cn(
        "relative z-10 p-8 backdrop-blur-lg rounded-3xl bg-black/5 border border-white/10",
        "transform transition-all duration-300 group-hover:scale-[0.97]",
        "overflow-hidden group",
        colorVariants[color].border
      )}>
        {/* Animated background */}
        <div className={cn(
          "absolute inset-0 -z-10 bg-gradient-to-br opacity-90 transition-all duration-500",
          colorVariants[color].background,
          colorVariants[color].hover
        )}></div>
        
        {/* Glowing orb */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-50 transition-all duration-500 group-hover:opacity-70 group-hover:scale-110">
          <div className={cn("w-full h-full rounded-full", colorVariants[color].light)}></div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center z-20 relative">
          <div className="mb-4 p-4 bg-white/20 backdrop-blur-md rounded-full">
            <Icon size={40} className="text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{platform}</h3>
          
          <p className="text-3xl font-bold text-white mb-6">
            {followers.toLocaleString()} <span className="text-base font-normal opacity-80">Seguidores</span>
          </p>
          
          <div className="flex items-center justify-center mt-4 gap-2 bg-white/20 hover:bg-white/30 transition-colors text-white rounded-full px-5 py-2">
            <span>Síguenos en {platform}</span>
            <ExternalLink size={18} />
          </div>
        </div>
      </div>
      
      {/* Cards reflection */}
      <div className={cn(
        "absolute w-full h-32 bottom-0 left-0 transform translate-y-1/2 scale-[0.85] -z-10 opacity-30",
        "rounded-3xl blur-md",
        "bg-gradient-to-b from-black/50 to-transparent",
        "transition-all duration-300 group-hover:opacity-40"
      )}></div>
    </a>
  );
};

export default SocialMediaSection;
