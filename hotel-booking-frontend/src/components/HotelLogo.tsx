interface HotelLogoProps {
  className?: string;
}

const HotelLogo = ({ className = "w-6 h-6" }: HotelLogoProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Building structure */}
      <path
        d="M3 21h18V10L12 3 3 10v11z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      
      {/* Building outline */}
      <path
        d="M3 21V10L12 3l9 7v11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Door */}
      <rect
        x="9"
        y="15"
        width="3"
        height="6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="white"
      />
      
      {/* Windows - Left side */}
      <rect
        x="5"
        y="12"
        width="2"
        height="2"
        fill="currentColor"
      />
      <rect
        x="5"
        y="16"
        width="2"
        height="2"
        fill="currentColor"
      />
      
      {/* Windows - Right side */}
      <rect
        x="14"
        y="12"
        width="2"
        height="2"
        fill="currentColor"
      />
      <rect
        x="14"
        y="16"
        width="2"
        height="2"
        fill="currentColor"
      />
      
      {/* Star rating indicator */}
      <path
        d="M12 7l.5 1.5h1.6l-1.3.9.5 1.6-1.3-.9-1.3.9.5-1.6-1.3-.9h1.6z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HotelLogo;
