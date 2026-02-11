/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import React from "react";
import Footer from "./Footer";
import { AppContext } from "../contexts/AppContext";

// Mock AppContext for demonstration purposes
const MockAppContextProvider = ({
  children,
  isLoggedIn = false,
}: {
  children: React.ReactNode;
  isLoggedIn?: boolean;
}) => {
  const mockContextValue = {
    showToast: () => {},
    isLoggedIn: isLoggedIn,
    stripePromise: Promise.resolve(null),
    showGlobalLoading: () => {},
    hideGlobalLoading: () => {},
    isGlobalLoading: false,
    globalLoadingMessage: "",
  };

  return (
    <AppContext.Provider value={mockContextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Render example demonstrating both logged-in and logged-out states
const FooterExample = () => {
  return (
    <div className="space-y-8">
      {/* Footer with logged-in state */}
      <div>
        <h2 className="text-2xl font-bold mb-4 px-4">Footer (Logged In)</h2>
        <MockAppContextProvider isLoggedIn={true}>
          <Footer />
        </MockAppContextProvider>
      </div>

      {/* Footer with logged-out state */}
      <div>
        <h2 className="text-2xl font-bold mb-4 px-4">Footer (Logged Out)</h2>
        <MockAppContextProvider isLoggedIn={false}>
          <Footer />
        </MockAppContextProvider>
      </div>
    </div>
  );
};

export default FooterExample;
