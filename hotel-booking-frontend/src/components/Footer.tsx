import { useState } from "react";
import { Link } from "react-router-dom";
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
  Loader2,
} from "lucide-react";
import useAppContext from "../hooks/useAppContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const { isLoggedIn, showToast } = useAppContext();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      showToast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        type: "ERROR",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      showToast({
        title: "Success!",
        description: "You've been subscribed to our newsletter",
        type: "SUCCESS",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
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
            <p className="text-gray-300 leading-relaxed">
              Discover amazing hotels, resorts, and accommodations worldwide.
              Book with confidence and enjoy unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Conditional based on auth status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {isLoggedIn ? (
                // Logged-in user links
                <>
                  <li>
                    <Link
                      to="/my-bookings"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      My Bookings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-hotels"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      My Hotels
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/analytics"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/api-docs"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      API Docs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/api-status"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      API Status
                    </Link>
                  </li>
                </>
              ) : (
                // Logged-out user links
                <>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/search"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Hotels
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#destinations"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Destinations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Booking Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info / Newsletter - Conditional based on auth status */}
          {isLoggedIn ? (
            // Contact Info for logged-in users
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-300" />
                  <a
                    href="mailto:support@mernholidays.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    support@mernholidays.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-300" />
                  <a
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-300" />
                  <span className="text-gray-300">
                    123 Travel St, Tourism City
                  </span>
                </div>
              </div>
            </div>
          ) : (
            // Newsletter subscription for logged-out users
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for exclusive deals and travel inspiration.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white focus:ring-white"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-primary-600 hover:bg-primary-50 font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 MernHolidays. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm transition-colors"
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
