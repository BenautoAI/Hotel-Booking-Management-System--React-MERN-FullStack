import { useState } from "react";
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
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Implement newsletter subscription API call
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary-800 via-primary-900 to-primary-950 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for exclusive deals, travel tips, and
              destination guides
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/15"
                required
              />
              <Button
                type="submit"
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
            {isSubscribed && (
              <p className="text-green-300 mt-3 text-sm animate-fade-in">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg shadow-soft">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold">MernHolidays</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Your trusted partner for discovering amazing hotels, resorts, and
              accommodations worldwide. Book with confidence and create
              unforgettable memories.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/search"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Search Hotels
                </a>
              </li>
              <li>
                <a
                  href="/my-bookings"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  My Bookings
                </a>
              </li>
              <li>
                <a
                  href="/my-hotels"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  My Hotels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Booking Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:support@mernholidays.com"
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary-300" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-0.5">Email</p>
                  <span className="text-sm">support@mernholidays.com</span>
                </div>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary-300" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <div className="bg-white/10 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-primary-300" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-0.5">Address</p>
                  <span className="text-sm">
                    123 Travel Street
                    <br />
                    Tourism City, TC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center">
            © 2025 MernHolidays. All rights reserved. Made with
            <Heart className="w-4 h-4 mx-1 text-red-400 fill-red-400" />
            for travelers
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
