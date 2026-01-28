import React from "react";

interface FeiAvatarProps {
  className?: string;
  size?: number;
}

const FeiAvatar: React.FC<FeiAvatarProps> = ({ className = "", size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular Background */}
      <circle cx="100" cy="100" r="90" fill="#E8DCC8" stroke="#8B6F5C" strokeWidth="2" />
      
      {/* Wizard Hat */}
      <g>
        {/* Hat brim */}
        <ellipse cx="100" cy="110" rx="45" ry="8" fill="#4A5F7F" />
        <ellipse cx="100" cy="110" rx="45" ry="8" fill="#3D4E67" opacity="0.5" />
        
        {/* Hat cone */}
        <path
          d="M 70 110 Q 85 40, 100 20 Q 115 40, 130 110 Z"
          fill="#4A5F7F"
          stroke="#2C3E50"
          strokeWidth="2"
        />
        
        {/* Moon decoration on hat */}
        <path
          d="M 92 70 Q 88 75, 92 80 Q 96 77, 92 70 Z"
          fill="#F4D03F"
        />
        
        {/* Stars on hat */}
        <polygon points="115,50 116,53 119,53 117,55 118,58 115,56 112,58 113,55 111,53 114,53" fill="#F4D03F" />
        <polygon points="85,90 86,92 88,92 87,93 87,95 85,94 83,95 84,93 82,92 84,92" fill="#F4D03F" />
      </g>
      
      {/* Robot Body */}
      <g>
        {/* Main body - TV screen frame */}
        <rect x="75" y="115" width="50" height="45" rx="4" fill="#8B6F5C" stroke="#5D4E3C" strokeWidth="2" />
        
        {/* Screen */}
        <rect x="80" y="120" width="40" height="30" rx="2" fill="#7FB069" />
        <rect x="80" y="120" width="40" height="30" rx="2" fill="#98C379" opacity="0.6" />
        
        {/* Screen glare effect */}
        <path d="M 85 125 L 95 125 L 90 135 Z" fill="white" opacity="0.3" />
        
        {/* Control button */}
        <circle cx="100" cy="155" r="3" fill="#D4A574" />
      </g>
      
      {/* Arms */}
      <g>
        {/* Left arm */}
        <line x1="75" y1="130" x2="60" y2="135" stroke="#5D4E3C" strokeWidth="3" strokeLinecap="round" />
        {/* Left hand */}
        <g transform="translate(50, 130)">
          <path d="M 10 5 L 8 8 L 10 11 L 12 8 Z" fill="#E8DCC8" stroke="#5D4E3C" strokeWidth="1" />
          <line x1="8" y1="8" x2="5" y2="6" stroke="#E8DCC8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="8" x2="5" y2="10" stroke="#E8DCC8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="8" x2="15" y2="6" stroke="#E8DCC8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="8" x2="15" y2="10" stroke="#E8DCC8" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        
        {/* Right arm */}
        <line x1="125" y1="130" x2="140" y2="135" stroke="#5D4E3C" strokeWidth="3" strokeLinecap="round" />
        {/* Right hand */}
        <g transform="translate(130, 130)">
          <path d="M 10 5 L 8 8 L 10 11 L 12 8 Z" fill="#E8DCC8" stroke="#5D4E3C" strokeWidth="1" />
          <line x1="8" y1="8" x2="5" y2="6" stroke="#E8DCC8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="8" x2="5" y2="10" stroke="#E8DCC8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="8" x2="15" y2="6" stroke="#E8DCC8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="8" x2="15" y2="10" stroke="#E8DCC8" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </g>
      
      {/* Legs */}
      <g>
        {/* Left leg */}
        <line x1="90" y1="160" x2="88" y2="175" stroke="#5D4E3C" strokeWidth="3" strokeLinecap="round" />
        {/* Left foot */}
        <rect x="83" y="173" width="10" height="6" rx="2" fill="#8B6F5C" stroke="#5D4E3C" strokeWidth="1" />
        
        {/* Right leg */}
        <line x1="110" y1="160" x2="112" y2="175" stroke="#5D4E3C" strokeWidth="3" strokeLinecap="round" />
        {/* Right foot */}
        <rect x="107" y="173" width="10" height="6" rx="2" fill="#8B6F5C" stroke="#5D4E3C" strokeWidth="1" />
      </g>
    </svg>
  );
};

export default FeiAvatar;
