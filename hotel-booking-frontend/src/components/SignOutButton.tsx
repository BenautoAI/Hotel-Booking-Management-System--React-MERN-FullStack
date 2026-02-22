import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { LogOut, Trash2, RefreshCw } from "lucide-react";

import { useMutationWithLoading } from "../hooks/useLoadingHooks";
import useAppContext from "../hooks/useAppContext";
import * as apiClient from "../api-client";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

/**
 * SignOutButton component that renders menu items for sign out actions
 * Used within dropdown menus in both desktop and mobile navigation contexts
 * Includes development utilities for clearing auth state and storage
 */
const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  /**
   * Sign out mutation with loading state and toast notifications
   * Invalidates the validateToken query to update auth state
   */
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

  /**
   * Clear auth state mutation for development/debugging purposes
   * Only available in non-production environments
   */
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

  /**
   * Clear all browser storage (localStorage, sessionStorage, cookies)
   * Development utility for testing incognito mode and storage cleanup
   */
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

  /**
   * Handle sign out action
   */
  const handleSignOut = () => {
    mutation.mutate(undefined);
  };

  /**
   * Handle clear auth state action
   */
  const handleClearAuth = () => {
    clearAuthMutation.mutate(undefined);
  };

  return (
    <>
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
    </>
  );
};

/**
 * Export SignOutButton for use in dropdown menus
 */
export default SignOutButton;
