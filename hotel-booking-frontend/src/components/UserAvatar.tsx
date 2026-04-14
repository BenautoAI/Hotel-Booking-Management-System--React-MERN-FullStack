import React from "react";
import { cn } from "../lib/utils";

interface UserAvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  borderColor?: string;
  borderWidth?: string;
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  alt = "User Avatar",
  size = "md",
  borderColor = "from-primary-300 via-primary-400 to-purple-500",
  borderWidth = "p-1",
}) => {
  return (
    <div
      className={cn(
        `rounded-full bg-gradient-to-br ${borderColor}`,
        borderWidth,
        sizeClasses[size],
        "flex items-center justify-center shadow-lg"
      )}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-gray-600 font-medium text-sm">No Image</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
