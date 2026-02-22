import { cn } from "../lib/utils";

/**
 * Avatar component displaying user profile initials in a circular badge.
 * Generates initials from firstName and lastName, with fallback to email or default 'U'.
 * Supports multiple sizes and accepts custom styling via className prop.
 *
 * @param firstName - User's first name
 * @param lastName - User's last name
 * @param email - User's email (used for fallback initial)
 * @param size - Avatar size variant: 'sm' (w-8 h-8), 'md' (w-10 h-10), 'lg' (w-12 h-12)
 * @param className - Additional CSS classes for custom styling
 * @returns Circular avatar badge with user initials
 */
interface UserAvatarProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const UserAvatar = ({
  firstName,
  lastName,
  email,
  size = "md",
  className,
}: UserAvatarProps) => {
  // Generate initials from name or email
  const getInitials = (): string => {
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    }
    if (firstName) {
      return firstName.charAt(0).toUpperCase();
    }
    if (email) {
      return email.charAt(0).toUpperCase();
    }
    return "U";
  };

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const initials = getInitials();

  return (
    <div
      className={cn(
        "rounded-full bg-white/20 text-white flex items-center justify-center font-semibold border-2 border-white/30 hover:border-white/50 transition-all duration-200",
        sizeClasses[size],
        className
      )}
      aria-label={`Avatar for ${firstName || email || "user"}`}
    >
      {initials}
    </div>
  );
};

export default UserAvatar;
