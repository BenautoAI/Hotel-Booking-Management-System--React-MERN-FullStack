import { Avatar } from "./ui/avatar";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { getUserInitials } from "../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, Trash2, RefreshCw, Mail } from "lucide-react";
import { useQueryClient } from "react-query";
import { useMutationWithLoading } from "../hooks/useLoadingHooks";
import * as apiClient from "../api-client";
import useAppContext from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

const UserAvatar = () => {
  const { data: currentUser, isLoading } = useCurrentUser();
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const mutation = useMutationWithLoading(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({
        title: "Successfully Signed Out",
        description:
          "You have been logged out of your account. Redirecting to sign-in page...",
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

  const clearAuthMutation = useMutationWithLoading(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({
        title: "Auth State Cleared",
        description:
          "Authentication state has been cleared. Redirecting to sign-in page...",
        type: "SUCCESS",
      });
      navigate("/sign-in");
      window.location.reload();
    },
    onError: (error: Error) => {
      showToast({
        title: "Clear Auth Failed",
        description: error.message,
        type: "ERROR",
      });
    },
    loadingMessage: "Clearing auth state...",
  });

  const clearAllStorage = () => {
    apiClient.clearAllStorage();
    showToast({
      title: "Storage Cleared",
      description:
        "All browser storage (localStorage, sessionStorage, cookies) has been cleared. Page will reload...",
      type: "SUCCESS",
    });
    window.location.reload();
  };

  const handleSignOut = () => {
    mutation.mutate(undefined);
  };

  const handleClearAuth = () => {
    clearAuthMutation.mutate(undefined);
  };

  if (isLoading) {
    return (
      <div className="h-10 w-10 rounded-full bg-white/20 animate-pulse" />
    );
  }

  if (!currentUser) {
    return null;
  }

  const initials = getUserInitials(currentUser.firstName, currentUser.lastName);
  const fullName = `${currentUser.firstName} ${currentUser.lastName}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full transition-all duration-200">
          <Avatar
            size="md"
            fallback={initials}
            alt={fullName}
            className="ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-200 group-hover:scale-105"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white" align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-semibold text-gray-900">{fullName}</p>
            <p className="text-xs text-gray-500 flex items-center">
              <Mail className="w-3 h-3 mr-1" />
              {currentUser.email}
            </p>
            {currentUser.role && (
              <p className="text-xs text-primary-600 font-medium capitalize">
                {currentUser.role.replace("_", " ")}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="text-primary-600">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </DropdownMenuItem>

        {/* Development utilities - only show in development */}
        {!import.meta.env.PROD && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleClearAuth}
              className="text-red-600"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Auth State
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={clearAllStorage}
              className="text-orange-600"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Clear All Storage
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
