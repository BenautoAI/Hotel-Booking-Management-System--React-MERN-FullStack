type Props = {
  className?: string;
  size?: number;
};

/**
 * Fei Avatar Logo Component
 * A wizard character with a TV monitor head, wizard hat, four arms, and robot legs
 */
const FeiAvatarLogo = ({ 
  className = "", 
  size = 48 
}: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular background */}
      <circle cx="100" cy="100" r="95" fill="#2194ba" />
      
      {/* Wizard Hat */}
      <g transform="translate(100, 30)">
        {/* Hat cone */}
        <path
          d="M 0,-20 L 35,30 L -35,30 Z"
          fill="#3d5a80"
          stroke="#2c3e50"
          strokeWidth="1.5"
        />
        {/* Moon decorations */}
        <path
          d="M -12,-8 Q -9,-10 -10,-13 Q -12,-10 -12,-8 Z"
          fill="#f4c430"
        />
        <path
          d="M 7,8 Q 10,6 9,3 Q 7,6 7,8 Z"
          fill="#f4c430"
        />
        {/* Star decorations */}
        <path
          d="M 0,-15 L 1,-13 L 3,-13 L 1.5,-11.5 L 2,-9 L 0,-10.5 L -2,-9 L -1.5,-11.5 L -3,-13 L -1,-13 Z"
          fill="#f4c430"
        />
        <path
          d="M 16,12 L 17,13 L 19,13 L 17.5,14.5 L 18,16 L 16,14.5 L 14,16 L 14.5,14.5 L 13,13 L 15,13 Z"
          fill="#f4c430"
        />
        {/* Hat brim */}
        <ellipse
          cx="0"
          cy="30"
          rx="42"
          ry="8"
          fill="#4a6fa5"
          stroke="#2c3e50"
          strokeWidth="1.5"
        />
      </g>

      {/* TV Monitor Head */}
      <g transform="translate(100, 85)">
        {/* Outer frame */}
        <rect
          x="-28"
          y="-22"
          width="56"
          height="42"
          rx="3"
          fill="#8b6f47"
          stroke="#5c4a2f"
          strokeWidth="1.5"
        />
        {/* Inner frame */}
        <rect
          x="-24"
          y="-18"
          width="48"
          height="34"
          rx="2"
          fill="#a0826d"
          stroke="#5c4a2f"
          strokeWidth="1"
        />
        {/* Screen */}
        <rect
          x="-22"
          y="-16"
          width="44"
          height="30"
          rx="2"
          fill="#7cb342"
          stroke="#558b2f"
          strokeWidth="0.8"
        />
        {/* Screen glare effect */}
        <ellipse
          cx="-8"
          cy="-8"
          rx="14"
          ry="9"
          fill="#c5e1a5"
          opacity="0.4"
        />
        <ellipse
          cx="10"
          cy="5"
          rx="9"
          ry="7"
          fill="#aed581"
          opacity="0.3"
        />
        {/* Control button */}
        <circle
          cx="0"
          cy="22"
          r="3.5"
          fill="#d4a574"
          stroke="#8b6f47"
          strokeWidth="0.8"
        />
        <circle cx="0" cy="22" r="2" fill="#f0c987" />
      </g>

      {/* Robot Body */}
      <g transform="translate(100, 120)">
        {/* Torso */}
        <rect
          x="-18"
          y="0"
          width="36"
          height="24"
          rx="2"
          fill="#8b6f47"
          stroke="#5c4a2f"
          strokeWidth="1"
        />
        {/* Belly plate */}
        <rect
          x="-13"
          y="4"
          width="26"
          height="15"
          rx="2"
          fill="#a0826d"
          stroke="#5c4a2f"
          strokeWidth="0.8"
        />
      </g>

      {/* Arms (4 arms) */}
      <g transform="translate(100, 120)">
        {/* Left arms */}
        {/* Upper left arm */}
        <g transform="translate(-20, 6)">
          <rect
            x="-4"
            y="0"
            width="4"
            height="18"
            rx="1.5"
            fill="#3a3a3a"
            stroke="#2c2c2c"
            strokeWidth="0.5"
          />
          {/* Glove */}
          <ellipse
            cx="-2"
            cy="20"
            rx="5"
            ry="4.5"
            fill="#f5f5f5"
            stroke="#d0d0d0"
            strokeWidth="0.5"
          />
          {/* Fingers */}
          <path
            d="M -5,21 L -6,25 M -2.5,21.5 L -3,26 M 0,21.5 L 0,27 M 2.5,21 L 2,25"
            stroke="#d0d0d0"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        {/* Lower left arm */}
        <g transform="translate(-22, 13)">
          <rect
            x="-4"
            y="0"
            width="4"
            height="16"
            rx="1.5"
            fill="#3a3a3a"
            stroke="#2c2c2c"
            strokeWidth="0.5"
          />
          {/* Glove */}
          <ellipse
            cx="-2"
            cy="18"
            rx="5"
            ry="4.5"
            fill="#f5f5f5"
            stroke="#d0d0d0"
            strokeWidth="0.5"
          />
          {/* Fingers */}
          <path
            d="M -5,19 L -6,23 M -2.5,19.5 L -3,24 M 0,19.5 L 0,25 M 2.5,19 L 2,23"
            stroke="#d0d0d0"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Right arms */}
        {/* Upper right arm */}
        <g transform="translate(20, 6)">
          <rect
            x="0"
            y="0"
            width="4"
            height="18"
            rx="1.5"
            fill="#3a3a3a"
            stroke="#2c2c2c"
            strokeWidth="0.5"
          />
          {/* Glove */}
          <ellipse
            cx="2"
            cy="20"
            rx="5"
            ry="4.5"
            fill="#f5f5f5"
            stroke="#d0d0d0"
            strokeWidth="0.5"
          />
          {/* Fingers */}
          <path
            d="M 5,21 L 6,25 M 2.5,21.5 L 3,26 M 0,21.5 L 0,27 M -2.5,21 L -2,25"
            stroke="#d0d0d0"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        {/* Lower right arm */}
        <g transform="translate(22, 13)">
          <rect
            x="0"
            y="0"
            width="4"
            height="16"
            rx="1.5"
            fill="#3a3a3a"
            stroke="#2c2c2c"
            strokeWidth="0.5"
          />
          {/* Glove */}
          <ellipse
            cx="2"
            cy="18"
            rx="5"
            ry="4.5"
            fill="#f5f5f5"
            stroke="#d0d0d0"
            strokeWidth="0.5"
          />
          {/* Fingers */}
          <path
            d="M 5,19 L 6,23 M 2.5,19.5 L 3,24 M 0,19.5 L 0,25 M -2.5,19 L -2,23"
            stroke="#d0d0d0"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* Legs */}
      <g transform="translate(100, 145)">
        {/* Left leg */}
        <g transform="translate(-9, 0)">
          <rect
            x="-3"
            y="0"
            width="6"
            height="21"
            rx="1.5"
            fill="#3a3a3a"
            stroke="#2c2c2c"
            strokeWidth="0.5"
          />
          {/* Boot */}
          <rect
            x="-5"
            y="19"
            width="10"
            height="7"
            rx="2"
            fill="#5c4a2f"
            stroke="#3a3020"
            strokeWidth="0.5"
          />
        </g>
        {/* Right leg */}
        <g transform="translate(9, 0)">
          <rect
            x="-3"
            y="0"
            width="6"
            height="21"
            rx="1.5"
            fill="#3a3a3a"
            stroke="#2c2c2c"
            strokeWidth="0.5"
          />
          {/* Boot */}
          <rect
            x="-5"
            y="19"
            width="10"
            height="7"
            rx="2"
            fill="#5c4a2f"
            stroke="#3a3020"
            strokeWidth="0.5"
          />
        </g>
      </g>
    </svg>
  );
};

export default FeiAvatarLogo;
