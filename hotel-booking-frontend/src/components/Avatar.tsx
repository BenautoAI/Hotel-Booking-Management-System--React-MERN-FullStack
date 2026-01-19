import React from 'react';
import { cn } from '../lib/utils';

interface AvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

/**
 * Avatar component displaying a wizard mascot character with a TV head
 * Can be used as a profile avatar, logo, or branding element
 */
export const Avatar: React.FC<AvatarProps> = ({ className, size = 'md' }) => {
  return (
    <div className={cn('inline-block', sizeClasses[size], className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Wizard mascot avatar"
      >
        {/* Background circle */}
        <circle cx="256" cy="256" r="256" fill="#E8DCC4" />

        {/* Inner decorative circle */}
        <circle
          cx="256"
          cy="256"
          r="200"
          fill="none"
          stroke="#6B4E3D"
          strokeWidth="3"
        />

        {/* Wizard hat */}
        <path
          d="M256 100 L220 200 L292 200 Z"
          fill="#4A6B8A"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <ellipse
          cx="256"
          cy="200"
          rx="70"
          ry="15"
          fill="#4A6B8A"
          stroke="#2D3E50"
          strokeWidth="2"
        />

        {/* Hat decorations - stars and moons */}
        <path
          d="M240 130 L242 135 L247 135 L243 138 L245 143 L240 140 L235 143 L237 138 L233 135 L238 135 Z"
          fill="#F4C542"
        />
        <path
          d="M268 160 L270 165 L275 165 L271 168 L273 173 L268 170 L263 173 L265 168 L261 165 L266 165 Z"
          fill="#F4C542"
        />
        <path
          d="M250 165 Q245 165 245 170 Q245 175 250 175 Q250 170 250 165"
          fill="#F4C542"
        />
        <path
          d="M265 145 Q260 145 260 150 Q260 155 265 155 Q265 150 265 145"
          fill="#F4C542"
        />

        {/* TV/Monitor body */}
        <rect
          x="210"
          y="240"
          width="92"
          height="80"
          rx="8"
          fill="#8B6F47"
          stroke="#5D4E37"
          strokeWidth="2"
        />

        {/* Screen */}
        <rect
          x="220"
          y="250"
          width="72"
          height="55"
          rx="3"
          fill="#9ACD32"
          stroke="#6B8E23"
          strokeWidth="2"
        />
        <ellipse
          cx="256"
          cy="277"
          rx="30"
          ry="20"
          fill="#ADFF2F"
          opacity="0.6"
        />
        <ellipse
          cx="245"
          cy="270"
          rx="15"
          ry="10"
          fill="#F0FFF0"
          opacity="0.4"
        />

        {/* Control button */}
        <circle
          cx="256"
          cy="312"
          r="6"
          fill="#D4A574"
          stroke="#5D4E37"
          strokeWidth="1"
        />

        {/* Left arms (2 segments) */}
        <line
          x1="210"
          y1="260"
          x2="180"
          y2="280"
          stroke="#2D3E50"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <line
          x1="180"
          y1="280"
          x2="165"
          y2="310"
          stroke="#2D3E50"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Left hands */}
        <ellipse
          cx="160"
          cy="315"
          rx="12"
          ry="18"
          fill="#F5F5F5"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="155"
          y1="310"
          x2="150"
          y2="305"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="160"
          y1="308"
          x2="158"
          y2="303"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="165"
          y1="310"
          x2="166"
          y2="305"
          stroke="#2D3E50"
          strokeWidth="2"
        />

        <ellipse
          cx="165"
          cy="325"
          rx="12"
          ry="18"
          fill="#F5F5F5"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="160"
          y1="330"
          x2="155"
          y2="335"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="165"
          y1="328"
          x2="163"
          y2="333"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="170"
          y1="330"
          x2="171"
          y2="335"
          stroke="#2D3E50"
          strokeWidth="2"
        />

        {/* Right arms (2 segments) */}
        <line
          x1="302"
          y1="260"
          x2="332"
          y2="280"
          stroke="#2D3E50"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <line
          x1="332"
          y1="280"
          x2="347"
          y2="310"
          stroke="#2D3E50"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Right hands */}
        <ellipse
          cx="352"
          cy="315"
          rx="12"
          ry="18"
          fill="#F5F5F5"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="347"
          y1="310"
          x2="342"
          y2="305"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="352"
          y1="308"
          x2="350"
          y2="303"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="357"
          y1="310"
          x2="358"
          y2="305"
          stroke="#2D3E50"
          strokeWidth="2"
        />

        <ellipse
          cx="347"
          cy="325"
          rx="12"
          ry="18"
          fill="#F5F5F5"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="342"
          y1="330"
          x2="337"
          y2="335"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="347"
          y1="328"
          x2="345"
          y2="333"
          stroke="#2D3E50"
          strokeWidth="2"
        />
        <line
          x1="352"
          y1="330"
          x2="353"
          y2="335"
          stroke="#2D3E50"
          strokeWidth="2"
        />

        {/* Legs */}
        <rect
          x="235"
          y="320"
          width="18"
          height="35"
          rx="3"
          fill="#2D3E50"
          stroke="#1A252F"
          strokeWidth="2"
        />
        <rect
          x="259"
          y="320"
          width="18"
          height="35"
          rx="3"
          fill="#2D3E50"
          stroke="#1A252F"
          strokeWidth="2"
        />

        {/* Feet/Boots */}
        <ellipse
          cx="244"
          cy="360"
          rx="15"
          ry="10"
          fill="#5D4E37"
          stroke="#3D2E27"
          strokeWidth="2"
        />
        <ellipse
          cx="268"
          cy="360"
          rx="15"
          ry="10"
          fill="#5D4E37"
          stroke="#3D2E27"
          strokeWidth="2"
        />

        {/* More hat decorations */}
        <ellipse cx="232" cy="190" rx="8" ry="10" fill="#F4C542" />
        <ellipse cx="280" cy="185" rx="8" ry="10" fill="#F4C542" />
        <path
          d="M260 180 Q255 180 255 185 Q255 190 260 190 Q260 185 260 180"
          fill="#F4C542"
        />
      </svg>
    </div>
  );
};

export default Avatar;
