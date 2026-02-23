import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import useAppContext from "./useAppContext";

/**
 * Hook to fetch current user data using React Query
 * Only fetches when user is logged in
 * Caches data for 5 minutes
 */
export const useCurrentUser = () => {
  const { isLoggedIn } = useAppContext();

  return useQuery(
    "currentUser",
    apiClient.fetchCurrentUser,
    {
      enabled: isLoggedIn, // Only fetch when logged in
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
