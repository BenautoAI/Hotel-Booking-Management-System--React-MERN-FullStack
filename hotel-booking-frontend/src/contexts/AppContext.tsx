import React, { useState, useMemo } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useToast } from "../hooks/use-toast";

const STRIPE_PUB_KEY = import.meta.env.VITE_STRIPE_PUB_KEY || "";

type ToastMessage = {
  title: string;
  description?: string;
  type: "SUCCESS" | "ERROR" | "INFO";
};

export type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: boolean;
  stripePromise: Promise<Stripe | null>;
  showGlobalLoading: (message?: string) => void;
  hideGlobalLoading: () => void;
  isGlobalLoading: boolean;
  globalLoadingMessage: string;
};

export const AppContext = React.createContext<AppContext | undefined>(
  undefined
);

const stripePromise = loadStripe(STRIPE_PUB_KEY);

/**
 * Provider component for application-wide context.
 * Manages authentication state, toast notifications, and global loading state.
 * Memoizes context value to prevent unnecessary re-renders of dependent components.
 *
 * Features:
 * - Auth state validation with localStorage fallback for JWT tokens
 * - Global loading spinner with customizable messages
 * - Toast notification system
 * - Stripe promise initialization
 *
 * @param children - React components to wrap with AppContext
 * @returns AppContext provider wrapping children
 */
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  const [globalLoadingMessage, setGlobalLoadingMessage] = useState(
    "Hotel room is getting ready..."
  );
  const { toast } = useToast();

  // Simple check for stored tokens without API calls
  const checkStoredAuth = () => {
    const localToken = localStorage.getItem("session_id");
    return !!localToken;
  };

  // Always run validation query - let it handle token checking internally
  const { isError, isLoading, data } = useQuery(
    "validateToken",
    apiClient.validateToken,
    {
      retry: false,
      refetchOnWindowFocus: false, // Don't refetch on focus
      staleTime: 5 * 60 * 1000, // 5 minutes
      // Always enabled - let validateToken handle missing tokens
      enabled: true,
      // Fallback for JWT authentication - no logging in production
      onError: (error: any) => {
        if (import.meta.env.DEV) {
          const storedToken = localStorage.getItem("session_id");
          if (storedToken && error.response?.status === 401) {
            console.log("Auth validation failed - checking localStorage fallback");
          }
        }
      },
    }
  );

  // Compute logged-in state with simplified fallback logic
  // Depends on: query result (isLoading, isError, data)
  const finalIsLoggedIn = useMemo(() => {
    // Primary: Valid data from API
    if (!isLoading && !isError && !!data) return true;
    
    // Fallback: Stored token when validation fails (JWT mode)
    const hasStoredToken = checkStoredAuth();
    const hasUserId = !!localStorage.getItem("user_id");
    if (hasStoredToken && (isError || (!isLoading && !data)) && hasUserId) {
      return true;
    }
    
    return false;
  }, [isLoading, isError, data]);

  const showToast = (toastMessage: ToastMessage) => {
    const variant =
      toastMessage.type === "SUCCESS"
        ? "success"
        : toastMessage.type === "ERROR"
        ? "destructive"
        : "info";

    toast({
      variant,
      title: toastMessage.title,
      description: toastMessage.description,
    });
  };

  const showGlobalLoading = (message?: string) => {
    if (message) {
      setGlobalLoadingMessage(message);
    }
    setIsGlobalLoading(true);
  };

  const hideGlobalLoading = () => {
    setIsGlobalLoading(false);
  };

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      showToast,
      isLoggedIn: finalIsLoggedIn,
      stripePromise,
      showGlobalLoading,
      hideGlobalLoading,
      isGlobalLoading,
      globalLoadingMessage,
    }),
    [finalIsLoggedIn, isGlobalLoading, globalLoadingMessage]
  );

  return (
    <AppContext.Provider value={contextValue}>
      {isGlobalLoading && <LoadingSpinner message={globalLoadingMessage} />}
      {children}
    </AppContext.Provider>
  );
};

// ...existing code...
