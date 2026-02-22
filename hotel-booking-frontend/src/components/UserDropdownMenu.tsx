import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";
import UserAvatar from "./UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  User,
  Settings,
  Calendar,
  Building2,
  LogOut,
  ChevronDown,
} from "lucide-react";
import useAppContext from "../hooks/useAppContext";
import { useQueryClient } from "react-query";
import { useMutationWithLoading } from "../hooks/useLoadingHooks";

/**
 * Dropdown menu component providing quick access to user profile and actions.
 * Displays user avatar with name as trigger, shows user info and navigation links in dropdown.
 * Handles sign out functionality with error handling and notifications.
 *
 * @returns Dropdown menu component with user profile trigger and action items
 */
const UserDropdownMenu = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  // Fetch current user data
  const { data: currentUser, isLoading } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser,
    {
      retry: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-200 group">
          <UserAvatar
            firstName={currentUser?.firstName}
            lastName={currentUser?.lastName}
            email={currentUser?.email}
            size="md"
          />
          {!isLoading && currentUser && (
            <span className="hidden lg:block text-white/90 group-hover:text-white font-medium transition-colors">
              {currentUser.firstName || "User"}
            </span>
          )}
          <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-white transition-all group-hover:scale-110" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white" align="end">
        {/* User Info Header */}
        {currentUser && (
          <>
            <DropdownMenuLabel>
              <div className="flex items-center space-x-3">
                <UserAvatar
                  firstName={currentUser.firstName}
                  lastName={currentUser.lastName}
                  email={currentUser.email}
                  size="lg"
                  className="bg-primary-600 text-white border-primary-600"
                />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-semibold text-gray-900 truncate">
                    {currentUser.firstName} {currentUser.lastName}
                  </span>
                  <span className="text-xs text-gray-500 truncate">
                    {currentUser.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}

        {/* Quick Actions */}
        <DropdownMenuItem asChild>
          <Link
            to="/my-profile"
            className="flex items-center cursor-pointer text-gray-700 hover:text-primary-600"
          >
            <User className="w-4 h-4 mr-2" />
            My Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            to="/my-bookings"
            className="flex items-center cursor-pointer text-gray-700 hover:text-primary-600"
          >
            <Calendar className="w-4 h-4 mr-2" />
            My Bookings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            to="/my-hotels"
            className="flex items-center cursor-pointer text-gray-700 hover:text-primary-600"
          >
            <Building2 className="w-4 h-4 mr-2" />
            My Hotels
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            to="/settings"
            className="flex items-center cursor-pointer text-gray-700 hover:text-primary-600"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Sign Out */}
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
