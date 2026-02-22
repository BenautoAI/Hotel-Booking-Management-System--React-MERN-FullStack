import { User } from "lucide-react";
import clsx from "clsx"; // Note: clsx should be available in project dependencies

/**
 * Avatar component that displays a circular profile picture or user initials.
 * Shows profile picture if available, falls back to initials from first/last name,
 * or displays a default User icon if no name data is available.
 *
 * @param props - UserAvatarProps including firstName, lastName, profilePicture, size, and className
 * @returns Avatar circle element with configurable size and styling
 */
interface UserAvatarProps {
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function UserAvatar({
  firstName,
  lastName,
  profilePicture,
  size = "md",
  className = "",
}: UserAvatarProps) {
  // Generate initials from first and last name
  const getInitials = () => {
    if (!firstName && !lastName) return "";
    
    const firstInitial = firstName?.charAt(0).toUpperCase() || "";
    const lastInitial = lastName?.charAt(0).toUpperCase() || "";
    
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials();

  // Size configuration
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div
      className={clsx(
        sizeClasses[size],
        "rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden",
        "ring-2 ring-white/20 transition-all duration-200",
        "hover:ring-white/40 hover:scale-105",
        className
      )}
    >
      {profilePicture ? (
        <img
          src={profilePicture}
          alt={`${firstName || ""} ${lastName || ""}`.trim() || "User"}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to initials if image fails to load
            e.currentTarget.style.display = "none";
          }}
        />
      ) : initials ? (
        <span className="font-semibold text-white select-none">
          {initials}
        </span>
      ) : (
        <User className={clsx(iconSizes[size], "text-white")} />
      )}
    </div>
  );
}
