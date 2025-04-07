
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
        src="/lovable-uploads/064472a0-1ad8-4bca-92bd-a4f8aa461e18.png" 
        alt="Math+IA Logo" 
        className={`${sizeClasses[size]} object-contain`}
        style={{ 
          filter: 'drop-shadow(0px 0px 2px rgba(0, 204, 255, 0.5))',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
};

export default Logo;
