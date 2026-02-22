import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  lazy,
  Suspense,
} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FileText,
  Activity,
  BarChart3,
  Building2,
  Calendar,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import useAppContext from "../hooks/useAppContext";
import useSearchContext from "../hooks/useSearchContext";

// Lazy load SignOutButton for authenticated users only
const SignOutButton = lazy(() => import("./SignOutButton"));

/**
 * Header component providing application-wide navigation.
 * Displays responsive header with logo, navigation links, and authentication controls.
 * Includes functional mobile menu with accessibility features (ARIA labels, keyboard navigation).
 * Memoized to prevent unnecessary re-renders from context updates.
 *
 * Features:
 * - Logo click navigates home and clears search state
 * - Desktop navigation with context-aware links (auth vs. guest)
 * - Mobile menu with smooth animations and backdrop
 * - Keyboard navigation (ESC to close menu)
 * - Body scroll lock when mobile menu is open
 * - Lazy-loaded SignOutButton for authenticated users
 *
 * @returns Optimized Header element with navigation and mobile menu
 */
const Header = () => {
  const { isLoggedIn } = useAppContext();
  const search = useSearchContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Memoize logo click handler to prevent re-creation on every render
  const handleLogoClick = useCallback(() => {
    search.clearSearchValues();
    navigate("/");
    setMobileMenuOpen(false);
  }, [search, navigate]);

  // Memoize mobile menu toggle handler
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Memoize navigation items based on authentication state
  const navigationItems = useMemo(() => {
    if (!isLoggedIn) {
      return [
        {
          to: "/sign-in",
          label: "Sign In",
          icon: LogIn,
          className: "flex items-center bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 hover:shadow-medium transition-all duration-200 group",
        },
      ];
    }

    return [
      { to: "/analytics", label: "Analytics", icon: BarChart3 },
      { to: "/my-bookings", label: "My Bookings", icon: Calendar },
      { to: "/my-hotels", label: "My Hotels", icon: Building2 },
      { to: "/api-docs", label: "API Docs", icon: FileText },
      { to: "/api-status", label: "API Status", icon: Activity },
    ];
  }, [isLoggedIn]);

  return (
    <>
      <header className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-large sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 group"
              aria-label="Go to home page"
            >
              <div className="bg-white p-2 rounded-lg shadow-soft group-hover:shadow-medium transition-all duration-300">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-primary-100 transition-colors">
                MernHolidays
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
              {isLoggedIn ? (
                <>
                  {navigationItems.map(({ to, label, icon: Icon }) => (
                    <Link
                      key={to}
                      className="flex items-center text-white/90 hover:text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-all duration-200 group"
                      to={to}
                    >
                      <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {label}
                    </Link>
                  ))}
                  <Suspense fallback={<div className="w-32 h-10" />}>
                    <SignOutButton />
                  </Suspense>
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
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />
            
            {/* Mobile Menu Panel */}
            <nav
              id="mobile-menu"
              className="fixed top-[72px] right-0 w-64 h-[calc(100vh-72px)] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto"
              aria-label="Mobile navigation"
              role="navigation"
            >
              <div className="flex flex-col p-4 space-y-2">
                {isLoggedIn ? (
                  <>
                    {navigationItems.map(({ to, label, icon: Icon }) => (
                      <Link
                        key={to}
                        to={to}
                        className="flex items-center text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-3 rounded-lg font-medium transition-all duration-200 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        {label}
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-gray-200">
                      <Suspense fallback={<div className="w-full h-12" />}>
                        <SignOutButton />
                      </Suspense>
                    </div>
                  </>
                ) : (
                  <Link
                    to="/sign-in"
                    className="flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogIn className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Sign In
                  </Link>
                )}
              </div>
            </nav>
          </>
        )}
      </header>
    </>
  );
};

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(Header);
