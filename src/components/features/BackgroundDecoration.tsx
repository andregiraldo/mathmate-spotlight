
import React from 'react';

const BackgroundDecoration = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-background/80 to-background"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-background/80 to-background"></div>
      <div className="absolute h-full w-full opacity-30">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 204, 255, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundDecoration;
