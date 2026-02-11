import React from "react";
import { cn } from "../../lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  withGradientBorder?: boolean;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  className,
  withGradientBorder = false,
}) => {
  const avatarContent = (
    <img
      src={src}
      alt={alt}
      className={cn(
        "rounded-full object-cover",
        sizeClasses[size],
        !withGradientBorder && className
      )}
    />
  );

  if (withGradientBorder) {
    return (
      <div
        className={cn(
          "rounded-full p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-300",
          className
        )}
      >
        {avatarContent}
      </div>
    );
  }

  return avatarContent;
};

export default Avatar;
