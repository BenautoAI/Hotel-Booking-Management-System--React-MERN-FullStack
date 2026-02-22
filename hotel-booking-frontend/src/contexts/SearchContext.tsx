import React, { useState, useMemo } from "react";

export type SearchContext = {
  destination: string;
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  hotelId: string;
  saveSearchValues: (
    destination: string,
    checkIn: Date,
    checkOut: Date,
    adultCount: number,
    childCount: number
  ) => void;
  clearSearchValues: () => void;
};

export const SearchContext = React.createContext<SearchContext | undefined>(
  undefined
);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

/**
 * Provider component for search state management.
 * Manages hotel search filters (destination, dates, guest counts).
 * Persists search values to sessionStorage for maintaining state across navigation.
 * Memoizes context value to prevent unnecessary re-renders of dependent components.
 *
 * Features:
 * - Destination and date range management
 * - Guest count tracking (adults and children)
 * - Hotel ID persistence
 * - Session-based storage for search state
 * - Cache management for Google Places data
 *
 * @param children - React components to wrap with SearchContext
 * @returns SearchContext provider wrapping children
 */
export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [destination, setDestination] = useState<string>(
    () => sessionStorage.getItem("destination") || ""
  );
  const [checkIn, setCheckIn] = useState<Date>(
    () =>
      new Date(sessionStorage.getItem("checkIn") || new Date().toISOString())
  );
  const [checkOut, setCheckOut] = useState<Date>(
    () =>
      new Date(sessionStorage.getItem("checkOut") || new Date().toISOString())
  );
  const [adultCount, setAdultCount] = useState<number>(() =>
    parseInt(sessionStorage.getItem("adultCount") || "1")
  );
  const [childCount, setChildCount] = useState<number>(() =>
    parseInt(sessionStorage.getItem("childCount") || "1")
  );
  const [hotelId, setHotelId] = useState<string>(
    () => sessionStorage.getItem("hotelID") || ""
  );

  const saveSearchValues = (
    destination: string,
    checkIn: Date,
    checkOut: Date,
    adultCount: number,
    childCount: number,
    hotelId?: string
  ) => {
    setDestination(destination);
    setCheckIn(checkIn);
    setCheckOut(checkOut);
    setAdultCount(adultCount);
    setChildCount(childCount);
    if (hotelId) {
      setHotelId(hotelId);
    }

    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("checkIn", checkIn.toISOString());
    sessionStorage.setItem("checkOut", checkOut.toISOString());
    sessionStorage.setItem("adultCount", adultCount.toString());
    sessionStorage.setItem("childCount", childCount.toString());

    if (hotelId) {
      sessionStorage.setItem("hotelId", hotelId);
    }
  };

  const clearSearchValues = () => {
    setDestination("");
    setCheckIn(new Date());
    setCheckOut(new Date());
    setAdultCount(1);
    setChildCount(0);
    setHotelId("");

    sessionStorage.removeItem("destination");
    sessionStorage.removeItem("checkIn");
    sessionStorage.removeItem("checkOut");
    sessionStorage.removeItem("adultCount");
    sessionStorage.removeItem("childCount");
    sessionStorage.removeItem("hotelId");

    // Clear cached places data if it's older than 5 minutes
    const cacheTime = localStorage.getItem("hotelPlacesTime");
    if (cacheTime) {
      const now = Date.now();
      if (now - parseInt(cacheTime) > 5 * 60 * 1000) {
        localStorage.removeItem("hotelPlaces");
        localStorage.removeItem("hotelPlacesTime");
      }
    }
  };

  // Memoize context value to prevent unnecessary re-renders
  // Re-compute when any search state or handler changes
  const contextValue = useMemo(
    () => ({
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount,
      hotelId,
      saveSearchValues,
      clearSearchValues,
    }),
    [destination, checkIn, checkOut, adultCount, childCount, hotelId, saveSearchValues, clearSearchValues]
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

// ...existing code...
