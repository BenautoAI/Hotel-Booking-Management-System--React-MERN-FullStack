import { useState } from "react";
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
  Send,
} from "lucide-react";

/**
 * Smart Footer component that adapts based on user authentication state.
 * Displays different navigation links for logged-in vs guest users,
 * includes newsletter subscription with email validation, social media links,
 * support resources, and contact information.
 * Uses a responsive grid layout that adapts from 1 column on mobile to 4 columns on desktop.
 */
const Footer = () => {
  const { isLoggedIn, showToast } = useAppContext();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showToast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        type: "ERROR",
      });
      return;
    }

    setIsSubscribing(true);

    // Simulate API call (mock for now - can be integrated later)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      showToast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
        type: "SUCCESS",
      });
      setEmail(""); // Clear input on success
    } catch (error) {
      showToast({
        title: "Subscription Failed",
        description: "Please try again later.",
        type: "ERROR",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-white shadow-large">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg shadow-soft">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold">MernHolidays</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Discover amazing hotels, resorts, and accommodations worldwide.
              Book with confidence and enjoy unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Authentication Aware */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Search Hotels
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link
                      to="/my-bookings"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      My Bookings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-hotels"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      My Hotels
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/analytics"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Analytics Dashboard
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/sign-in"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to="/api-docs"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/help-center"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/booking-guide"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Booking Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            {/* Newsletter Section */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-gray-300 text-sm">
                Subscribe to get special offers and travel tips.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all duration-200"
                    disabled={isSubscribing}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full flex items-center justify-center space-x-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 hover:shadow-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{isSubscribing ? "Subscribing..." : "Subscribe"}</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-300 flex-shrink-0" />
                  <a
                    href="mailto:support@mernholidays.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    support@mernholidays.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary-300 flex-shrink-0" />
                  <a
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary-300 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    123 Travel St, Tourism City
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-sm">
            © {currentYear} MernHolidays. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-policy"
              className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
