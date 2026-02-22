/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./Header";
import { AppContext } from "../contexts/AppContext";
import { SearchContext } from "../contexts/SearchContext";
import { loadStripe } from "@stripe/stripe-js";

// Create a mock QueryClient for react-query
const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

// Mock Stripe promise
const mockStripePromise = loadStripe("pk_test_mock");

// Mock user data that would be returned by fetchCurrentUser
const mockCurrentUser = {
  _id: "user_12345",
  email: "john.doe@example.com",
  password: "***",
  firstName: "John",
  lastName: "Doe",
  role: "user" as const,
  phone: "+1 (555) 123-4567",
  totalBookings: 5,
  totalSpent: 2500,
  isActive: true,
  emailVerified: true,
};

// Mock AppContext value with logged-in state
const mockAppContextValue: AppContext = {
  showToast: (toastMessage) => {
    console.log("Toast:", toastMessage);
  },
  isLoggedIn: true,
  stripePromise: mockStripePromise,
  showGlobalLoading: (message?: string) => {
    console.log("Global loading:", message);
  },
  hideGlobalLoading: () => {
    console.log("Hide global loading");
  },
  isGlobalLoading: false,
  globalLoadingMessage: "Loading...",
};

// Mock SearchContext value
const mockSearchContextValue: SearchContext = {
  destination: "San Francisco",
  checkIn: new Date(2024, 5, 15),
  checkOut: new Date(2024, 5, 20),
  adultCount: 2,
  childCount: 1,
  hotelId: "",
  saveSearchValues: (destination, checkIn, checkOut, adultCount, childCount) => {
    console.log("Save search values:", { destination, checkIn, checkOut, adultCount, childCount });
  },
  clearSearchValues: () => {
    console.log("Clear search values");
  },
};

// Set up mock query data for currentUser
mockQueryClient.setQueryData("currentUser", mockCurrentUser);

const HeaderDemo = () => {
  return (
    <QueryClientProvider client={mockQueryClient}>
      <AppContext.Provider value={mockAppContextValue}>
        <SearchContext.Provider value={mockSearchContextValue}>
            <div className="min-h-screen bg-gray-50">
              <Header />
              
              {/* Demo content to show the header context */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Header Component Demo</h2>
                  <p className="text-gray-600 mb-4">
                    The header above demonstrates the navigation component in a logged-in state.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p><strong>Current User:</strong> {mockCurrentUser.firstName} {mockCurrentUser.lastName}</p>
                    <p><strong>Email:</strong> {mockCurrentUser.email}</p>
                    <p><strong>Total Bookings:</strong> {mockCurrentUser.totalBookings}</p>
                    <p><strong>Authentication:</strong> Logged In</p>
                  </div>
                </div>
              </div>
            </div>
        </SearchContext.Provider>
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export default HeaderDemo;