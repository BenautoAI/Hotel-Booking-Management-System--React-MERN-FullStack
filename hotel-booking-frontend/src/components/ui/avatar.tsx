import React from "react";
import { cn } from "../../lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  fallback,
  className,
  size = "md",
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500 p-[3px]",
        sizeClasses[size],
        className
      )}
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-white">
        {!imageError && src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
            {fallback || (
              <span className="text-sm font-medium">
                {alt.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
