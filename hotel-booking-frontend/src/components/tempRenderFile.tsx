/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import Header from "./Header";
import { AppContext } from "../contexts/AppContext";
import { SearchContext } from "../contexts/SearchContext";

// Mock AppContext value
const mockAppContext = {
  showToast: () => {},
  isLoggedIn: true,
  user: {
    userId: "123",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  stripePromise: Promise.resolve(null),
  showGlobalLoading: () => {},
  hideGlobalLoading: () => {},
  isGlobalLoading: false,
  globalLoadingMessage: "",
};

// Mock SearchContext value
const mockSearchContext = {
  destination: "New York",
  checkIn: new Date(),
  checkOut: new Date(Date.now() + 86400000 * 3), // 3 days from now
  adultCount: 2,
  childCount: 1,
  hotelId: "",
  saveSearchValues: () => {},
  clearSearchValues: () => {},
};

const HeaderRender = () => {
  return (
    <AppContext.Provider value={mockAppContext}>
      <SearchContext.Provider value={mockSearchContext}>
        <Header />
      </SearchContext.Provider>
    </AppContext.Provider>
  );
};

export default HeaderRender;
