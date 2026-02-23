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
  ChevronRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Search Hotels", href: "/search" },
    { label: "My Bookings", href: "/my-bookings" },
    { label: "My Hotels", href: "/my-hotels" },
    { label: "API Docs", href: "/api-docs" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "#" },
    { label: "Booking Guide", href: "#" },
    { label: "Cancellation Policy", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary-800 via-primary-850 to-primary-900 text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 group">
              <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/15 transition-colors duration-300">
                <Building2 className="w-6 h-6 text-primary-200" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight">Mern</span>
                <span className="text-2xl font-bold text-primary-200">Holidays</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Discover amazing hotels, resorts, and accommodations worldwide. Book with confidence and enjoy unforgettable experiences at the best prices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-white/10 p-3 rounded-lg text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-primary-300 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex-1">
                  <a
                    href="mailto:support@mernholidays.com"
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                  >
                    support@mernholidays.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-primary-300 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex-1">
                  <a
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex-1">
                  <p className="text-gray-300 text-sm">123 Travel St, Tourism City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary-700/50"></div>

      {/* Bottom Bar */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span>© {currentYear} MernHolidays. All rights reserved.</span>
            <Heart className="w-4 h-4 text-red-400" />
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <div className="text-gray-400">•</div>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <div className="text-gray-400">•</div>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
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
