import React from "react";
import { Avatar } from "./ui/avatar";
import { User } from "lucide-react";
import { cn } from "../lib/utils";

export interface UserAvatarProps {
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  size?: "sm" | "default" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  onClick?: () => void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  firstName,
  lastName,
  imageUrl,
  size = "default",
  className,
  onClick,
}) => {
  // Generate initials from first and last name
  const getInitials = () => {
    if (firstName || lastName) {
      const firstInitial = firstName?.charAt(0)?.toUpperCase() || "";
      const lastInitial = lastName?.charAt(0)?.toUpperCase() || "";
      return `${firstInitial}${lastInitial}`;
    }
    return "";
  };

  const initials = getInitials();

  const fallbackContent = initials ? (
    <span
      className={cn(
        "font-bold text-white uppercase",
        size === "sm" && "text-[10px]",
        size === "default" && "text-xs",
        size === "md" && "text-sm",
        size === "lg" && "text-base",
        size === "xl" && "text-lg",
        size === "2xl" && "text-xl"
      )}
    >
      {initials}
    </span>
  ) : (
    <User
      className={cn(
        "text-white",
        size === "sm" && "h-4 w-4",
        size === "default" && "h-5 w-5",
        size === "md" && "h-6 w-6",
        size === "lg" && "h-8 w-8",
        size === "xl" && "h-10 w-10",
        size === "2xl" && "h-12 w-12"
      )}
    />
  );

  return (
    <Avatar
      src={imageUrl}
      alt={`${firstName || ""} ${lastName || ""}`.trim() || "User"}
      size={size}
      fallback={fallbackContent}
      className={cn(
        "transition-all duration-300",
        onClick && "cursor-pointer hover:scale-105 hover:shadow-lg",
        className
      )}
      onClick={onClick}
    />
  );
};

export default UserAvatar;
