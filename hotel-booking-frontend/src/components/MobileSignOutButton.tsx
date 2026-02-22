import { useQueryClient } from "react-query";
import useAppContext from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import * as apiClient from "../api-client";

interface MobileSignOutButtonProps {
  onSignOut: () => void;
}

/**
 * Mobile Sign Out Button component for mobile navigation menu
 * Integrates with the sign out mutation logic and closes the mobile menu
 * @param onSignOut - Callback fired when sign out is complete to close mobile menu
 */
const MobileSignOutButton = ({ onSignOut }: MobileSignOutButtonProps) => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  /**
   * Handle sign out action with loading state and toast notifications
   */
  const handleSignOut = async () => {
    try {
      await apiClient.signOut();
      await queryClient.invalidateQueries("validateToken");
      showToast({
        title: "Successfully Signed Out",
        description:
          "You have been logged out of your account. Redirecting to sign-in page...",
        type: "SUCCESS",
      });
      onSignOut(); // Close mobile menu
      navigate("/sign-in");
      window.location.reload();
    } catch (error: any) {
      showToast({
        title: "Sign Out Failed",
        description: error.message,
        type: "ERROR",
      });
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center w-full px-4 py-3 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
    >
      <LogOut className="w-5 h-5 mr-3" />
      Sign Out
    </button>
  );
};

export default MobileSignOutButton;
