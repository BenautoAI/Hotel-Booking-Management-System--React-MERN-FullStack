import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import useAppContext from "../hooks/useAppContext";
import { useMutationWithLoading } from "../hooks/useLoadingHooks";
import UserAvatar from "./UserAvatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import {
  BarChart3,
  Calendar,
  Building2,
  FileText,
  Activity,
  LogOut,
  User,
  Settings,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile navigation drawer component using Radix Dialog for slide-in animation.
 * Displays user info header, full navigation menu, profile actions, and sign out option.
 * Automatically closes when user navigates or clicks backdrop.
 *
 * @param isOpen - Controls whether the drawer is open or closed
 * @param onClose - Callback function triggered when drawer should close
 * @returns Mobile navigation drawer with user context and menu items
 */
const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast, isLoggedIn } = useAppContext();

  // Fetch current user data
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser,
    {
      retry: false,
      staleTime: 5 * 60 * 1000,
      enabled: isLoggedIn,
    }
  );

  const signOutMutation = useMutationWithLoading(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({
        title: "Successfully Signed Out",
        description: "You have been logged out. Redirecting to sign-in page...",
        type: "SUCCESS",
      });
      onClose();
      navigate("/sign-in");
      window.location.reload();
    },
    onError: (error: Error) => {
      showToast({
        title: "Sign Out Failed",
        description: error.message,
        type: "ERROR",
      });
    },
    loadingMessage: "Signing out...",
  });

  const handleSignOut = () => {
    signOutMutation.mutate(undefined);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white p-0" aria-describedby={undefined}>
        <DialogHeader className="sr-only">
          <DialogTitle>Navigation Menu</DialogTitle>
        </DialogHeader>
        {/* Custom Header with User Info */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 rounded-t-lg">
          {isLoggedIn && currentUser ? (
            <div className="flex items-center space-x-3">
              <UserAvatar
                firstName={currentUser.firstName}
                lastName={currentUser.lastName}
                email={currentUser.email}
                size="lg"
                className="border-white"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold truncate">
                  {currentUser.firstName} {currentUser.lastName}
                </p>
                <p className="text-white/80 text-sm truncate">
                  {currentUser.email}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-white font-semibold text-lg">Menu</div>
          )}
        </div>

        {/* Navigation Items */}
        <div className="px-4 py-2">
          {isLoggedIn ? (
            <>
              {/* Main Navigation */}
              <div className="space-y-1">
                <button
                  onClick={() => handleNavigation("/analytics")}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <BarChart3 className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">Analytics</span>
                </button>

                <button
                  onClick={() => handleNavigation("/my-bookings")}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">My Bookings</span>
                </button>

                <button
                  onClick={() => handleNavigation("/my-hotels")}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <Building2 className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">My Hotels</span>
                </button>

                <button
                  onClick={() => handleNavigation("/api-docs")}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <FileText className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">API Docs</span>
                </button>

                <button
                  onClick={() => handleNavigation("/api-status")}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <Activity className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">API Status</span>
                </button>
              </div>

              <Separator className="my-3" />

              {/* Profile Actions */}
              <div className="space-y-1">
                <button
                  onClick={() => handleNavigation("/my-profile")}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">My Profile</span>
                </button>

                <button
                  onClick={() => handleNavigation("/settings")}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Settings</span>
                </button>
              </div>

              <Separator className="my-3" />

              {/* Sign Out */}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors text-left"
              >
                <LogOut className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">Sign Out</span>
              </button>
            </>
          ) : (
            <div className="py-4">
              <button
                onClick={() => handleNavigation("/sign-in")}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileMenu;
