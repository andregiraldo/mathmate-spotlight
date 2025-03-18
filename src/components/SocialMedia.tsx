import React from 'react';
import { Users, Facebook, Instagram } from 'lucide-react';

const socialStats = {
  facebook: 12000, // Número de seguidores en Facebook
  instagram: 8500,  // Número de seguidores en Instagram
};

const SocialMediaSection = () => {
  return (
    <section id="social-media" className="py-20 bg-secondary/30">
      <div className="mathmate-container text-center animate-fade-up">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
          Nuestra Comunidad
        </span>
        <h2 className="section-title">Únete a Nuestra Comunidad en Redes Sociales</h2>
        <p className="section-subtitle mb-8">
          Conéctate con miles de estudiantes y entusiastas de las matemáticas en nuestras redes sociales.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Facebook Card */}
          <div className="glass-card rounded-2xl p-8 shadow-lg text-center">
            <Facebook size={48} className="text-blue-600 mx-auto mb-4" />
            <h3 className="font-medium text-xl">Facebook</h3>
            <p className="text-lg font-bold text-accent">{socialStats.facebook.toLocaleString()} Seguidores</p>
            <a
              href="https://www.facebook.com/tu-pagina" // Reemplaza con tu URL real
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Síguenos en Facebook
            </a>
          </div>

          {/* Instagram Card */}
          <div className="glass-card rounded-2xl p-8 shadow-lg text-center">
            <Instagram size={48} className="text-pink-500 mx-auto mb-4" />
            <h3 className="font-medium text-xl">Instagram</h3>
            <p className="text-lg font-bold text-accent">{socialStats.instagram.toLocaleString()} Seguidores</p>
            <a
              href="https://www.instagram.com/tu-pagina" // Reemplaza con tu URL real
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition"
            >
              Síguenos en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
