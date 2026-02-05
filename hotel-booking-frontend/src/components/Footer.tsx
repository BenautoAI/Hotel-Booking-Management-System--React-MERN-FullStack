import { Link } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-red-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold">MernHolidays</span>
            </div>
            <p className="text-red-300 leading-relaxed">
              Discover amazing hotels, resorts, and accommodations worldwide.
              Book with confidence and enjoy unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/mernholidays"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-red-300 hover:text-red-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/mernholidays"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-red-300 hover:text-red-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/mernholidays"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-red-300 hover:text-red-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/mernholidays"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="text-red-300 hover:text-red-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-red-300 hover:text-red-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-red-300 hover:text-red-600 transition-colors"
                >
                  Hotels
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link
                      to="/my-bookings"
                      className="text-red-300 hover:text-red-600 transition-colors"
                    >
                      My Bookings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-hotels"
                      className="text-red-300 hover:text-red-600 transition-colors"
                    >
                      My Hotels
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/sign-in"
                    className="text-red-300 hover:text-red-600 transition-colors"
                  >
                    Sign In
                  </Link>
                </li>
              )}
              <li>
                <a
                  href="#about"
                  className="text-red-300 hover:text-red-600 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              {isLoggedIn && (
                <>
                  <li>
                    <Link
                      to="/api-docs"
                      className="text-red-300 hover:text-red-600 transition-colors"
                    >
                      API Docs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/api-status"
                      className="text-red-300 hover:text-red-600 transition-colors"
                    >
                      API Status
                    </Link>
                  </li>
                </>
              )}
              <li>
                <a
                  href="#help"
                  className="text-red-300 hover:text-red-600 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#booking-guide"
                  className="text-red-300 hover:text-red-600 transition-colors"
                >
                  Booking Guide
                </a>
              </li>
              <li>
                <a
                  href="#cancellation"
                  className="text-red-300 hover:text-red-600 transition-colors"
                >
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-red-300 hover:text-red-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-red-300 hover:text-red-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-300" />
                <span className="text-red-300">support@mernholidays.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-300" />
                <span className="text-red-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-300" />
                <span className="text-red-300">
                  123 Travel St, Tourism City
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-red-300 text-sm">
            © 2025 MernHolidays. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="text-red-300 hover:text-red-600 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-red-300 hover:text-red-600 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-red-300 hover:text-red-600 text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
