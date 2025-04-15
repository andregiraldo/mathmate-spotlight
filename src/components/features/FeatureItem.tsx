
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  isActive: boolean;
  onMouseEnter: () => void;
}

const FeatureItem = ({ icon: Icon, title, isActive, onMouseEnter }: FeatureItemProps) => {
  return (
    <div 
      className="feature-item"
      onMouseEnter={onMouseEnter}
    >
      <div
        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-150 flex items-center gap-3 
          ${isActive ? 
            'bg-card border-l-4 border-primary' : 
            'border-l-4 border-transparent hover:bg-card/50'}`}
      >
        <div className={`p-2 rounded-full ${isActive ? 'bg-primary/20' : 'bg-muted'} text-primary flex-shrink-0`}>
          <Icon className="w-5 h-5" />
        </div>
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
