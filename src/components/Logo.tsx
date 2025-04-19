
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

const Logo = ({ className = '', size = 'large' }: LogoProps) => {
  // Size mapping for different logo variants
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-10',
    large: 'h-16', // Increased from h-12
    xlarge: 'h-20' // Added an extra large size
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/logo-mate.png" 
        alt="Clases de Cálculo y Algebra" 
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
};

export default Logo;
