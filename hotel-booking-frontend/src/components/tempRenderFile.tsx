/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./Footer";
import { AppContext } from "../contexts/AppContext";
import type { AppContext as AppContextType } from "../contexts/AppContext";
import type { UserType } from "../../../shared/types";

// Create a QueryClient instance for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

// Mock user data for the UserAvatar component
const mockUser: UserType = {
  _id: "user123",
  email: "john.doe@example.com",
  password: "",
  firstName: "John",
  lastName: "Doe",
  role: "user",
};

// Mock fetchCurrentUser API call
queryClient.setQueryData("currentUser", mockUser);

// Mock AppContext with logged-in state
const mockAppContext: AppContextType = {
  isLoggedIn: true,
  showToast: (message) => {
    console.log("Toast:", message);
  },
  stripePromise: Promise.resolve(null),
  showGlobalLoading: () => {},
  hideGlobalLoading: () => {},
  isGlobalLoading: false,
  globalLoadingMessage: "",
};

const FooterDemo = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={mockAppContext}>
        <div className="min-h-screen bg-gray-50">
          <div className="flex-1">
            {/* Placeholder content to show Footer at bottom */}
            <div className="max-w-7xl mx-auto px-4 py-12">
              <h1 className="text-3xl font-bold text-gray-900">
                Footer Component Demo
              </h1>
              <p className="mt-4 text-gray-600">
                Scroll down to see the Footer component with all its sections
                including company info, quick links, support, contact
                information, and social media icons.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export default FooterDemo;
