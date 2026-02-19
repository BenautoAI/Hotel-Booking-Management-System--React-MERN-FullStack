/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

// import { createContext } from "react";
import Footer from "./Footer";
import type { AppContext as AppContextType } from "../contexts/AppContext";

// Mock AppContext with realistic values
// Note: BrowserRouter, QueryClientProvider, and AppContextProvider are already 
// configured at the app root level in main.tsx, so we only mock the context values here
const mockAppContext: AppContextType = {
  showToast: (toastMessage) => {
    console.log("Toast:", toastMessage);
  },
  isLoggedIn: true, // Show logged-in state to display all footer links
  stripePromise: Promise.resolve(null),
  showGlobalLoading: () => {},
  hideGlobalLoading: () => {},
  isGlobalLoading: false,
  globalLoadingMessage: "",
};

// Import the AppContext to provide mock values
import { AppContext } from "../contexts/AppContext";

const FooterRender = () => {
  return (
    <AppContext.Provider value={mockAppContext}>
      <div className="min-h-screen flex flex-col">
        {/* Spacer to push footer to bottom */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <p className="text-lg font-semibold">Footer Component Demo</p>
            <p className="text-sm">Scroll down to view the footer</p>
          </div>
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default FooterRender;
