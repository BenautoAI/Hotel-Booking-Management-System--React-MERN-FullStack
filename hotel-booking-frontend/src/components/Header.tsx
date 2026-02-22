import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {
  FileText,
  Activity,
  BarChart3,
  Building2,
  Calendar,
  LogIn,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import useAppContext from "../hooks/useAppContext";
import useSearchContext from "../hooks/useSearchContext";
import * as apiClient from "../api-client";
import SignOutButton from "./SignOutButton";
import MobileSignOutButton from "./MobileSignOutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";

/**
 * Header component with responsive navigation
 * Displays app logo, navigation links, and user profile
 * Includes desktop navigation with profile dropdown and mobile hamburger menu
 */
const Header = () => {
  const { isLoggedIn } = useAppContext();
  const search = useSearchContext();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fetch current user data for profile display
  const { data: currentUser } = useQuery(
    "currentUser",
    apiClient.fetchCurrentUser,
    {
      enabled: isLoggedIn,
      retry: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  /**
   * Handle logo click to navigate to home and clear mobile menu
   */
  const handleLogoClick = () => {
    // Clear search context when going to home page
    search.clearSearchValues();
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  /**
   * Generate user initials from email or name
   * Hierarchy: firstName + lastName → firstName → email[0] → "U"
   * @param user - User data object
   * @returns Two-character initials string in uppercase
   */
  const getUserInitials = useCallback((user: typeof currentUser): string => {
    if (!user) return "U";
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    if (user.firstName) {
      return user.firstName[0].toUpperCase();
    }
    if (user.email) {
      return user.email[0].toUpperCase();
    }
    return "U";
  }, []);

  /**
   * Get user display name from user data
   * Hierarchy: firstName + lastName → firstName → email → "User"
   * @param user - User data object
   * @returns Formatted user display name
   */
  const getUserDisplayName = useCallback((user: typeof currentUser): string => {
    if (!user) return "User";
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    if (user.firstName) {
      return user.firstName;
    }
    return user.email;
  }, []);

  return (
    <>
      {/* Development Banner */}
      {/* {!import.meta.env.PROD && (
        <div className="bg-yellow-500 text-black text-center py-1 text-xs font-medium">
          🚧 Development Mode - Auth state persists between sessions
        </div>
      )} */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-large sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 group"
            >
              <div className="bg-white p-2 rounded-lg shadow-soft group-hover:shadow-medium transition-all duration-300">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-primary-100 transition-colors">
                MernHolidays
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {isLoggedIn ? (
                <>
                  {/* Analytics Dashboard Link */}
                  <Link
                    className="flex items-center text-white/90 hover:text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-all duration-200 group"
                    to="/analytics"
                  >
                    <BarChart3 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Analytics
                  </Link>

                  {/* <div className="w-px h-6 bg-white/20 mx-2"></div> */}
                  <Link
                    className="flex items-center text-white/90 hover:text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-all duration-200 group"
                    to="/my-bookings"
                  >
                    <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    My Bookings
                  </Link>
                  <Link
                    className="flex items-center text-white/90 hover:text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-all duration-200 group"
                    to="/my-hotels"
                  >
                    <Building2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    My Hotels
                  </Link>

                  {/* API Documentation Link */}
                  <Link
                    className="flex items-center text-white/90 hover:text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-all duration-200 group"
                    to="/api-docs"
                  >
                    <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    API Docs
                  </Link>

                  {/* API Status Link */}
                  <Link
                    className="flex items-center text-white/90 hover:text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-all duration-200 group"
                    to="/api-status"
                  >
                    <Activity className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    API Status
                  </Link>

                  {/* User Profile Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 group ml-2">
                        {/* User Avatar */}
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-600 font-semibold text-sm border-2 border-white/20 group-hover:border-white/40 transition-all">
                          {getUserInitials(currentUser)}
                        </div>
                        <ChevronDown className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white" align="end">
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium text-gray-900">
                            {getUserDisplayName(currentUser)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {currentUser?.email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <SignOutButton />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <Link
                  to="/sign-in"
                  className="flex items-center bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 hover:shadow-medium transition-all duration-200 group"
                >
                  <LogIn className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Sign In
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <div
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Navigation
                </h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex flex-col">
                {isLoggedIn ? (
                  <>
                    {/* User Profile Section */}
                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold text-lg">
                          {getUserInitials(currentUser)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {getUserDisplayName(currentUser)}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {currentUser?.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col py-2">
                      <Link
                        to="/analytics"
                        onClick={closeMobileMenu}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        <BarChart3 className="w-5 h-5 mr-3" />
                        Analytics
                      </Link>
                      <Link
                        to="/my-bookings"
                        onClick={closeMobileMenu}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        <Calendar className="w-5 h-5 mr-3" />
                        My Bookings
                      </Link>
                      <Link
                        to="/my-hotels"
                        onClick={closeMobileMenu}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        <Building2 className="w-5 h-5 mr-3" />
                        My Hotels
                      </Link>
                      <Link
                        to="/api-docs"
                        onClick={closeMobileMenu}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        <FileText className="w-5 h-5 mr-3" />
                        API Docs
                      </Link>
                      <Link
                        to="/api-status"
                        onClick={closeMobileMenu}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        <Activity className="w-5 h-5 mr-3" />
                        API Status
                      </Link>
                    </nav>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-2" />

                    {/* Sign Out Section */}
                    <div className="px-4 py-2">
                      <MobileSignOutButton onSignOut={closeMobileMenu} />
                    </div>
                  </>
                ) : (
                  <div className="p-4">
                    <Link
                      to="/sign-in"
                      onClick={closeMobileMenu}
                      className="flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all"
                    >
                      <LogIn className="w-5 h-5 mr-2" />
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};



export default Header;
