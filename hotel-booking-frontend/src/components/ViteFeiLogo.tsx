interface ViteFeiLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const ViteFeiLogo = ({ width = 800, height = 800, className = "" }: ViteFeiLogoProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 800 800" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Vite Logo Background */}
      <g id="vite-logo">
        <rect x="0" y="0" width="800" height="800" rx="400" fill="#2194ba"/>
        <g transform="translate(154, 154) scale(1.0)">
          <path 
            fill="#ffffff" 
            d="M143.36,102.403c-11.305,0-20.48,9.195-20.48,20.48s9.175,20.48,20.48,20.48c11.305,0,20.48-9.196,20.48-20.48 S154.665,102.403,143.36,102.403z"
          />
          <path 
            fill="#ffffff" 
            d="M491.52,20.483c0-11.305-9.155-20.48-20.48-20.48H20.48C9.155,0.003,0,9.178,0,20.483v266.24h491.52V20.483z M143.36,184.323c-33.874,0-61.44-27.566-61.44-61.44s27.566-61.44,61.44-61.44c33.874,0,61.44,27.566,61.44,61.44 S177.234,184.323,143.36,184.323z M424.079,96.402l-34.959,34.959v73.441c0,11.305-9.155,20.48-20.48,20.48 s-20.48-9.175-20.48-20.48v-32.481l-67.441,67.441c-3.994,3.994-9.236,6.001-14.479,6.001c-5.243,0-10.486-2.007-14.479-6.001 l-40.96-40.96c-8.008-8.008-8.008-20.951,0-28.959s20.951-8.008,28.959,0l26.481,26.481l52.961-52.961H286.72 c-11.326,0-20.48-9.175-20.48-20.48c0-11.305,9.155-20.48,20.48-20.48h73.441l34.959-34.959c8.008-8.008,20.951-8.008,28.959,0 C432.087,75.451,432.087,88.395,424.079,96.402z"
          />
          <path 
            fill="#ffffff" 
            d="M0.006,327.683v61.44c0,11.305,9.155,20.48,20.48,20.48h152.453c-1.823,13.107-7.004,27.443-11.796,31.007 l-13.844,10.281c-7.885,5.734-11.162,15.872-8.11,25.19c2.99,9.236,11.469,15.442,21.115,15.442h170.762 c9.626,0,18.104-6.185,21.115-15.38c3.031-9.318-0.205-19.436-7.946-25.108l-13.988-10.424 c-4.772-3.523-9.912-17.879-11.694-31.007h152.494c11.305,0,20.48-9.175,20.48-20.48v-61.44H0.006z M203.229,450.563 c6.042-12.431,9.81-27.197,10.977-40.96h63.099c1.126,13.763,4.895,28.549,10.895,40.96H203.229z"
          />
        </g>
      </g>
      
      {/* Fei Avatar - Wizard Character Overlay */}
      <g id="fei-avatar" transform="translate(450, 350)">
        {/* Outer circle background */}
        <circle cx="0" cy="0" r="200" fill="none" stroke="#ff0000" strokeWidth="6"/>
        
        {/* Wizard Hat */}
        <g id="wizard-hat">
          {/* Hat brim */}
          <ellipse cx="0" cy="-30" rx="120" ry="25" fill="#3d5a80"/>
          {/* Hat cone */}
          <path d="M -100,-30 L 0,-180 L 100,-30 Z" fill="#3d5a80"/>
          {/* Moon decorations */}
          <path d="M -20,-150 Q -25,-145 -20,-140 Q -15,-145 -20,-150 Z" fill="#f4a261"/>
          <path d="M 40,-100 Q 35,-95 40,-90 Q 45,-95 40,-100 Z" fill="#f4a261"/>
          <path d="M -70,-70 Q -75,-65 -70,-60 Q -65,-65 -70,-70 Z" fill="#f4a261"/>
          {/* Star decorations */}
          <path d="M 10,-130 L 12,-125 L 17,-125 L 13,-121 L 15,-116 L 10,-119 L 5,-116 L 7,-121 L 3,-125 L 8,-125 Z" fill="#f4a261"/>
          <path d="M 70,-50 L 72,-45 L 77,-45 L 73,-41 L 75,-36 L 70,-39 L 65,-36 L 67,-41 L 63,-45 L 68,-45 Z" fill="#f4a261"/>
          <path d="M -50,-110 L -48,-105 L -43,-105 L -47,-101 L -45,-96 L -50,-99 L -55,-96 L -53,-101 L -57,-105 L -52,-105 Z" fill="#f4a261"/>
        </g>
        
        {/* Robot Body/TV Monitor */}
        <g id="robot-body">
          {/* Body frame */}
          <rect x="-70" y="-10" width="140" height="110" rx="10" fill="#8b6f47" stroke="#5c4033" strokeWidth="3"/>
          {/* Screen/Monitor */}
          <rect x="-55" y="5" width="110" height="75" rx="5" fill="#7cb342" stroke="#5c4033" strokeWidth="2"/>
          {/* Screen highlights */}
          <ellipse cx="-20" cy="25" rx="25" ry="20" fill="#c5e1a5" opacity="0.7"/>
          <ellipse cx="15" cy="50" rx="30" ry="15" fill="#dcedc8" opacity="0.6"/>
          {/* Control button */}
          <circle cx="0" cy="95" r="8" fill="#f4a261"/>
        </g>
        
        {/* Arms */}
        <g id="arms">
          {/* Left arm */}
          <g id="left-arm">
            <rect x="-90" y="30" width="20" height="50" rx="3" fill="#5c4033"/>
            {/* Left hand */}
            <g transform="translate(-80, 80)">
              <ellipse cx="0" cy="0" rx="15" ry="10" fill="#e8e8e8"/>
              <path d="M -8,0 L -10,8 M -4,0 L -4,10 M 0,0 L 0,10 M 4,0 L 4,10 M 8,0 L 10,8" stroke="#5c4033" strokeWidth="2" fill="none"/>
            </g>
          </g>
          {/* Right arm */}
          <g id="right-arm">
            <rect x="70" y="30" width="20" height="50" rx="3" fill="#5c4033"/>
            {/* Right hand */}
            <g transform="translate(80, 80)">
              <ellipse cx="0" cy="0" rx="15" ry="10" fill="#e8e8e8"/>
              <path d="M -8,0 L -10,8 M -4,0 L -4,10 M 0,0 L 0,10 M 4,0 L 4,10 M 8,0 L 10,8" stroke="#5c4033" strokeWidth="2" fill="none"/>
            </g>
          </g>
        </g>
        
        {/* Legs */}
        <g id="legs">
          {/* Left leg */}
          <g id="left-leg">
            <rect x="-45" y="105" width="20" height="40" rx="3" fill="#5c4033"/>
            <rect x="-50" y="140" width="30" height="15" rx="5" fill="#6d4c41"/>
          </g>
          {/* Right leg */}
          <g id="right-leg">
            <rect x="25" y="105" width="20" height="40" rx="3" fill="#5c4033"/>
            <rect x="20" y="140" width="30" height="15" rx="5" fill="#6d4c41"/>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ViteFeiLogo;
