import * as React from "react";
import { cn } from "../../lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  fallback?: string;
  variant?: "default" | "gradient";
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    { className, src, alt, size = "md", fallback, variant = "default", ...props },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false);

    const handleImageError = () => {
      setImageError(true);
    };

    // Generate initials from alt text or fallback
    const getInitials = () => {
      const text = alt || fallback || "";
      return text
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    };

    const containerClasses = cn(
      "relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-red-500",
      sizeClasses[size],
      variant === "gradient" && "p-[3px]",
      className
    );

    const gradientBg =
      "bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400";

    const innerClasses = cn(
      "flex h-full w-full items-center justify-center rounded-full bg-white",
      variant === "default" && "border-2 border-primary-200"
    );

    const imageClasses = "h-full w-full rounded-full object-cover";

    const fallbackClasses =
      "text-sm font-semibold text-primary-600 select-none";

    return (
      <div
        ref={ref}
        className={cn(containerClasses, variant === "gradient" && gradientBg)}
        {...props}
      >
        <div className={innerClasses}>
          {src && !imageError ? (
            <img
              src={src}
              alt={alt || "Avatar"}
              className={imageClasses}
              onError={handleImageError}
            />
          ) : (
            <span className={fallbackClasses}>{getInitials()}</span>
          )}
        </div>
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
