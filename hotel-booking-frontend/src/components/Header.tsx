import { Link, useNavigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import useSearchContext from "../hooks/useSearchContext";
import SignOutButton from "./SignOutButton";
import {
  FileText,
  Activity,
  BarChart3,
  Building2,
  Calendar,
  LogIn,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const search = useSearchContext();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Clear search context when going to home page
    search.clearSearchValues();
    navigate("/");
  };

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

            {/* Mobile Menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Open mobile menu"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-white mr-4 mt-2"
                  align="end"
                  sideOffset={8}
                >
                  {isLoggedIn ? (
                    <>
                      <DropdownMenuItem asChild>
                        <Link
                          to="/analytics"
                          className="flex items-center w-full cursor-pointer"
                        >
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Analytics
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          to="/my-bookings"
                          className="flex items-center w-full cursor-pointer"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          My Bookings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          to="/my-hotels"
                          className="flex items-center w-full cursor-pointer"
                        >
                          <Building2 className="w-4 h-4 mr-2" />
                          My Hotels
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link
                          to="/api-docs"
                          className="flex items-center w-full cursor-pointer"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          API Docs
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          to="/api-status"
                          className="flex items-center w-full cursor-pointer"
                        >
                          <Activity className="w-4 h-4 mr-2" />
                          API Status
                        </Link>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <DropdownMenuItem asChild>
                      <Link
                        to="/sign-in"
                        className="flex items-center w-full cursor-pointer text-primary-600 font-semibold"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        Sign In
                      </Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
