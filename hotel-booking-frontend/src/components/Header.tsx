import { Link, useNavigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import useSearchContext from "../hooks/useSearchContext";
import SignOutButton from "./SignOutButton";
import { useState, useEffect } from "react";
import {
  FileText,
  Activity,
  BarChart3,
  Building2,
  Calendar,
  LogIn,
  X,
  UserPlus,
} from "lucide-react";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const search = useSearchContext();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    // Clear search context when going to home page
    search.clearSearchValues();
    navigate("/");
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMobileMenuOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isMobileMenuOpen]);

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

            {/* Navigation */}
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

                  <SignOutButton />
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
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Slide-in Panel */}
            <div
              className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Close Button */}
              <div className="flex justify-end items-center p-4 border-b border-gray-200">
                <button
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Logo Section */}
              <div className="px-6 py-4 border-b border-gray-200">
                <button
                  onClick={() => {
                    handleLogoClick();
                    closeMobileMenu();
                  }}
                  className="flex items-center space-x-2 group"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-lg shadow-soft">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900 tracking-tight">
                    MernHolidays
                  </span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-2">
                {isLoggedIn ? (
                  <>
                    {/* Analytics */}
                    <Link
                      to="/analytics"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-100"
                    >
                      <BarChart3 className="w-5 h-5" />
                      <span className="font-medium">Analytics</span>
                    </Link>

                    {/* My Bookings */}
                    <Link
                      to="/my-bookings"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-100"
                    >
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">My Bookings</span>
                    </Link>

                    {/* My Hotels */}
                    <Link
                      to="/my-hotels"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-100"
                    >
                      <Building2 className="w-5 h-5" />
                      <span className="font-medium">My Hotels</span>
                    </Link>

                    {/* API Docs */}
                    <Link
                      to="/api-docs"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-100"
                    >
                      <FileText className="w-5 h-5" />
                      <span className="font-medium">API Docs</span>
                    </Link>

                    {/* API Status */}
                    <Link
                      to="/api-status"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-100"
                    >
                      <Activity className="w-5 h-5" />
                      <span className="font-medium">API Status</span>
                    </Link>

                    {/* Sign Out Button */}
                    <div className="px-6 py-4 mt-4">
                      <SignOutButton />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Sign In */}
                    <Link
                      to="/sign-in"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-100"
                    >
                      <LogIn className="w-5 h-5" />
                      <span className="font-medium">Sign In</span>
                    </Link>

                    {/* Register */}
                    <Link
                      to="/register"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-100"
                    >
                      <UserPlus className="w-5 h-5" />
                      <span className="font-medium">Register</span>
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
