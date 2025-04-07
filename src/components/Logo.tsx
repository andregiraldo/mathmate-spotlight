
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ className = '', size = 'medium' }: LogoProps) => {
  // Size mapping for different logo variants
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl'
  };
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Integral symbol */}
      <div className="text-primary mb-[-0.5rem]" style={{ fontSize: 'calc(1.5em)' }}>
        ∫
      </div>
      
      {/* Logo text */}
      <div className={`font-bold tracking-tight ${sizeClasses[size]}`}>
        <span className="text-foreground">Math</span>
        <span className="text-primary mx-1">+</span>
        <span className="text-foreground">IA</span>
      </div>
    </div>
  );
};

export default Logo;
