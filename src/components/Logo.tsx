
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ className = '', size = 'medium' }: LogoProps) => {
  // Size mapping for different logo variants
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-10',
    large: 'h-12'
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/c26b5ece-c166-4e55-99a4-97a1c2d654b8.png" 
        alt="Math+IA Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
};

export default Logo;
