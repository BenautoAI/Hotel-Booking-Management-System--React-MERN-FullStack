import { QueryClient } from "react-query";

// Shared QueryClient instance
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});
