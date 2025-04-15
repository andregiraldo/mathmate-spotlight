
import React, { useState } from 'react';
import { features } from '../data/features-data';
import BackgroundDecoration from './features/BackgroundDecoration';
import FeatureItem from './features/FeatureItem';
import FeatureDetailCard from './features/FeatureDetailCard';
import AIMathSection from './features/AIMathSection';

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  
  return (
    <div className="py-20 bg-background text-foreground relative">
      <BackgroundDecoration />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
            Matemáticas y la IA: <span className="text-primary">Una Convergencia Necesaria</span>
          </h2>
          <div className="h-1 w-40 mx-auto my-6 bg-primary"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Las matemáticas son el fundamento esencial para las carreras del futuro, especialmente en el desarrollo de la Inteligencia Artificial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-3">
            {features.map((feature) => (
              <FeatureItem 
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                isActive={activeFeature.id === feature.id}
                onMouseEnter={() => setActiveFeature(feature)}
              />
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            <FeatureDetailCard 
              title={activeFeature.title}
              description={activeFeature.description}
              image={activeFeature.image}
            />
          </div>
        </div>
        
        <AIMathSection />
      </div>
    </div>
  );
};

export default InteractiveFeatures;
