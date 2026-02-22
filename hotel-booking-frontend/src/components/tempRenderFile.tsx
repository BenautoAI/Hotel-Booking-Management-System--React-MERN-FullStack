/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./Header";

// Mock Context Providers
import React from "react";
import { AppContext } from "../contexts/AppContext";
import { SearchContext } from "../contexts/SearchContext";

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

// Mock AppContext Provider
const MockAppContextProvider = ({ children, isLoggedIn }: { children: React.ReactNode; isLoggedIn: boolean }) => {
  const mockToast = (message: any) => {
    console.log("Toast:", message);
  };

  const mockStripePromise = Promise.resolve(null);

  return (
    <AppContext.Provider
      value={{
        showToast: mockToast,
        isLoggedIn,
        stripePromise: mockStripePromise,
        showGlobalLoading: () => {},
        hideGlobalLoading: () => {},
        isGlobalLoading: false,
        globalLoadingMessage: "",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Mock SearchContext Provider
const MockSearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [hotelId, setHotelId] = useState("");

  const saveSearchValues = (
    dest: string,
    checkInDate: Date,
    checkOutDate: Date,
    adults: number,
    children: number
  ) => {
    setDestination(dest);
    setCheckIn(checkInDate);
    setCheckOut(checkOutDate);
    setAdultCount(adults);
    setChildCount(children);
  };

  const clearSearchValues = () => {
    setDestination("");
    setCheckIn(new Date());
    setCheckOut(new Date());
    setAdultCount(1);
    setChildCount(0);
    setHotelId("");
  };

  return (
    <SearchContext.Provider
      value={{
        destination,
        checkIn,
        checkOut,
        adultCount,
        childCount,
        hotelId,
        saveSearchValues,
        clearSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Demo component to toggle between logged-in and logged-out states
const HeaderDemo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <MockAppContextProvider isLoggedIn={isLoggedIn}>
        <MockSearchContextProvider>
            <div className="min-h-screen bg-gray-50">
              <Header />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-2xl font-bold mb-4 text-red-600">Header Component Demo</h2>
                  <p className="text-gray-600 mb-4">
                    Toggle between logged-in and logged-out states to see different navigation options.
                  </p>
                  <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Toggle Auth State (Currently: {isLoggedIn ? "Logged In" : "Logged Out"})
                  </button>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Current State:</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>Authentication: {isLoggedIn ? "Logged In" : "Logged Out"}</li>
                      <li>
                        Visible Links: {isLoggedIn ? "Analytics, My Bookings, My Hotels, API Docs, API Status, Sign Out" : "Sign In"}
                      </li>
                      <li>Logo click clears search and navigates to home</li>
                      <li>Responsive mobile menu available on small screens</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </MockSearchContextProvider>
      </MockAppContextProvider>
    </QueryClientProvider>
  );
};

export default HeaderDemo;
