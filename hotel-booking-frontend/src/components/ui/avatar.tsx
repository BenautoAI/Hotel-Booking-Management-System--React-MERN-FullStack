import * as React from "react";
import { cn } from "../../lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = "Avatar", size = "md", fallback, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);

    const handleImageError = () => {
      setImageError(true);
    };

    const getInitials = (name?: string) => {
      if (!name) return "U";
      const names = name.split(" ");
      if (names.length >= 2) {
        return `${names[0][0]}${names[1][0]}`.toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    };

    return (
      <div
        ref={ref}
        className={cn("relative inline-block", className)}
        {...props}
      >
        {/* Gradient border wrapper */}
        <div
          className={cn(
            "rounded-full p-[2px]",
            "bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400",
            sizeClasses[size]
          )}
        >
          {/* Inner avatar container */}
          <div
            className={cn(
              "relative overflow-hidden rounded-full bg-white w-full h-full flex items-center justify-center"
            )}
          >
            {src && !imageError ? (
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-primary-600 text-white font-semibold text-sm">
                {getInitials(fallback)}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
