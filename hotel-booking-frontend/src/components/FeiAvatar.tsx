interface FeiAvatarProps {
  className?: string;
  size?: number;
}

const FeiAvatar = ({ className = "", size = 32 }: FeiAvatarProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        {/* Circle background */}
        <circle cx="100" cy="100" r="95" fill="#F5F5DC" stroke="#8B4513" strokeWidth="2" />
        
        {/* Wizard Hat */}
        <g>
          {/* Hat brim */}
          <ellipse cx="100" cy="100" rx="50" ry="12" fill="#3B5A7D" />
          <ellipse cx="100" cy="100" rx="50" ry="12" fill="#4A6B8A" opacity="0.8" />
          
          {/* Hat cone */}
          <path
            d="M 70 100 Q 100 30 130 100"
            fill="#3B5A7D"
            stroke="#2C4A61"
            strokeWidth="2"
          />
          <path
            d="M 70 100 Q 100 30 130 100"
            fill="#4A6B8A"
            opacity="0.7"
          />
          
          {/* Stars and moons on hat */}
          <path d="M 100 50 L 102 56 L 108 56 L 103 60 L 105 66 L 100 62 L 95 66 L 97 60 L 92 56 L 98 56 Z" fill="#FFD700" />
          <path d="M 120 75 L 122 81 L 128 81 L 123 85 L 125 91 L 120 87 L 115 91 L 117 85 L 112 81 L 118 81 Z" fill="#FFD700" />
          <path d="M 85 70 C 85 65 80 65 80 70 C 80 72 82 72 83 70 C 84 72 86 72 86 70 C 86 65 81 65 85 70" fill="#FFD700" />
          <path d="M 110 90 C 110 85 105 85 105 90 C 105 92 107 92 108 90 C 109 92 111 92 111 90 C 111 85 106 85 110 90" fill="#FFD700" />
          
          {/* Hat tip curl */}
          <path
            d="M 100 30 Q 95 20 100 15 Q 105 20 100 30"
            fill="#3B5A7D"
            stroke="#2C4A61"
            strokeWidth="2"
          />
        </g>
        
        {/* TV Screen (Robot body) */}
        <g>
          {/* TV Frame */}
          <rect x="75" y="105" width="50" height="40" rx="3" fill="#8B6F47" stroke="#5C4A33" strokeWidth="2" />
          
          {/* Screen */}
          <rect x="80" y="110" width="40" height="30" rx="2" fill="#90EE90" />
          <rect x="80" y="110" width="40" height="30" rx="2" fill="url(#screenGradient)" />
          
          {/* Screen glare */}
          <ellipse cx="90" cy="118" rx="8" ry="5" fill="white" opacity="0.4" />
          
          {/* Control button */}
          <circle cx="100" cy="148" r="3" fill="#D2691E" stroke="#8B4513" strokeWidth="1" />
        </g>
        
        {/* Arms */}
        <g>
          {/* Left arm */}
          <line x1="75" y1="120" x2="60" y2="130" stroke="#5C4A33" strokeWidth="3" strokeLinecap="round" />
          {/* Left hand */}
          <g transform="translate(50, 125)">
            <ellipse cx="10" cy="5" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1" />
            <line x1="8" y1="0" x2="8" y2="10" stroke="#333" strokeWidth="0.5" />
            <line x1="10" y1="-1" x2="10" y2="11" stroke="#333" strokeWidth="0.5" />
            <line x1="12" y1="0" x2="12" y2="10" stroke="#333" strokeWidth="0.5" />
          </g>
          
          {/* Right arm */}
          <line x1="125" y1="120" x2="140" y2="130" stroke="#5C4A33" strokeWidth="3" strokeLinecap="round" />
          {/* Right hand */}
          <g transform="translate(132, 125)">
            <ellipse cx="10" cy="5" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1" />
            <line x1="8" y1="0" x2="8" y2="10" stroke="#333" strokeWidth="0.5" />
            <line x1="10" y1="-1" x2="10" y2="11" stroke="#333" strokeWidth="0.5" />
            <line x1="12" y1="0" x2="12" y2="10" stroke="#333" strokeWidth="0.5" />
          </g>
        </g>
        
        {/* Legs */}
        <g>
          {/* Left leg */}
          <rect x="85" y="145" width="6" height="15" rx="1" fill="#5C4A33" />
          {/* Left foot */}
          <rect x="83" y="158" width="10" height="6" rx="2" fill="#8B6F47" stroke="#5C4A33" strokeWidth="1" />
          
          {/* Right leg */}
          <rect x="109" y="145" width="6" height="15" rx="1" fill="#5C4A33" />
          {/* Right foot */}
          <rect x="107" y="158" width="10" height="6" rx="2" fill="#8B6F47" stroke="#5C4A33" strokeWidth="1" />
        </g>
        
        <defs>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B4FFB4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#90EE90" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FeiAvatar;
