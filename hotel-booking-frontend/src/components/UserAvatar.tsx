import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { User } from "lucide-react";
import useAppContext from "../hooks/useAppContext";

/**
 * UserAvatar Component
 * 
 * Displays the logged-in user's avatar with their initials.
 * Fetches current user data and extracts first letters from firstName and lastName.
 * Shows a generic user icon when not logged in or when user data is unavailable.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.size] - Size class for the avatar (default: "h-10 w-10")
 * @param {string} [props.className] - Additional CSS classes
 */
interface UserAvatarProps {
  size?: string;
  className?: string;
}

const UserAvatar = ({ size = "h-10 w-10", className = "" }: UserAvatarProps) => {
  const { isLoggedIn } = useAppContext();

  // Fetch user data only when logged in
  const { data: user } = useQuery("currentUser", apiClient.fetchCurrentUser, {
    enabled: isLoggedIn,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  /**
   * Generate initials from user's first and last name
   * @param firstName - User's first name
   * @param lastName - User's last name
   * @returns Two-letter initials (e.g., "JD" for John Doe)
   */
  const getInitials = (firstName?: string, lastName?: string): string => {
    if (!firstName && !lastName) return "";
    
    const firstInitial = firstName?.charAt(0).toUpperCase() || "";
    const lastInitial = lastName?.charAt(0).toUpperCase() || "";
    
    // If only one name is available, use first two letters
    if (!firstInitial) return lastName?.substring(0, 2).toUpperCase() || "";
    if (!lastInitial) return firstName?.substring(0, 2).toUpperCase() || "";
    
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials(user?.firstName, user?.lastName);
  const fullName = user ? `${user.firstName} ${user.lastName}` : "Guest";

  // Don't render anything when not logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2" title={fullName}>
      <Avatar className={`${size} ${className} transition-transform hover:scale-105`}>
        <AvatarFallback className="text-sm">
          {initials || <User className="w-5 h-5" />}
        </AvatarFallback>
      </Avatar>
      <span className="text-gray-300 text-sm font-medium hidden sm:inline">
        {user?.firstName || "Guest"}
      </span>
    </div>
  );
};

export default UserAvatar;
